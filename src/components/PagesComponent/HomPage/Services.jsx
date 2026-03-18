import React from "react";
import machine from "../../../assets/img/home/service.png";
import machine1 from "../../../assets/img/home/service2.png";
import machine2 from "../../../assets/img/home/service3.png";
import machine3 from "../../../assets/img/home/service4.png";
import machine4 from "../../../assets/img/home/service5.png";
import machine5 from "../../../assets/img/home/service6.png";
import machine6 from "../../../assets/img/home/serive7.png"
import machine7 from "../../../assets/img/home/service8.png";
import machine8 from "../../../assets/img/home/service9.png";

const techonologies = [
  {
    bgImg: machine4,
    title: "Stampa 3D Professionale",
    description:
      "Produzione additiva ad alta precisione per componenti funzionali e industriali.",
  },
  {
    bgImg: machine,
    title: "Prototipazione Rapida",
    description:
      "Trasforma rapidamente le tue idee in prototipi fisici testabili.",
  },
  {
    bgImg: machine1,
    title: "Produzione Piccoli Lotti",
    description:
      "Produzione flessibile e conveniente per serie limitate.",
  },
  {
    bgImg: machine2,
    title: "Ottimizzazione DFAM",
    description:
      "Progettazione ottimizzata per sfruttare al massimo la stampa 3D.",
  },
  {
    bgImg: machine3,
    title: "Scansioni 3D",
    description:
      "Digitalizzazione precisa di oggetti reali per replica o modifica.",
  },
  {
    bgImg: machine4,
    title: "Modellazione 3D",
    description:
      "Creazione di modelli CAD pronti per produzione e prototipazione.",
  },
  {
    bgImg: machine5,
    title: "Conversione 2D to 3D",
    description:
      "Trasformiamo disegni tecnici in modelli tridimensionali stampabili.",
  },
  {
    bgImg: machine6,
    title: "Consulenza Tecnica",
    description:
      "Supporto ingegneristico per scegliere materiali, processi e design.",
  },
  {
    bgImg: machine7,
    title: "Ready to Order Catalogo specializzato",
    description:
      "Componenti e prodotti pronti alla stampa o all’acquisto immediato.",
  },
];



const Services = () => {
  return (
    <section id="services" className="h-auto w-full pb-25 ">
      <div className="container flex flex-col gap-y-25 ">
        <h2 className="text-[73px] font-normal text-black ">Servizi </h2>
        <ul className="grid grid-cols-3 items-center gap-x-7.5  gap-y-14 justify-between">
          {techonologies.map((technology, idx) => {
            return (
              <li key={idx} className="flex flex-col gap-y-12.5">
                <img
                  src={technology.bgImg}
                  className=" w-full h-[500px] object-cover rounded-xl  "
                  alt={technology.title}
                />{" "}
                <div className="flex flex-col gap-y-3.5 max-w-[470px] ">
                  <h5 className="text-2xl font-semibold  text-black leading-[133%] ">
                    {" "}
                    {technology.title}{" "}
                  </h5>
                  <span className="text-base text-black text opacity-64 font-medium ">
                    {" "}
                    {technology.description}{" "}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
