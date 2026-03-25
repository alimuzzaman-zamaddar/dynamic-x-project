import React from "react";

const SlsComparisonTable = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="mb-8">
          <h2 className="section-title mb-3">
            SLS vs. Altre Tecnologie di Stampa 3D
          </h2>

          <p className="section-description text-sm!">
            La SLS si distingue nettamente da FDM e SLA per la combinazione unica di libertà geometrica
            e proprietà meccaniche. Ecco un confronto rapido per orientare la scelta tecnologica.
          </p>
        </div>

        {/* Table Wrapper (scroll only below xl) */}
        <div className="overflow-x-auto xl:overflow-visible">

          <div className="min-w-[900px] xl:min-w-full border border-[#E5E7EB] rounded-xl overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-4 border-b border-[#E5E7EB] text-sm font-semibold text-black">
              <div className="p-4">Caratteristica</div>
              <div className="p-4 border-l border-[#E5E7EB]">SLS</div>
              <div className="p-4 border-l border-[#E5E7EB]">FDM</div>
              <div className="p-4 border-l border-[#E5E7EB]">SLA/Resina</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-4 border-b border-[#E5E7EB] text-sm text-black font-semibold bg-[#F9FAFB]">
              <div className="p-4 text-sm text-black font-semibold ">
                Strutture di supporto
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Non necessarie
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Necessarie
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Necessarie
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 border-b border-[#E5E7EB] text-sm">
              <div className="p-4 text-sm text-black font-semibold">
                Resistenza meccanica
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Alta (quasi isotropa)
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Media (anisotropa)
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Media-Bassa
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 border-b border-[#E5E7EB] text-sm bg-[#F9FAFB]">
              <div className="p-4 text-sm text-black font-semibold">
                Geometrie complesse
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Eccellente
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Limitata
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Buona
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-4 border-b border-[#E5E7EB] text-sm">
              <div className="p-4 text-sm text-black font-semibold">
                Materiali tecnici
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                PA12, PA11, TPU, Alumide
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                PLA, PETG, ABS
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Resine fotopolimeriche
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-4 text-sm bg-[#F9FAFB]">
              <div className="p-4 text-sm text-black font-semibold">
                Ideale per
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Produzione funzionale
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Prototipi rapidi low-cost
              </div>
              <div className="p-4 border-l border-[#E5E7EB] text-gray-600">
                Alta risoluzione estetica
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SlsComparisonTable;