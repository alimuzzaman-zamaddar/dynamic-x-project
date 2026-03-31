import React from "react";
import {
  Alimantare,
  Architectaa,
  Automotive,
  Dime,
  Drone,
  Fashions,
  Medicale,
  Prodo,
  Proto,
  Support,
  Yatch,
} from "../../SvgContainer/SvgContainer";
import { useNavigate } from "react-router";
import Container from "../../../shared/Container";

const categories = [
  {
    icon: Drone,
    title: "DRONI & COMPONENTI UAV",
    link: "/drone",
    subtitle: "Stampa componenti leggeri e resistenti per droni ad alte prestazioni.",
  },
  {
    icon: Automotive,
    title: "AUTOMOTIVE D’EPOCA E PARTI RARE",
    link: "/vintage",
    subtitle: "Ricrea componenti introvabili per restauri di precisione.",
  },
  {
    icon: Yatch,
    title: "YACHT E COMPONENTI NAUTICHE",
    link: "/yacht",
    subtitle: "Parti tecniche e accessori custom per il settore nautico.",
  },
  {
    icon: Medicale,
    title: "MEDICALE, LAB & BIOTECH",
    link: "/medicale-lab",
    subtitle: "Stampa elementi di precisione per ricerca, laboratorio e medicale.",
  },
  {
    icon: Dime,
    title: "DIME E COMPONENTI INDUSTRIALI",
    link: "/industrial",
    subtitle: "Attrezzature tecniche e componenti per produzione industriale.",
  },
  {
    icon: Architectaa,
    title: "ARCHITETTURA",
    link: "/architettura",
    subtitle: "Modelli architettonici dettagliati per studi e presentazioni.",
  },
  {
    icon: Support,
    title: "SUPPORTI VETERINARI",
    link: "/vetemarysupports",
    subtitle: "Dispositivi personalizzati per cura e riabilitazione animale.",
  },
  {
    icon: Proto,
    title: "GIOIELLERIA",
    link: "/jwellery",
    subtitle: "Prototipi, stampi e modelli di precisione per design e fusione.",
  },
  {
    icon: Fashions,
    title: "FASHION & FOOTWEAR",
    link: "/footwear",
    subtitle: "Accessori e componenti innovativi per moda e design.",
  },
  {
    icon: Prodo,
    title: "PROTOTIPI E PRODOTTI CUSTOM",
    link: "/prototyping",
    subtitle: "Dall’idea al prodotto, prototipi e soluzioni su misura.",
  },
  {
    icon: Alimantare,
    title: "ALIMENTARE",
    link: "/",
    subtitle: "Stampi e strumenti personalizzati per il settore food.",
  },
];

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const Icon = category.icon;

  return (
    <section
      id="categorie"
      onClick={() => navigate(`/${category.link}`)}
      className="group cursor-pointer border-2 border-[#979797] rounded-xl flex flex-col justify-between w-full h-full transition-all duration-300 hover:bg-black"
    >
      <div className="lg:p-6  p-3 flex flex-col items-center gap-y-3 flex-grow">
        {/* ICON */}
        <div className="text-black group-hover:text-white transition-all duration-300 fill-black group-hover:fill-white">
          <Icon />
        </div>

        {/* TITLE */}
        <span className="lg:text-lg text-base text-center font-semibold text-black group-hover:text-white transition-all duration-300">
          {category.title}
        </span>

        {/* DESCRIPTION */}
        <p
          className="text-center text-black/50 group-hover:text-white/80 transition-all duration-300"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
          }}
        >
          {category.subtitle}
        </p>
      </div>
    </section>
  );
};

const CategorySection = () => {
  return (
    <section className="h-auto w-full py-10 xl:py-25">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-3">
          Categorie
        </h2>

        <div className="flex flex-col gap-y-7.5 w-full">
          <div className="flex flex-col gap-y-3">
            <h2 className="lg:text-lg text-base font-normal text-black">
              La stampa 3D resa semplice. Soluzioni per ogni progetto, idea e applicazione.
            </h2>
          </div>

          <ul
            className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-12 lg:gap-7.5 gap-3">
            {categories.map((category, idx) => {
              const isLastRow = idx >= 8;

              return (
                <li
                  key={idx}
                  className={`
          flex
          ${isLastRow ? "xl:col-span-4" : "xl:col-span-3"}
        `}
                >
                  <CategoryCard category={category} />
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div id="technologies" className="h-15"></div>
    </section>
  );
};

export default CategorySection;