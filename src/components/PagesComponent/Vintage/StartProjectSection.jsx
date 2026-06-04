import React from "react";
import { CheckIcon } from "../../SvgContainer/SvgContainer1";
import { Link } from "react-router";

const StartProjectSection = ({ data }) => {
  return (
    <section className="section bg-white">
      <div className="container-main flex flex-col gap-10">
        {/* Text Area */}
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-black">{data?.title}</h2>
          <p className="text-[15px] leading-[22px] text-black/80 max-w-[900px]">
            {data?.subtitle}
          </p>
        </div>

        {/* Gray Info Box */}
        <div className="flex items-center gap-4 bg-[#E8E8F0] p-6 w-full">
          <div className="text-black shrink-0">
            {/* The image uses a solid, simple checkmark in a box. HiCheckCircle is a good fit. */}
            <CheckIcon />
          </div>
          <p className="text-[15px] leading-[22px] text-black/80">
            {data?.footer_text}
          </p>
        </div>

        {/* Button Area */}
        <div className="flex items-center gap-4 flex-wrap">
          {data?.buttons?.map((button, idx) => (
            <Link key={idx} to={button.link}>
              <button
                className={`h-[60px] px-8 rounded-3xl text-sm md:text-base font-medium flex items-center justify-center transition whitespace-nowrap cursor-pointer ${idx === 0
                  ? "bg-[#1a1411] text-white hover:bg-black/90"
                  : "bg-transparent text-black border border-black hover:bg-black/5"
                  }`}
              >
                {button.text}
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartProjectSection;
