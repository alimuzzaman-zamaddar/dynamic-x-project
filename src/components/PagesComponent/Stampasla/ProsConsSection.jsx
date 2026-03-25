import React from "react";

const ProsConsSection = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 max-w-[900px]">
          <p className="tracking-[0.2em] font-semibold uppercase text-black mb-2">
            PRO E CONTRO
          </p>

          <h2 className="section-title mb-4">
            Vantaggi e Limiti della Stampa SLA
          </h2>

          <p className="section-description">
            La tecnologia SLA offre prestazioni elevate ma richiede una valutazione attenta
            dei requisiti del progetto rispetto alle sue caratteristiche distintive.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Limiti */}
          <div className="flex-1">

            {/* Top Badge */}
            <div className="w-full h-[56px] rounded-full bg-[#E5E7EB] flex items-center justify-center mb-6">
              ⏱️
            </div>

            <h3 className="text-lg font-semibold text-black mb-4">
              Limiti
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              <li>Costo dei materiali più elevato rispetto a FDM</li>
              <li>Parti più fragili rispetto a tecnologie come SLS</li>
              <li>Richiede post-processing (lavaggio e cura UV)</li>
              <li>Volume di stampa più contenuto</li>
              <li>Resine non biocompatibili nella versione standard</li>
            </ul>

          </div>

          {/* Vantaggi */}
          <div className="flex-1">

            {/* Top Badge */}
            <div className="w-full h-[56px] rounded-full bg-[#E5E7EB] flex items-center justify-center mb-6">
              ✔️
            </div>

            <h3 className="text-lg font-semibold text-black mb-4">
              Vantaggi
            </h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              <li>Alta risoluzione e dettaglio superficiale</li>
              <li>Finiture superficiali eccellenti</li>
              <li>Ampia gamma di materiali speciali (ESD, ignifughe, trasparenti...)</li>
              <li>Ideale per geometrie complesse e sottili</li>
              <li>Tempi di produzione rapidi</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProsConsSection;