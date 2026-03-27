import React from 'react';
import { CollezionistiIcon, ToolsIcon, VintageCarIcon } from '../../SvgContainer/SvgContainer1';

const PerChiLavoriamo = () => {
  const clients = [
    {
      icon: <ToolsIcon />,
      title: "Officine di Restauro",
      description: "Supportiamo i restauratori nelle fasi più critiche del lavoro: quando il pezzo mancante rischia di bloccare un progetto da mesi. Forniamo componenti su misura con tempi rapidi e specifiche precise."
    },
    {
      icon: <CollezionistiIcon />,
      title: "Collezionisti Privati",
      description: "Per chi possiede un esemplare raro e vuole mantenerlo in perfette condizioni estetiche e funzionali senza alterarne l'autenticità. Riproduciamo senza traccia di compromesso."
    },
    {
      icon: <VintageCarIcon />, // Represents the car/transport icon
      title: "Musei e Mostre",
      description: "Produciamo repliche fedeli per esposizioni, eventi e musei dell'automobile, garantendo un'estetica impeccabile anche per pezzi puramente espositivi."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Header Section */}
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">
            Per Chi Lavoriamo
          </h2>
          <p className="section-description">
            Collaboriamo con professionisti e appassionati del mondo automotive storico 
            che non accettano compromessi sulla qualità e sulla fedeltà all'originale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Icon & Title Group */}
              <div className="flex items-center gap-4">
                <div className="text-black shrink-0">
                  {client.icon}
                </div>
                <h3 className="text-xl md:text-xl font-semibold text-black leading-tight">
                  {client.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-[12px] leading-[18px] text-black/80">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerChiLavoriamo;