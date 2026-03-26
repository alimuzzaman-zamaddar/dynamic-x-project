import React from "react";
import Container from "../../../shared/Container";
import Ochiali from "../../../assets/img/stampa/Image (Plastici e Masterplan).png";
import Ochiali1 from "../../../assets/img/stampa/Image (Interni Dettagliati).png";
import Ochiali2 from "../../../assets/img/stampa/Image (Mockup Immobiliari).png";

const CosaStampiamo = () => {
  return (
    <section className="my-5 xl:my-10">
      <Container>
        <h2 className="section-title ">Cosa Stampiamo</h2>
        <p className="text-xs font-normal text-[#1E2939] pt-4">
          Offriamo una gamma completa di prodotti per rispondere alle diverse
          esigenze di architetti, studi di progettazione e sviluppatori
          immobiliari. Dalla scala urbana al dettaglio d'interni, ogni tipologia
          di modello è realizzata con la massima cura esecutiva.
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="">
            <img src={Ochiali} alt="Ochiali" className="h-30 xl:h-44 rounded-xl w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Plastici e Masterplan
            </h4>
            <h5 className="text-xs font-normal text-center text-[#1E2939]">
              Modelli territoriali e urbani in scala, ideali per concorsi,
              presentazioni istituzionali e piani di sviluppo complessi.
              Rappresentiamo volumi, infrastrutture e spazi pubblici con
              precisione.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali1} alt="Ochiali" className="h-30 xl:h-44 rounded-xl w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Interni Dettagliati
            </h4>
            <h5 className="text-xs font-normal text-center text-[#1E2939] ">
              Sezioni e modelli in esploso che rivelano la qualità degli spazi
              interni: distribuzione degli ambienti, finiture, arredi e rapporti
              proporzionali tra gli elementi architettonici.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali2} alt="Ochiali" className="h-30 xl:h-44 rounded-xl w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Mockup Immobiliari
            </h4>
            <h5 className="text-xs font-normal text-center text-[#1E2939]">
              Strumenti di vendita ad alto impatto visivo per cantieri e
              showroom. I nostri mockup immobiliari comunicano il valore del
              progetto prima ancora che la costruzione inizi.
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CosaStampiamo;
