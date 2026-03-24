import React from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router";
import { technologies } from "../../../static_data/static.data";
import Container from "../../../shared/Container";

const Technologies = () => {
  const navigate = useNavigate();
  return (
    <section id="technologies" className="h-auto w-full xl:pb-25 pb-10">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-5">Tecnologie</h2>
        <Marquee
          speed={60}
          pauseOnHover={true}
          gradient={false}
          direction="left"
        >
          <div className="flex cursor-pointer flex-row mx-4">
            {technologies.map((technology, idx) => (
              <div
                onClick={() => {
                  navigate(`/technology-details/${technology?.title}`);
                }}
                key={idx}
                className="flex flex-col lg:gap-y-12.5 py-5"
              >
                <img
                  src={technology.bgImg}
                  className="w-[330px] lg:h-[300px] h-40 object-cover rounded-xl"
                  alt={technology.title}
                />
                <div className="flex flex-col gap-y-3.5 max-w-[379px] lg:mt-0 mt-3">
                  <h5 className="lg:text-2xl text-lg font-semibold text-black leading-[133%]">
                    {technology.title}
                  </h5>
                  <span className="lg:text-base text-sm text-black opacity-64 font-medium">
                    {technology.short_description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </Container>
    </section>
  );
};

export default Technologies;
