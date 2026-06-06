import React from "react";
import Container from "../../../shared/Container";

const Lusso = ({ data }) => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="flex md:flex-row flex-col gap-4 mt-10">
          {data?.cards?.map((card, index) => (
            <div
              key={index}
              className="border-l-3 border border-black p-6 w-full flex flex-col justify-between"
            >
              <div>
                <h4 className="text-[#0A0A0A] text-base font-bold py-3">
                  {card.title}
                </h4>
                <p className="text-[15px] font-normal text-[#1E2939] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Lusso;