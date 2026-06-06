import React from "react";
import Container from "../../../shared/Container";

const PrototypingCosa = ({ data }) => {
  if (!data) return null;

  const {
    title = "Cosa Realizziamo",
    subtitle = "",
    cards = []
  } = data;

  return (
    <section className="my-5 xl:my-10">
      <Container>
        <h2 className="section-title">
          {title}
        </h2>

        {subtitle && (
          <p className="text-[15px] font-normal text-[#1E2939] pt-4">
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-10">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {card.image_url && (
                <img
                  src={card.image_url}
                  alt={card.title || "Ochiali"}
                  className="h-30 xl:h-44 w-full object-cover"
                />
              )}
              <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
                {card.title}
              </h4>
              <p className="text-[15px] font-normal text-center text-[#1E2939]">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PrototypingCosa;