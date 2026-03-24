import React from "react";

 export const BenefitsSection = ({ heading, description, items }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="section-header">
          <h2 className="section-title">{heading}</h2>
          <p className="section-description">{description}</p>
        </div>

        {/* Items */}
        <div className="flex flex-col">
          {items?.map((item, index) => (
            <div
              key={index}
              className={`py-6 md:py-8 divider-top ${
                index === items.length - 1 ? "divider-bottom" : ""
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span>{item.icon}</span>
                <h3 className="item-title">{item.title}</h3>
              </div>

              <p className="item-description text-center max-w-[700px] mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};