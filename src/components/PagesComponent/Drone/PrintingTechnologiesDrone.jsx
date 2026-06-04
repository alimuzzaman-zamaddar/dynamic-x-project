import React from "react";

const PrintingTechnologiesDrone = ({ data }) => {


  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Header Section */}
        <div className="section-header mb-12">
          <h2 className="section-title mb-4">{data?.title}</h2>
          <p className="section-description text-black/80">
            {data?.subtitle}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data?.cards?.map((tech) => (
            <div
              key={tech.id}
              className="border-2 border-[#1A1A1A]/40 border-l-4 border-l-[#1A1A1A] p-6 flex flex-col gap-3 "
            >
              <h3 className="font-semibold text-primary-black leading-tight">
                {tech.title}
              </h3>
              <p className="text-[15px]  text-black/70">{tech.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingTechnologiesDrone;
