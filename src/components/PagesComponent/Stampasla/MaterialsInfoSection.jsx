import React from "react";
import {
  PlasticoIcon,
  NylonIcon,
  ToughIcon,
  SpecialIcon,
} from "../../SvgContainer/SvgContainer1";

const MaterialsInfoSection = () => {
  return (
    <section className="section mb-6">
      <div className="container-main">

        {/* Header */}
        <div className="mb-10">
          <p className=" tracking-[0.2em] font-semibold uppercase text-black mb-2">
            MATERIALI DISPONIBILI
          </p>

          <h2 className="section-title mb-4">
            Resine SLA per Ogni Esigenza
          </h2>

          <p className="section-description">
            Offriamo un'ampia selezione di resine fotosensibili, classificate per proprietà meccaniche,
            ottiche e funzionali. Ogni famiglia di materiali è ottimizzata per specifiche applicazioni —
            dal prototipo estetico al componente tecnico ad alte prestazioni.
          </p>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-8">

          {/* Item 1 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 bg-gray-100 flex items-center justify-center rounded-md">
              <PlasticoIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1">
                Plastico Rigido
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Disponibile in <strong>Nero, Grigio, Bianco e Trasparente</strong> in varie formulazioni.
                La soluzione più versatile per prototipi estetici e funzionali con ottime finiture superficiali.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 bg-gray-100 flex items-center justify-center rounded-md">
              <NylonIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1">
                Simili a Nylon
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Resine con <strong>comportamento meccanico migliorato</strong>, che simulano le proprietà del nylon.
                Ideali per componenti che richiedono una certa flessibilità e resistenza agli urti.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 bg-gray-100 flex items-center justify-center rounded-md">
              <ToughIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1">
                Tenaci e Durevoli
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Resine "Tough" progettate per prototipi funzionali più resistenti,
                con elevata resistenza all'impatto e alla deformazione sotto carico meccanico.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 bg-gray-100 flex items-center justify-center rounded-md">
              <SpecialIcon />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-black mb-1">
                Prestazioni Speciali
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Resine per applicazioni critiche: <strong>ESD</strong> (antistatica), 
                <strong> ignifuga</strong> (UL94) e <strong> resistente al calore</strong>.
                Perfette per ambienti elettronici, industriali e ad alta temperatura.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MaterialsInfoSection;