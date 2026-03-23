import React from "react";
import { Link } from "react-router";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear3 from "../../../assets/img/materials/PETG-CF_Grid_LP 1.png";
import gear4 from "../../../assets/img/materials/PETG_Grid_LP 1.png";
import { Upload } from "../../SvgContainer/SvgContainer";

const materials = [
  {
    imgSrc: gear1,
    title: "ABS.GF_Grid_LP",
    description:
      "L’ABS è un materiale durevole e versatile con buona resistenza agli urti e agli agenti chimici. È ideale per parti funzionali e prototipi.",
  },
  {
    imgSrc: gear2,
    title: "ABS_Grid_LP",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear3,
    title: "PETG_Grid_LP",
    description:
      "L’ASA rinforzato con fibra di vetro migliora l’ASA standard offrendo maggiore rigidità, resistenza al calore e stabilità dimensionale. Resiste ai raggi UV e agli agenti atmosferici, risultando ideale per applicazioni esterne e strutturali.",
  },
  {
    imgSrc: gear4,
    title: "PETG-CF_Grid_LP",
    description:
      "L’ASA rinforzato con fibra di carbonio (CF-ASA) offre maggiore resistenza, rigidità e stabilità ai raggi UV rispetto all’ASA standard. È un’ottima scelta per componenti sottoposti a elevato stress meccanico.",
  },
];

const Materials = () => {
  return (
    <section id="materials" className="h-auto w-full pb-25 ">
      <div className="container flex flex-col gap-y-24 ">
        <div className="flex flex-row  justify-between">
          <h2 className="text-[73px] font-normal text-black ">Materials</h2>
          <Link to={"/allmaterials"} className="text-[22px] font-normal leading-[146%] text-black opacity-64  ">
            {" "}
            See all
          </Link>
        </div>
        <ul className="grid justify-between gap-y-8 gap-x-7.5 grid-cols-2">
          {materials.map((material, idx) => {
            return (
              <li
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: " blur(4.5px)",
                }}
                key={idx}
                className="p-7.5 h-auto w-full rounded-xl flex flex-row gap-x-12 items-center "
              >
                <img
                  className="max-w-[245px] max-h-[243px] object-cover "
                  src={material.imgSrc}
                  alt={material.title}
                />
                <div className="flex flex-col gap-y-6 ">
                  <div className="flex flex-col gap-y-3  ">
                    <h5 className="text-black font-normal leading-[134%] text-2xl  ">
                      {" "}
                      {material.title}{" "}
                    </h5>
                    <span className="text-base font-light leading-[150%]  max-w-[389px] ">
                      Polymer with excellent performance, ductility and thermal
                      resistance, the most used for stability and value for
                      money.
                    </span>
                  </div>
                  <button
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.16)",
                      background: "rgba(0, 0, 0, 0.09)",
                      backdropFilter: " blur(5.09px)",
                    }}
                    className="h-auto w-auto px-6 py-3 relative flex items-center justify-center rounded-xl cursor-pointer max-w-[193px] "
                  >
                    <div className="flex flex-row gap-x-2.5 items-center ">
                      <Upload />
                      <span className="text-base font-normal leading-[200%] text-black ">
                        Upload Design
                      </span>
                    </div>
                    <input
                      type="file"
                      className="absolute top-0 left-0 h-full w-full  rounded-xl opacity-0 cursor-pointer "
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Materials;
