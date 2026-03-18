import React from "react";
import bio_stamp from "../../../assets/img/bg/Desktop.png";

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
      className="h-175 w-full  "
    >
      <div className="container py-[65px] flex flex-col justify-between h-full ">
        <div className="flex flex-col gap-y-3  ">
          <h2 className="text-[73px] font-normal text-white ">BioStamp 3D</h2>
          <span className="text-white leading-[133%] max-w-[622px] font-light text-2xl">
            La nuova frontiera del bioprinting tra natura e tecnologia
          </span>
        </div>
        <div className="flex justify-end items-end">
          <span className="text-white text-[30px] font-normal leading-[142%] max-w-[642px] ">
            La nostra tecnologia BioStamp3D è attualmente in sviluppo.
            Seguiteci per scoprire le prossime innovazioni nel mondo del bioprinting.
          </span>
        </div>
      </div>
    </section>
  );
};

export default BioStamp;
