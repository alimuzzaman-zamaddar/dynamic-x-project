import React from "react";
import { CheckIcon } from "../../SvgContainer/SvgContainer1";

const WhyChooseUsSection = ({ data }) => {

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="flex flex-col gap-6 section-header mb-16">
          <h2 className="section-title">{data?.title}</h2>
          <p className="section-description text-primary-gray/80 mt-1">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 md:mt-10 text-center">
          {data?.divs?.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="section-title">{stat.num}</div>
              <div className="text-primary-black font-semibold text-lg leading-tight mt-[-4px]">
                {stat.title}
              </div>
              <p className="text-primary-black/80 text-[15px] leading-[22px] max-w-[320px] mt-[-6px]">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-[#E8E8F0] p-6 w-full mt-12.5">
          <div className="text-primary-black shrink-0">
            <CheckIcon />
          </div>
          <p className="text-[15px] leading-[22px] text-primary-black/90">
            {data?.footer_text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
