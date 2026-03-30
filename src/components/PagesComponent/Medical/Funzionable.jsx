import React from "react";
import Container from "../../../shared/Container";
import {
  Consegna,
  Consenga,
  Pan,
  Printer,
} from "../../SvgContainer/SvgContainer";

const Funzionable = () => {
  return (
    <section>
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          Dal Prototipo al Componente Funzionale
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Il nostro processo produttivo è progettato per supportare i team R&D
          in ogni fase del ciclo di sviluppo: dalla prima iterazione di concept
          al componente funzionale pronto all'integrazione. Grazie alla
          flessibilità della stampa 3D professionale, è possibile passare dal
          file CAD al pezzo fisico in tempi ridotti, con la possibilità di
          modificare geometrie tra un batch e l'altro senza costi di
          attrezzaggio.
        </p>
        <div className="flex md:flex-row flex-col mt-10 border border-[#D1D5DC]">
          <div className="w-full">
            <div className="bg-[#F0EEEC] py-4 flex justify-center items-center border-r-2 border-[#D1D5DC]">
              <Pan />
            </div>
            <div className="py-4 px-6 border-r-2 border-t border-[#D1D5DC]">
              <h4 className="text-[#0A0A0A] text-base font-bold">Design</h4>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#F0EEEC] py-4 flex justify-center items-center border-r-2 border-[#D1D5DC]">
              <Printer />
            </div>
            <div className="py-4 px-6 border-r-2 border-t border-[#D1D5DC]">
              <h4 className="text-[#0A0A0A] text-base font-bold">Stampa</h4>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-[#F0EEEC] py-4 flex justify-center items-center border-r border-[#D1D5DC]">
              <Consenga />
            </div>
            <div className="py-4 px-6 border-r border-t border-[#D1D5DC]">
              <h4 className="text-[#0A0A0A] text-base font-bold">Consegna</h4>
            </div>
          </div>
        </div>
        <p className="text-[15px] font-normal text-[#1E2939] pt-10">
          Ogni ordine include verifica dimensionale post-stampa e supporto
          tecnico dedicato per l'ottimizzazione dei file di progetto, riducendo
          iterazioni e tempi di time-to-prototype.
        </p>
      </Container>
    </section>
  );
};

export default Funzionable;
