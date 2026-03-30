import React from "react";
import Container from "../../../shared/Container";
import {
  Clock,
  Materiali,
  Supporto,
  Tempi,
  Tolle,
} from "../../SvgContainer/SvgContainer";

const Laboratorio = () => {
  return (
    <section className="lg:py-18 py-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          Perché Sceglierci per il Tuo Laboratorio
        </h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Lavoriamo con ricercatori, responsabili di laboratorio e team di
          sviluppo biotech che non possono permettersi compromessi sulla
          qualità. La nostra competenza tecnica sui materiali e sulle tecnologie
          di stampa ci permette di offrire consulenza proattiva fin dalla fase
          di progettazione, identificando criticità prima della produzione.
        </p>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 mt-10">
          <div className="">
            <Tolle />
            <h4 className="text-[#0A0A0A] text-base font-semibold py-2">
              Tolleranze Micrometriche
            </h4>
            <p className="text-[15px] font-normal text-black">
              Precisione dimensionale verificata su ogni componente, con
              deviazioni controllate per garantire la riproducibilità tra batch
              successivi.
            </p>
          </div>
          <div className="">
            <Materiali />
            <h4 className="text-[#0A0A0A] text-base font-semibold py-2">
              Materiali Certificati
            </h4>
            <p className="text-[15px] font-normal text-black">
              Selezione rigorosa di resine e polimeri con documentazione di
              biocompatibilità e resistenza chimica adeguata all'applicazione.
            </p>
          </div>
          <div className="">
            <Clock />
            <h4 className="text-[#0A0A0A] text-base font-semibold py-2">
              Tempi Rapidi
            </h4>
            <p className="text-[15px] font-normal text-black">
              Dalla ricezione del file alla spedizione in pochi giorni
              lavorativi, con priorità per prototipi urgenti e iterazioni
              veloci.
            </p>
          </div>
          <div className="">
            <Supporto />
            <h4 className="text-[#0A0A0A] text-base font-semibold py-2">
              Supporto Tecnico Dedicato
            </h4>
            <p className="text-[15px] font-normal text-black">
              Consulenza specializzata su design for additive manufacturing,
              scelta del materiale e ottimizzazione geometrica per applicazioni
              biotech.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Laboratorio;
