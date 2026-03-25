import React from "react";

const SlsAdvantagesSection = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">Vantaggi della Tecnologia SLS</h2>

          <p className="section-description">
            Produzione avanzata senza i vincoli delle tecnologie tradizionali.
            La SLS offre libertà geometrica, resistenza meccanica e ripetibilità
            produttiva in un unico processo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">
              Nessuna Struttura di Supporto
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              La polvere non sinterizzata sostiene naturalmente il pezzo durante
              la stampa, eliminando post-processi di rimozione e consentendo
              geometrie altrimenti impossibili.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">
              Elevata Resistenza Meccanica
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Le parti SLS presentano proprietà quasi isotrope, con resistenze
              simili a componenti prodotti per stampaggio a iniezione, adatte
              all'uso funzionale diretto.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">
              Geometrie Complesse
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Canali interni, cavità nascoste, reticoli e forme avanzate sono
              realizzabili senza limiti produttivi tipici delle tecnologie
              convenzionali.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">
              Ideale per Produzione Reale
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Perfetta per prototipi funzionali ad alte prestazioni e piccole
              serie industriali con ottima ripetibilità tra un ciclo e
              l'altro.o.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlsAdvantagesSection;
