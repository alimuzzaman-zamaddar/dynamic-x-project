import React from "react";
import Container from "../../../shared/Container";
import Ochiali5 from "../../../assets/img/CosaRealizziamo/ImageWithFallback (4).png";
import Ochiali4 from "../../../assets/img/CosaRealizziamo/ImageWithFallback (5).png";
import Ochiali2 from "../../../assets/img/CosaRealizziamo/ImageWithFallback (6).png";
import Ochiali1 from "../../../assets/img/CosaRealizziamo/ImageWithFallback (7).png";
import Ochiali3 from "../../../assets/img/CosaRealizziamo/ImageWithFallback (8).png";
import Ochiali from "../../../assets/img/CosaRealizziamo/ImageWithFallback (9).png";

const PrototypingCosa = () => {
  return (
    <section className="my-5 xl:my-10">
      <Container>
        <h2 className="section-title ">Cosa Realizziamo</h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Operiamo su una gamma completa di applicazioni, coprendo sia le
          esigenze estetiche che quelle funzionali. Ogni progetto viene
          analizzato per scegliere il materiale e la tecnologia più adatta agli
          obiettivi di test e validazione.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  gap-4 mt-10">
          <div className="">
            <img src={Ochiali} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Gadget Premium
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Oggetti personalizzati ad alto impatto visivo, perfetti per
              presentazioni, eventi e lanci di prodotto.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali3} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Accessori Personalizzati
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939] ">
              Componenti su misura progettati per integrarsi con prodotti
              esistenti o per nuove linee di prodotto.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali1} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Piccole Serie
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Produzione in lotti ridotti per validare il mercato prima di
              investire in stampi industriali costosi.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali2} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Prototipi Funzionali
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Parti stampate con materiali tecnici per simulare le condizioni
              reali di utilizzo e stress meccanico.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali4} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Mockup Estetici
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939] ">
              Modelli ad alta fedeltà per presentazioni a stakeholder, investor
              pitch e sessioni di user testing.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali5} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Parti per Validazione Tecnica
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Componenti per verificare tolleranze, accoppiamenti e funzionalità
              prima della produzione finale.
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrototypingCosa;
