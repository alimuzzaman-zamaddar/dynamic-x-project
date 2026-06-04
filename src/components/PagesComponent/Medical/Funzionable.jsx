import React from "react";
import Container from "../../../shared/Container";

const Funzionable = ({ data }) => {
  return (
    <section>
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="flex md:flex-row flex-col mt-10 border border-[#D1D5DC]">
          {data?.cards?.map((card, index) => (
            <div className="w-full" key={index}>
              <div className="bg-[#F0EEEC] py-4 flex justify-center items-center border-r border-[#D1D5DC]">
                <img
                  src={card?.icon_url}
                  alt={card?.title}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div className="py-4 px-6 border-r border-t border-[#D1D5DC]">
                <h4 className="text-[#0A0A0A] text-base font-bold">
                  {card?.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[15px] font-normal text-[#1E2939] pt-10">
          {data?.footer_text}
        </p>
      </Container>
    </section>
  );
};

export default Funzionable;