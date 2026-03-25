import React from "react";

const StatsSectionsla = ({ heading, description, stats}) => {
  return (
    <section className="section ">
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
           gap-8 md:gap-10 my-8 md:my-12 text-center">
          {stats?.map((item, index) => (
            <div key={index} className="stats-item">
              <h3 className="stats-value">{item.value}</h3>

              <p className="text-black font-semibold text-sm md:text-base">
                {item.label}
              </p>

              <p className="text-black text-[12px] leading-[20px] max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSectionsla;