import React from "react";
import { CheckIcon } from "../../SvgContainer/SvgContainer1";

const StartYourProject = ({ data }) => {

  return (
    <section className="section bg-white text-black font-family-inter">
      <div className="container-main">
        <div className="section-header">
          <h2 className="section-title">{data?.title}</h2>
          <p className="section-description max-w-[1000px]">
            {data?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {data?.divs?.map((step) => (
            <div key={step.id} className="flex flex-col group">
              <div className="text-sm leading-normal opacity-80 group-hover:opacity-100 transition-opacity">
                {step.num}
              </div>

              <div className="divider-top mt-2 mb-4" />

              <div className="flex flex-col gap-2 pl-4 md:pl-0">

                <h3 className=" font-semibold leading-tight ">{step.title}</h3>

                <p className="item-description text-[15px] leading-[18px] text-black opacity-80 mt-[-4px]">
                  {step.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 bg-[#E8E6E4] p-4 w-full mt-10">
          <div className="text-black shrink-0">
            <CheckIcon />
          </div>
          <p className="text-[15px] leading-[22px] text-black">
            {data?.footer_text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartYourProject;
