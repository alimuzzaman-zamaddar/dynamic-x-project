import React from "react";

const SlsAdvantagesSectionDrone = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">Droni & UAV Componenti</h2>

          <p className="section-description leading-4.5!">
            Progettiamo e stampiamo componenti ad alte prestazioni per droni
            professionali. Parti leggere, resistenti e aerodinamicamente
            ottimizzate per droni racing, industriali e UAV di ultima
            generazione — dove ogni grammo conta e ogni millimetro fa la
            differenza.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">Peso Ottimizzato</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Design generativo e materiali tecnici per ridurre la massa senza
              compromettere la struttura
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">Alta Rigidità</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Geometrie avanzate che massimizzano la rigidità torsionale e
              flessionale del componente
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">Gestione Termica</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Canali integrati e materiali ad alta conducibilità per dissipare
              il calore nei punti critici
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlsAdvantagesSectionDrone;
