import React from "react";
import Container from "../../../shared/Container";

const Scientifica = ({ data }) => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10 border border-[#111]">
          {data?.divs?.map((item, idx) => (
            <div key={idx} className="border-l-[3px] border-black p-6">
              <h4 className="text-[#0A0A0A] text-base font-bold py-3">
                {item.title}
              </h4>

              <h5 className="text-[15px] font-normal text-[#1E2939]">
                {item.subtitle}
              </h5>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Scientifica;
