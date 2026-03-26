import React from 'react'
import Container from '../../../shared/Container'
import { Car, Clock, Usd } from '../../SvgContainer/SvgContainer'

const Pronto = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Pronto a Stampare il Tuo Progetto?</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Carica il tuo file o contattaci per una consulenza tecnica gratuita. Analizziamo la tua geometria e ti proponiamo il materiale e la tecnologia più adatta.</p>
        <div className="flex md:flex-row flex-col gap-6 py-10">
          <div className="">
            <h3 className='text-base font-semibold text-black'>Carica il Tuo File.</h3>
            <h5 className='text-base font-normal text-black py-4'>Inviaci il tuo file CAD o STL. Riceverai un preventivo dettagliato entro 24 ore.</h5>
            <h6 className='text-base font-semibold text-[#1E2939] cursor-pointer'>→ Invia il file</h6>
          </div>
          <div className="">
            <h3 className='text-base font-semibold text-black'>Richiedi Consulenza</h3>
            <h5 className='text-xs font-normal text-black py-4'>Parla con i nostri tecnici per trovare la soluzione ottimale per la tua applicazione.</h5>
            <h6 className='text-base font-semibold text-[#1E2939] cursor-pointer'>→ Contattaci</h6>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <div className="w-full">
            <div className="py-3 rounded-[40px] bg-[#F0EEEB] flex justify-center items-center">
              <Clock />
            </div>
            <h3 className='text-base font-semibold text-black pt-3'>Risposta entro 24h</h3>
          </div>
          <div className="w-full">
            <div className="py-3 rounded-[40px] bg-[#F0EEEB] flex justify-center items-center">
              <Usd />
            </div>
            <h3 className='text-base font-semibold text-black pt-3'>Preventivo gratuito</h3>
          </div>
          <div className="w-full">
            <div className="py-3 rounded-[40px] bg-[#F0EEEB] flex justify-center items-center">
              <Car />
            </div>
            <h3 className='text-base font-semibold text-black pt-3'>Spedizione in tutta Italia</h3>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Pronto