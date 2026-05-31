import React from "react";
import {
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
import { Link } from "react-router"; // Added router Link for proper hover behavior and navigation
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
    title: "YACHT E COMPONENTI NAUTICI", // Fixed gender agreement (nautiche -> nautici)
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
    link: "/veterinary",
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
];

const CategoryCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <Link
      to={category.link}
      className="group block border-2 border-[#979797] rounded-xl w-full h-full transition-all duration-300 hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 no-underline"
    >
      <div className="lg:p-6 p-4 flex flex-col items-center gap-y-3 h-full justify-between">
        <div className="flex flex-col items-center gap-y-3 flex-grow w-full">
          {/* ICON */}
          <div className="text-black group-hover:text-white transition-all duration-300 fill-black group-hover:fill-white">
            <Icon />
          </div>

          {/* TITLE */}
          <span className="lg:text-lg text-base text-center font-semibold text-black group-hover:text-white transition-all duration-300 block">
            {category.title}
          </span>

          {/* DESCRIPTION — Audited to be permanently visible without line-clamps or display toggles */}
          <p
            className="text-center text-black/70 group-hover:text-white/90 transition-all duration-300 block visible h-auto overflow-visible"
            style={{
              fontFamily: "Inter",
              fontSize: "14px", // Slighly reduced for better text fitting in dense 5-column desktop grids
              fontWeight: 500,
              lineHeight: "22px",
            }}
          >
            {category.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

const CategorySection = () => {
  return (
    <section id="categorie" className="h-auto w-full py-10 xl:py-25">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-black pb-3">
          Categorie
        </h2>

        <div className="flex flex-col gap-y-7.5 w-full">
          <div className="flex flex-col gap-y-3">
            <h3 className="lg:text-lg text-base font-normal text-black">
              La stampa 3D resa semplice. Soluzioni per ogni progetto, idea e applicazione.
            </h3>
          </div>

          {/* Grid-template-columns configuration:
            - Standard responsive layouts for mobile/tablet screens
            - xl:grid-cols-5 sets up exactly repeat(5, 1fr) for a perfect 5x2 row balance
          */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 lg:gap-7.5 gap-4 w-full">
            {categories.map((category, idx) => (
              <li key={idx} className="flex w-full min-h-full">
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div id="technologies" className="h-15"></div>
    </section>
  );
};

export default CategorySection;