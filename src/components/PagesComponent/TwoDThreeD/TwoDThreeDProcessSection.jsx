import React from "react";
import pimg1 from "../../../assets/img/CosaRealizziamo/Container (7).png";
import pimg2 from "../../../assets/img/CosaRealizziamo/Container (6).png";
import pimg3 from "../../../assets/img/CosaRealizziamo/Container (5).png";

const TwoDThreeDProcessSection = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-4">
            Carica, Trasforma, Stampa: La Semplicità al Tuo Servizio
          </h2>

          <p className="section-description">
            Tre passi. Zero complessità. Risultati straordinari.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div>
            <div className="">
              <img src={pimg1} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              2. Trasformazione Automatica
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              Carica disegni, schizzi o immagini nel formato che preferisci.
              Supportiamo i formati più comuni.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <div className="">
              <img src={pimg2} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">
              2. Trasformazione Automatica
            </h3>
            <p className="text-xs text-gray-600 mt-2">
              La nostra tecnologia avanzata converte il tuo file 2D in un
              modello 3D dettagliato e ottimizzato per la stampa.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <div className="">
              <img src={pimg3} alt="" />
            </div>
            <h3 className="mt-4 font-bold text-black">3. Stampa e Ricevi</h3>
            <p className="text-xs text-gray-600 mt-2">
              Ottieni un preventivo istantaneo e ricevi il tuo oggetto stampato
              in 3D direttamente a casa tua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoDThreeDProcessSection;
