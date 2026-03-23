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

const categories = [
  {
    icon: Drone,
    title: "DRONI & COMPONENTI",
    subtitle: "Stampa componenti leggeri e resistenti per droni ad alte prestazioni.",
  },
  {
    icon: Automotive,
    title: "AUTOMOTIVE D'EPOCA E PARTI RARE",
    subtitle: "Ricrea componenti introvabili per restauri di precisione.",
  },
  {
    icon: Yatch,
    title: "YACHT & COMPONENTI",
    subtitle: "Parti tecniche e accessori custom per il settore nautico.",
  },
  {
    icon: Medicale,
    title: "MEDICALE, LAB & BIOTECH",
    subtitle: "Stampa elementi di precisione per ricerca, laboratorio e medicale.",
  },
  {
    icon: Dime,
    title: "DIME & COMPONENTI INDUSTRIALI",
    subtitle: "Attrezzature tecniche e componenti per produzione industriale.",
  },
  {
    icon: Architectaa,
    title: "ARCHITETTURA",
    subtitle: "Modelli architettonici dettagliati per studi e presentazioni.",
  },
  {
    icon: Support,
    title: "SUPPORTI VETERINARI",
    subtitle: "Produzione additiva ad alta precisione per componenti funzionali e industriali.",
  },
  {
    icon: Proto,
    title: "GIOIELLERIA",
    subtitle: "Prototipi e modelli di precisione per design e fusione.",
  },
  {
    icon: Fashions,
    title: "FASHION",
    subtitle: "Accessori e componenti innovativi per moda e design.",
  },
  {
    icon: Prodo,
    title: "PROTOTIPI & PRODOTTI CUSTOM",
    subtitle: "Dall'idea al prodotto: prototipi e soluzioni su misura.",
  },
  {
    icon: Alimantare,
    title: "ALIMENTARE",
    subtitle: "Stampi e strumenti personalizzati per il settore food.",
  },
];

const COLS = 3;

const CategoryCard = ({ category }) => {
  const navigate = useNavigate();
  const Icon = category.icon;

  return (
    <div
      onClick={() => navigate(`/service/${category.title}`)}
      className="group cursor-pointer border border-black rounded-xl flex flex-col justify-between w-full h-full transition-all duration-300 hover:bg-black"
    >
      <div className="py-7.5 px-5 flex flex-col items-center gap-y-3 flex-grow">
        {/* ICON */}
        <div className="text-black group-hover:text-white transition-all duration-300 fill-black group-hover:fill-white">
          <Icon />
        </div>

        {/* TITLE */}
        <span className="text-lg text-center font-semibold text-black group-hover:text-white transition-all duration-300">
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
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="h-auto w-full py-10 xl:py-25">
      <div className=""></div>
      <div className="container mx-auto px-50">
        <h2 className="text-4xl font-semibold text-black pb-3">
          Categorie
        </h2>

        <div className="flex flex-col gap-y-7.5 w-full">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-lg font-normal text-black">
              La stampa 3D resa semplice. Soluzioni per ogni progetto, idea e applicazione.
            </h2>
          </div>

          <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-12 gap-7.5">
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
      </div>
    </section>
  );
};

export default CategorySection;