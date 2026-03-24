import React from "react";
import CustomDropdown from "../../CustomComponents/CustomDropDown";
import Container from "../../../shared/Container";

const ContactSection = ({
  title = "CONTACT US AND GET A QUOTE",
  description = "Professional 3D printing service for prototyping and production. Over 100+ materials available with lead times as fast as 24 hours.",
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const serviceOptions = [
    { value: "high-precision-3d-printing", label: "High-Precision 3D Printing" },
    { value: "advanced-3d-modelling", label: "Advanced 3D Modelling & Engineering" },
    { value: "ready-to-order-catalogs", label: "Ready-to-Order Specialized Catalogs" },
    { value: "technical-consulting", label: "Technical Consulting & Material Expertise" },
    { value: "2d-to-3d-conversion", label: "2D-to-3D Conversion & Digital Reconstruction" },
    { value: "3d-scanning-reverse-engineering", label: "Professional 3D Scanning & Reverse Engineering" },
  ];

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start">

          {/* Left Content */}
          <div className="max-w-full lg:max-w-[650px]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-[123%] pb-4">
              {title}
            </h2>

            <p className="text-black/60 text-sm sm:text-base font-light leading-[140%]">
              {description}
            </p>
          </div>

          {/* Form */}
          <form
            className="flex flex-col w-full gap-5 md:gap-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input type="text" placeholder="Name" className="common-input" />
              <input type="text" placeholder="Surname" className="common-input" />
            </div>

            {/* Email */}
            <input type="email" placeholder="Email" className="common-input" />

            {/* Phone */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Country Code"
                className="common-input sm:w-[30%]"
              />
              <input
                type="text"
                placeholder="Phone number"
                className="common-input"
              />
            </div>

            {/* Dropdown */}
            <CustomDropdown
              options={serviceOptions}
              placeholder="Select service category"
              onChange={(value) => console.log("Selected:", value)}
            />

            {/* Subject */}
            <input type="text" placeholder="Subject" className="common-input" />

            {/* Message */}
            <textarea
              placeholder="Message"
              className="common-input min-h-[140px] resize-none"
            />

            {/* Button */}
            <button
              type="submit"
              className="
                w-full flex items-center justify-center 
                rounded-3xl py-5 md:py-6 cursor-pointer 
                bg-black text-white 
                border border-transparent 
                hover:bg-transparent hover:border-black hover:text-black 
                transition-all duration-500 
                text-base md:text-lg font-medium capitalize
              "
            >
              Submit
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;