import React from "react";
import Container from "../../../shared/Container";

const Laboratorio = ({ data }) => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-10">
          {data?.divs?.map((item, index) => (
            <div key={index}>
              <img
                src={item?.icon_url}
                alt={item?.title}
                className="w-12 h-12 object-contain"
              />

              <h4 className="text-[#0A0A0A] text-base font-semibold py-2">
                {item?.title}
              </h4>

              <p className="text-[15px] font-normal text-black">
                {item?.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Laboratorio;