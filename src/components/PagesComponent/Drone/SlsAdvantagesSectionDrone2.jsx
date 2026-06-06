import React from "react";

const SlsAdvantagesSectionDrone2 = ({ data }) => {
  return (
    <section className="section">
      <div className="container-main">
        {/* Header */}
        <div className="mb-10">
          <h2 className="section-title mb-3">
            {data?.title}
          </h2>

          <p className="section-description">
            {data?.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {data?.cards?.map((card, idx) => (
            <div key={idx} className="bg-[#F2F0EF] rounded-xl p-4 md:p-6">
              <h3 className="font-semibold text-black mb-2">{card.title}</h3>
              <p className="text-[15px] text-gray-600 leading-[160%]">
                {card.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default SlsAdvantagesSectionDrone2;
