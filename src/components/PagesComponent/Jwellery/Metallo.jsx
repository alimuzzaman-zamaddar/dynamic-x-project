import React from "react";
import Container from "../../../shared/Container";

const Metallo = ({ data }) => {
  const barWidths = ["w-3/4", "w-full", "w-[90%]"];

  return (
    <section className="">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="flex flex-col gap-2 my-10">
          {data?.color_divs?.map((bar, index) => (
            <div
              key={index}
              style={{ backgroundColor: bar.color_code }}
              className={`py-5 px-8 ${barWidths[index % barWidths.length] || "w-full"}`}
            >
              <h2 className="text-[14px] font-bold text-white">
                {bar.title}
              </h2>
            </div>
          ))}
        </div>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.footer}
        </p>

        {data?.divs && data.divs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-[#D1D5DC]">
            {data.divs.map((spec, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-3xl font-bold text-[#1E2939]">
                  {spec.num}
                </div>
                <h4 className="text-base font-semibold text-black">
                  {spec.title}
                </h4>
                <p className="text-[14px] font-normal text-[#1E2939] leading-relaxed">
                  {spec.subtitle}
                </p>
              </div>
            ))}
          </div>
        )}

        {data?.subfooter && (
          <p className="text-sm font-semibold tracking-wider text-[#1E2939]/70 uppercase mt-8 text-center md:text-left">
            {data.subfooter}
          </p>
        )}
      </Container>
    </section>
  );
};

export default Metallo;