import React from "react";
import pimg1 from "../../../assets/img/stampa/Container (1).png"
import pimg2 from "../../../assets/img/stampa/Container (2).png"
import pimg3 from "../../../assets/img/stampa/Container (3).png"
import pimg4 from "../../../assets/img/stampa/Container (4).png"

const ProcessSection = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10">
          <p className=" tracking-[0.2em] font-semibold uppercase text-black mb-2">
            COME FUNZIONA
          </p>

          <h2 className="section-title mb-4">
            Dal File al Componente in 4 Passaggi
          </h2>

          <p className="section-description">
            Il nostro processo è progettato per essere semplice, trasparente e veloce. 
            Carica il tuo file CAD, scegli materiale e finitura, conferma l'ordine e ricevi il componente direttamente al tuo indirizzo — senza complicazioni, senza sorprese.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Step 1 */}
          <div>
            <div className="">
             <img src={pimg1} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              Carica il File
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              Supporto per STL, STEP, SLDPRT e altri formati CAD standard. Upload rapido e sicuro.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="">
             <img src={pimg2} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              Seleziona Materiale
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              Scegli tra resine rigide, trasparenti, durevoli, ignifughe ed ESD in base alle tue esigenze.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="">
             <img src={pimg3} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              Conferma e Ordina
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              Preventivo chiaro e dettagliato, pagamento sicuro e conferma immediata della produzione.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <div className="">
             <img src={pimg4} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              Ricevi il Componente
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              Spedizione rapida e completamente tracciabile direttamente al tuo indirizzo.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessSection;