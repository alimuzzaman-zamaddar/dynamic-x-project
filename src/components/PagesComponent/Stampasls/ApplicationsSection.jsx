import React from "react";
import {
  BoxIcon,
  CarIcon,
  FactoryIcon,
  ToolIcon,
  GearIcon,
  SettingIcon,
} from "../../SvgContainer/SvgContainer1";

const ApplicationsSection = () => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10 max-w-[900px]">
          <h2 className="section-title mb-3">Applicazioni Principali</h2>

          <p className="section-description">
            La SLS è la tecnologia di riferimento ogni volta che il componente
            deve funzionare davvero — non soltanto apparire. Dalla meccanica
            strutturale all’automotive, le applicazioni coprono settori ad alta
            esigenza tecnica.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <SettingIcon />
            </div>
            <h3 className="font-semibold text-black">
              Componenti Meccanici Funzionali
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Ingranaggi, supporti, staffe e parti strutturali con elevata
              resistenza meccanica pronte per l'uso diretto in assemblaggi.
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <BoxIcon />
            </div>
            <h3 className="font-semibold text-black">
              Custodie Tecniche ed Enclosure
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Contenitori per elettronica, scatole di derivazione e
              alloggiamenti con geometrie personalizzate e tolleranze precise.
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <CarIcon />
            </div>
            <h3 className="font-semibold text-black">
              Parti Automotive Leggere
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Componenti per veicoli in materiali leggeri ad alte prestazioni,
              ideali per prototipi funzionali e serie limitate motorsport.
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <FactoryIcon />
            </div>
            <h3 className="font-semibold text-black">Prototipi Industriali</h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Prototipi funzionali che replicano fedelmente le proprietà del
              pezzo finale, accelerando i cicli di sviluppo prodotto.
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <ToolIcon />
            </div>
            <h3 className="font-semibold text-black">
              Attrezzature Personalizzate
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Dime, maschere, fixture e attrezzature di produzione su misura,
              realizzate in tempi brevi senza stampi dedicati.
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <GearIcon />
            </div>
            <h3 className="font-semibold text-black">
              Produzione Piccoli Lotti
            </h3>
            <p className="text-[15px] text-gray-600 leading-[160%]">
              Serie da pochi pezzi fino a centinaia di unità con ottima
              ripetibilità e costi fissi contenuti rispetto allo stampaggio
              tradizionale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
