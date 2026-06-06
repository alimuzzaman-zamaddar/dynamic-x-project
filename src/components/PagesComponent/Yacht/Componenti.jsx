import React from "react";
import Container from "../../../shared/Container";
import Ochiali1 from "../../../assets/img/stampa/Image (Bocchette Custom).png";
import Ochiali from "../../../assets/img/stampa/Image (Supporti Strumentazione).png";
import Ochiali2 from "../../../assets/img/stampa/Image (Alloggiamenti Elettronica).png";
import Ochiali3 from "../../../assets/img/stampa/Image (Parti Interior Personalizzate).png";

const Componenti = ({ data }) => {
  return (
    <section className="my-5 xl:my-10">
      <Container>
        <h2 className="section-title ">{data?.title}</h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          {data?.subtitle}
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          {data?.cards?.map((card, index) => (
            <div key={index} className="">
              <img src={card.image_url} alt={card.title} className="h-30 xl:h-44 w-full" />
              <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
                {card.title}
              </h4>
              <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
                {card.description}
              </h5>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Componenti;
