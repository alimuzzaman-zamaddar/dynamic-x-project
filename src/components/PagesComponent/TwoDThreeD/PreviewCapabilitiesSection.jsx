import React from "react";

/**
 * PreviewCapabilitiesSection Component
 * Renders the "Un Assaggio di Ciò Che Ti Aspetta" section, matching the layout,
 * typography, and specific list styling with black borders from image_28.png.
 */
const PreviewCapabilitiesSection = () => {
  const capabilities = [
    {
      title: "Gadget Personalizzati",
      description:
        "Trasforma un semplice logo o marchio in un gadget unico e professionale. Perfetto per il merchandising aziendale.",
    },
    {
      title: "Arte in 3D",
      description:
        "Dai vita ai tuoi disegni artistici. Ogni illustrazione può diventare un oggetto tridimensionale da toccare e ammirare.",
    },
    {
      title: "Prototipazione Rapida",
      description:
        "Parti da un disegno tecnico 2D e ottieni un prototipo fisico in tempi record. Ideale per ingegneri e designer.",
    },
  ];

  return (
    // section class for global padding
    <section className="section bg-white text-primary-black font-family-inter pt-10 pb-16">
      {/* container-main for standard content max-width (1040px) */}
      <div className="container-main flex flex-col gap-5">
        {/* Header Block with margin bottom */}
        <div className="flex flex-col ">
          {/* section-title for uniform title style (semibold, 4xl on md) */}
          <h2 className="section-title">Un Assaggio di Ciò Che Ti Aspetta</h2>
          {/* section-description for consistent body style (12px, leading-24px) */}
          <p className="section-description text-[#4A5565]">
            Le possibilità sono infinite.
          </p>
        </div>

        {/* Feature List Wrapper (stacked vertically) */}
        <div className="flex flex-col gap-4 mt-6">
          {capabilities.map((capability, index) => (
            // Flex row to manage border and text content
            <div key={index} className="flex gap-4 text-left items-start">
              {/* Left-side decorative black border (consistent style from image_28.png) */}
              <div className="w-[3px] h-[60px] bg-black/90 shrink-0 mt-0.5"></div>

              {/* Text content flex column */}
              <div className="flex flex-col gap-3 pt-0.5">
                {/* Capability Title (Semibold, body text style) */}
                <h3 className="font-semibold text-lg leading-tight text-primary-black/95">
                  {capability.title}
                </h3>
                {/* Capability Description (normal weight, smaller text size) */}
                <p className="text-primary-black/80 text-[15px] leading-[22px] ">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreviewCapabilitiesSection;
