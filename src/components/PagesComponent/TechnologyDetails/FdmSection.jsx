import React from "react";
import {
  ArrowWhite,
} from "../../SvgContainer/SvgContainer";
import model from "../../../assets/img/technology/model.png";
import prototype from "../../../assets/img/technology/prototype.png";
import pattern from "../../../assets/img/technology/pattern.png";
import fixtures from "../../../assets/img/technology/fixtures.png";
import production from "../../../assets/img/technology/production.png";

const fdmDAta = [
  {
    bgImg: model,
    title: "Concepts Concept Models",
  },
  {
    bgImg: prototype,
    title: "Functional Prototypes",
  },
  {
    bgImg: pattern,
    title: "Molds and Patterns",
  },
  {
    bgImg: fixtures,
    title: "jigs and fixture",
  },

  {
    bgImg: production,
    title: "Production parts",
  },
];

const FdmSection = () => {

  
  return (
    <div className="flex h-auto w-full flex-row gap-x-12 ">
      <div className="flex items-start flex-col gap-y-6 max-w-[450px] ">
        <h4 className="text-blue-400  text-[35px] font-normal ">
          {" "}
          FDM® (Fused Deposition Modeling) Technology{" "}
        </h4>
        <p className="text-base font-normal  leading-[150%] text-black opacity-74 ">
          Developed by Stratasys over 30 years ago. Described as the most
          accessible and widely used 3D printing process. Builds parts layer by
          layer from the bottom up by heating and extruding thermoplastic
          filament. Industrial-grade, production-level FDM systems (not to be
          confused with low-cost desktop alternatives) offer a range of
          thermoplastic properties including toughness, electrostatic
          dissipation, biocompatibility, UV resistance, high strength, and
          high-heat deflection. Applications span from basic proof-of-concept
          models to functional production parts
        </p>
        <button
          type="button"
          className={`
    group relative
    flex items-center gap-5
    px-7 py-4
    text-[15.5px] font-medium tracking-[-0.01em]
    text-black
    bg-white
    border border-black/40
    rounded-full
    overflow-hidden
    transition-all duration-500 ease-out
    hover:bg-black hover:text-white
    hover:border-black/70
    active:scale-[0.98]
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/50 cursor-pointer focus-visible:outline-offset-2
  `}
        >
          <span
            className={`
      relative transition-all mr-[40px] duration-500 ease-out
      group-hover:translate-x-0.5
    `}
          >
            Learn More about FDM technology
          </span>

          <div
            className={`
      absolute right-1.5 top-1/2 -translate-y-1/2
      flex size-11 items-center justify-center rounded-full
      bg-neutral-900 text-white
      transition-all duration-500 ease-out
      group-hover:bg-transparent group-hover:scale-110 group-hover:rotate-[135deg]
    `}
          >
            <ArrowWhite className="size-5 transition-transform duration-500 group-hover:scale-110" />
          </div>

          <div
            className={`
      absolute inset-0 rounded-full
      bg-gradient-to-r from-white/0 via-white/10 to-white/0
      opacity-0 -translate-x-full
      transition-all duration-700 ease-out
      group-hover:opacity-100 group-hover:translate-x-full
    `}
          />
        </button>
        <span className="text-base font-normal  leading-[150%] text-black opacity-74 ">
          Uses a high-powered laser to fuse polymer powder. Unfused powder
          supports parts during printing, eliminating dedicated support
          structures. Enables undercuts, thin walls, complex geometries/details.
        </span>
        {/* <button
          type="button"
          className={`
    group relative
    flex items-center gap-5
    px-7 py-4
    text-[15.5px] font-medium tracking-[-0.01em]
    text-black
    bg-white
    border border-black/40
    rounded-full
    overflow-hidden
    transition-all duration-500 ease-out
    hover:bg-black hover:text-white
    hover:border-black/70
    active:scale-[0.98]
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-black/50 cursor-pointer focus-visible:outline-offset-2
  `}
        >
          <span
            className={`
      relative transition-all mr-[40px] duration-500 ease-out
      group-hover:translate-x-0.5
    `}
          >
            Learn More
          </span>

          <div
            className={`
      absolute right-1.5 top-1/2 -translate-y-1/2
      flex size-11 items-center justify-center rounded-full
      bg-neutral-900 text-white
      transition-all duration-500 ease-out
      group-hover:bg-transparent group-hover:scale-110 group-hover:rotate-[135deg]
    `}
          >
            <ArrowWhite className="size-5 transition-transform duration-500 group-hover:scale-110" />
          </div>

          <div
            className={`
      absolute inset-0 rounded-full
      bg-gradient-to-r from-white/0 via-white/10 to-white/0
      opacity-0 -translate-x-full
      transition-all duration-700 ease-out
      group-hover:opacity-100 group-hover:translate-x-full
    `}
          />
        </button> */}
      </div>
      <ul className="w-full relative grid grid-cols-1 gap-y-3   ">
        {fdmDAta.map((item, idx) => {
          return (
            <li
              key={idx}
              className="h-auto px-4 border border-solid rounded-lg w-full flex items-center gap-x-4 border border-solid "
            >
              <img src={item.bgImg} alt={item.title} />
              <h3 className="text-xl font-normal leading-[122%] " > {item.title} </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FdmSection;
