import React from "react";
import { Link } from "react-router";
import Container from "../../../shared/Container";

const Richiedi = ({ data }) => {
  return (
    <section>
      <Container>
        <h4 className="bg-[#E8E8E8] px-2.5 py-1 text-center text-[15px] font-normal text-black w-fit">
          {data?.heading_title}
        </h4>

        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A] mt-4">
          {data?.title}
        </h2>

        <p className="text-[15px] font-normal text-[#1E2939] pt-6">
          {data?.subtitle}
        </p>

        <div className="flex md:flex-row flex-col gap-4 mt-10 border border-[#111]">
          {data?.cards?.map((card, index) => (
            <div
              key={index}
              className="border-l-[3px] border-[#111] p-6 w-full"
            >
              <h4 className="text-[#0A0A0A] text-base font-bold py-3">
                {card?.title}
              </h4>

              <h5 className="text-[15px] font-normal text-[#1E2939]">
                {card?.description}
              </h5>

              <Link to={card?.button_link}>
                <button className="py-4 px-11 bg-transparent text-primary-black font-bold border border-[#1E2939] rounded-3xl text-sm tracking-wide transition hover:bg-[#E5E7EB] whitespace-nowrap mt-10 cursor-pointer">
                  {card?.button_text}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Richiedi;