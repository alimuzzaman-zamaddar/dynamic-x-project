import React from "react";
import Container from "../../../shared/Container";
import logo from "../../../assets/img/home/DynamicsX - GREEN 1.png";

const About = () => {
  return (
    <section id="about-us" className="h-auto w-full py-8 xl:py-15.25 ">
      <Container>
        <div className="flex flex-col gap-y-6 xl:gap-y-8  ">
          <h2 className=" text-[21.9px] font-normal leading-[146%] text-black  ">
            {" "}
            About Us{" "}
          </h2>
          <div className="w-full flex flex-col gap-8 xl:flex-row justify-between items-center">
            <img
              src={logo}
              className=""
              alt="site logo"
            />
            <span className="text-base text-black opacity-64 font-normal leading-[150%]   ">
              DynamicsX è una reltà innovativa nata per rivoluzionare il mondo della stampa 3D. Il nostro obiettivo? Trasformare idee e progetti in oggetti reali, con velocità, precisione e creatività. Crediamo che la stampa 3D non sia solo tecnologia, ma uno strumento per rendere ogni progetto possibile, accessibile e scalabile. Dalla prototipazione rapida alla produzione di piccole serie, aiutiamo designer, aziende e creativi a dare forma alle loro idee in modo concreto e smart.
            </span>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default About;
