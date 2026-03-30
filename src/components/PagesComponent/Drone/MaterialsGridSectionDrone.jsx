import React from "react";
import img1 from "../../../assets/img/stampa/ImageWithFallback.png";
import img2 from "../../../assets/img/stampa/ImageWithFallback (1).png";
import img3 from "../../../assets/img/stampa/ImageWithFallback (2).png";
import img4 from "../../../assets/img/stampa/ImageWithFallback (3).png";

const MaterialsGridSectionDrone = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">Componenti che Stampiamo</h2>

          <p className="section-description leading-4.5!">
            Ogni componente è progettato con un approccio ingegneristico
            rigoroso: analizziamo i carichi, i vincoli termici e le tolleranze
            di montaggio prima di definire geometria e materiale. Il risultato è
            una parte funzionale, leggera e pronta per l'integrazione immediata.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div>
            <img
              src={img1}
              alt="PA12 Nylon"
              className="w-full h-[160px] object-cover  mb-4"
            />

            <h3 className="font-semibold text-black mb-2">Frame Custom</h3>

            <p className="text-[15px] text-gray-600 leading-[160%]">
              Telai su misura progettati per massimizzare la rigidità
              strutturale e minimizzare il peso totale del drone
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src={img2}
              alt="PA11"
              className="w-full h-[160px] object-cover  mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              Bracci e Carter Motore
            </h3>

            <p className="text-[15px] text-gray-600 leading-[160%]">
              Supporti motore con geometrie ottimizzate per assorbire le
              vibrazioni e resistere ai carichi ciclici
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src={img3}
              alt="TPU"
              className="w-full h-[160px] object-cover  mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              Supporti Camera e Sensori
            </h3>

            <p className="text-[15px] text-gray-600 leading-[160%]">
              Sistemi di fissaggio per gimbal, LiDAR, sensori multispettrali con
              anti-vibrazione integrato
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <img
              src={img4}
              alt="Alumide"
              className="w-full h-[160px] object-cover  mb-4"
            />

            <h3 className="font-semibold text-black mb-2">
              Case Elettronici Alleggeriti
            </h3>

            <p className="text-[15px] text-gray-600 leading-[160%]">
              Contenitori per ESC, flight controller e batterie con dissipazione
              termica e protezione IP
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsGridSectionDrone;
