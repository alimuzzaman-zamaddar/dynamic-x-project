import React from 'react'
import Container from '../../../shared/Container'
import Ochiali from "../../../assets/img/Fashion/ImageWithFallback.png"
import Ochiali1 from "../../../assets/img/Fashion/ImageWithFallback (1).png"
import Ochiali2 from "../../../assets/img/Fashion/ImageWithFallback (2).png"
import Ochiali3 from "../../../assets/img/Fashion/ImageWithFallback (3).png"

const Cosa = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Cosa Stampiamo</h2>
        <p className='text-xs font-light text-[#1E2939] pt-4'>Dal prototipo alla produzione, la nostra gamma copre ogni esigenza del designer di moda moderno. Ogni categoria di prodotto è supportata da una profonda expertise tecnica e da materiali selezionati per rispondere alle specifiche esigenze estetiche e funzionali del settore.</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="">
            <img src={Ochiali} alt="Ochiali" className='xl:h-61 h-40 w-full' />
            <h4 className='text-[#0A0A0A] text-base text-center font-bold py-3'>Occhiali</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939]'>Montature e occhiali da sole con forme audaci, strutture leggere e personalizzazioni su misura. Ideali per collezioni limited edition e collaborazioni con designer emergenti..</h5>
          </div>
          <div className="">
            <img src={Ochiali1} alt="Ochiali" className='xl:h-61 h-40 w-full' />
            <h4 className='text-[#0A0A0A] text-base text-center font-bold py-3'>Accessori Couture</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939] '>Collane, bracciali, cinture e dettagli decorativi che sfidano le convenzioni. Geometrie complesse, texture superficiali uniche e dettagli micro-strutturali di altissimo livello.</h5>
          </div>
          <div className="">
            <img src={Ochiali2} alt="Ochiali" className='xl:h-61 h-40 w-full' />
            <h4 className='text-[#0A0A0A] text-base text-center font-bold py-3'>Inserti Strutturali</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939]'>Supporti interni, rinforzi e anime per capi e accessori. Leggeri, resistenti e modellabili per adattarsi a qualsiasi silhouette o costruzione sartoriale.</h5>
          </div>
          <div className="">
            <img src={Ochiali3} alt="Ochiali" className='xl:h-61 h-40 w-full' />
            <h4 className='text-[#0A0A0A] text-base text-center font-bold py-3'>Prototipi Scarpe</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939]'>Suole, tomaie e componenti calzaturieri stampati per verificare forma, ergonomia e resa estetica prima della produzione industriale. Tempi di sviluppo drasticamente ridotti.</h5>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Cosa