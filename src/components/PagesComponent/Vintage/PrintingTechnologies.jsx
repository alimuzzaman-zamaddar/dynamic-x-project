import React from 'react';

const PrintingTechnologies = ({ data }) => {

  return (
    <section className="section bg-white">
      <div className="container-main">
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">
            {data?.title}          </h2>
          <p className="section-description max-w-[850px] text-black/80">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.cards?.map((tech, index) => (
            <div
              key={index}
              className="border-2 border-[#1A1A1A]/40 border-l-[4px] border-l-[#1A1A1A] p-8 flex flex-col gap-6"
            >
              <h3 className="text-xl md:text-[22px] font-semibold text-primary-black leading-tight">
                {tech.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-black/70">
                {tech.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingTechnologies;