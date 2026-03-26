import React from 'react'
import Container from '../../../shared/Container'

const Lusso = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Il Partner Ideale per il Lusso</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Ci rivolgiamo a designer indipendenti, laboratori orafi, studi di progettazione e maison che cercano un fornitore tecnico all'altezza delle loro ambizioni creative. La nostra produzione è pensata per chi considera la qualità un punto di partenza, non un traguardo.</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="border-l-3 border border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Designer & Creativi</h4>
            <h5 className='text-xs font-normal text-[#1E2939]'>Trasformate i vostri file CAD in modelli fisici di altissima fedeltà, pronti per la presentazione al cliente o per la produzione diretta.</h5>
          </div>
          <div className="border-l-3 border border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Laboratori Orafi</h4>
            <h5 className='text-xs font-normal  text-[#1E2939]'>Integrate la stampa 3D SLA nel vostro ciclo produttivo per ampliare l'offerta, ridurre i tempi di campionatura e aumentare la competitività.</h5>
          </div>
          <div className="border-l-3 border border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Maison & Brand Luxury</h4>
            <h5 className='text-xs font-normal text-[#1E2939]'>Sviluppate nuove collezioni con la libertà formale che solo la manifattura digitale può offrire, mantenendo i più alti standard qualitativi del settore.</h5>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Lusso