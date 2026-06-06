import React from "react";

const MaterialsGridSectionDrone = ({ data }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">{data?.title}</h2>

          <p className="section-description leading-4.5!">
            {data?.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.cards?.map((card, idx) => {
            return (
              <div key={idx}>
                <img
                  src={card?.image_url}
                  alt={card?.title}
                  className="w-full h-40 object-cover mb-4"
                />

                <h3 className="font-semibold text-black mb-2">
                  {card?.title}
                </h3>

                <p className="text-[15px] text-gray-600 leading-[160%]">
                  {card?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MaterialsGridSectionDrone;