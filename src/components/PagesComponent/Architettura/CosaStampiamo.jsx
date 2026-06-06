import React from 'react';

const ArchitecturalModels = ({ data }) => {
  return (
    <section className="section bg-white text-primary-black font-family-inter">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title">
            {data?.title}
          </h2>
          <p className="section-description text-black/80 mt-4">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-x-12 mt-16 md:mt-10">
          {data?.divs?.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col group"
            >
              <div className="flex flex-row items-center gap-6 border-l-2 p-4 border-black/20 group-hover:border-black transition-colors duration-300">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold">
                    {feature.title}
                  </h3>
                  <p className="item-description leading-4.5 text-black/90">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalModels;