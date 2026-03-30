import React from "react";
import { Link } from "react-router";
import Container from "../../../shared/Container";

const Richiedi = () => {
  return (
    <section>
      <Container>
        <h4 className="bg-[#E8E8E8] px-2.5 py-1 text-center text-[15px] font-normal text-black w-fit">
          CONTATTI & PREVENTIVI
        </h4>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A] mt-4">
          Richiedi un Preventito per il Tuo Progetto
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-6">
          Hai bisogno di componenti su misura per i tuoi laboratori o prototipi
          biotech? Il nostro team di esperti è pronto a supportarti nella
          realizzazione di geometrie complesse con precisione micrometrica.
          Inviaci i tuoi requisiti tecnici: offriamo consulenza dedicata e
          risposte rapide per accelerare il tuo ciclo di sviluppo.
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10 border border-[#111]">
          <div className="border-l-3 border-[#111] p-6 w-full">
            <h4 className="text-[#0A0A0A] text-base font-bold py-3">
              Invia File CAD
            </h4>
            <h5 className="text-[15px] font-normal text-[#1E2939]">
              Carica il tuo progetto 3D (.STL, .STEP) per una valutazione
              immediata della producibilità.
            </h5>
            <Link to={"/upload-design"}>
              <button className="py-4 px-11 cursor-pointer px-8 bg-transparent text-primary-black font-bold border border-[#1E2939] rounded-3xl text-sm tracking-wide transition hover:bg-[#E5E7EB] whitespace-nowrap mt-10">
                Upload your design
              </button>
            </Link>
          </div>
          <div className="border-l-3 border-[#111] p-6 w-full">
            <h4 className="text-[#0A0A0A] text-base font-bold py-3">
              Contattaci per un support Tecnico
            </h4>
            <h5 className="text-[15px] font-normal  text-[#1E2939]">
              Parla con il nostro team per un assistenza personalizzata
            </h5>
            <Link to={"/upload-design"}>
              <button className="py-4 px-11 cursor-pointer px-8 bg-transparent text-primary-black font-bold border border-[#1E2939] rounded-3xl text-sm tracking-wide transition hover:bg-[#E5E7EB] whitespace-nowrap mt-10">
                Upload your design
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Richiedi;
