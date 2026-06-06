import React from "react";

const PrintTechnologiesSection = ({ data }) => {
  if (!data) return null;

  const {
    title = "Tecnologie di Stampa",
    subtitle = "",
    divs = []
  } = data;

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title">{title}</h2>
          {subtitle && (
            <p className="section-description">
              {subtitle}
            </p>
          )}
        </div>

        {divs.length > 0 && (
          <div className="relative mt-10">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-black/80 font-medium">
              {divs.map((tech, index) => {
                const isDarkThemeCard = index === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col gap-4 p-8 xl:p-10 rounded-sm border border-[#E5E7EB] transition-all duration-300 ${isDarkThemeCard
                        ? "bg-[#1C1C24] text-white border-[#1C1C24]"
                        : "bg-[#F9FAFB] text-black/90"
                      }`}
                  >
                    <h3
                      className={`item-title text-xl font-bold leading-tight ${isDarkThemeCard ? "text-white" : "text-[#0A0A0A]"
                        }`}
                    >
                      {tech.title}
                    </h3>

                    <p
                      className={`text-[14px] font-normal leading-[22px] ${isDarkThemeCard ? "text-gray-300" : "text-[#4B5563]"
                        }`}
                    >
                      {tech.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PrintTechnologiesSection;