import React from 'react'
import Container from '../../../shared/Container'

const Micro = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Micro-Fusione: L'Arte dell'Eccellenza Orefice</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Dove la precisione assoluta diviene pura poesia. Eleviamo il concetto di manifattura luxury attraverso una risoluzione d'avanguardia, cesellando ogni singolo dettaglio per trasformare le vostre visioni in capolavori di ineguagliabile perfezione sartoriale.</p>
        <div className="flex md:flex-row flex-col mt-10 border border-[#D1D5DC]">
          <div className="w-full">

            <div className="py-4 px-6 border-r  border-[#D1D5DC]">
              <h4 className='text-[#0A0A0A] text-[14px] font-bold text-center'>Alta Gioielleria</h4>
            </div>
          </div>
          <div className="w-full">

            <div className="py-4 px-6 border-r  border-[#D1D5DC]">
              <h4 className='text-[#0A0A0A] text-[14px] font-bold text-center'>Micro-Dettaglio Sublime</h4>
            </div>
          </div>
          <div className="w-full">

            <div className="py-4 px-6 border-r  border-[#D1D5DC]">
              <h4 className='text-[#0A0A0A] text-[14px] font-bold text-center'>Fusione a Cera Persa</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Micro