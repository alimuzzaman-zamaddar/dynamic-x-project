import React from 'react'
import Container from '../../../shared/Container'

const Dime = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Dime & Componenti Industriali</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Attrezzature, maschere e parti funzionali per la produzione. Riduciamo tempi e costi nella produzione industriale con dime, fixture e componenti su misura, progettati per integrarsi direttamente nelle linee di lavoro esistenti.</p>
        <div className="flex flex-col gap-8 mt-12">
          <div className="border-t-2 border-black pt-3 flex flex-wrap gap-3 justify-between">
            <div className="">
              <h4 className='text-[#0A0A0A] text-lg font-bold'>Dime di Montaggio</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Posizionamento preciso e ripetibile per assemblaggio componenti</h5>
            </div>
            <div className="">
              <h4 className='text-[#0A0A0A] text-lg font-bold'>Maschere di Foratura</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Guide per lavorazioni meccaniche ad alta precisione e ripetibilità</h5>
            </div>
          </div>
          <div className="border-t-2 border-black pt-3 flex flex-wrap gap-3 justify-between">
            <div className="">
              <h4 className='text-[#0A0A0A] text-lg font-bold'>Supporti Linea</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Fixture personalizzate per ottimizzare il flusso produttivo</h5>
            </div>
            <div className="">
              <h4 className='text-[#0A0A0A] text-lg font-bold'>Carter Meccanici</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Protezioni e coperture funzionali per macchinari industriali</h5>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Dime