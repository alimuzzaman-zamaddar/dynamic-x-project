import React from "react";
import Container from "../../../shared/Container";

const Micro = ({ data }) => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.description}
        </p>

        <div className="flex md:flex-row flex-col mt-10 border border-[#D1D5DC]">
          {data?.divs?.map((item, index) => {
            const isLast = index === data.divs.length - 1;

            return (
              <div key={index} className="w-full">
                <div
                  className={`py-4 px-6 text-center 
                    ${!isLast ? 'md:border-r border-b md:border-b-0 border-[#D1D5DC]' : ''}
                  `}
                >
                  <h4 className="text-[#0A0A0A] text-[14px] font-bold">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Micro;