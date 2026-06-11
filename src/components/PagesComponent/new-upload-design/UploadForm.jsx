import React, { useEffect, useRef, useState, useMemo } from 'react';
import Container from '../../../shared/Container';
import * as THREE from 'three';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useCart } from '../../../context/CartContext';
import { useToast } from '../../../context/ToastContext';
import { getAuthHeaders } from '../../../utils/apiHeaders';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js';
import { getUploadedModel } from '../../../utils/indexedDB';

const MATERIAL_PRICING = {
  PLA: 0.05,
  PETG: 0.07,
  'Standard Resin': 0.08,
  'Tough Resin': 0.12,
  Transparent: 0.15,
};

export default function UploadForm() {
  const navigate = useNavigate();
  const { addCustomProduct } = useCart();
  const { showToast: showGlobalToast } = useToast();
  const fileInputRef = useRef(null);
  const viewerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const animationRef = useRef(null);
  const fitScaleRef = useRef(1);

  const controlsRef = useRef({
    isDragging: false,
    isRightDown: false,
    lastMouse: { x: 0, y: 0 },
    rotation: { x: 0.5, y: 0.5 },
    pan: { x: 0, y: 0 },
    zoom: 3.5
  });

  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState('No file loaded');
  const [loading, setLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [unit] = useState('mm');
  const [scale, setScale] = useState(100);
  const [process, setProcess] = useState('SLA');
  const [material, setMaterial] = useState('Standard Resin');
  const [color, setColor] = useState('#1a1a2e');
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [infill, setInfill] = useState(20);
  const [originalDims, setOriginalDims] = useState({ x: 0, y: 0, z: 0 });
  const [volume, setVolume] = useState(0);
  const [setArea] = useState(0);
  const [setTris] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [toast, setToast] = useState('');
  const [storedUpload, setStoredUpload] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [materialsList, setMaterialsList] = useState([]);
  const [selectedProcessing, setSelectedProcessing] = useState('');
  const [apiPriceData, setApiPriceData] = useState(null);
  const [calculatingPrice, setCalculatingPrice] = useState(false);

  useEffect(() => {
    const fetchStored = async () => {
      try {
        const parsed = await getUploadedModel();
        if (parsed) {
          setStoredUpload(parsed);
          if (parsed.name) setFileName(parsed.name);
        }
      } catch (error) {
        console.error('Failed to parse uploaded model from IndexedDB', error);
      }
    };
    fetchStored();
  }, []);

  // Fetch technologies on mount
  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || '';
    const techUrl = base ? `${base}/quote/technologies` : '/quote/technologies';

    const fetchTechnologies = async () => {
      try {
        const tRes = await fetch(techUrl, { headers: getAuthHeaders() });
        if (tRes.ok) {
          const tJson = await tRes.json();
          const techs = Array.isArray(tJson.data) ? tJson.data : [];
          setTechnologies(techs);
          // Set first technology as default
          if (techs.length && !process) {
            setProcess(techs[0].code);
          }
        }
      } catch (err) {
        console.error('Failed to fetch technologies', err);
      }
    };

    fetchTechnologies();
  }, []);

  useEffect(() => {
    if (!process || technologies.length === 0) return;

    const base = import.meta.env.VITE_API_BASE_URL || '';
    const matUrl = base ? `${base}/quote/materials` : '/quote/materials';

    const fetchMaterials = async () => {
      try {
        const currentTech = technologies.find((t) => t.code === process);
        if (!currentTech?.id) return;

        const query = `?technology_id=${encodeURIComponent(Number(currentTech.id))}`;
        const mRes = await fetch(`${matUrl}${query}`, {
          headers: getAuthHeaders(),
        });

        if (mRes.ok) {
          const mJson = await mRes.json();
          const mats = Array.isArray(mJson.data) ? mJson.data : [];
          setMaterialsList(mats);

          // Set first material as default when technology changes
          if (mats.length) {
            setMaterial(mats[0].name);
            setSelectedProcessing('');
            if (mats[0].colours?.length) {
              setColor(mats[0].colours[0].code || '#1a1a2e');
              setSelectedColorId(mats[0].colours[0].id ?? null);
            }
          }
        }
      } catch (err) {
        console.error('Failed to fetch materials for technology:', err);
      }
    };

    fetchMaterials();
  }, [process, technologies]);

  useEffect(() => {
    if (!storedUpload?.fileContent || modelLoaded || loading) return;

    const loadFromStorage = async () => {
      try {
        setLoading(true);
        let buffer;
        if (typeof storedUpload.fileContent === 'string') {
          // Backward compatibility for base64 strings
          const parts = storedUpload.fileContent.split(',');
          const base64 = parts.length > 1 ? parts[1] : parts[0];
          const binary = atob(base64);
          buffer = new ArrayBuffer(binary.length);
          const view = new Uint8Array(buffer);
          for (let i = 0; i < binary.length; i += 1) {
            view[i] = binary.charCodeAt(i);
          }
        } else {
          // Direct ArrayBuffer from IndexedDB
          buffer = storedUpload.fileContent;
        }
        await loadModelBuffer(buffer, storedUpload.name || 'Stored model');
      } catch (error) {
        console.error('Failed loading stored model:', error);
        showToast('Unable to render stored model');
        setLoading(false);
      }
    };

    loadFromStorage();
  }, [storedUpload]);

  useEffect(() => {
    if (!toast) return undefined;
    const timer = window.setTimeout(() => setToast(''), 2400);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const showToast = (message) => setToast(message);

  const updateCamera = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera) return;

    const x = controls.zoom * Math.sin(controls.rotation.y) * Math.cos(controls.rotation.x);
    const y = controls.zoom * Math.sin(controls.rotation.x);
    const z = controls.zoom * Math.cos(controls.rotation.y) * Math.cos(controls.rotation.x);
    camera.position.set(x + controls.pan.x, y + controls.pan.y, z);
    camera.lookAt(controls.pan.x, controls.pan.y, 0);
  };

  useEffect(() => {
    const container = viewerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xE7E7E7);
    sceneRef.current = scene;

    const ambient = new THREE.AmbientLight(0xE7E7E7, 0.6);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0xE7E7E7, 0.8);
    dir1.position.set(5, 10, 5);
    scene.add(dir1);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
    camera.position.set(0, 1.5, 3.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    rendererRef.current = renderer;

    const resize = () => {
      if (!container || !camera || !rendererRef.current) return;
      const width = container.clientWidth;
      const height = Math.max(container.clientHeight, 420);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const handleMouseDown = (event) => {
      if (event.button === 2) {
        controlsRef.current.isRightDown = true;
      } else {
        controlsRef.current.isDragging = true;
      }
      controlsRef.current.lastMouse = { x: event.clientX, y: event.clientY };
    };

    const handleMouseUp = () => {
      controlsRef.current.isDragging = false;
      controlsRef.current.isRightDown = false;
    };

    const handleMouseMove = (event) => {
      const controls = controlsRef.current;
      if (!controls.isDragging && !controls.isRightDown) return;
      const dx = event.clientX - controls.lastMouse.x;
      const dy = event.clientY - controls.lastMouse.y;

      if (controls.isDragging) {
        controls.rotation.y += dx * 0.01;
        controls.rotation.x += dy * 0.01;
      } else {
        controls.pan.x -= dx * 0.005;
        controls.pan.y += dy * 0.005;
      }

      updateCamera();
      controls.lastMouse = { x: event.clientX, y: event.clientY };
    };

    const handleWheel = (event) => {
      event.preventDefault();
      controlsRef.current.zoom = Math.max(0.3, controlsRef.current.zoom + event.deltaY * 0.005);
      updateCamera();
    };

    const handleContextMenu = (event) => event.preventDefault();

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    resize();
    updateCamera();
    animate();

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('resize', resize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', resize);
      if (rendererRef.current) rendererRef.current.dispose();
    };
  }, []);

  const computeVolume = (positions) => {
    let vol = 0;
    for (let i = 0; i < positions.length; i += 9) {
      vol += (positions[i] * (positions[i + 4] * positions[i + 8] - positions[i + 5] * positions[i + 7]) -
        positions[i + 1] * (positions[i + 3] * positions[i + 8] - positions[i + 5] * positions[i + 6]) +
        positions[i + 2] * (positions[i + 3] * positions[i + 7] - positions[i + 4] * positions[i + 6])) / 6;
    }
    return Math.abs(vol);
  };

  const computeArea = (positions) => {
    let areaSum = 0;
    const ab = new THREE.Vector3();
    const ac = new THREE.Vector3();
    const cross = new THREE.Vector3();

    for (let i = 0; i < positions.length; i += 9) {
      const a = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
      const b = new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5]);
      const c = new THREE.Vector3(positions[i + 6], positions[i + 7], positions[i + 8]);
      ab.subVectors(b, a);
      ac.subVectors(c, a);
      cross.crossVectors(ab, ac);
      areaSum += cross.length() / 2;
    }
    return areaSum;
  };

  const applyColor = (newColor, colorId = null) => {
    setColor(newColor);
    if (colorId !== null) setSelectedColorId(colorId);
    if (meshRef.current) {
      const hexColor = newColor.startsWith('rgba') ? '#9090ad' : newColor;
      meshRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.color.set(hexColor));
          } else {
            child.material.color.set(hexColor);
          }
        }
      });
    }
  };

  const loadModelBuffer = async (buffer, name) => {
    if (!sceneRef.current) return;

    try {
      if (meshRef.current) {
        sceneRef.current.remove(meshRef.current);
        meshRef.current.traverse((child) => {
          if (child.isMesh) {
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach((m) => m.dispose());
              } else {
                child.material.dispose();
              }
            }
          }
        });
      }

      const is3MF = name.toLowerCase().endsWith('.3mf');
      let loadedObject;

      if (is3MF) {
        const loader = new ThreeMFLoader();
        loadedObject = loader.parse(buffer);
      } else {
        const loader = new STLLoader();
        const geometry = loader.parse(buffer);
        const materialMesh = new THREE.MeshPhongMaterial({
          color: new THREE.Color(color),
          specular: 0x888888,
          shininess: 80,
        });
        loadedObject = new THREE.Mesh(geometry, materialMesh);
      }

      // Wrap in a Group to allow rotation/scaling without disrupting child hierarchy
      const wrapperGroup = new THREE.Group();
      wrapperGroup.add(loadedObject);

      const box = new THREE.Box3().setFromObject(loadedObject);
      const center = new THREE.Vector3();
      box.getCenter(center);
      loadedObject.position.set(-center.x, -center.y, -center.z);

      const size = new THREE.Vector3();
      box.getSize(size);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fitScale = maxDim > 0 ? 2 / maxDim : 1;
      fitScaleRef.current = fitScale;

      wrapperGroup.scale.setScalar(fitScale * (scale / 200));
      meshRef.current = wrapperGroup;
      sceneRef.current.add(wrapperGroup);

      if (cameraRef.current) {
        controlsRef.current.zoom = 3.2;
        updateCamera();
      }

      // Traversal based volume, area, and tris calculations
      let totalVolume = 0;
      let totalArea = 0;
      let totalTris = 0;

      loadedObject.traverse((child) => {
        if (child.isMesh) {
          const geom = child.geometry;
          if (geom) {
            const tempGeom = geom.index ? geom.toNonIndexed() : geom;
            const positions = tempGeom.attributes.position.array;
            
            totalVolume += computeVolume(positions);
            totalArea += computeArea(positions);
            totalTris += positions.length / 9;

            if (geom.index) {
              tempGeom.dispose();
            }
          }
        }
      });

      setTris(Math.round(totalTris));
      setOriginalDims({ x: +size.x.toFixed(4), y: +size.y.toFixed(4), z: +size.z.toFixed(4) });
      setVolume(totalVolume);
      setArea(totalArea);
      setModelLoaded(true);
      setLoading(false);
      setFileName(name);
    } catch (error) {
      console.error('Error parsing 3D model buffer:', error);
      showToast('⚠ Failed to parse 3D model');
      setLoading(false);
    }
  };

  const handleFile = async (file) => {
    const isSTL = file?.name?.toLowerCase().endsWith('.stl');
    const is3MF = file?.name?.toLowerCase().endsWith('.3mf');
    if (!file || (!isSTL && !is3MF)) {
      showToast('⚠ Please upload an STL or 3MF file');
      return;
    }
    setLoading(true);
    setModelLoaded(false);
    setFileName(file.name);

    try {
      const buffer = await file.arrayBuffer();
      await loadModelBuffer(buffer, file.name);
    } catch (error) {
      showToast('⚠ Could not read the selected file');
      setLoading(false);
    }
  };

  const unitsMultiplier = unit === 'mm' ? 1 : 0.0393701;

  const displayDims = useMemo(() => {
    const backendDims = storedUpload?.response?.data?.dimensions;
    if (backendDims) {
      return {
        x: (Number(backendDims.x) * unitsMultiplier).toFixed(2),
        y: (Number(backendDims.y) * unitsMultiplier).toFixed(2),
        z: (Number(backendDims.z) * unitsMultiplier).toFixed(2)
      };
    }

    return {
      x: (originalDims.x * unitsMultiplier).toFixed(2),
      y: (originalDims.y * unitsMultiplier).toFixed(2),
      z: (originalDims.z * unitsMultiplier).toFixed(2)
    };
  }, [originalDims, unitsMultiplier, storedUpload]);

  const stats = useMemo(() => {
    const backendVol = storedUpload?.response?.data?.volume_cm3;
    const vol = backendVol !== undefined ? Number(backendVol) : volume;
    console.log(vol)

    return {
      volume: vol.toFixed(2),
      dims: `${displayDims.x} × ${displayDims.y} × ${displayDims.z}`
    };
  }, [displayDims, volume, storedUpload]);

  const updateScale = (value) => {
    setScale(value);
    if (meshRef.current) {
      meshRef.current.scale.setScalar(fitScaleRef.current * (value / 200));
    }
  };

  const resetView = () => {
    controlsRef.current = {
      ...controlsRef.current,
      rotation: { x: 0.5, y: 0.5 },
      pan: { x: 0, y: 0 },
      zoom: 3.2
    };
    updateCamera();
  };

  const currentTechObj = useMemo(() => {
    return technologies.find(t => t.code === process) || technologies[0];
  }, [technologies, process]);

  const currentMatObj = useMemo(() => {
    return materialsList.find(m => m.name === material) || materialsList[0];
  }, [materialsList, material]);

  const fetchCalculatedPrice = async () => {
    if (!modelLoaded && !storedUpload && volume === 0) {
      showToast('Please upload an STL model first before retrieving a quote.');
      return;
    }
    if (!currentTechObj?.id || !currentMatObj?.id) {
      showToast('Pricing configurations are missing system IDs.');
      return;
    }

    setCalculatingPrice(true);
    const base = import.meta.env.VITE_API_BASE_URL || '';
    const priceUrl = base ? `${base}/quote/get-price` : '/quote/get-price';

    try {
      const formData = new FormData();

      const finalVolume = stats.volume !== "0.00" ? stats.volume : (volume * 0.001).toFixed(2);
      formData.append('volume_cm3', finalVolume);

      const densityFactor = 1.2;
      const calculatedGrams = Math.max(1, parseFloat(finalVolume) * densityFactor * (infill / 100));
      formData.append('material_usage_grams', calculatedGrams.toFixed(0));
      const printHours = storedUpload?.response?.data?.print_time_hours || 6.5;
      formData.append('print_time_hours', printHours.toString());

      formData.append('technology_id', currentTechObj.id.toString());
      formData.append('material_id', currentMatObj.id.toString());

      const res = await fetch(priceUrl, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: formData,
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success) {
          setApiPriceData(json.data);
          showToast('Price updated successfully!');
        } else {
          showToast(json.message || 'Failed to process price.');
        }
      } else {
        showToast('Server error calculating print price.');
      }
    } catch (err) {
      console.error('Error fetching calculated price:', err);
      showToast('Network error calculating print price.');
    } finally {
      setCalculatingPrice(false);
    }
  };

  useEffect(() => {
    applyColor(color);
  }, [color]);

  return (
    <section className="pt-12 pb-12 min-h-screen">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Upload your design</h1>
          <p className="text-sm md:text-base text-gray-600 max-w-87.5 mx-auto">
            Professional 3D printing service for prototyping and production. Lead times as fast as 24 hours.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="viewer-panel rounded-2xl border border-gray-300 bg-[#E8E8E8] overflow-hidden shadow-lg h-fit">
            <div className="viewer-toolbar flex flex-col gap-3 px-4 py-3 border-b border-gray-200 sm:flex-row sm:items-center sm:justify-between">
              <div className="file-name text-gray-900 font-medium truncate max-w-full bg-white p-1 rounded-lg">{fileName}</div>
              <div className="text-xs text-[#101828]">Drag to rotate · Scroll to zoom · Right drag to pan</div>
            </div>

            <div
              ref={viewerRef}
              className="relative min-h-130"
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFile(file);
              }}
            >
              {dragOver && <div className="absolute inset-0 z-20 rounded-2xl bg-blue-500/10" />}
              <canvas ref={canvasRef} className="h-full w-full block" />
            </div>

            <div className="viewer-controls flex flex-wrap items-center gap-3 px-4 py-3 border-t border-gray-200 text-sm text-gray-700">
              <div className="control-group flex items-center gap-2">
                <span className="font-medium">Scale:</span>
                <input type="range" min="0" max="500" value={scale} onChange={(e) => updateScale(Number(e.target.value))} className="accent-blue-600" />
                <input type="number" value={scale} onChange={(e) => updateScale(Number(e.target.value))} className="w-16 rounded-lg border border-gray-300 px-2 py-1 text-xs text-gray-900" />
                <span>%</span>
              </div>
              <div className="ml-auto flex gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium transition cursor-pointer"
                  onClick={resetView}
                >
                  ⟳ Reset View
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium transition cursor-pointer"
                  onClick={() => {
                    if (meshRef.current) {
                      meshRef.current.traverse((child) => {
                        if (child.isMesh && child.material) {
                          if (Array.isArray(child.material)) {
                            child.material.forEach((m) => { m.wireframe = !m.wireframe; });
                          } else {
                            child.material.wireframe = !child.material.wireframe;
                          }
                        }
                      });
                    }
                  }}
                >
                  ⬡ Wireframe
                </button>
              </div>
            </div>

            <div className="stats-bar flex flex-wrap justify-between gap-4 px-4 py-3 border-t border-gray-200 text-sm font-semibold text-gray-900">
              <div>Vol: {stats.volume} {unit === 'mm' ? 'mm³' : 'in³'}</div>
              <div>Dims: {stats.dims} {unit}</div>
              {/* <div>Print Time: {storedUpload?.response?.data.print_time_hours ?? '-'} h</div> */}
            </div>
          </div>

          <div className="config-panel flex flex-col gap-4 text-gray-900">
            {['Print Method', 'Material', 'Infill Density', 'Review & Order'].map((label, index) => {
              const step = index + 1;
              const isOpen = activeStep === step;

              return (
                <div key={step} className="rounded-2xl overflow-hidden border border-gray-300">
                  <button
                    type="button"
                    onClick={() => setActiveStep(isOpen ? 0 : step)}
                    className={`flex w-full items-center justify-between px-5 py-4 text-left transition cursor-pointer ${isOpen ? 'bg-[#E7E7E7] font-semibold border-b border-gray-300' : 'bg-white hover:bg-gray-100'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${step < activeStep ? 'bg-green-600 text-white' : 'bg-black text-white'
                        }`}>
                        {step < activeStep ? '✓' : step}
                      </span>
                      <span className="text-sm font-medium">{label}</span>
                    </div>
                    <span className="text-gray-500 text-xs">{isOpen ? <FaArrowDown /> : <FaArrowUp />}</span>
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white space-y-4 border-t border-gray-100 animate-fadeIn">

                      {step === 1 && (
                        <div className="pt-2 space-y-4">
                          <span className="text-base font-bold text-[#101828] uppercase tracking-wider block mb-2 px-1">
                            Process
                          </span>

                          <div className="space-y-3">
                            {technologies.length ? technologies.map((option) => {
                              const isSelected = process === option.code;
                              return (
                                <button
                                  key={option.code}
                                  type="button"
                                  onClick={() => setProcess(option.code)}
                                  className={`w-full rounded-2xl border text-left p-2 transition-all duration-200 cursor-pointer ${isSelected ? 'border-transparent bg-[#E8E8E8]' : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                  <div className="flex flex-col gap-1">
                                    <h4 className="font-bold text-sm text-[#101828]">
                                      {option.code} — {option.title || (option.code === 'SLA' ? 'Stereolithography' : option.code === 'FDM' ? 'Fused Deposition' : 'Selective Laser Sintering')}
                                    </h4>
                                    <p className={`text-sm leading-relaxed ${isSelected ? 'text-gray-700' : 'text-gray-400'}`}>
                                      {option.description}
                                    </p>
                                  </div>
                                </button>
                              );
                            }) : (
                              [
                                { code: 'SLA', label: 'Stereolithography', desc: 'High detail, smooth surfaces. Best for miniatures & jewelry.' },
                                { code: 'FDM', label: 'Fused Deposition', desc: 'Affordable, strong. Great for functional parts & prototypes.' },
                                { code: 'SLS', label: 'Selective Laser Sintering', desc: 'No supports, excellent strength. Complex geometries.' }
                              ].map((item) => {
                                const isSelected = process === item.code;
                                return (
                                  <button
                                    key={item.code}
                                    type="button"
                                    onClick={() => setProcess(item.code)}
                                    className={`w-full rounded-2xl border text-left p-5 transition-all duration-200 cursor-pointer ${isSelected ? 'border-transparent bg-[#E8E8E8] text-[#101828]' : 'border-gray-200 bg-white hover:border-gray-300'
                                      }`}
                                  >
                                    <div className="flex flex-col gap-1">
                                      <h4 className="font-bold text-base text-[#101828]">{item.code} — {item.label}</h4>
                                      <p className={`text-sm leading-relaxed ${isSelected ? 'text-gray-700' : 'text-gray-400'}`}>{item.desc}</p>
                                    </div>
                                  </button>
                                );
                              })
                            )}
                          </div>
                          <div className="pt-2">
                            <button type="button" className="w-full rounded-full bg-[#101828] py-3.5 text-sm font-semibold text-white hover:bg-black transition flex items-center justify-center gap-1.5 cursor-pointer" onClick={() => setActiveStep(2)}>
                              Continue <span>→</span>
                            </button>
                          </div>
                        </div>
                      )}

                      {step === 2 && (
                        <div className="space-y-4">
                          <span className="text-xs font-bold text-[#101828] uppercase tracking-wider block mb-1 px-1">
                            Choose Material
                          </span>

                          {materialsList.length ? materialsList.map((m) => {
                            const option = m.name;
                            const isSelectedMat = material === option;
                            return (
                              <div
                                key={option}
                                onClick={() => {
                                  setMaterial(option);
                                  setSelectedProcessing('');
                                }}
                                className={`w-full rounded-2xl border p-5 text-left transition duration-200 cursor-pointer ${isSelectedMat ? 'border-transparent bg-[#E8E8E8]' : 'border-gray-200 bg-white hover:border-gray-300'
                                  }`}
                              >
                                <span className="font-bold text-base text-[#101828] block mb-1">{option}</span>
                                <p className="text-sm text-gray-500 mb-4">{m.description || 'Smooth surfaces and high detail rendering outputs.'}</p>

                                {(m.colours || []).length > 0 && (
                                  <div className="flex flex-wrap gap-3 mb-4">
                                    {m.colours.map((c) => (
                                      <div key={c.id} className="relative group flex flex-col items-center">
                                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none">
                                          <div className="bg-white text-gray-700 border border-gray-200 text-xs font-medium px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                            Colour Code : <span className="text-gray-400 font-semibold">{c.code}</span>
                                          </div>
                                          <div className="w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45 -mt-1 shadow-sm"></div>
                                        </div>

                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setMaterial(option); 
                                            applyColor(c.code, c.id);
                                          }}
                                          className="h-8 w-8 rounded-full border transition-all duration-150 relative flex items-center justify-center focus:outline-none cursor-pointer"
                                          style={{
                                            background: c.code,
                                            borderColor: color === c.code && isSelectedMat ? '#2563EB' : 'transparent',
                                            boxShadow: color === c.code && isSelectedMat ? '0 0 0 2px bg-white, 0 0 0 4px #2563EB' : 'none'
                                          }}
                                        />
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {(m.processing_types || []).length > 0 && (
                                  <div className="space-y-2 pt-2 border-t border-gray-200/60" onClick={(e) => e.stopPropagation()}>
                                    <span className="text-xs font-bold text-[#101828] uppercase tracking-wider block mb-2">
                                      Processing Types
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                      {m.processing_types.map((p) => {
                                        const isProcSelected = selectedProcessing === p.title && isSelectedMat;
                                        return (
                                          <div key={p.id} className="relative group/pill">
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pill:flex flex-col items-center z-30 pointer-events-none max-w-xs min-w-55">
                                              <div className="bg-white text-gray-600 border border-gray-200 text-xs font-medium px-4 py-2.5 rounded-2xl shadow-lg leading-normal text-center">
                                                {p.description || `${p.title} mechanical surface processing option.`}
                                              </div>
                                              <div className="w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45 -mt-1 shadow-sm"></div>
                                            </div>

                                            <button
                                              type="button"
                                              onClick={() => {
                                                setMaterial(option); 
                                                setSelectedProcessing(isProcSelected ? '' : p.title);
                                              }}
                                              className={`px-5 py-2.5 rounded-full text-sm font-medium transition shadow-sm cursor-pointer ${isProcSelected
                                                ? 'bg-[#101828] text-white'
                                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                              {p.title}
                                            </button>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          }) : (
                            [
                              { name: 'Standard Resin', desc: 'Smooth surfaces and excellent details for display purposes.', colors: ['#1A1A2E', '#F3F4F6', '#2563EB', '#EF4444', '#10B981', '#D97706'], processes: [{ t: 'Cutting', d: 'Precise automated industrial edge separation cut.' }, { t: 'Lamination', d: 'High structural layer sealing and stabilization.' }, { t: 'Binding', d: 'Interlocking structural stock reinforcement.' }, { t: 'Finishing', d: 'Smooth abrasive surface cleanup polish treatments.' }] },
                              { name: 'Tough Resin', desc: 'Impact-resistant. Great for functional prototyping structural builds.', colors: ['#2E2E3A', '#E5E7EB', '#7C3AED', '#EA580C'], processes: [{ t: 'Cutting', d: 'Impact stock precision division slicing.' }, { t: 'Lamination', d: 'Heavy duty composite protective layout layering.' }, { t: 'Binding', d: 'High durability structural fusion bonding.' }] },
                              { name: 'Transparent', desc: 'Clear optical resin. Ideal for internal lighting pipes and fluidics channels.', colors: ['#BFDBFE', '#E9D5FF'], processes: [{ t: 'Cutting', d: 'Fine micron edge optical stock division.' }, { t: 'Lamination', d: 'Ultra clear protective anti-reflective coating layer.' }, { t: 'Binding', d: 'Clear structural component assembly binding.' }, { t: 'Finishing', d: 'High glossy clear transparency diamond manual polish finish.' }] }
                            ].map((item) => {
                              const isSelectedMat = material === item.name;
                              return (
                                <div
                                  key={item.name}
                                  onClick={() => {
                                    setMaterial(item.name);
                                    setSelectedProcessing('');
                                  }}
                                  className={`w-full rounded-2xl border p-5 text-left transition duration-200 cursor-pointer ${isSelectedMat ? 'border-transparent bg-[#E8E8E8]' : 'border-gray-200 bg-white hover:border-gray-300'
                                    }`}
                                >
                                  <span className="font-bold text-base text-[#101828] block mb-1">{item.name}</span>
                                  <p className="text-sm text-gray-400 mb-4">{item.desc}</p>

                                  <div className="flex flex-wrap gap-3 mb-4">
                                    {item.colors.map((hex, i) => (
                                      <div key={i} className="relative group flex flex-col items-center">
                                        <div className="absolute bottom-full mb-2 hidden group-hover:flex flex-col items-center z-30 pointer-events-none">
                                          <div className="bg-white text-gray-700 border border-gray-200 text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap">
                                            Colour Code : <span className="text-gray-400 font-semibold">{hex}</span>
                                          </div>
                                          <div className="w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45 -mt-1 shadow-sm"></div>
                                        </div>
                                        <button
                                          type="button"
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setMaterial(item.name);
                                            applyColor(hex);
                                          }}
                                          className="h-8 w-8 rounded-full border focus:outline-none transition cursor-pointer"
                                          style={{
                                            background: hex,
                                            borderColor: color === hex && isSelectedMat ? '#2563EB' : 'transparent',
                                            boxShadow: color === hex && isSelectedMat ? '0 0 0 2px bg-white, 0 0 0 4px #2563EB' : 'none'
                                          }}
                                        />
                                      </div>
                                    ))}
                                  </div>

                                  <div className="space-y-2 pt-2 border-t border-gray-200" onClick={(e) => e.stopPropagation()}>
                                    <span className="text-xs font-bold text-[#101828] uppercase tracking-wider block mb-2">Processing Types</span>
                                    <div className="flex flex-wrap gap-2">
                                      {item.processes.map((proc) => {
                                        const isProcSelected = selectedProcessing === proc.t && isSelectedMat;
                                        return (
                                          <div key={proc.t} className="relative group/pill">
                                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pill:flex flex-col items-center z-30 pointer-events-none max-w-xs min-w-55">
                                              <div className="bg-white text-gray-600 border border-gray-200 text-xs font-medium px-4 py-2.5 rounded-2xl shadow-lg leading-normal text-center">
                                                {proc.d}
                                              </div>
                                              <div className="w-2 h-2 bg-white border-r border-b border-gray-200 rotate-45 -mt-1 shadow-sm"></div>
                                            </div>

                                            <button
                                              type="button"
                                              onClick={() => {
                                                setMaterial(item.name); 
                                                setSelectedProcessing(isProcSelected ? '' : proc.t);
                                              }}
                                              className={`px-5 py-2.5 rounded-full text-sm font-medium transition shadow-sm cursor-pointer ${isProcSelected ? 'bg-[#101828] text-white' : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                                }`}
                                            >
                                              {proc.t}
                                            </button>
                                          </div>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              );
                            })
                          )}
                          <div className="flex gap-2 pt-2">
                            <button type="button" className="flex-1 cursor-pointer rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white" onClick={() => setActiveStep(1)}>Back</button>
                            <button type="button" className="flex-1 cursor-pointer rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white" onClick={() => setActiveStep(3)}>Continue</button>
                          </div>
                        </div>
                      )}

                      {step === 3 && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <input type="range" min="5" max="100" value={infill} onChange={(e) => setInfill(Number(e.target.value))} className="accent-blue-600 flex-1 cursor-pointer" />
                            <span className="text-sm font-bold w-12 text-right">{infill}%</span>
                          </div>
                          <p className="text-xs text-gray-600">{infill <= 20 ? 'Lightweight — good for display models' : infill <= 50 ? 'Standard strength' : 'Maximum strength, solid'}</p>
                          <div className="flex gap-2 pt-2">
                            <button type="button" className="flex-1 cursor-pointer rounded-xl border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 bg-white" onClick={() => setActiveStep(2)}>Back</button>
                            <button type="button" className="flex-1 cursor-pointer rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white" onClick={() => setActiveStep(4)}>Continue</button>
                          </div>
                        </div>
                      )}

                      {step === 4 && (
                        <div className="space-y-4">
                          <span className="font-semibold text-lg block mb-1">Configuration Summary</span>
                          <div className="rounded-xl bg-gray-50 p-4 border border-gray-200 text-sm space-y-2">
                            <div><span className="text-gray-500 font-medium">Technology:</span> <span className="font-semibold text-black">{process}</span></div>
                            <div><span className="text-gray-500 font-medium">Material:</span> <span className="font-semibold text-black">{material}</span></div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 font-medium">Selected Color:</span>
                              <span className="font-semibold text-black uppercase">{color}</span>
                              <span className="w-3.5 h-3.5 rounded-full border border-gray-300 inline-block" style={{ backgroundColor: color }} />
                            </div>
                            <div><span className="text-gray-500 font-medium">Dimensions:</span> <span className="font-semibold">{stats.dims} {unit}</span></div>
                            <div><span className="text-gray-500 font-medium">Infill:</span> <span className="font-semibold">{infill}%</span></div>
                            {selectedProcessing && (
                              <div><span className="text-gray-500 font-medium">Processing Option:</span> <span className="font-semibold text-blue-600">{selectedProcessing}</span></div>
                            )}
                            <div className="flex gap-2 pt-2">
                              <button type="button" className="w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700" onClick={() => setActiveStep(3)}>Back</button>
                              <button
                                type="button"
                                disabled={calculatingPrice}
                                className="w-full cursor-pointer rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-black disabled:bg-gray-400 transition flex items-center justify-center gap-2"
                                onClick={fetchCalculatedPrice}
                              >
                                {calculatingPrice ? 'Calculating...' : 'Get Price'}
                              </button>
                            </div>
                          </div>

                          {apiPriceData && (
                            <div className="rounded-2xl p-5 animate-fadeIn bg-[#E7E7E7]">
                              <div className="flex flex-col justify-between pt-1">
                                <span className="text-sm text-[#6A7282] font-bold uppercase tracking-wider">Estimated Price</span>

                              </div>
                              <div className="mt-3 space-y-1.5 text-xs text-gray-700 bg-white/50 rounded-xl p-3 border border-gray-200/50">
                                {apiPriceData.material_cost > 0 && <div className="flex justify-between"><span>Material Cost:</span><span className="font-medium">€{Number(apiPriceData.material_cost).toFixed(2)}</span></div>}
                                {apiPriceData.labor_cost > 0 && <div className="flex justify-between"><span>Labor Cost:</span><span className="font-medium">€{Number(apiPriceData.labor_cost).toFixed(2)}</span></div>}
                                {apiPriceData.packaging_cost > 0 && <div className="flex justify-between"><span>Packaging Cost:</span><span className="font-medium">€{Number(apiPriceData.packaging_cost).toFixed(2)}</span></div>}
                                {apiPriceData.electricity_cost > 0 && <div className="flex justify-between"><span>Electricity Cost:</span><span className="font-medium">€{Number(apiPriceData.electricity_cost).toFixed(2)}</span></div>}
                                {apiPriceData.failure_cost > 0 && <div className="flex justify-between"><span>Failure Cost:</span><span className="font-medium">€{Number(apiPriceData.failure_cost).toFixed(2)}</span></div>}
                                {apiPriceData.printer_deprication_cost > 0 && <div className="flex justify-between"><span>Printer Deprication:</span><span className="font-medium">€{Number(apiPriceData.printer_deprication_cost).toFixed(2)}</span></div>}
                                {apiPriceData.pay_myself_cost > 0 && <div className="flex justify-between"><span>Pay Myself:</span><span className="font-medium">€{Number(apiPriceData.pay_myself_cost).toFixed(2)}</span></div>}
                                {apiPriceData.rent_overhead_cost > 0 && <div className="flex justify-between"><span>Rent Overhead:</span><span className="font-medium">€{Number(apiPriceData.rent_overhead_cost).toFixed(2)}</span></div>}
                                {apiPriceData.shipping_cost > 0 && <div className="flex justify-between"><span>Shipping:</span><span className="font-medium">€{Number(apiPriceData.shipping_cost).toFixed(2)}</span></div>}
                                {apiPriceData.return_cost > 0 && <div className="flex justify-between"><span>Return:</span><span className="font-medium">€{Number(apiPriceData.return_cost).toFixed(2)}</span></div>}
                                {apiPriceData.marketing_cost > 0 && <div className="flex justify-between"><span>Marketing:</span><span className="font-medium">€{Number(apiPriceData.marketing_cost).toFixed(2)}</span></div>}
                                {apiPriceData.manufacturing_margin_cost > 0 && <div className="flex justify-between"><span>Manufacturing Margin:</span><span className="font-medium">€{Number(apiPriceData.manufacturing_margin_cost).toFixed(2)}</span></div>}
                                {apiPriceData.tax_cost > 0 && <div className="flex justify-between"><span>Tax:</span><span className="font-medium">€{Number(apiPriceData.tax_cost).toFixed(2)}</span></div>}
                              </div>
                              <div className="flex justify-between">

                                <span className="text-xl font-black text-black py-1 flex justify-end">Total                                </span>
                                <span className="text-xl font-black text-black py-1 flex justify-end">
                                  €{Number(apiPriceData.final_amount).toFixed(2)}
                                </span>
                              </div>
                              <p className="text-[11px] text-gray-500 italic mt-3">
                                Price calculated from volume, material & options
                              </p>

                              <button
                                type="button"
                                onClick={() => {
                                  addCustomProduct({
                                    title: fileName !== 'No file loaded' ? fileName.replace(/\.stl$/i, '') : 'Custom 3D Print',
                                    product_code: `CUSTOM-${Date.now()}`,
                                    price: Number(apiPriceData.final_amount),
                                    technology: process,
                                    material: material,
                                    selectedColor: color,
                                    color: [color],
                                    quantity: 1,
                                    customData: {
                                      technology_id: currentTechObj?.id ?? null,
                                      material_id: currentMatObj?.id ?? null,
                                      color_id: selectedColorId,
                                      user_file_id: storedUpload?.response?.data?.file_id ?? null,
                                      uploaded_file: storedUpload?.filePath
                                        || storedUpload?.response?.data?.file_path
                                        || storedUpload?.response?.data?.uploaded_file
                                        || storedUpload?.response?.data?.stl_path
                                        || storedUpload?.response?.data?.path
                                        || (storedUpload?.name ? `uploads/stl/${storedUpload.name}` : ''),
                                      infill,
                                      processing: selectedProcessing,
                                      dimensions: stats.dims,
                                      volume: stats.volume,
                                      volume_cm3: storedUpload?.response?.data?.volume_cm3 ?? stats.volume,
                                      material_usage_grams: apiPriceData?.material_usage_grams ?? null,
                                      print_time_hours: storedUpload?.response?.data?.print_time_hours ?? null,
                                      fileName,
                                      priceBreakdown: apiPriceData,
                                    },
                                  });
                                  showGlobalToast('Custom print added to cart!');
                                  setTimeout(() => navigate('/dashboard/cart'), 1200);
                                }}
                                className="w-full mt-2 cursor-pointer rounded-xl bg-black py-3 text-sm font-bold text-white transition duration-150 flex items-center justify-center gap-1 shadow-md"
                              >
                                Add to Cart
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      <input ref={fileInputRef} type="file" accept=".stl,.3mf" className="hidden" onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />

      {toast && (
        <div className="toast fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-lg text-center font-medium">
          {toast}
        </div>
      )}
    </section>
  );
}