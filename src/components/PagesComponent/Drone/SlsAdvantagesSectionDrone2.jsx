import React from "react";

const SlsAdvantagesSectionDrone2 = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">
            Materiali Tecnici di Riferimento
          </h2>

          <p className="section-description">
            La scelta del materiale è determinante per le prestazioni del
            componente finale. Utilizziamo una selezione rigorosa di polimeri
            tecnici ad alte prestazioni, scelti in base ai requisiti meccanici,
            termici e ambientali di ciascuna applicazione UAV.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">PA-CF</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Nylon rinforzato con fibra di carbonio corta. Rapporto
              resistenza/peso eccezionale, rigidità elevata, bassa deformazione
              termica. Il materiale di riferimento per frame e parti
              strutturali.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">
              Nylon Rinforzato in Fibra di Carbonio
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Elevata tenacità e resistenza all'impatto. Ideale per bracci e
              supporti soggetti a carichi dinamici e urti accidentali durante le
              operazioni di campo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">ABS Tecnico</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Versatile e lavorabile, con buona resistenza chimica e agli UV.
              Adatto per scocche, pannelli e componenti di copertura non
              strutturali.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
            <h3 className="font-semibold text-black mb-2">Resine High-Temp</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Resine fotopolimeriche con temperatura di deflazione superiore a
              200°C. Indispensabili per carter motore e componenti in prossimità
              di fonti di calore intenso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlsAdvantagesSectionDrone2;
