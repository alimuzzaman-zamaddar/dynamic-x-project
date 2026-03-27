import React from "react";
import img1 from "../../../assets/img/stampa/Image (PA12 — Nylon Standard).png"
import img2 from "../../../assets/img/stampa/Image (PA11 — Maggiore Elasticità).png"
import img4 from "../../../assets/img/stampa/Image (Alumide — Composito Metallico).png"
import img3 from "../../../assets/img/stampa/Image (TPU Flex — Componenti Flessibili).png"

const MaterialsGridSection = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10 max-w-[900px]">
          <h2 className="section-title mb-3">
            Materiali Disponibili
          </h2>

          <p className="section-description">
            La scelta del materiale è determinante per le prestazioni finali del componente.
            La SLS supporta un'ampia gamma di polimeri tecnici, ciascuno con caratteristiche specifiche
            per applicazioni diverse.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div>
            <img
              src={img1}
              alt="PA12 Nylon"
              className="w-full h-[160px] object-cover rounded-xl mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              PA12 — Nylon Standard
            </h3>

            <p className="text-xs text-gray-600 leading-[160%]">
              <strong>Resistenza e precisione dimensionale.</strong> Il materiale più diffuso per SLS,
              offre eccellente resistenza meccanica, rigidità e stabilità dimensionale.
              Ideale per componenti strutturali e prototipi funzionali.
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src={img2}
              alt="PA11"
              className="w-full h-[160px] object-cover rounded-xl mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              PA11 — Maggiore Elasticità
            </h3>

            <p className="text-xs text-gray-600 leading-[160%]">
              <strong>Bio-based e ad alta resilienza.</strong> Rispetto al PA12, il PA11 offre maggiore
              allungamento a rottura e resistenza agli urti, ideale per parti soggette a flessione
              ciclica o carichi dinamici.
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src={img3}
              alt="TPU"
              className="w-full h-[160px] object-cover rounded-xl mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              TPU Flex — Componenti Flessibili
            </h3>

            <p className="text-xs text-gray-600 leading-[160%]">
              <strong>Elasticità e ammortizzazione.</strong> Poliuretano termoplastico flessibile per
              guarnizioni, inserti elastici, suole e componenti che richiedono proprietà gommose
              o capacità di assorbimento degli urti.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <img
              src={img4}
              alt="Alumide"
              className="w-full h-[160px] object-cover rounded-xl mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              Alumide — Composito Metallico
            </h3>

            <p className="text-xs text-gray-600 leading-[160%]">
              <strong>Nylon rinforzato con particelle di alluminio.</strong> Aspetto metallico,
              elevata rigidità e buona conduttività termica. Ottimale per componenti con
              requisiti estetici e meccanici superiori.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MaterialsGridSection;