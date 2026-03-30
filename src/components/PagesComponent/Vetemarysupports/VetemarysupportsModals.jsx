import React from "react";
import Container from "../../../shared/Container";
import Ochiali1 from "../../../assets/img/stampa/Image (Protesi).png";
import Ochiali2 from "../../../assets/img/stampa/Image (Guide Chirurgiche).png";
import Ochiali from "../../../assets/img/stampa/Image (Tutori Personalizzati).png";

const VetemarysupportsModals = () => {
  return (
    <section className="my-5 xl:my-10">
      <Container>
        <div className="section-header my-10">
          <h2 className="section-title mb-11">
            Supporti Veterinari: Soluzioni Personalizzate per Ortopedia
            Veterinaria
          </h2>
          <p className="section-description">
            Realizziamo dispositivi ortopedici su misura per animali domestici e
            cliniche veterinarie. Ogni soluzione è progettata con precisione,
            combinando tecnologie di stampa 3D avanzate e materiali
            biocompatibili certificati per garantire comfort, sicurezza e
            risultati clinici ottimali.
          </p>
        </div>
        <h2 className="section-title ">Cosa Realizziamo</h2>
        <p className="text-[15px] font-normal text-[#1E2939] pt-4">
          Dal progetto alla produzione, offriamo una gamma completa di
          dispositivi ortopedici e chirurgici personalizzati. Ogni pezzo è
          sviluppato in stretta collaborazione con il veterinario, sulla base di
          scansioni o imaging diagnostico del paziente.
        </p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="">
            <img src={Ochiali} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Tutori Personalizzati
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Ortesi su misura per supportare articolazioni compromesse,
              fratture o recuperi post-chirurgici. Adattate anatomicamente a
              ogni paziente per massimizzare la mobilità e ridurre il dolore.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali1} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Protesi
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939] ">
              Soluzioni protesiche funzionali per animali con amputazioni
              parziali o totali degli arti. Progettate per restituire qualità di
              vita e autonomia motoria al paziente.
            </h5>
          </div>
          <div className="">
            <img src={Ochiali2} alt="Ochiali" className="h-30 xl:h-44 w-full" />
            <h4 className="text-[#0A0A0A] text-base text-center font-bold py-3">
              Guide Chirurgiche
            </h4>
            <h5 className="text-[15px] font-normal text-center text-[#1E2939]">
              Strumenti di precisione per assistere il chirurgo durante gli
              interventi ortopedici, riducendo i tempi operatori e aumentando
              l'accuratezza del posizionamento implantare.
            </h5>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VetemarysupportsModals;
