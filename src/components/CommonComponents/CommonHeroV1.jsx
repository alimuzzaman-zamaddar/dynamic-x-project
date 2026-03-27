/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router";
import drone from "../../assets/img/bg/drone.jpg";



const CommonHeroV1 = ({
  bgImg = drone,
  title = "Drone & UAV Components",
  description = "We design and manufacture high-precision mechanical components for drones and unmanned aerial vehicles used in commercial, industrial, and research applications. Our solutions include structural frames, mounting systems, payload housings, vibration-dampening parts, and custom enclosures engineered for lightweight performance, strength, and aerodynamic efficiency. Every component is optimized for durability, balance, and integration with advanced electronics, ensuring reliable performance in demanding environments.",
}) => {

  const { category } = useParams();
  

  return (
    <section className="flex flex-col gap-y-8 items-center">
      <div
        className="h-[386px] w-full flex items-center  justify-center "
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {" "}
        <span className="text-[71.1px] text-white font-normal leading-[123%] ">
          {" "}
          {category}{" "}
        </span>
      </div>
      <div className="container">
        <p className="text-2xl font-normal leading-[183%] text-black opacity-64  ">
          {" "}
          {description}{" "}
        </p>
      </div>
    </section>
  );
};

export default CommonHeroV1;
