import React from "react";
import { Link } from "react-router";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear3 from "../../../assets/img/materials/PETG-CF_Grid_LP 1.png";
import gear4 from "../../../assets/img/materials/PETG_Grid_LP 1.png";
import { Upload } from "../../SvgContainer/SvgContainer";
import Container from "../../../shared/Container";

const materials = [
  {
    imgSrc: gear1,
    title: "ABS-GF",
    subtitle: "FDM",
    description:
      "L’ASA rinforzato con fibra di vetro migliora l’ASA standard offrendo maggiore rigidità, resistenza al calore e stabilità dimensionale. Resiste ai raggi UV e agli agenti atmosferici.",
  },
  {
    imgSrc: gear2,
    title: "ABS",
    subtitle: "FDM",
    description:
      "L’ABS è un materiale durevole e versatile con buona resistenza agli urti e agli agenti chimici. È ideale per parti funzionali e prototipi.",
  },
  {
    imgSrc: gear3,
    title: "ASA",
    subtitle: "FDM",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear4,
    title: "ASA",
    subtitle: "FDM",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear1,
    title: "ASA-CF",
    subtitle: "FDM",
    description:
      "L’ASA rinforzato con fibra di carbonio (CF-ASA) offre maggiore resistenza, rigidità e stabilità ai raggi UV rispetto all’ASA standard. Ideale per componenti ad alto stress.",
  },
  {
    imgSrc: gear3,
    title: "PA6-CF",
    subtitle: "FDM",
    description:
      "Il Nylon 6 rinforzato con fibra di carbonio offre eccellenti proprietà meccaniche, elevata rigidità e resistenza termica. Mantiene leggerezza e resistenza agli urti.",
  },
];

const Materials = () => {
  return (
    <section id="materials" className="h-auto w-full xl:pb-25 pb-10">
      <Container>
        <div className="flex flex-row  justify-between">
          <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-5 ">Materials</h2>
          <Link to={"/allmaterials"} className="text-[22px] font-normal leading-[146%] text-black opacity-64">
            See all
          </Link>
        </div>
        <ul className="grid justify-between lg:gap-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map((material, idx) => {
            return (
              <li
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: " blur(4.5px)",
                }}
                key={idx}
                className="xl:p-7.5 p-3 h-auto w-full rounded-xl flex flex-row gap-x-12 items-center "
              >
                <div className="flex flex-col gap-y-6 ">
                  <div className="flex flex-col gap-y-3  ">
                    <div className="flex justify-between">
                      <div className="">
                        <h5 className="text-black font-normal leading-[134%] text-2xl">
                          {material.title}{" "}
                        </h5>
                        <p className="text-sm text-gray-500">{material.subtitle}</p>
                      </div>
                      <img
                        className="w-18 h-18 object-cover "
                        src={material.imgSrc}
                        alt={material.title}
                      />

                    </div>
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
                    className="h-auto w-auto xl:px-6 px-3 py-3 relative flex items-center justify-center rounded-xl cursor-pointer max-w-[193px] "
                  >
                    <div className="flex flex-row gap-x-2.5 items-center ">
                      <Upload />
                      <span className="text-base font-normal leading-[200%] text-black ">
                        Upload Design
                      </span>
                    </div>
                    {/* <input
                      type="file"
                      className="absolute top-0 left-0 h-full w-full  rounded-xl opacity-0 cursor-pointer "
                    /> */}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Materials;
