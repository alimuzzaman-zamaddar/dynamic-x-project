import React from 'react';

const ConceptToProductSection = ({ data }) => {
  if (!data) return null;

  const {
    title = "Dal concept al prodotto finito.",
    subtitle = "",
    divs = []
  } = data;

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title mb-12">
            {title}
          </h2>
          {subtitle && (
            <p className="section-description">
              {subtitle}
            </p>
          )}
        </div>

        {divs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-8 md:mt-10">
            {divs.map((step, index) => (
              <div
                key={index}
                className="flex items-center gap-6 border-l-4 pl-4 py-2 border-black"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-lg leading-tight uppercase tracking-tight">
                    {step.title}
                  </h3>
                  <p className="item-description leading-4.5 text-black/90">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ConceptToProductSection;