import React from "react";
import bio_stamp from "../../../assets/img/bg/Desktop.png";
import Container from "../../../shared/Container";

const BioStamp = () => {
  return (
    <section
      id="biostamp-3d"
      style={{
        backgroundImage: `url(${bio_stamp})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full"
    >
      <Container>
        <div className="xl:py-16.25 py-8 flex flex-col justify-between h-full ">
          <div className="flex flex-col gap-y-3  ">
            <h2 className="lg:text-4xl text-2xl font-semibold text-white ">BioStamp 3D</h2>
            <span className="text-white/50 leading-[133%] max-w-[622px] font-light text-lg">
              La nuova frontiera del bioprinting tra natura e tecnologiax
            </span>
          </div>
          <div className="flex justify-end items-end xl:pt-76 pt-20">
            <span className="text-white lg:text-2xl text-lg font-normal leading-[142%] max-w-[642px] ">
              La nostra tecnologia BioStamp3D è attualmente in sviluppo.
              Seguiteci per scoprire le prossime innovazioni nel mondo del bioprinting.
            </span>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default BioStamp;
