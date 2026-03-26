import { CheckIcon } from "../../SvgContainer/SvgContainer1";

export default function CollaborazioneSection() {

  return (
    <section className=" container-main ">
      {/* Heading */}
      <h2 className="section-title">
        Inizia Oggi la Collaborazione
      </h2>

      {/* Subtext */}
      <p className="item-description py-8">
        Siamo a disposizione di veterinari e cliniche per valutare insieme ogni
        caso clinico e proporre la soluzione ortopedica più adatta. Contattaci
        per una consulenza tecnica gratuita e scopri come la stampa 3D
        personalizzata può migliorare i tuoi protocolli terapeutici e la qualità
        di vita dei tuoi pazienti.
      </p>

      {/* Checkbox card */}
      <div className="bg-[#DDDDE8] px-5 py-4 mb-8 flex items-start gap-4">
       <div className="shrink-0">
         <CheckIcon />
       </div>
        <p className="item-description">
          Ogni progetto parte da una consulenza dedicata: inviaci le immagini
          diagnostiche o i dati di scansione del paziente e ti proporremo la
          soluzione su misura ideale.
        </p>
      </div>

        <div className="flex flex-wrap items-center gap-4 my-11">
          <button className="h-12 cursor-pointer px-8 bg-[#1a1411] text-white rounded-full text-base font-medium flex items-center justify-center transition hover:bg-white whitespace-nowrap hover:text-black hover:border border hover:border-black ">
            Richiedi una Consulenza
          </button>

          <button className="h-12 cursor-pointer px-8 bg-transparent text-primary-black font-medium border border-black rounded-full text-base flex items-center justify-center transition hover:bg-black hover:text-white whitespace-nowrap">
             Scopri i Materiali
          </button>
        </div>
    </section>
  );
}
