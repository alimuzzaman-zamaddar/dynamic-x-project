import React from 'react';
import { IoIosWater } from "react-icons/io";
import { FileIcon } from '../../SvgContainer/SvgContainer1';
import { HiOutlineSun, HiOutlineWrench } from "react-icons/hi2";

const CertifiedMaterialsSection = () => {
  const materials = [
    {
      id: 1,
      icon: <HiOutlineSun className="size-8" />, 
      title: "ASA Marino",
      description: "Acrilonitrile Stirene Acrilato con stabilizzatori UV avanzati. Eccellente resistenza agli agenti atmosferici, colori stabili nel tempo, ideale per componenti in vista su coperta."
    },
    {
      id: 2,
      icon: <HiOutlineWrench className="size-8" />, 
      title: "PETG Tecnico",
      description: "Polietilene tereftalato glicole ad alta purezza. Ottima resistenza chimica, trasparenza selettiva, facilità di lavorazione post-stampa per finiture premium."
    },
    {
      id: 3,
      icon: <FileIcon />,
      title: "Nylon",
      description: "Poliammide ad alta tenacità per parti soggette a carichi meccanici ripetuti. Elevata flessibilità, resistenza all'abrasione e compatibilità con inserti metallici."
    },
    {
      id: 4,
      icon: <IoIosWater className="size-8" />, 
      title: "Resine High-Temp",
      description: "Resine fotoinduribili per applicazioni ad alta temperatura. Ideali per alloggiamenti vicini a motori, impianti di scarico o componenti in prossimità di fonti di calore."
    }
  ];

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width */}
      <div className="container-main">
        {/* Header Block using section-header */}
        <div className="section-header mb-12">
          {/* section-title for uniform font and size */}
          <h2 className="section-title t">
            Materiali Certificati per l'Ambiente Marino
          </h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description max-w-[1000px] text-black/80 mt-4">
            La selezione dei materiali è la fase più critica nella progettazione di componenti nautici. Utilizziamo esclusivamente polimeri tecnici con comprovata resistenza alla fotodegradazione UV, agli agenti chimici marini e alle variazioni termiche tipiche del bordo. Ogni materiale è selezionato in base all'applicazione specifica, garantendo il migliore equilibrio tra peso, resistenza e finitura estetica.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {materials.map((material) => (
            <div 
              key={material.id} 
              className="border border-border-gray flex flex-col group overflow-hidden"
            >
              {/* Icon Area (Grey Background) */}
              <div 
                className="w-full h-[120px] flex items-center justify-center p-8 bg-[#F3F4F6]"
              >
                <div className="text-primary-black opacity-90 transition-opacity group-hover:opacity-100">
                  {material.icon}
                </div>
              </div>

              {/* Text Area (White Background) */}
              <div className="w-full flex flex-col gap-2 p-4 xl:p-6 bg-white">
                {/* item-title for consistent text style and font size */}
                <h3 className="font-bold leading-tight">
                  {material.title}
                </h3>
                {/* item-description for black 12px text and leading-24px */}
                <p className="item-description leading-4.5 text-black/90">
                  {material.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedMaterialsSection;