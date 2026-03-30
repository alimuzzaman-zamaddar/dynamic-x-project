import React from "react";
import Container from "../../../shared/Container";

const Creazione = () => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          Una Produzione per Ogni Creazione
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Dalla prima idea al master definitivo, accompagniamo ogni fase del
          vostro processo creativo con competenza tecnica e sensibilità
          estetica.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          <div className="border border-[#D1D5DC] p-6">
            <h2 className="text-[14px] font-bold text-[#0A0A0A]">Anelli</h2>
            <p className="text-[15px] font-normal text-[#1E2939] pt-4">
              Fedine, solitari, cocktail ring: ogni forma, ogni spessore, ogni
              dettaglio riprodotto con fedeltà assoluta al file originale.
            </p>
          </div>
          <div className="border border-[#D1D5DC] p-6">
            <h2 className="text-[14px] font-bold text-[#0A0A0A]">Bracciali</h2>
            <p className="text-[15px] font-normal text-[#1E2939] pt-4">
              Bracciali rigidi, catene articolate e manchette scultoree:
              strutture complesse rese possibili dalla libertà formale della
              stampa 3D.
            </p>
          </div>
          <div className="border border-[#D1D5DC] p-6">
            <h2 className="text-[14px] font-bold text-[#0A0A0A]">Pendenti</h2>
            <p className="text-[15px] font-normal text-[#1E2939] pt-4">
              Silhouette sottili, volumi tridimensionali, texture organiche o
              geometriche: ogni pendente nasce come scultura in miniatura.
            </p>
          </div>
          <div className="border border-[#D1D5DC] p-6">
            <h2 className="text-[14px] font-bold text-[#0A0A0A]">
              Master per Fusione
            </h2>
            <p className="text-[15px] font-normal text-[#1E2939] pt-4">
              Prototipi master pronti per la moltiplicazione in gomma
              siliconica, ottimizzati per garantire la massima resa in fase di
              colata.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Creazione;
