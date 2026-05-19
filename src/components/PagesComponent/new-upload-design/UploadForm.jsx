import React, { useEffect, useRef, useState } from 'react'
import Container from '../../../shared/Container'
import { FiPlus } from 'react-icons/fi';
import { GoArrowUp } from 'react-icons/go';

export default function UploadForm() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [promptText, setPromptText] = useState('');

  const handleButtonClick = (e) => {
    e.preventDefault();
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file));
      } else {
        setPreviewUrl('');
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


  return (
    <section className='py-18'>
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 tracking-tight mb-4">
            Upload your design
          </h1>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md mx-auto">
            Professional 3D printing service for prototyping and production.
            Over 100+ materials available with lead times as fast as 24 hours.
          </p>
        </div>
        <div className="px-6 py-5 rounded-lg border-2 border-dashed border-gray-300">



          <div className="space-y-10">
            <div
              onClick={handleButtonClick}
              className="w-full  p-10 md:p-16 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors bg-white group"
            >
    
              <input
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
              </div>

              <h3 className="text-gray-700 font-medium text-base mb-3">
                {selectedFile ? `Selected: ${selectedFile.name}` : 'Upload Your Design'}
              </h3>

              <button
                type="button"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium px-5 py-2 rounded-lg border border-gray-300 shadow-sm transition-all"
              >
                Select from file
              </button>

              <p className="text-xs text-gray-400 mt-5 tracking-wide">
                Supported file type: STL, STP, STEP, ZIP
              </p>
            </div>

            {selectedFile ? (
              <section className="w-full bg-white rounded-3xl border border-gray-200 shadow-sm p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">File preview</h2>
                    <p className="text-sm text-gray-500 mt-1">
                      Review the selected file before submitting.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedFile(null);
                      setPreviewUrl('');
                    }}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    Remove file
                  </button>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      File name
                    </p>
                    <p className="mt-2 text-sm text-gray-900">{selectedFile.name}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Size
                    </p>
                    <p className="mt-2 text-sm text-gray-900">{(selectedFile.size / 1024).toFixed(2)} KB</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Type
                    </p>
                    <p className="mt-2 text-sm text-gray-900">{selectedFile.type || 'Unknown'}</p>
                  </div>
                  <div className="rounded-2xl border border-gray-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Last modified
                    </p>
                    <p className="mt-2 text-sm text-gray-900">{new Date(selectedFile.lastModified).toLocaleDateString()}</p>
                  </div>
                </div>

                {previewUrl ? (
                  <div className="mt-6 rounded-3xl overflow-hidden border border-gray-200 bg-black">
                    <img src={previewUrl} alt="Preview" className="w-full object-cover" />
                  </div>
                ) : (
                  <div className="mt-6 rounded-3xl border border-dashed border-gray-300 bg-slate-50 p-6 text-center text-sm text-slate-600">
                    No visual preview available for this file type.
                  </div>
                )}
              </section>
            ) : null}
          </div>
        </div>

        <div className="w-full mx-auto mt-5 relative pt-15">
          <div className="w-full border border-gray-200 rounded-xl shadow-md bg-white  px-4 py-3 md:py-4 gap-3 focus-within:border-gray-300 transition-all">
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ask about 3D object or scene..."
              className="flex-1 bg-transparent border-none text-sm md:text-base text-gray-700 placeholder-gray-400 outline-none"
            />
            <div className="flex justify-between mt-10">
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <FiPlus />

              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center cursor-pointer justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors"
              >
                <GoArrowUp />

              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
