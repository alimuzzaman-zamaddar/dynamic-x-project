import React from "react";

const StatsSection = ({ heading, description, stats, highlight, footer }) => {
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

              <p className="text-black font-semibold text-sm md:text-base">
                {item.label}
              </p>

              <p className="text-black text-[12px] leading-[20px] max-w-[220px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Box */}
        {highlight && (
          <div className="flex items-start gap-3 bg-[#D8D8E8] rounded-md p-6 md:p-5 mt-4">
            <div className="w-4 h-4 border border-black rounded-sm mt-1" />
            <p className="text-black text-[12px] leading-[20px]">
              {highlight}
            </p>
          </div>
        )}

        {/* Footer */}
        {footer && (
          <p className="text-black text-[12px] leading-[20px] mt-6">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default StatsSection;