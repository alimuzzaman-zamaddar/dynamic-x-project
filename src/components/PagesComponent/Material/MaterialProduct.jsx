import { BsArrowUp } from "react-icons/bs";
import gear1 from "../../../assets/img/materials/ABS.GF_Grid_LP 1.png";
import gear2 from "../../../assets/img/materials/ABS_Grid_LP 1.png";
import gear3 from "../../../assets/img/materials/ASA_Grid_LP 1 (2).png";
import gear4 from "../../../assets/img/materials//PA6-GF_Grid_LP 1 (1).png";
import gear5 from "../../../assets/img/materials/PC_Grid_LP 1 (1).png";
import gear6 from "../../../assets/img/materials/PETG_Grid_LP 1 (2).png";
import gear7 from "../../../assets/img/materials/PETG-CF_Grid_LP 1 (2).png";
import gear8 from "../../../assets/img/materials/PLA Aero_Grid_LP 1 (1).png";
import gear9 from "../../../assets/img/materials/PLA_Grid_LP 1 (1).png";
import gear10 from "../../../assets/img/materials/TPE_Grid_LP 1 (1).png";
import gear11 from "../../../assets/img/materials/TPU_Grid_LP 1.png";
import gear12 from "../../../assets/img/materials/RESINA PROTOTIPI VISIVI_Grid_LP 1.png";
import gear13 from "../../../assets/img/materials/RESINA RiGIDA_Grid_LP 1.png";
import gear14 from "../../../assets/img/materials/RESINA CASTABLE_Grid_LP 1.png";
import gear15 from "../../../assets/img/materials/RESINA DENTALE_Grid_LP 1.png";
import { Upload } from "../../SvgContainer/SvgContainer";
import Container from "../../../shared/Container";
import { Link } from "react-router";

const materials = [
  {
    imgSrc: gear1,
    title: "ABS-GF",
    subtitle: "FDM",
    description:
      "L’ASA rinforzato con fibra di vetro migliora l’ASA standard offrendo maggiore rigidità, resistenza al calore e stabilità dimensionale. Resiste ai raggi UV e agli agenti atmosferici, risultando ideale per applicazioni esterne e strutturali.",
  },
  {
    imgSrc: gear2,
    title: "ABS",
    subtitle: "FDM",
    description:
      "L’ABS è un materiale durevole e versatile con buona resistenza agli urti e agli agenti chimici. È ideale per parti funzionali e prototipi.",
  },
  {
    imgSrc: gear3,
    title: "ASA ",
    subtitle: "FDM",
    description:
      "L’ASA è un materiale resistente e stabile ai raggi UV, perfetto per applicazioni da esterno.",
  },
  {
    imgSrc: gear1,
    title: "ASA-CF",
    subtitle: "FDM",
    description:
      "L’ASA rinforzato con fibra di carbonio (CF-ASA) offre maggiore resistenza, rigidità e stabilità ai raggi UV rispetto all’ASA standard. È un’ottima scelta per componenti sottoposti a elevato stress meccanico.",
  },
  {
    imgSrc: gear2,
    title: "PA6-CF",
    subtitle: "FDM",
    description:
      "Il Nylon 6 rinforzato con fibra di carbonio offre proprietà significativamente elevate di rigidità e resistenza in ambienti asciutti, mantenendo un’eccellente resistenza al calore e agli urti.",
  },
  {
    imgSrc: gear4,
    title: "PA6-GF",
    subtitle: "FDM",
    description:
      "Il Nylon 6 rinforzato con fibra di vetro rappresenta un riferimento tra le plastiche tecniche ad alte prestazioni. È eccezionalmente resistente e durevole.",
  },
  {
    imgSrc: gear5,
    title: "PC",
    subtitle: "FDM",
    description:
      "Il policarbonato è un termoplastico di livello industriale con elevata resistenza al calore e grande robustezza meccanica.",
  },
  {
    imgSrc: gear2,
    title: "PET-CF",
    subtitle: "FDM",
    description:
      "Miscela di PET resistente e fibra di carbonio. La fibra di carbonio aumenta durezza e resistenza meccanica, mantenendo il basso warping e il ridotto ritiro tipici del PET. Ottima resistenza al calore.",
  },
  {
    imgSrc: gear6,
    title: "PETG",
    subtitle: "FDM",
    description:
      "Il PETG, ampiamente utilizzato per parti durevoli e funzionali, combina resistenza, stabilità chimica e costi contenuti.",
  },
  {
    imgSrc: gear7,
    title: "PETG-CF",
    subtitle: "FDM",
    description:
      "Il PETG rinforzato con fibra di carbonio è più resistente e rigido rispetto al PETG standard.",
  },
  {
    imgSrc: gear8,
    title: "PLA Aero FDM",
    subtitle: "FDM",
    description:
      "Il PLA Aero raggiunge bassa densità e peso ridotto grazie alla schiumatura alle alte temperature durante la stampa, creando microcavità all’interno del pezzo.",
  },
  {
    imgSrc: gear9,
    title: "PLA FDM",
    subtitle: "FDM",
    description:
      "Il PLA è una plastica economica, ideale per prototipi e parti funzionali che non richiedono elevata resistenza meccanica o termica.",
  },
  {
    imgSrc: gear10,
    title: "TPE",
    subtitle: "FDM",
    description:
      "Ottina per modelli trapsarenti o estetici.",
  },
  {
    imgSrc: gear11,
    title: "TPU",
    subtitle: "FDM",
    description:
      "Materiale con elevate rigidità e resistenza meccanica, utile per prototipi funzionali o parti Meccaniche dove serve poca flessione, adatto per test di carter o componenti strutturali.",
  },
  {
    imgSrc: gear12,
    title: "RESINA PER PROTOTIPI VISIVI",
    subtitle: "FDM",
    description:
      "Il TPE stampato in FDM offre flessibilità ed elasticità simili alla gomma, con buona durabilità. È ideale per parti a contatto con la pelle o alimenti, o per utilizzi in ambienti soggetti a sollecitazioni elastiche.",
  },
  {
    imgSrc: gear13,
    title: "RESINA RIGIDA ALTA PRESTAZIONE",
    subtitle: "FDM",
    description:
      "Il TPU stampato in FDM è perfetto per produrre parti e prototipi flessibili, come cover, guarnizioni e ammortizzatori.",
  },
  {
    imgSrc: gear14,
    title: "RESINA CASTABLE",
    subtitle: "FDM",
    description:
      "Resine per prototipi di gioielli e fusioni con superficie liscia e dettagli nitidi.",
  },
  {
    imgSrc: gear15,
    title: "RESINA DENTALE",
    subtitle: "FDM",
    description:
      "Progettata per modelli odontoiatrici e protesi con precisione elevate e materiali con certificazioni mediche.",
  },
]

export default function MaterialsPage() {
  return (
    <section id="materials" className="xl:mt-45 mt-25">
      <Container>
        <div className="flex flex-row  justify-between">
          <h2 className="lg:text-[36px] text-2xl font-semibold text-black pb-5">Materiali</h2>
        </div>
        <ul className="grid justify-between lg:gap-8 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {materials.map((material, idx) => {
            return (
              <li
                key={idx}
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.11)",
                  background: "rgba(0, 0, 0, 0.09)",
                  backdropFilter: " blur(4.5px)",
                }}
                className="xl:p-7.5 p-3 w-full rounded-xl flex flex-col h-full"
              >
                <div className="flex flex-col gap-y-6 h-full">

                  {/* TOP CONTENT */}
                  <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between">
                      <div>
                        <h5 className="text-black font-semibold leading-[134%] text-xs">
                          {material.title}
                        </h5>
                        <p className="text-ms text-gray-500 mt-3">{material.subtitle}</p>
                      </div>

                      <img
                        className="w-25 h-25 object-center object-contain"
                        src={material.imgSrc}
                        alt={material.title}
                      />
                    </div>

                    <span className="text-base font-light leading-[150%] max-w-[389px] mt-5">
                      {material.description}
                    </span>
                  </div>

                  {/* BUTTON (PUSHED TO BOTTOM) */}
                  <div className="mt-auto">
                    <button
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.16)",
                        background: "rgba(0, 0, 0, 0.09)",
                        backdropFilter: " blur(5.09px)",
                      }}
                      className="xl:px-6 px-3 py-3 flex items-center justify-center rounded-xl cursor-pointer max-w-[193px]"
                    >
                      <Link to={"/upload-design"}>
                        <div className="flex gap-x-2.5 items-center">
                          <Upload />
                          <span className="text-base font-normal leading-[200%] text-black">
                            Upload Design
                          </span>
                        </div>
                      </Link>
                    </button>
                  </div>

                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}