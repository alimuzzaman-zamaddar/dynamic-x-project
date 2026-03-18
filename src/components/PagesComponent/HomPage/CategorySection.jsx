import React from "react";
import {
  Alimantare,
  Architectaa,
  Automotive,
  BioEquipment,
  CustomFood,
  Dime,
  Drone,
  Fashion,
  Fashions,
  Fixtures,
  IndustrialTooling,
  Jewellery,
  Medicale,
  Prodo,
  Proto,
  Prototyping,
  Ship,
  Shoes,
  Support,
  Veterinary,
  VintageCamera,
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

// Split categories into rows of COLS, last row may have fewer
const rows = categories.reduce((acc, item, idx) => {
  const rowIdx = Math.floor(idx / COLS);
  if (!acc[rowIdx]) acc[rowIdx] = [];
  acc[rowIdx].push(item);
  return acc;
}, []);

const CategoryCard = ({ category, fullWidthOnTwo }) => {
  const navigate = useNavigate();
  const Icon = category.icon;
  return (
    <li
      onClick={() => navigate(`/service/${category.title}`)}
      className={`cursor-pointer border border-solid border-black rounded-xl flex items-center justify-center ${fullWidthOnTwo ? "w-full" : "w-full"
        }`}
    >
      <div className="py-7.5 px-5 flex flex-col items-center gap-y-3">
        <Icon />
        <span className="text-xl text-center xl:text-2xl font-normal text-black">
          {category.title}
        </span>
        <p
          className="overflow-hidden text-center"
          style={{
            color: "rgba(0, 0, 0, 0.64)",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            textOverflow: "ellipsis",
          }}
        >
          {category.subtitle}
        </p>
      </div>
    </li>
  );
};

const CategorySection = () => {
  return (
    <section className="h-auto w-full py-10 xl:py-25">
      <div className="container flex flex-col gap-y-10 xl:gap-y-25">
        <h2 className="text-2xl md:text-[36px] 3xl:text-[73px] font-normal text-black">
          Categorie
        </h2>

        <div className="flex flex-col gap-y-7.5 w-full">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-2xl md:text-[30px] 3xl:text-[40px] font-normal text-black">
              La stampa 3D resa semplice. Soluzioni per ogni progetto, idea e applicazione.
            </h2>
          </div>

          <ul className="flex flex-col gap-7.5">
            {rows.map((row, rowIdx) => {
              const isTwoCard = row.length === 2;
              return (
                <ul
                  key={rowIdx}
                  className={`grid gap-7.5 ${isTwoCard
                    ? "grid-cols-2"
                    : "lg:grid-cols-2 2xl:grid-cols-3"
                    }`}
                >
                  {row.map((category, idx) => (
                    <CategoryCard key={idx} category={category} />
                  ))}
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;