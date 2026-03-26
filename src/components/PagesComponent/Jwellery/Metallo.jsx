import React from 'react'
import Container from '../../../shared/Container'

const Metallo = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Il Processo: Dalla Visione al Metallo</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Un flusso di lavoro collaudato che porta il vostro design dalla schermata al gioiello finito con la massima efficienza e qualità..</p>
        <div className="flex flex-col gap-2 mt-10">
          <div className="bg-[#1A1F2E] py-5 px-8 w-3/4">
            <h2 className='text-[14px] font-bold text-white'>Progetto e Stampa</h2>
          </div>
          <div className="bg-[#2D3560] py-5 px-8 w-full">
            <h2 className='text-[14px] font-bold text-white'>Controllo Qualità</h2>
          </div>
          <div className="bg-[#3D4878] py-5 px-8 w-[90%]">
            <h2 className='text-[14px] font-bold text-white'>Consegna Master</h2>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Metallo