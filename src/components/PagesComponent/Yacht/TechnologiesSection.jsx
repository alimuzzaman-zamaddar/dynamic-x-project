import React from 'react';

const TechnologiesSection = ({ data }) => {

  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title ">
            {data?.title || "Tecnologie di stampa disponibili"}
          </h2>
          <p className="section-description max-w-[1000px] text-black/80 mt-4">
            {data?.subtitle }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {data?.cards.map((tech, index) => (
            <div 
              key={index} 
              className="border border-border-gray flex flex-col group overflow-hidden"
            >
              <div className="w-full flex flex-col gap-4 p-4 xl:p-6 bg-white h-full">
                <h3 className=" font-bold leading-tight">
                  {tech.title}
                </h3>
                <p className="item-description leading-4.5 text-black/90">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;