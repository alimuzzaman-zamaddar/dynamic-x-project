import React from 'react';
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { CheckIcon } from '../../SvgContainer/SvgContainer1';

/**
 * ProjectStartSection Component
 * Renders the "Il Tuo Progetto 3D Inizia Qui" section from image_34.png.
 * Features a highlighted heading, a 3-column stats grid, a specialty info box 
 * with a checkbox icon, and a primary action button.
 */
const ProjectStartSection = () => {
  const steps = [
    {
      value: "3",
      label: "Semplici Passi",
      description: "Dal file 2D all'oggetto fisico"
    },
    {
      value: "100%",
      label: "Automatico",
      description: "Nessuna competenza tecnica richiesta"
    },
    {
      value: "1",
      label: "Click per Iniziare",
      description: "Processo intuitivo e immediato"
    }
  ];

  return (
    // section class for consistent vertical padding
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard 1040px max-width */}
      <div className="container-main">
        
        {/* Header Block with highlighted text */}
        <div className="section-header mb-6 md:mb-10">
          <h2 className="section-title">
            Il Tuo Progetto 3D Inizia Qui. <span className="text-[#8e94f2]">Molto Presto.</span>
          </h2>
          <p className="section-description max-w-[1200px] text-primary-gray/80 mt-4">
            La rivoluzione della stampa 3D è a portata di click. Preparati a creare come mai prima d'ora.
          </p>
        </div>

        {/* Stats Grid: 3 columns matching image_34.png */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-6 md:mt-10 text-center">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="section-title">
                {step.value}
              </div>
              <div className="font-semibold">
                {step.label}
              </div>
              <p className="text-primary-gray text-[13px] leading-[22px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Box: Light gray rounded box with specific checkbox icon */}
        <div className="mt-10 p-8 bg-[#e5e4f3]  flex items-start gap-5">
          <CheckIcon/>
          <p className="text-[12px] leading-[18px] text-primary-black/80 w-[80%]">
            🚀 <b>Lavori in corso:</b> Il servizio è in fase di sviluppo avanzato. Iscriviti ora per non perdere il lancio ufficiale e accedere alle promozioni  riservate ai primi utenti.
          </p>
        </div>

        {/* Action Button: 60px height, Pill shape, Opposite hover */}
        <div className="mt-10">
          <button className="h-[60px] w-full md:w-auto px-10 bg-[#1a1411] text-white border border-[#1a1411] rounded-full font-bold uppercase text-sm tracking-wide transition-all duration-300 hover:bg-transparent hover:text-primary-black">
            Iscriviti Ora
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProjectStartSection;