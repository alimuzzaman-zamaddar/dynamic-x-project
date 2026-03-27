import React from 'react';

/**
 * LaunchCountdownSection Component
 * Renders the "Presto Disponibile" launch section, mirroring the layout,
 * typography, and specific list of key benefits from image_33.png.
 */
const LaunchCountdownSection = () => {
  const benefits = [
    {
      title: "Accesso anticipato al servizio",
    },
    {
      title: "Offerte esclusive per i primi iscritti",
    },
    {
      title: "Aggiornamenti in tempo reale sul lancio",
    }
  ];

  return (
    // section class for consistent py-5 md:py-8
    <section className="section bg-white text-primary-black font-family-inter">
      {/* container-main for standard max-width (1040px) */}
      <div className="container-main">
        
        {/* Header Block using section-header */}
        <div className="section-header mb-6 md:mb-10 flex flex-col gap-6">
          {/* section-title for uniform font and size */}
          <h2 className="section-title">
            Presto Disponibile: Non Perderti il Lancio!
          </h2>
          {/* section-description for consistent body style (12px, leading-24px, bold highlights) */}
          <p className="section-description max-w-[1200px] text-primary-gray/80 mt-1">
            Stiamo perfezionando ogni dettaglio per offrirti un'esperienza utente <b>impeccabile e senza compromessi.</b>
          </p>
        </div>

        {/* Feature Grid with horizontal divider */}
        <div className="relative mt-24">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3  mt-16 md:mt-10 text-center">
            {benefits.map((benefit, index) => (
              // flex-col to keep title, label, and description stacked
              <div key={index} className="flex flex-col items-center text-center py-6 px-4">
                {/* Point Title (bold text style, specific weight and size) */}
                <h3 className="font-semibold">
                  {benefit.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Horizontal Divider Line */}
          <div className="absolute top-[-30px] md:top-[-4px] left-0 w-full h-0.5 bg-black/90 my-0 md:my-0"></div>

        </div>

        {/* Footer Sub-Header Block (Iscriviti alla nostra newsletter) */}
        <div className="section-header mt-6 md:mt-10 flex flex-col gap-6 text-left">
          {/* Description text (small text size with standard leading) */}
          <p className="text-primary-black/80 text-[13px] leading-[22px] max-w-[1200px]">
            Iscriviti alla nostra newsletter per essere tra i primissimi a sapere quando il servizio sarà attivo.
          </p>
        </div>

        {/* Action Button: Dark fill, white text, pill shape, specific specs (60px height, fully rounded, uppercase) */}
        <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-10">
          <button className="h-[60px] cursor-pointer px-8 bg-[#1a1411] hover:bg-white hover:text-black border  text-white rounded-full font-medium uppercase text-sm tracking-wide whitespace-nowrap flex items-center justify-center transition hover:bg-black/90">
            Iscriviti per Aggiornamenti Esclusivi
          </button>
        </div>

      </div>
    </section>
  );
};

export default LaunchCountdownSection;