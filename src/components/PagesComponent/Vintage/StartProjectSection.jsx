import React from 'react';
import { HiOutlineCheckCircle } from "react-icons/hi2"; // A filled icon would match better
import { CheckIcon } from '../../SvgContainer/SvgContainer1';

const StartProjectSection = () => {
  return (
    <section className="section bg-white">
      <div className="container-main flex flex-col gap-10">
        {/* Text Area */}
        <div className="flex flex-col gap-4">
          <h2 className="section-title text-black">
            Inizia il Tuo Progetto
          </h2>
          <p className="text-[13px] leading-[22px] text-black/80 max-w-[900px]">
            Hai un pezzo introvabile? Un restauro bloccato per mancanza di un componente? Contattaci con una foto e una breve descrizione del pezzo originale. Il nostro team tecnico valuterà la fattibilità e ti proporrà la soluzione più adatta — materiale, tecnologia e tempi di consegna inclusi.
          </p>
        </div>

        {/* Gray Info Box */}
        <div className="flex items-center gap-4 bg-[#E8E8F0] p-6 w-full">
          <div className="text-black shrink-0">
            {/* The image uses a solid, simple checkmark in a box. HiCheckCircle is a good fit. */}
            <CheckIcon />
          </div>
          <p className="text-[13px] leading-[22px] text-black/80">
            Ogni consulenza iniziale è gratuita e senza impegno. Portiamo la storia della tua automobile nel futuro, un componente alla volta.
          </p>
        </div>

        {/* Button Area */}
        <div className="flex items-center gap-4 flex-wrap">
          {/* Primary Filled Button */}
          <button className="h-[60px] px-8 bg-[#1a1411] text-white rounded-3xl text-sm md:text-base font-medium flex items-center justify-center transition hover:bg-black/90 whitespace-nowrap">
            Richiedi una Consulenza Gratuita
          </button>
          
          {/* Secondary Outlined Button */}
          <button className="h-[60px] px-8 bg-transparent text-black rounded-3xl text-sm md:text-base font-medium flex items-center justify-center border border-black transition hover:bg-black/5 whitespace-nowrap">
            Scopri i Nostri Materiali
          </button>
        </div>
      </div>
    </section>
  );
};

export default StartProjectSection;