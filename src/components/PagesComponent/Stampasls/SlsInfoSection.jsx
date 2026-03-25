import React from "react";

const SlsInfoSection = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Top Hero */}
        <div className="mb-16">

          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Sinterizzazione Laser Selettiva (SLS)
          </h1>

          <p className="text-gray-600 text-xs md:text-base  mb-6">
            Tecnologia di stampa 3D avanzata per componenti funzionali, geometrie complesse e produzione industriale senza compromessi.
          </p>

          <button className="px-6 py-3 rounded-full bg-[#1E1E2F] text-white text-xs font-medium hover:opacity-90 transition">
            Richiedi un Preventivo
          </button>

        </div>

        {/* Content */}
        <div className="mb-14">

          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Cos'è la Tecnologia SLS?
          </h2>

          <div className="flex flex-col gap-4 text-xs text-gray-600 leading-[160%] max-w-[900px]">

            <p>
              La <strong>Sinterizzazione Laser Selettiva (SLS)</strong> è una tecnologia di stampa 3D basata sul processo <em>Powder Bed Fusion</em>. 
              Un laser ad alta potenza scansiona selettivamente strati successivi di polvere polimerica, fondendo le particelle tra loro e costruendo il componente tridimensionale strato dopo strato.
            </p>

            <p>
              A differenza di altre tecnologie additive, la polvere non sinterizzata circostante funge naturalmente da supporto, eliminando la necessità di strutture di sostegno e aprendo la strada a geometrie di grande complessità.
            </p>

            <p>
              Il risultato sono componenti solidi, altamente resistenti e dimensionalmente precisi — ideali per 
              <strong> prototipazione avanzata e produzione in volumi medio-bassi</strong> con caratteristiche meccaniche paragonabili allo stampaggio a iniezione.
            </p>

          </div>

        </div>

        {/* Summary */}
        <div>

          {/* Title */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-[3px] h-6 bg-black"></div>
            <p className=" font-semibold text-black">
              In sintesi
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Step 1 */}
            <div>
              <div className="h-[2px] bg-black mb-4"></div>
              <p className="text-xs text-gray-400 mb-2">01</p>

              <h3 className="font-semibold text-black mb-2.5">
                Laser ad alta potenza
              </h3>

              <p className="text-xs text-gray-600 leading-[160%]">
                Fonde selettivamente polveri polimeriche strato per strato
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <div className="h-[2px] bg-black mb-4"></div>
              <p className="text-xs text-gray-400 mb-2">02</p>

              <h3 className="font-semibold text-black mb-2.5">
                Polvere come supporto
              </h3>

              <p className="text-xs text-gray-600 leading-[160%]">
                Nessuna struttura di sostegno necessaria
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <div className="h-[2px] bg-black mb-4"></div>
              <p className="text-xs text-gray-400 mb-2">03</p>

              <h3 className="font-semibold text-black mb-2.5">
                Componenti funzionali
              </h3>

              <p className="text-xs text-gray-600 leading-[160%]">
                Proprietà meccaniche elevate e quasi isotrope
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SlsInfoSection;