import React from 'react'
import Container from '../../../shared/Container'

const Moda = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Materiali per la Moda</h2>
        <p className='text-[15px] font-normal text-[#1E2939] pt-4'>La scelta del materiale è parte integrante del processo creativo. Utilizziamo solo materiali selezionati per le loro proprietà meccaniche, estetiche e di compatibilità con il corpo umano — fondamentali per accessori che devono essere indossati con comfort e stile..</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="border-l-4 border-black px-6 pb-3">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>TPU Flessibile</h4>
            <h5 className='text-[15px] font-normal text-[#1E2939]'>Poliuretano termoplastico ad alta flessibilità, resistente all'abrasione e agli urti. Perfetto per suole, inserti morbidi, cinturini e ogni applicazione che richieda elasticità e durata nel tempo. Disponibile in diverse durezze Shore per calibrare la resa tattile del pezzo finale.</h5>
          </div>
          <div className="border-l-4 border-black px-6 pb-3">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>TPU Flessibile</h4>
            <h5 className='text-[15px] font-normal  text-[#1E2939]'>Poliuretano termoplastico ad alta flessibilità, resistente all'abrasione e agli urti. Perfetto per suole, inserti morbidi, cinturini e ogni applicazione che richieda elasticità e durata nel tempo. Disponibile in diverse durezze Shore per calibrare la resa tattile del pezzo finale.</h5>
          </div>
          <div className="border-l-4 border-black px-6 pb-3">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>TPU Flessibile</h4>
            <h5 className='text-[15px] font-normal text-[#1E2939]'>Poliuretano termoplastico ad alta flessibilità, resistente all'abrasione e agli urti. Perfetto per suole, inserti morbidi, cinturini e ogni applicazione che richieda elasticità e durata nel tempo. Disponibile in diverse durezze Shore per calibrare la resa tattile del pezzo finale.</h5>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Moda