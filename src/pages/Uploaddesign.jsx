import React from "react";
import Container from "../shared/Container";
import CustomDropdown from "../components/CustomComponents/CustomDropDown";

const Uploaddesign = ({
  title = "CONTACT US AND GET A QUOTE",
  description = "Professional 3D printing service for prototyping and production. Over 100+ materials available with lead times as fast as 24 hours.",
}) => {
  const handleSubmit = e => {
    e.preventDefault();
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
    { value: "resina-per-prototipi-visivi-sla", label: "Resina per prototipi visivi (SLA)" },
    { value: "resina-rigida-alta-prestazione-sla", label: "Resina rigida alta prestazione (SLA)" },
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
    <section className="h-auto pt-30 px-4 lg:pt-50 py-8 w-full">
      <Container>
        <div className="flex xl:flex-row flex-col justify-between gap-x-26.5 items-center">
          <div className="xl:max-w-162 w-full">
            <h2 className=" leading-[123%] lg:text-4xl text-2xl font-normal text-black pb-5">
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
                <input type="text" placeholder="Name" className="common-input" />
                <input
                  type="text"
                  placeholder="Surname"
                  className="common-input"
                />
              </div>
              <div className="flex sm:flex-row flex-col w-full gap-x-6 items-center">
                <input type="email" placeholder="Email" className="common-input" />
                <input type="text" placeholder="Subject" className="common-input" />
              </div>

              <div className="flex sm:flex-row flex-col w-full gap-x-6 items-center">
                <input
                  type="text"
                  placeholder="Country Code"
                  className="common-input sm:w-[55%] w-full xl:mb-0 mb-5"
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
                  onChange={value => console.log("Selected:", value)}
                />
                <CustomDropdown
                  options={materialOptions}
                  placeholder="Material"
                  onChange={value => console.log("Selected:", value)}
                />

              </div>



              <textarea
                placeholder="Message"
                className="common-input min-h-[146px]"
              />
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

export default Uploaddesign;
