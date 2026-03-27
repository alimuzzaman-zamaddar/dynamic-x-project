import React from "react";
import Container from "../../../shared/Container";

const Nostro = () => {
  return (
    <section className="lg:pb-18 pb-8">
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          Il Nostro Approccio
        </h2>

        <p className="text-xs font-normal text-[#1E2939] pt-4 max-w-4xl">
          Ogni progetto DynamicsX segue un percorso strutturato e collaudato,
          pensato per garantire il massimo risultato in tempi ottimali. Il
          nostro workflow in 3 fasi è progettato per eliminare le incertezze e
          ridurre drasticamente i cicli di revisione. Dall'avvio del progetto
          alla consegna finale, il tempo medio è di 5-10 giorni lavorativi, a
          seconda della complessità del componente.
        </p>

        <div className="flex flex-col gap-3 my-10">
          <div className="bg-[#1A1F2E] py-4 px-6 w-[75%]">
            <h2 className="text-[14px] font-semibold text-white">
              Ascolto e Analisi
            </h2>
          </div>

          <div className="bg-[#2D3560] py-4 px-6 w-full">
            <h2 className="text-[14px] font-semibold text-white">
              Prototipazione Rapida
            </h2>
          </div>

          <div className="bg-[#3D4878] py-4 px-6 w-[90%]">
            <h2 className="text-[14px] font-semibold text-white">
              Produzione e Scaling
            </h2>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="flex flex-col gap-16">
            <div className="relative flex items-start justify-between">
              <div className="w-[45%] text-right">
                <h3 className="text-sm font-semibold text-[#0A0A0A]">
                  Fase 1 — Ascolto e Analisi
                </h3>
                <p className="text-xs text-[#1E2939] mt-2">
                  Il cliente invia i file tecnici e le specifiche base. Il team
                  DynamicsX conduce un'analisi di fattibilità e suggerisce
                  eventuali modifiche per migliorare efficienza e stampabilità.
                  Include revisione DFM (Design for Manufacturability).
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

              {/* Empty Right */}
              <div className="w-[45%]"></div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex items-start justify-between">
              {/* Empty Left */}
              <div className="w-[45%]"></div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

              {/* Right */}
              <div className="w-[45%]">
                <h3 className="text-sm font-semibold text-[#0A0A0A]">
                  Fase 2 — Prototipazione Rapida
                </h3>
                <p className="text-xs text-[#1E2939] mt-2">
                  Primo prototipo fisico consegnato entro 48–72 ore. Il cliente
                  valida forma, accoppiamenti e funzionalità. Sono inclusi fino
                  a 2 cicli di revisione, con aggiornamenti CAD gestiti
                  direttamente dal nostro team tecnico.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex items-start justify-between">
              {/* Left */}
              <div className="w-[45%] text-right">
                <h3 className="text-sm font-semibold text-[#0A0A0A]">
                  Fase 3 — Produzione e Scaling
                </h3>
                <p className="text-xs text-[#1E2939] mt-2">
                  Avvio del lotto di produzione finale con parametri validati.
                  Controllo qualità, ispezioni dimensionali, verifica delle
                  finiture superficiali e test funzionali. Spedizione tracciata
                  e ottimizzata in base alle esigenze del cliente.
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black rounded-full"></div>

              {/* Empty Right */}
              <div className="w-[45%]"></div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className='text-xs font-normal text-[#1E2939] pt-10'>Questo processo è stato affinato in oltre 100 progetti su 4 diversi settori industriali. DynamicsX mantiene una libreria aggiornata di profili di stampa validati per i clienti abituali, accelerando notevolmente i tempi per gli ordini futuri.</p>
      </Container>
    </section>
  );
};

export default Nostro;