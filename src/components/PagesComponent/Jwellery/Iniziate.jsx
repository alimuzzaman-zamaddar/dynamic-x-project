import React from "react";
import Container from "../../../shared/Container";
import { Link } from "react-router";

const Iniziate = ({ data }) => {
  return (
    <section className="">
      <Container>
        {/* Main Header */}
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          {data?.title}
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>

        <div className="my-10 p-6 bg-[#DDE0EF] flex gap-4 items-center rounded-sm">
          <svg
            className="w-6 h-6 text-[#1A1A2E] flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-[15px] font-normal text-[#1E2939]">
            {data?.footer}
          </p>
        </div>

        {data?.links && data.links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {data.links.map((item, index) => {
              const isPrimary = index === 0;

              return (
                <Link key={index} to={item.link || "/new-upload-design"}>
                  <button
                    className={`px-7 py-3 rounded-4xl cursor-pointer duration-300 ease-in-out text-base font-semibold border border-[#1A1A2E]
                      ${isPrimary
                        ? "bg-[#1A1A2E] text-white hover:bg-transparent hover:text-black"
                        : "bg-transparent text-black hover:bg-[#1A1A2E] hover:text-white"
                      }`}
                  >
                    {item.text}
                  </button>
                </Link>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default Iniziate;