import React from 'react'
import Container from '../../../shared/Container'

const technologies = [
  {
    id: 1,
    title: "Cataloghi di Ispirazione",
    description: "Una selezione curata di case history, dal prototipo rapido alla produzione industriale in serie."
  },
  {
    id: 2,
    title: "Risorse per Ogni Maker",
    description: "Dall'hobbista al professionista, troverai strumenti e contenuti su misura per ogni livello di competenza."
  }
];

const Pensato = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className="section-title mb-3">
          Un Catalogo Pensato per Te
        </h2>

        <p className="section-description">
          Abbiamo selezionato i migliori prodotti e servizi per un'esperienza di stampa 3D di alto livello.
        </p>
        <div className="grid grid-cols-1 gap-6 mt-10">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="border-2 border-[#1A1A1A]/40 border-l-[4px] border-l-[#1A1A1A] p-6 flex flex-col gap-6"
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

export default Pensato