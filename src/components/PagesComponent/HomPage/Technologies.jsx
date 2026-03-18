import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router";
import { technologies } from "../../../static_data/static.data";

const Technologies = () => {
  const navigate = useNavigate();
  return (
    <section id="technologies" className="h-auto w-full pb-25">
      <div className="container flex flex-col gap-y-25">
        <h2 className="text-[73px] font-normal text-black">Technologies</h2>
        <Marquee
          speed={60}
          pauseOnHover={true}
          gradient={false}
          direction="left"
        >
          <div className="flex cursor-pointer flex-row gap-x-7.5 mx-4">
            {technologies.map((technology, idx) => (
              <div
                onClick={() => {
                  navigate(`/technology-details/${technology?.title}`);
                }}
                key={idx}
                className="flex flex-col gap-y-12.5 min-w-[632px]"
              >
                <img
                  src={technology.bgImg}
                  className="w-[632px] h-[500px] object-cover rounded-xl"
                  alt={technology.title}
                />
                <div className="flex flex-col gap-y-3.5 max-w-[379px]">
                  <h5 className="text-2xl font-semibold text-black leading-[133%]">
                    {technology.title}
                  </h5>
                  <span className="text-base text-black opacity-64 font-medium">
                    {technology.short_description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Technologies;
