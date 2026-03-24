import React from "react";

const UseCasesSection = ({ heading, description, items }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Grid */}
        <div className="usecases-grid">
          {items?.map((item, index) => (
            <div key={index} className="usecases-item">
              <div className="usecases-icon">{item.icon}</div>

              <h3 className="item-title text-center mt-3">
                {item.title}
              </h3>

              <p className="item-description text-center mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;