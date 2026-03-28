import React from "react";
import { Link } from "react-router";

const SlsAdvantagesSection2 = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">Pronto a Produrre con la SLS?</h2>

          <p className="section-description">
            Carica il tuo file 3D e ricevi un preventivo dettagliato in tempi
            rapidi. Il nostro team tecnico è disponibile per supportarti nella
            scelta del materiale e nella configurazione ottimale del componente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">Upload Immediato</h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Formati .STL, .STEP, .OBJ e altri. Analisi automatica della
              geometria e quotazione rapida.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">Supporto Tecnico</h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Ingegneri specializzati disponibili per ottimizzare il design e
              selezionare il materiale più adatto alle tue esigenze.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F0EEEB] rounded-2xl p-6 md:p-8">
            <h3 className="font-semibold text-black mb-2">
              Consegna Garantita
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Produzione e spedizione tracciata direttamente a destinazione.
              Lead time a partire da 7 giorni lavorativi.
            </p>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">

          {/* Primary Button */}
          <Link to={"/upload-design"}>
            <button className="px-6 py-4 rounded-full bg-black text-white font-medium text-sm md:text-base hover:bg-transparent hover:text-black border border-black transition-all duration-300">
              Carica il Tuo File e Ottieni un Preventivo
            </button>
          </Link>

          {/* Secondary Button */}
          <Link to={"/upload-design"}>
            <button className="px-6 py-4 rounded-full border border-black text-black font-medium text-sm md:text-base hover:bg-black hover:text-white transition-all duration-300">
              Ottieni una consulenza
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default SlsAdvantagesSection2;
