import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Container from "../../../shared/Container";

export default function UploadNewFile() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [selectedTechId, setSelectedTechId] = useState(null);

  const isDashboardRoute =
    location.pathname.startsWith("/dashboard");

  const readFileAsDataURL = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;

      reader.readAsDataURL(file);
    });

  const uploadFile = async (file, fileContent) => {
    if (!file) return;

    setUploading(true);
    setError("");

    const apiUrl = import.meta.env.VITE_API_BASE_URL
      ? `${import.meta.env.VITE_API_BASE_URL}/quote/show/stl/attribute`
      : "/quote/show/stl/attribute";

    const formData = new FormData();

    formData.append("file", file);

    if (selectedTechId) {
      formData.append("technology_id", selectedTechId);
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errText = await response.text();

        throw new Error(errText || "Upload failed");
      }

      const data = await response.json();

      const modelPayload = {
        name: file.name,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toISOString(),
        response: data,
        fileContent,
      };

      localStorage.setItem(
        "uploadedModel",
        JSON.stringify(modelPayload)
      );

      navigate("/file-upload");
    } catch (uploadError) {
      console.error("File upload failed:", uploadError);

      setError("Upload failed. Please try again.");
      setUploading(false);
    }
  };

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setSelectedFile(file);

      const fileContent =
        await readFileAsDataURL(file);

      if (file.type.startsWith("image/")) {
        setPreviewUrl(
          URL.createObjectURL(file)
        );
      } else {
        setPreviewUrl("");
      }

      await uploadFile(file, fileContent);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  useEffect(() => {
    const base =
      import.meta.env.VITE_API_BASE_URL || "";

    const url = base
      ? `${base}/quote/technologies`
      : "/quote/technologies";

    const fetchTech = async () => {
      try {
        const res = await fetch(url);

        if (!res.ok) return;

        const json = await res.json();

        if (
          Array.isArray(json.data) &&
          json.data.length
        ) {
          setTechnologies(json.data);

          setSelectedTechId(
            (prev) =>
              prev || json.data[0].id
          );
        }
      } catch (err) {
        console.error(
          "Failed to fetch technologies",
          err
        );
      }
    };

    fetchTech();
  }, []);

  const content = (
    <>
      {!isDashboardRoute && (
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-4">
            Upload your design
          </h1>

          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mx-auto">
            Professional 3D printing service for
            prototyping and production. Over
            100+ materials available with lead
            times as fast as 24 hours.
          </p>
        </div>
      )}

      <div className="px-6 py-5 rounded-lg border-2 border-dashed border-gray-300">
        <div className="space-y-6">
          <div className="space-y-10">
            <label
              htmlFor="upload-file"
              className="w-full md:p-16 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-white group"
            >
              <input
                id="upload-file"
                name="file"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".stl,.stp,.step,.zip"
                className="hidden"
              />

              <div className="w-10 h-10 border-2 border-gray-400 rounded-md flex items-center justify-center text-gray-500 mb-4 group-hover:text-gray-700 group-hover:border-gray-600 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
              </div>

              <h3 className="text-gray-700 font-medium text-base mb-3">
                {selectedFile
                  ? `Selected: ${selectedFile.name}`
                  : "Upload Your Design"}
              </h3>

              <div
                className={`bg-gray-100 ${uploading
                  ? "cursor-not-allowed opacity-70"
                  : "group-hover:bg-gray-200"
                  } text-gray-800 text-sm font-medium px-5 py-2 rounded-lg border border-gray-300 shadow-sm transition-all`}
              >
                {uploading
                  ? "Uploading…"
                  : "Select from file"}
              </div>

              <p className="text-xs text-gray-400 mt-5 tracking-wide">
                Supported file type: STL, STP,
                STEP, ZIP
              </p>

              {error && (
                <div className="mt-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}
            </label>

            {selectedFile ? (
              <section className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      File preview
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Review the selected file
                      before submitting.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreviewUrl("");
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    Remove file
                  </button>
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <section className={`${isDashboardRoute ? "py-5" : "pt-18"}`}>
      {isDashboardRoute ? (
        content
      ) : (
        <Container>{content}</Container>
      )}
    </section>
  );
}