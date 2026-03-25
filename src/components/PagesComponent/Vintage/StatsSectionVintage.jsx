import React from "react";

const StatsSectionVintage = ({ heading, description, stats }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          {stats?.map((item, index) => (
            <div key={index} className="stats-item">
              <h3 className="stats-value">{item.value}</h3>

              <p className="text-black font-semibold text-sm md:text-lg">
                {item.label}
              </p>

              <p className="text-black text-[12px] leading-[20px] max-w-[300px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSectionVintage;