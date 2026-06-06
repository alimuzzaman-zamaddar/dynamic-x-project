import React from "react";
import Container from "../../../shared/Container";

const Creazione = ({ data }) => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="flex flex-col gap-4 mt-10">
          {data?.items?.map((item, index) => (
            <div key={index} className="border border-[#D1D5DC] p-6">
              <h2 className="text-[14px] font-bold text-[#0A0A0A]">
                {item.title}
              </h2>
              <p className="text-[15px] font-normal text-[#1E2939] pt-4">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Creazione;