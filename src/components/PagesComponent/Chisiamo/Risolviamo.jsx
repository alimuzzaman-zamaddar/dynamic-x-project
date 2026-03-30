import React from 'react'
import Container from '../../../shared/Container'


const technologies = [
  {
    id: 1,
    title: "Componenti Non Disponibili o Obsoleti",
    description: "L'assenza di ricambi originali paralizza interi ecosistemi: un proprietario di un'Alfa Romeo Spider del 1972 che attende sei mesi per una modanatura del cruscotto fuori produzione, un operatore di droni costretto a fermare un velivolo da 15.000€ per un braccio del telaio esaurito, o una clinica veterinaria bloccata per l'impossibilità di reperire impianti su misura. DynamicsX trasforma una foto o un file CAD in un componente fisico pronto all'uso in sole 48–72 ore, eliminando l'obsolescenza come ostacolo."
  },
  {
    id: 2,
    title: "Cicli di Sviluppo Lenti e Costosi",
    description: "Il modello tradizionale dello stampaggio a iniezione richiede ordini minimi di 500–1.000 unità e tempi di attesa di 4–8 settimane, mentre la lavorazione CNC per pezzi singoli può arrivare a costare migliaia di euro. DynamicsX rivoluziona questo paradigma offrendo prototipi funzionali a partire da 30–150€ con tempi di consegna rapidissimi. Questo approccio permette alle aziende e ai professionisti di iterare i propri design in tempo reale, senza esporsi a rischi finanziari legati a grossi lotti di produzione."
  },
  {
    id: 3,
    title: "Qualità e Prestazioni Inconsistenti",
    description: "Troppi servizi di stampa 3D generici operano con macchinari non calibrati e materiali di bassa qualità, privi di controlli dimensionali. DynamicsX garantisce un'affidabilità di grado industriale utilizzando un parco macchine d'eccellenza (Bambu Lab X1C, Formlabs Form 3, EOS Fuse 1) e materiali certificati. Ogni componente è sottoposto a rigidi protocolli di post-produzione, inclusa la verifica dimensionale con calibri digitali e controllo CMM, per assicurare che ogni parte rispetti le specifiche tecniche necessarie per applicazioni critiche e mediche."
  }
];


const Risolviamo = () => {
  return (
    <section className='lg:pt-18 pt-8'>
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          Le Sfide che Risolviamo
        </h2>

        {/* Description */}
        <p className="text-[15px] font-normal text-[#1E2939] pt-4 max-w-4xl">
          Nei settori ad alta specializzazione, la manifattura tradizionale non riesce a rispondere alle necessità di flessibilità e velocità richieste dal mercato. I nostri clienti affrontano quotidianamente tre principali colli di bottiglia che compromettono l'efficienza operativa, i costi di gestione e, nei casi più critici, gli esiti dei trattamenti medicali. DynamicsX interviene proprio dove le catene di fornitura convenzionali si fermano, offrendo soluzioni tecniche avanzate per superare queste inefficienze strutturali.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-10">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className=" border-l-[4px] border-l-[#1A1A1A] p-6 flex flex-col gap-3"
            >
              <h3 className="text-xl md:text-[22px] font-semibold text-primary-black leading-tight">
                {tech.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-black/70">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Risolviamo