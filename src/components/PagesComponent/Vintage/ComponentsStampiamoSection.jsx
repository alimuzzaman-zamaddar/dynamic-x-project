import React from "react";

const ComponentsStampiamoSection = () => {
  return (
    <section className="section">
      <div className="container-main">

        {/* Header */}
        <div className="section-header max-w-[800px]">
          <h2 className="section-title mb-4">
            Componenti che Stampiamo
          </h2>

          <p className="section-description text-gray-700">
            Dalla scocca agli interni, copriamo un'ampia gamma di parti strutturali ed estetiche per qualsiasi modello storico. Ogni categoria richiede competenze specifiche di materiale e processo — e noi le padroneggiamo tutte.
          </p>
        </div>

        {/* List */}
        <ul className="mt-6 space-y-6">

          {/* Item 1 */}
          <li className="flex gap-4">
            <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
            <div>
              <h4 className="item-title">Boccole e Supporti</h4>
              <p className="item-description text-gray-700">
                Componenti meccanici di precisione per sospensioni, trasmissioni e carrozzeria. Tolleranze strette, materiali ad alta resistenza all'usura.
              </p>
            </div>
          </li>

          {/* Item 2 */}
          <li className="flex gap-4">
            <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
            <div>
              <h4 className="item-title">Griglie e Inserti</h4>
              <p className="item-description text-gray-700">
                Elementi estetici frontali e interni riprodotti con fedeltà geometrica assoluta. Finiture lucide, satinate o verniciate su richiesta.
              </p>
            </div>
          </li>

          {/* Item 3 */}
          <li className="flex gap-4">
            <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
            <div>
              <h4 className="item-title">Parti Cruscotto</h4>
              <p className="item-description text-gray-700">
                Pannelli, cornici, portastrumenti e decori interni riprodotti con materiali automotive certificati per stabilità termica e UV.
              </p>
            </div>
          </li>

          {/* Item 4 */}
          <li className="flex gap-4">
            <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
            <div>
              <h4 className="item-title">Componenti Estetici</h4>
              <p className="item-description text-gray-700">
                Modanature, stemmi, badge e dettagli decorativi che ridanno identità visiva e valore storico all'automobile.
              </p>
            </div>
          </li>

          {/* Item 5 */}
          <li className="flex gap-4">
            <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
            <div>
              <h4 className="item-title">Prototipi per Fusione</h4>
              <p className="item-description text-gray-700">
                Modelli master per fusione in resina, alluminio o ottone. Ideali per produzione in piccola serie o pezzi strutturali complessi.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};

export default ComponentsStampiamoSection;