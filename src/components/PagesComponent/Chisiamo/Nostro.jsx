import React from "react";
import Container from "../../../shared/Container";

const Nostro = ({ data }) => {
  return (
    <section className="lg:pb-18 pb-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-4 max-w-4xl">
          {data?.subtitle}
        </p>

        <div className="flex flex-col gap-3 my-10">
          {data?.colored_divs?.map((div, index) => (
            <div
              key={index}
              style={{ backgroundColor: div?.color }}
              className={`${div?.color} py-4 px-6 w-[75%]`}
            >
              <h2 className="text-[14px] font-semibold text-white">
                {div?.text}
              </h2>
            </div>
          ))}

        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="flex flex-col gap-16">
            {data?.second_divs?.map((item, index) => (
              <div
                key={index}
                className="relative flex items-start justify-between"
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <div className="w-[45%] text-right">
                      <h3 className="text-sm font-semibold text-[#0A0A0A]">
                        {item.title}
                      </h3>

                      <p className="text-[15px] text-[#1E2939] mt-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

                    <div className="w-[45%]"></div>
                  </>
                ) : (
                  <>
                    <div className="w-[45%]"></div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

                    <div className="w-[45%]">
                      <h3 className="text-sm font-semibold text-[#0A0A0A]">
                        {item.title}
                      </h3>

                      <p className="text-[15px] text-[#1E2939] mt-2">
                        {item.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className='text-[15px] font-normal text-[#1E2939] pt-10'>{data?.footer_description}</p>
      </Container>
    </section>
  );
};

export default Nostro;