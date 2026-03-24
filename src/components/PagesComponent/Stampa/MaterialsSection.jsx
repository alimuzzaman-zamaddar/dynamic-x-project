import React from "react";

const MaterialsSection = ({ heading, description, items }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Cards */}
        <div className="materials-grid">
          {items?.map((item, index) => (
            <div key={index} className="materials-card">
              {/* Image */}
              <div className="materials-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="materials-image"
                />
              </div>

              {/* Content */}
              <div className="materials-content">
                <h3 className="materials-title">{item.title}</h3>

                <div className="materials-list">
                  {item.points?.map((point, i) => (
                    <p key={i} className="materials-text">
                      <span className="materials-text-strong">
                        {point.label}
                      </span>{" "}
                      — {point.text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;