import React, { useEffect, useRef, useState, useMemo } from 'react';
import Container from '../../../shared/Container';
import * as THREE from 'three';

// Optional local pricing fallbacks for known materials (API doesn't currently include price)
const MATERIAL_PRICING = {
  PLA: 0.05,
  PETG: 0.07,
  'Standard Resin': 0.08,
  'Tough Resin': 0.12,
  Transparent: 0.15,
};

const INITIAL_POSTPROCESS = { sand: false, primer: false, paint: false, uv: false };

export default function UploadForm() {
  const fileInputRef = useRef(null);
  const viewerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const meshRef = useRef(null);
  const animationRef = useRef(null);
  const controlsRef = useRef({
    isDragging: false,
    isRightDown: false,
    lastMouse: { x: 0, y: 0 },
    rotation: { x: 0.5, y: 0.5 },
    pan: { x: 0, y: 0 },
    zoom: 3
  });

  const [dragOver, setDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('No file loaded');
  const [loading, setLoading] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [unit, setUnit] = useState('mm');
  const [scale, setScale] = useState(100);
  const [process, setProcess] = useState('SLA');
  const [material, setMaterial] = useState('Standard Resin');
  const [color, setColor] = useState('#1a1a2e');
  const [infill, setInfill] = useState(20);
  const [postProcess, setPostProcess] = useState(INITIAL_POSTPROCESS);
  const [originalDims, setOriginalDims] = useState({ x: 0, y: 0, z: 0 });
  const [volume, setVolume] = useState(0);
  const [area, setArea] = useState(0);
  const [tris, setTris] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [toast, setToast] = useState('');
  const [storedUpload, setStoredUpload] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [materialsList, setMaterialsList] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem('uploadedModel');
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      setStoredUpload(parsed);
      if (parsed?.name) {
        setFileName(parsed.name);
      }
    } catch (error) {
      console.error('Failed to parse uploaded model from localStorage', error);
    }
  }, []);

  useEffect(() => {
    const base = import.meta.env.VITE_API_BASE_URL || '';
    const techUrl = base ? `${base}/quote/technologies` : '/quote/technologies';
    const matUrl = base ? `${base}/quote/materials` : '/quote/materials';

    const fetchAll = async () => {
      try {
        const tRes = await fetch(techUrl);
        let chosenTechId = null;
        if (tRes.ok) {
          const tJson = await tRes.json();
          const techs = Array.isArray(tJson.data) ? tJson.data : [];
          setTechnologies(techs);
          if (techs && techs.length) {
            const match = techs.find((t) => t.code === process) || techs[0];
            if (match) {
              chosenTechId = match.id;
              if (match.code) setProcess(match.code);
            }
          }
        }

        try {
          const query = chosenTechId ? `?technology_id=${encodeURIComponent(Number(chosenTechId))}` : '';
          const mRes = await fetch(`${matUrl}${query}`);
          if (mRes.ok) {
            const mJson = await mRes.json();
            const mats = Array.isArray(mJson.data) ? mJson.data : [];
            setMaterialsList(mats);
            if (mats && mats.length && !materialsList.length) {
              setMaterial(mats[0].name);
              if (mats[0].colours && mats[0].colours.length) {
                setColor(mats[0].colours[0].code || color);
              }
            }
          }
        } catch (errMat) {
          console.error('Failed to fetch materials (GET)', errMat);
        }
      } catch (err) {
        console.error('Failed to fetch technologies/materials', err);
      }
    };

    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!storedUpload?.fileContent || modelLoaded || loading) return;

    const loadFromStorage = async () => {
      try {
        setLoading(true);
        const [prefix, base64] = storedUpload.fileContent.split(',');
        if (!base64) throw new Error('Invalid stored file content');
        const binary = atob(base64);
        const buffer = new ArrayBuffer(binary.length);
        const view = new Uint8Array(buffer);
        for (let i = 0; i < binary.length; i += 1) {
          view[i] = binary.charCodeAt(i);
        }
        await loadSTL(buffer, storedUpload.name || 'Stored model');
      } catch (error) {
        console.error('Failed loading stored model:', error);
        showToast('Unable to render stored model from localStorage');
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

  const showToast = (message) => {
    setToast(message);
  };

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
    scene.background = new THREE.Color(0xf3f4f6);
    sceneRef.current = scene;

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);

    const dir1 = new THREE.DirectionalLight(0xffffff, 0.8);
    dir1.position.set(5, 10, 5);
    scene.add(dir1);

    const dir2 = new THREE.DirectionalLight(0x6b7280, 0.4);
    dir2.position.set(-5, 3, -5);
    scene.add(dir2);

    const hemi = new THREE.HemisphereLight(0xffffff, 0xf3f4f6, 0.4);
    scene.add(hemi);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 1000);
    camera.position.set(0, 1.5, 3);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
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

    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      if (meshRef.current && !controlsRef.current.isDragging) {
        meshRef.current.rotation.y += 0.003;
      }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      resize();
      updateCamera();
    };

    resize();
    updateCamera();
    animate();

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  const parseSTL = (buffer) => {
    const isASCII = (data) => {
      const header = new Uint8Array(data, 0, Math.min(256, data.byteLength));
      for (let i = 0; i < header.length; i += 1) {
        if (header[i] > 127) return false;
      }
      const text = new TextDecoder().decode(new Uint8Array(data, 0, Math.min(256, data.byteLength)));
      return text.includes('solid') && text.includes('facet');
    };

    if (isASCII(buffer)) return parseASCII(buffer);
    return parseBinary(buffer);
  };

  const parseBinary = (buffer) => {
    const reader = new DataView(buffer);
    const triangles = reader.getUint32(80, true);
    const positions = new Float32Array(triangles * 9);
    const normals = new Float32Array(triangles * 9);
    let offset = 84;

    for (let i = 0; i < triangles; i += 1) {
      const nx = reader.getFloat32(offset, true); offset += 4;
      const ny = reader.getFloat32(offset, true); offset += 4;
      const nz = reader.getFloat32(offset, true); offset += 4;

      for (let v = 0; v < 3; v += 1) {
        positions[i * 9 + v * 3] = reader.getFloat32(offset, true); offset += 4;
        positions[i * 9 + v * 3 + 1] = reader.getFloat32(offset, true); offset += 4;
        positions[i * 9 + v * 3 + 2] = reader.getFloat32(offset, true); offset += 4;
        normals[i * 9 + v * 3] = nx;
        normals[i * 9 + v * 3 + 1] = ny;
        normals[i * 9 + v * 3 + 2] = nz;
      }
      offset += 2;
    }

    return { positions, normals, count: triangles };
  };

  const parseASCII = (buffer) => {
    const text = new TextDecoder().decode(buffer);
    const positions = [];
    const normals = [];
    const normalRe = /facet normal\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;
    const vertexRe = /vertex\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s+([-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)/g;
    let normalMatch;
    const normalsArray = [];
    while ((normalMatch = normalRe.exec(text)) !== null) {
      normalsArray.push([parseFloat(normalMatch[1]), parseFloat(normalMatch[2]), parseFloat(normalMatch[3])]);
    }

    let vertexMatch;
    const vertices = [];
    while ((vertexMatch = vertexRe.exec(text)) !== null) {
      vertices.push([parseFloat(vertexMatch[1]), parseFloat(vertexMatch[2]), parseFloat(vertexMatch[3])]);
    }

    const count = Math.floor(vertices.length / 3);
    for (let i = 0; i < count; i += 1) {
      const normal = normalsArray[i] || [0, 1, 0];
      for (let v = 0; v < 3; v += 1) {
        const vertex = vertices[i * 3 + v];
        positions.push(vertex[0], vertex[1], vertex[2]);
        normals.push(normal[0], normal[1], normal[2]);
      }
    }

    return { positions: new Float32Array(positions), normals: new Float32Array(normals), count };
  };

  const computeVolume = (positions) => {
    let vol = 0;
    for (let i = 0; i < positions.length; i += 9) {
      const ax = positions[i];
      const ay = positions[i + 1];
      const az = positions[i + 2];
      const bx = positions[i + 3];
      const by = positions[i + 4];
      const bz = positions[i + 5];
      const cx = positions[i + 6];
      const cy = positions[i + 7];
      const cz = positions[i + 8];
      vol += (ax * (by * cz - bz * cy) - ay * (bx * cz - bz * cx) + az * (bx * cy - by * cx)) / 6;
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

  const applyColor = (newColor) => {
    setColor(newColor);
    if (meshRef.current) {
      meshRef.current.material.color.set(newColor.startsWith('rgba') ? '#7c7c9c' : newColor);
    }
  };

  const applyWireframe = (enabled) => {
    if (meshRef.current) {
      meshRef.current.material.wireframe = enabled;
    }
  };

  const loadSTL = async (buffer, name) => {
    if (!sceneRef.current) {
      showToast('3D scene is not ready yet. Please try again.');
      setLoading(false);
      return;
    }

    try {
      if (meshRef.current) {
        sceneRef.current.remove(meshRef.current);
        meshRef.current.geometry.dispose();
        meshRef.current.material.dispose();
        meshRef.current = null;
      }

      const parsed = parseSTL(buffer);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(parsed.positions, 3));
      geometry.setAttribute('normal', new THREE.BufferAttribute(parsed.normals, 3));
      geometry.computeBoundingBox();

      const box = geometry.boundingBox.clone();
      const center = new THREE.Vector3();
      box.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);

      const size = new THREE.Vector3();
      geometry.boundingBox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const fitScale = maxDim > 0 ? 2 / maxDim : 1;

      const materialMesh = new THREE.MeshPhongMaterial({
        color: new THREE.Color(color),
        specular: 0x888888,
        shininess: 80,
        wireframe: false
      });

      const mesh = new THREE.Mesh(geometry, materialMesh);
      mesh.scale.setScalar(fitScale * (scale / 100));
      meshRef.current = mesh;
      sceneRef.current.add(mesh);

      setTris(parsed.count);
      setOriginalDims({ x: +size.x.toFixed(4), y: +size.y.toFixed(4), z: +size.z.toFixed(4) });
      setVolume(computeVolume(parsed.positions));
      setArea(computeArea(parsed.positions));
      setModelLoaded(true);
      setLoading(false);
      setFileName(name);
    } catch (error) {
      console.error('Failed to parse STL file', error);
      showToast('⚠ Failed to load STL file');
      setLoading(false);
    }
  };

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith('.stl')) {
      showToast('⚠ Please upload an STL file');
      return;
    }
    setSelectedFile(file);
    setLoading(true);
    setModelLoaded(false);
    setFileName(file.name);

    try {
      const buffer = await file.arrayBuffer();
      await loadSTL(buffer, file.name);
    } catch (error) {
      console.error(error);
      showToast('⚠ Could not read the selected file');
      setLoading(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const unitsMultiplier = unit === 'mm' ? 1 : 0.0393701;
  const scaleRatio = scale / 100;

  const displayDims = useMemo(() => {
    return {
      x: (originalDims.x * scaleRatio * unitsMultiplier).toFixed(2),
      y: (originalDims.y * scaleRatio * unitsMultiplier).toFixed(2),
      z: (originalDims.z * scaleRatio * unitsMultiplier).toFixed(2)
    };
  }, [originalDims, scaleRatio, unitsMultiplier]);

  const stats = useMemo(() => {
    const vol = volume * scaleRatio * scaleRatio * scaleRatio * 0.001;
    const areaValue = area * scaleRatio * scaleRatio * unitsMultiplier * unitsMultiplier;
    return {
      volume: vol.toFixed(2),
      area: areaValue.toFixed(2),
      dims: `${displayDims.x} × ${displayDims.y} × ${displayDims.z}`
    };
  }, [area, displayDims, scaleRatio, unitsMultiplier, volume]);

  const price = useMemo(() => {
    if (!modelLoaded) return '$0.00';
    const volCm3 = volume * scaleRatio * scaleRatio * scaleRatio * 0.001;
    const materialUnitPrice = MATERIAL_PRICING[material] ?? 0.08;
    const materialPrice = materialUnitPrice * Math.max(0.01, volCm3);
    const infillMultiplier = 0.3 + (infill / 100) * 0.7;
    const processMultiplier = { SLA: 1, FDM: 0.6, SLS: 1.4 }[process] || 1;
    const base = Math.max(2.5, materialPrice * infillMultiplier * processMultiplier * 100);
    const ppCost = Object.entries(postProcess).reduce((sum, [key, enabled]) => sum + (enabled ? ({ sand: 3, primer: 5, paint: 15, uv: 8 }[key]) : 0), 0);
    return '$' + (base + ppCost).toFixed(2);
  }, [area, infill, material, modelLoaded, postProcess, process, scaleRatio, volume]);

  const updateScaleFromDim = (value) => {
    if (!originalDims.x && !originalDims.y && !originalDims.z) return;
    const numeric = Number(value);
    if (!numeric) return;
    const target = unit === 'mm' ? numeric : numeric * 25.4;
    const baseDimension = originalDims.x || originalDims.y || originalDims.z || 1;
    const newScale = Math.max(1, Math.min(9999, (target / baseDimension) * 100));
    setScale(newScale);
    if (meshRef.current) {
      const box = meshRef.current.geometry.boundingBox;
      if (box) {
        const size = new THREE.Vector3();
        box.getSize(size);
        const fitScale = Math.max(1, 2 / Math.max(size.x, size.y, size.z));
        meshRef.current.scale.setScalar(fitScale * (newScale / 100));
      }
    }
  };

  const onStepChange = (step) => {
    setActiveStep(step);
  };

  const togglePostProcess = (key) => {
    setPostProcess((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetView = () => {
    controlsRef.current = {
      ...controlsRef.current,
      rotation: { x: 0.5, y: 0.5 },
      pan: { x: 0, y: 0 },
      zoom: 3
    };
    updateCamera();
  };

  const updateScale = (value) => {
    setScale(value);
    if (meshRef.current) {
      const box = meshRef.current.geometry.boundingBox;
      if (box) {
        const size = new THREE.Vector3();
        box.getSize(size);
        const fitScale = Math.max(1, 2 / Math.max(size.x, size.y, size.z));
        meshRef.current.scale.setScalar(fitScale * (value / 100));
      }
    }
  };

  useEffect(() => {
    applyWireframe(false);
  }, []);

  useEffect(() => {
    applyColor(color);
  }, [color]);

  return (
    <section className="pt-12 pb-12  min-h-screen">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Upload your design</h1>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Professional 3D printing service for prototyping and production. Over 100+ materials available with lead times as
            fast as 24 hours.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="viewer-panel rounded-2xl border border-gray-300 bg-[#E8E8E8] overflow-hidden shadow-lg h-fit">
            <div className="viewer-toolbar flex flex-col gap-3 px-4 py-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between border-b border-gray-200">
              <div className="file-name text-gray-900 font-medium truncate max-w-full bg-white p-1 rounded-lg">{fileName}</div>
              <div className="flex flex-wrap items-center gap-3">
                {loading && <div className="loading-badge rounded-full bg-gray-200 px-3 py-1 text-xs text-blue-600 font-medium">Loading…</div>}
                <div className="text-xs text-[#101828] font-normal">Drag to rotate · Scroll to zoom · Right drag to pan</div>
              </div>
            </div>

            <div
              ref={viewerRef}
              className="relative min-h-130"
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragOver(false);
                const file = e.dataTransfer.files?.[0];
                if (file) handleFile(file);
              }}
            >
              {!modelLoaded && !loading && (
                <div
                  className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl border-2 border-dashed border-gray-300  px-8 text-center text-gray-700 transition-all hover:bg-gray-50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="upload-icon flex h-20 w-20 items-center justify-center rounded-2xl border border-gray-300  text-4xl text-gray-600 transition-colors">
                    ⬆
                  </div>
                  <div className="upload-text max-w-xs">
                    <h3 className="text-lg font-semibold text-gray-900">Upload Your Design</h3>
                    <p className="mt-2 text-sm text-gray-600">STL files supported · Supports drag & drop</p>
                  </div>
                  <div className="upload-btn-inner rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition">Browse File</div>
                </div>
              )}

              {dragOver && (
                <div className="absolute inset-0 z-20 rounded-2xl bg-blue-500/10" />
              )}

              <canvas ref={canvasRef} className="h-full w-full block" />
            </div>

            <div className="viewer-controls flex flex-wrap items-center gap-3 px-4 py-3  border-t border-gray-200 text-sm text-gray-700">
              <div className="control-group flex items-center gap-2">

              </div>
              <div className="control-group flex items-center gap-2">
                <span className="font-medium text-gray-700">Scale:</span>
                <div className="scale-input flex items-center gap-2">
                  <input
                    type="range"
                    min="0"
                    max="500"
                    value={scale}
                    onChange={(e) => updateScale(Number(e.target.value))}
                    className="accent-blue-600"
                  />
                  <input
                    type="number"
                    value={scale}
                    min="1"
                    max="9999"
                    onChange={(e) => updateScale(Number(e.target.value))}
                    className="w-16 rounded-lg border border-gray-300  px-2 py-1 text-xs text-gray-900"
                  />
                  <span className="text-xs text-gray-500">%</span>
                </div>
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
                      meshRef.current.material.wireframe = !meshRef.current.material.wireframe;
                    }
                  }}
                >
                  ⬡ Wireframe
                </button>
              </div>
            </div>

            <div className="stats-bar flex flex-wrap justify-between gap-4 px-4 py-3 border-t border-gray-200 text-sm text-gray-700">
              <div className="stat flex flex-col gap-1">
                <span className="stat-label text-gray-600 text-xs font-medium">Material Vol.</span>
                <span className="stat-value text-gray-900 font-semibold">{stats.volume} {unit === 'mm' ? 'mm³' : 'in³'}</span>
              </div>

              <div className="stat flex flex-col gap-1">
                <span className="stat-label text-gray-600 text-xs font-medium">Dimensions</span>
                <span className="stat-value text-gray-900 font-semibold">{stats.dims} {unit}</span>
              </div>
              <div className="stat flex flex-col gap-1">
                <span className="stat-label text-gray-600 text-xs font-medium">Estimated Print Time</span>
                <span className="stat-value text-gray-900 font-semibold">{storedUpload?.response?.data.print_time_hours ?? '-'} h</span>
              </div>

            </div>
          </div>

          <div className="config-panel rounded-2xl  text-gray-900 ">
            <div className="steps-nav flex flex-col gap-3">
              {['Print Method', 'Material', 'Infill Density', 'Review & Order'].map((label, index) => {
                const step = index + 1;
                return (
                  <button
                    key={step}
                    type="button"
                    onClick={() => onStepChange(step)}
                    className={`flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition ${activeStep === step ? 'border-black bg-[#E7E7E7] shadow-sm' : 'border-gray-300 bg-gray-100 hover:border-gray-400'}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${step < activeStep ? 'bg-[#E7E7E7] text-white' : activeStep === step ? 'bg-black text-white' : 'bg-gray-300 text-gray-600'}`}>
                        {step < activeStep ? '✓' : step}
                      </span>
                      <span className="font-medium text-sm">{label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="step-content mt-5 rounded-2xl border border-gray-300 bg-gray-50 p-4">
              {activeStep === 1 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Process</span>
                  {technologies.length ? technologies.map((option) => (
                    <button
                      key={option.code}
                      type="button"
                      onClick={() => setProcess(option.code)}
                      className={`w-full rounded-xl border px-4 py-3 text-left transition ${process === option.code ? 'border-black bg-[#E7E7E7] text-gray-900' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}
                    >
                      <div className="flex flex-col">
                        <div className="flex gap-1 items-center">
                          <h4 className="font-semibold text-base text-[#101828]">{option.code} -</h4>
                          <h6 className='font-semibold text-base text-[#101828]'>{option?.title}</h6>
                        </div>
                        <h5 className="text-xs text-gray-600 pt-1">{option.description || option.title}</h5>
                      </div>
                    </button>
                  )) : (
                    ['SLA', 'FDM', 'SLS'].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setProcess(option)}
                        className={`w-full rounded-xl border px-4 py-3 text-left transition ${process === option ? 'border-blue-500 bg-blue-50 text-gray-900' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{option}</span>
                          <span className="text-xs text-gray-600">{option === 'SLA' ? 'Best detail' : option === 'FDM' ? 'Affordable strength' : 'No supports'}</span>
                        </div>
                      </button>
                    ))
                  )}
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black transition" onClick={() => onStepChange(2)}>
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Choose Material</span>
                  {materialsList.length ? materialsList.map((m) => {
                    const option = m.name;
                    const info = m;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setMaterial(option);
                          if (info.colours && info.colours.length) applyColor(info.colours[0].code || info.colours[0].color || color);
                        }}
                        className={`w-full rounded-xl border px-4 py-4 text-left transition ${material === option ? 'border-blue-500 bg-blue-50 text-gray-900' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-semibold text-sm">{option}</span>
                          <span className="text-xs font-medium text-blue-600">${(MATERIAL_PRICING[option] ?? 0.08).toFixed(2)}/cm³</span>
                        </div>
                        <p className="text-sm text-gray-600">{info.description || ''}</p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {(info.colours || []).map((c) => {
                            const code = c.code || c;
                            return (
                              <button
                                key={code}
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  applyColor(code);
                                }}
                                className={`h-6 w-6 rounded-full border-2 transition ${color === code ? 'border-blue-600 shadow-md' : 'border-gray-300'}`}
                                style={{ background: code }}
                              />
                            );
                          })}
                        </div>
                      </button>
                    );
                  }) : (
                    Object.keys(MATERIAL_PRICING).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setMaterial(option)}
                        className={`w-full rounded-xl border px-4 py-4 text-left transition ${material === option ? 'border-blue-500 bg-blue-50 text-gray-900' : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'}`}
                      >
                        <div className="flex items-center justify-between gap-3 mb-2">
                          <span className="font-semibold text-sm">{option}</span>
                          <span className="text-xs font-medium text-blue-600">${(MATERIAL_PRICING[option] ?? 0.08).toFixed(2)}/cm³</span>
                        </div>
                        <p className="text-sm text-gray-600">{option}</p>
                      </button>
                    ))
                  )}
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition" onClick={() => onStepChange(1)}>
                      ← Back
                    </button>
                    <button type="button" className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black transition" onClick={() => onStepChange(3)}>
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Infill %</span>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={infill}
                      onChange={(e) => setInfill(Number(e.target.value))}
                      className="accent-blue-600 flex-1"
                    />
                    <span className="text-sm font-semibold text-gray-900 w-12 text-right">{infill}%</span>
                  </div>
                  <p className="text-sm text-gray-600">{infill <= 20 ? 'Lightweight — good for display models' : infill <= 40 ? 'Light structural use' : infill <= 60 ? 'Standard strength' : infill <= 80 ? 'Strong — functional parts' : 'Maximum strength, solid'}</p>
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition" onClick={() => onStepChange(3)}>
                      ← Back
                    </button>
                    <button type="button" className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black transition" onClick={() => onStepChange(5)}>
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* {activeStep === 4 && (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gray-600">Finishing Options</span>
                  {Object.entries({ sand: 'Sanding & Smoothing', primer: 'Primer Coat', paint: 'Full Paint', uv: 'UV Resistant Coating' }).map(([key, label]) => (
                    <label key={key} className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-300 bg-white px-4 py-3 hover:bg-gray-50 transition">
                      <input
                        type="checkbox"
                        checked={postProcess[key]}
                        onChange={() => togglePostProcess(key)}
                        className="accent-blue-600 w-4 h-4"
                      />
                      <span className="text-sm font-medium text-gray-900">{label}</span>
                      <span className="ml-auto text-xs font-semibold text-blue-600">+${key === 'sand' ? 3 : key === 'primer' ? 5 : key === 'paint' ? 15 : 8}</span>
                    </label>
                  ))}
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition" onClick={() => onStepChange(4)}>
                      ← Back
                    </button>
                    <button type="button" className="flex-1 rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white hover:bg-black transition" onClick={() => onStepChange(6)}>
                      Review →
                    </button>
                  </div>
                </div>
              )} */}

              {activeStep === 4 && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-gray-300 bg-white p-4 text-sm text-gray-700">
                    <div className="font-bold text-gray-900 mb-3">Configuration Summary</div>
                    <div className="space-y-2 text-sm">
                      <div><span className="text-gray-600 font-medium">Process:</span> <span className="font-semibold">{process}</span></div>
                      <div><span className="text-gray-600 font-medium">Material:</span> <span className="font-semibold">{material}</span></div>
                      <div><span className="text-gray-600 font-medium">Scale:</span> <span className="font-semibold">{scale}%</span></div>
                      <div><span className="text-gray-600 font-medium">Dimensions:</span> <span className="font-semibold">{stats.dims} {unit}</span></div>
                      <div><span className="text-gray-600 font-medium">Infill:</span> <span className="font-semibold">{infill}%</span></div>
                      <div><span className="text-gray-600 font-medium">Post-processing:</span> <span className="font-semibold">{Object.entries(postProcess).filter(([, v]) => v).map(([k]) => ({ sand: 'Sanding', primer: 'Primer', paint: 'Paint', uv: 'UV Coat' }[k])).join(', ') || 'None'}</span></div>
                      <div><span className="text-gray-600 font-medium">Triangles:</span> <span className="font-semibold">{tris.toLocaleString()}</span></div>
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    <button type="button" className="rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition" onClick={() => onStepChange(5)}>
                      ← Back
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="price-display mt-5 rounded-2xl border border-gray-300 bg-gray-900 p-5 text-white">
              <div className="price-label text-sm text-gray-400 font-medium">Estimated Price</div>
              <div className="price-value mt-2 text-4xl font-bold">{price}</div>
              <div className="price-note mt-2 text-xs text-gray-400">Price calculated from volume, material & options</div>
              <button type="button" disabled={!modelLoaded} className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div> */}
          </div>
        </div>
      </Container>

      <input
        ref={fileInputRef}
        type="file"
        accept=".stl"
        className="hidden"
        onChange={handleFileChange}
      />

      {toast && (
        <div className="toast fixed bottom-8 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
}