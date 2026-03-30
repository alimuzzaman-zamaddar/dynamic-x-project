import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SlsProsConsSection = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">Pro & Contro della SLS</h2>

          <p className="section-description">
            Come ogni tecnologia, la SLS eccelle in specifici contesti
            applicativi. Comprendere i suoi punti di forza e i suoi limiti
            consente di fare la scelta produttiva più efficace.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* LEFT - Punti di Forza */}
          <div className="flex-1 bg-[#1E1E2F] text-white p-6">
            <div className="flex  gap-3 mb-5">
              <span className="text-lg text-gray-500">✔</span>
              <h3 className="text-lg font-semibold">Punti di Forza</h3>
            </div>

            <ul className="flex flex-col gap-4 text-[15px] leading-[160%]">
              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Libertà geometrica totale — nessun limite di sottosquadri o
                cavità interne
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Proprietà meccaniche eccellenti e quasi isotrope
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Nessuna struttura di supporto da rimuovere
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Alta ripetibilità per piccole serie industriali
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Vasta gamma di materiali tecnici disponibili
              </li>
            </ul>
          </div>

          {/* RIGHT - Limitazioni */}
          <div className="flex-1 bg-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-lg text-[#6A7282]">✖</span>
              <h3 className="text-lg font-semibold text-black">Limitazioni</h3>
            </div>

            <ul className="flex flex-col gap-4 text-[15px] text-gray-700 leading-[160%]">
              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Finitura superficiale porosa — richiede post-lavorazione per
                superfici lisce
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Costo unitario più elevato rispetto allo stampaggio a iniezione
                in grandi volumi
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Palette cromatica limitata — tipicamente parti bianche o grigie
                naturali
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Tempi di avvio macchina — ciclo termico necessario prima e dopo
                la stampa
              </li>

              <li className="flex items-start gap-3">
                <span>
                  <FaArrowRightLong />
                </span>
                Non ottimale per volumi di produzione di massa elevati
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlsProsConsSection;
