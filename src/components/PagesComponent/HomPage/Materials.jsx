import React from "react";
import { Link } from "react-router";
import Container from "../../../shared/Container";
import { Upload } from "../../SvgContainer/SvgContainer";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear5 from "../../../assets/img/materials/ASA_Grid_LP 1 (1).png";

const materials = [
  {
    imgSrc: gear1,
    title: "ABS-GF",
    subtitle: "FDM",
    description:
      "L’ASA rinforzato con fibra di vetro migliora l’ASA standard offrendo maggiore rigidità, resistenza al calore e stabilità dimensionale. Resiste ai raggi UV e agli agenti atmosferici, risultando ideale per applicazioni esterne e strutturali.",
  },
  {
    imgSrc: gear2,
    title: "ABS",
    subtitle: "FDM",
    description:
      "L’ABS è un materiale durevole e versatile con buona resistenza agli urti e agli agenti chimici. È ideale per parti funzionali e prototipi.",
  },
  {
    imgSrc: gear5,
    title: "ASA",
    subtitle: "FDM",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear5,
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
    imgSrc: gear2,
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
        <ul className="grid justify-between lg:gap-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {materials.map((material, idx) => {
            return (
              <li
                key={idx}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: " blur(4.5px)",
                }}
                className="xl:p-6 p-3 w-full rounded-xl flex flex-col h-full"
              >
                <div className="flex flex-col gap-y-3 h-full">

                  {/* TOP CONTENT */}
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-black font-normal leading-[134%] text-base">
                          {material.title}
                        </h5>
                        <p className="text-xs text-black font-light">{material.subtitle}</p>
                      </div>

                      <img
                        className="w-18 h-18 object-cover"
                        src={material.imgSrc}
                        alt={material.title}
                      />
                    </div>

                    <span className="text-xs text-black/60 font-light leading-[150%] max-w-[389px] mt-5">
                      {material.description}
                    </span>
                  </div>

                  {/* BUTTON (PUSHED TO BOTTOM) */}
                  <div className="mt-auto">
                    <button
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.16)",
                        background: "rgba(0, 0, 0, 0.09)",
                        backdropFilter: " blur(5.09px)",
                      }}
                      className="xl:px-6 px-3 py-3 flex items-center justify-center rounded-xl cursor-pointer"
                    >
                      <Link to={"/upload-design"}>
                        <div className="flex gap-x-2.5 items-center">
                          <Upload />
                          <span className="text-base font-normal leading-[200%] text-black">
                            Upload Design
                          </span>
                        </div>
                      </Link>
                    </button>
                  </div>

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