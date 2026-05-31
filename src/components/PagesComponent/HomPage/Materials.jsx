import React from "react";
import { Link } from "react-router";
import Container from "../../../shared/Container";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear5 from "../../../assets/img/materials/ASA_Grid_LP 1 (1).png";

// Updated array: Capped at 3 unique material items and removed the duplicate ASA card
const materials = [
  {
    imgSrc: gear1,
    title: "ABS-GF",
    subtitle: "FDM",
    description:
      "ABS GF rinforzato con fibre di vetro per offrire rigidità superiore e stabilità dimensionale impeccabile. Pensato per chi cerca prestazioni tecniche avanzate, ideale per realizzare componenti che devono durare nel tempo e mantenere precisione anche sotto sollecitazione.",
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
];

const Materials = () => {
  return (
    <section id="materials" className="h-auto w-full xl:pb-25 pb-10">
      <Container>
        {/* Header Block — Translated Title, 'See all' Link Completely Removed */}
        <div className="flex flex-row justify-between">
          <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-5">
            Materiali
          </h2>
        </div>

        {/* 3-Card Material Grid Configuration */}
        <ul className="grid justify-between lg:gap-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {materials.map((material, idx) => {
            return (
              <li
                key={idx}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: "blur(4.5px)",
                }}
                className="xl:p-6 p-3 w-full rounded-xl flex flex-col h-full"
              >
                <div className="flex flex-col gap-y-3 h-full">
                  {/* Card Main Info Body */}
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-black font-normal leading-[134%] text-base">
                          {material.title}
                        </h5>
                        <p className="text-[15px] text-black font-light">
                          {material.subtitle}
                        </p>
                      </div>

                      <img
                        className="w-18 h-18 object-cover"
                        src={material.imgSrc}
                        alt={material.title}
                      />
                    </div>

                    <span className="text-[15px] text-black/60 font-light leading-[150%] max-w-[389px] mt-5">
                      {material.description}
                    </span>
                  </div>

                </div>
              </li>
            );
          })}
        </ul>

        <div className="flex justify-center mt-10">
          <Link
            to="/allmaterials"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.16)",
              background: "rgba(0, 0, 0, 0.09)",
              backdropFilter: "blur(5.09px)",
            }}
            className="xl:px-8 px-5 py-3 rounded-xl text-base font-medium text-black hover:bg-black hover:text-gray-400 transition-all duration-300 no-underline"
          >
            Vedi tutti
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Materials;