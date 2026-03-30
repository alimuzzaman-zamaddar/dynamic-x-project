import React, { useState, useRef } from "react";
import Container from "../../../shared/Container";
import { FileUpload } from "../../SvgContainer/SvgContainer";
import CustomDropdown from "../../CustomComponents/CustomDropDown";

const MaterialContact = ({
  title = "CONTACT US AND GET A QUOTE",
  description = "Professional 3D printing service for prototyping and production. Over 100+ materials available with lead times as fast as 24 hours.",
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      file,
      name: file.name,
      size: file.size,
      preview: file.type.startsWith("image/")
        ? URL.createObjectURL(file)
        : null,
    }));
    setUploadedFiles((prev) => [...prev, ...newFiles]);
    e.target.value = "";
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prev) => {
      const updated = [...prev];
      if (updated[index].preview) URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const materialOptions = [
    { value: "abs-gf-fdm", label: "ABS-GF FDM" },
    { value: "abs-fdm", label: "ABS FDM" },
    { value: "asa-fdm", label: "ASA FDM" },
    { value: "asa-cf-fdm", label: "ASA-CF FDM" },
    { value: "pcfdm", label: "PCFDM" },
    { value: "pet-cf-fdm", label: "PET-CFFDM" },
    { value: "pa6-cf-fdm", label: "PA6-CF FDM" },
    { value: "pa6-gf-fdm", label: "PA6-GF FDM" },
    { value: "petg-fdm", label: "PETG FDM" },
    { value: "petg-cf-fdm", label: "PETG-CF FDM" },
    { value: "pla-aero-fdm", label: "PLA Aero FDM" },
    { value: "pla-fdm", label: "PLA FDM" },
    {
      value: "resina-per-prototipi-visivi-sla",
      label: "Resina per prototipi visivi (SLA)",
    },
    {
      value: "resina-rigida-alta-prestazione-sla",
      label: "Resina rigida alta prestazione (SLA)",
    },
    { value: "tpe-fdm", label: "TPE FDM" },
    { value: "tpu-fdm", label: "TPU FDM" },
    { value: "resina-castable-sla", label: "Resina castable (SLA)" },
    { value: "resina-dentale-sla", label: "Resina dentale (SLA)" },
  ];

  const serviceOptions = [
    {
      value: "high-precision-3d-printing",
      label: "High-Precision 3D Printing",
    },
    {
      value: "advanced-3d-modelling",
      label: "Advanced 3D Modelling & Engineering",
    },
    {
      value: "ready-to-order-catalogs",
      label: "Ready-to-Order Specialized Catalogs",
    },
    {
      value: "technical-consulting",
      label: "Technical Consulting & Material Expertise",
    },
    {
      value: "2d-to-3d-conversion",
      label: "2D-to-3D Conversion & Digital Reconstruction",
    },
    {
      value: "3d-scanning-reverse-engineering",
      label: "Professional 3D Scanning & Reverse Engineering",
    },
  ];

  return (
    <section className="h-auto lg:py-21 py-8 w-full">
      <Container>
        <div className="flex xl:flex-row flex-col justify-between gap-x-26.5 items-center">
          <div className="xl:max-w-162 w-full">
            <h2 className="leading-[123%] lg:text-4xl text-2xl font-normal text-black pb-5">
              {title}
            </h2>
            <span className="text-black/50 opacity-64 xl:text-base text-sm font-light leading-[133%]">
              {description}
            </span>
          </div>

          <form
            className="flex flex-col w-full relative gap-y-6 xl:pt-0 pt-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-row gap-x-6 items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="common-input"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  className="common-input"
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full gap-6 items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="common-input"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="common-input"
                />
              </div>

              <div className="flex sm:flex-row flex-col w-full gap-x-6 items-center">
                <input
                  type="text"
                  placeholder="Country Code"
                  className="common-input sm:w-[60%] w-full xl:mb-0 mb-5"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="common-input"
                />
              </div>

              <div className="flex gap-2">
                <CustomDropdown
                  options={serviceOptions}
                  placeholder=" service"
                  onChange={(value) => console.log("Selected:", value)}
                />
                <CustomDropdown
                  options={materialOptions}
                  placeholder="Material"
                  onChange={(value) => console.log("Selected:", value)}
                />
              </div>

              <textarea
                placeholder="Message"
                className="common-input min-h-[146px]"
              />

              {/* File Upload Area */}
              <div
                className="relative h-auto w-full lg:py-10 py-5 px-4 rounded-xl flex items-center justify-center cursor-pointer border-2 border-gray-300"
                onClick={() =>
                  uploadedFiles.length === 0 && inputRef.current?.click()
                }
              >
                <div className="flex flex-col gap-y-4 sm:gap-y-5 items-center pointer-events-none">
                  <FileUpload />
                  <span className="text-[15px] sm:text-sm md:text-base font-normal leading-[133%] text-black text-center">
                    Upload Your Design
                  </span>
                </div>

                <input
                  ref={inputRef}
                  type="file"
                  multiple
                  className="absolute top-0 left-0 h-full w-full rounded-xl opacity-0 cursor-pointer"
                  onChange={handleFileChange}
                />
              </div>

              {/* File Previews */}
              {uploadedFiles.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {uploadedFiles.map((f, i) => (
                    <div
                      key={i}
                      className="relative group flex flex-col items-center gap-y-2 border border-gray-200 rounded-xl p-3 w-[120px]"
                    >
                      {/* Remove button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveFile(i)}
                        className="absolute -top-2 -right-2 z-10 w-5 h-5 rounded-full bg-black text-white text-[15px] flex items-center justify-center leading-none hover:bg-red-500 transition-colors duration-200"
                        aria-label="Remove file"
                      >
                        ×
                      </button>

                      {/* Preview */}
                      {f.preview ? (
                        <img
                          src={f.preview}
                          alt={f.name}
                          className="w-full h-16 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="w-full h-16 rounded-lg bg-gray-100 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                            />
                          </svg>
                        </div>
                      )}

                      {/* File name & size */}
                      <span
                        className="text-[15px] text-black font-medium w-full text-center truncate"
                        title={f.name}
                      >
                        {f.name}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {formatFileSize(f.size)}
                      </span>
                    </div>
                  ))}

                  {/* Add more button */}
                  <button
                    type="button"
                    onClick={() => inputRef.current?.click()}
                    className="flex flex-col items-center justify-center gap-y-2 border-2 border-dashed border-gray-300 rounded-xl p-3 w-[120px] h-full min-h-[110px] text-gray-400 hover:border-black hover:text-black transition-colors duration-200"
                  >
                    <span className="text-2xl leading-none">+</span>
                    <span className="text-[15px]">Add more</span>
                  </button>
                </div>
              )}
            </div>

            <button
              className="
                h-auto w-full flex bg-black text-white items-center justify-center 
                rounded-3xl xl:py-6 py-3 cursor-pointer 
                border border-transparent 
                hover:border-solid hover:bg-transparent hover:border-black hover:text-black 
                ease-in-out duration-500 
                text-lg leading-[177%] font-medium capitalize
              "
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default MaterialContact;
