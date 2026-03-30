import React from "react";
import Container from "../../../shared/Container";
import Ochiali1 from "../../../assets/img/stampa/Image (Bocchette Custom).png";
import Ochiali from "../../../assets/img/stampa/Image (Supporti Strumentazione).png";
import Ochiali2 from "../../../assets/img/stampa/Image (Alloggiamenti Elettronica).png";
import Ochiali3 from "../../../assets/img/stampa/Image (Parti Interior Personalizzate).png";

const Componenti = () => {
  return (
    <section className="my-5 xl:my-10">
      <Container>
        <h2 className="section-title ">Componenti per Ambienti Marini</h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Ogni componente che realizziamo è progettato per resistere
          all'ambiente marino più impegnativo. Dalla protezione UV avanzata alla
          resistenza alla corrosione salina, i nostri prodotti mantengono
          integrità strutturale ed estetica nel tempo — un requisito
          imprescindibile per chi opera nel segmento premium dello yachting.
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="">
            <img src={Ochiali} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Supporti Strumentazione
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Supporti su misura per chartplotter, display multifunzione e
              strumenti di navigazione. Geometrie ottimizzate per angolazioni
              ergonomiche e integrazione perfetta negli interni di bordo.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali1} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Bocchette Custom
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939] ">
              Bocchette di aerazione e canalizzazione aria progettate su
              specifica del cliente, con finiture estetiche di alta qualità
              adatte agli interni yacht più raffinati.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali2} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Alloggiamenti Elettronica
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Custodie e alloggiamenti per componenti elettronici di bordo, con
              tenuta stagna, dissipazione termica e possibilità di integrazione
              connettori e passacavi certificati.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali3} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Parti Interior Personalizzate
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Elementi decorativi e funzionali per gli interni: maniglie,
              pannelli, clip, fermi e accessori su disegno, con finitura
              superficiale compatibile con upholstery e laminazioni di pregio.
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Componenti;
