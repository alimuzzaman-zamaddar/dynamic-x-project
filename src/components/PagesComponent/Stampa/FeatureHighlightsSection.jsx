import React from "react";

const FeatureHighlightsSection = ({ heading, description, items }) => {
  return (
    <section className="feature-section">
      <div className="feature-container">
        {/* Top Content */}
        <div className="feature-header">
          <h2 className="feature-heading">{heading}</h2>
          <p className="feature-description">{description}</p>
        </div>

        {/* Features */}
        <div className="feature-grid">
          {items?.map((item, index) => (
            <div key={index} className="feature-item">
              <h3 className="feature-item-title">{item.title}</h3>
              <p className="feature-item-description">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightsSection;