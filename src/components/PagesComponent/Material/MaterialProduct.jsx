import { BsArrowUp } from "react-icons/bs";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear3 from "../../../assets/img/materials/PETG-CF_Grid_LP 1.png";
import gear4 from "../../../assets/img/materials/PETG_Grid_LP 1.png";
import { Upload } from "../../SvgContainer/SvgContainer";

const materials = [
  {
    imgSrc: gear1,
    title: "ABS-GF FDM",
    description:
      "L’ASA rinforzato con fibra di vetro migliora l’ASA standard offrendo maggiore rigidità, resistenza al calore e stabilità dimensionale. Resiste ai raggi UV e agli agenti atmosferici, risultando ideale per applicazioni esterne e strutturali.",
  },
  {
    imgSrc: gear2,
    title: "ABS FDM",
    description:
      "L’ABS è un materiale durevole e versatile con buona resistenza agli urti e agli agenti chimici. È ideale per parti funzionali e prototipi.",
  },
  {
    imgSrc: gear3,
    title: "ASA FDM",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear4,
    title: "ASA-CF FDM",
    description:
      "L’ASA rinforzato con fibra di carbonio (CF-ASA) offre maggiore resistenza, rigidità e stabilità ai raggi UV rispetto all’ASA standard.",
  },
  {
    imgSrc: gear3,
    title: "PCFDM",
    description:
      "Il policarbonato è un termoplastico di livello industriale con elevata resistenza al calore e grande robustezza meccanica.",
  },
  {
    imgSrc: gear4,
    title: "PET-CFFDM",
    description:
      "Miscela di PET resistente e fibra di carbonio. La fibra di carbonio aumenta durezza e resistenza meccanica, mantenendo il basso warping e il ridotto ritiro tipici del PET. Ottima resistenza al calore.",
  },
  {
    imgSrc: gear1,
    title: "PA6-CF FDM",
    description:
      "Il Nylon 6 rinforzato con fibra di carbonio offre proprietà elevate di rigidità e resistenza.",
  },
  {
    imgSrc: gear2,
    title: "PA6-GF FDM",
    description:
      "Il Nylon 6 rinforzato con fibra di vetro è altamente resistente e durevole.",
  },
  {
    imgSrc: gear3,
    title: "PETG FDM",
    description:
      "Il PETG combina resistenza, stabilità chimica e costi contenuti.",
  },
  {
    imgSrc: gear4,
    title: "PETG-CF FDM",
    description:
      "Il PETG rinforzato con fibra di carbonio è più resistente e rigido.",
  },
  {
    imgSrc: gear1,
    title: "PLA Aero FDM",
    description:
      "Il PLA Aero riduce peso grazie alla schiumatura durante la stampa.",
  },
  {
    imgSrc: gear2,
    title: "PLA FDM",
    description:
      "Il PLA è ideale per prototipi economici.",
  },
  {
    imgSrc: gear3,
    title: "Resina per prototipi visivi (SLA)",
    description:
      "Materiale flessibile ed elastico per applicazioni a contatto.",
  },
  {
    imgSrc: gear4,
    title: "Resina rigida alta prestazione (SLA)",
    description:
      "Perfetto per parti flessibili come guarnizioni.",
  },
  {
    imgSrc: gear1,
    title: "TPE FDM",
    description:
      "Ottima per modelli trasparenti o estetici.",
  },
  {
    imgSrc: gear2,
    title: "TPU FDM",
    description:
      "Materiale rigido per componenti strutturali.",
  },
  {
    imgSrc: gear3,
    title: "Resina castable (SLA)",
    description:
      "Ideale per gioielli e fusioni.",
  },
  {
    imgSrc: gear4,
    title: "Resina dentale (SLA)",
    description:
      "Per modelli odontoiatrici ad alta precisione.",
  },

];

export default function MaterialsPage() {
  return (
    <section id="materials" className="mt-45">
      <div className="container">
        <div className="flex flex-row  justify-between">
          <h2 className="text-[48px] font-semibold text-black pb-5">Materials</h2>
        </div>
        <ul className="grid justify-between gap-y-8 gap-x-7.5 grid-cols-2">
          {materials.map((material, idx) => {
            return (
              <li
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: " blur(4.5px)",
                }}
                key={idx}
                className="p-7.5 h-auto w-full rounded-xl flex flex-row gap-x-12 items-center "
              >
                <img
                  className="max-w-[245px] max-h-[243px] object-cover "
                  src={material.imgSrc}
                  alt={material.title}
                />
                <div className="flex flex-col gap-y-6 ">
                  <div className="flex flex-col gap-y-3  ">
                    <h5 className="text-black font-normal leading-[134%] text-2xl  ">
                      {" "}
                      {material.title}{" "}
                    </h5>
                    <span className="text-base font-light leading-[150%]  max-w-[389px] ">
                      Polymer with excellent performance, ductility and thermal
                      resistance, the most used for stability and value for
                      money.
                    </span>
                  </div>
                  <button
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.16)",
                      background: "rgba(0, 0, 0, 0.09)",
                      backdropFilter: " blur(5.09px)",
                    }}
                    className="h-auto w-auto px-6 py-3 relative flex items-center justify-center rounded-xl cursor-pointer max-w-[193px] "
                  >
                    <div className="flex flex-row gap-x-2.5 items-center ">
                      <Upload />
                      <span className="text-base font-normal leading-[200%] text-black ">
                        Upload Design
                      </span>
                    </div>
                    <input
                      type="file"
                      className="absolute top-0 left-0 h-full w-full  rounded-xl opacity-0 cursor-pointer "
                    />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}