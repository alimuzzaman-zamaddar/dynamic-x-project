import React from 'react'
import Container from '../../../shared/Container'

const Qualita = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h3 className='text-[14px] font-bold text-black'>Qualità che si Vede. Precisione che si Tocca.</h3>
        <div className="flex md:flex-row flex-col justify-between gap-y-4 mt-10">
          <div className="">
            <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A] text-center'>25μm</h2>
            <h3 className='text-[14px] font-bold text-black text-center py-3'>Spessore di Strato</h3>
            <p className='text-xs font-normal text-[#1E2939] text-center max-w-60'>Risoluzione SLA per superfici perfettamente lisce, pronte per la colata senza post-lavorazione intensiva.</p>
          </div>
          <div className="">
            <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A] text-center'>100 %</h2>
            <h3 className='text-[14px] font-bold text-black text-center py-3'>Resine Castable</h3>
            <p className='text-xs font-normal text-[#1E2939] text-center max-w-60'>Solo materiali certificati per fusione a cera persa, compatibili con oro, argento, platino e leghe speciali.</p>
          </div>
          <div className="">
            <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A] text-center'>48h</h2>
            <h3 className='text-[14px] font-bold text-black text-center py-3'>Tempi di Consegna</h3>
            <p className='text-xs font-normal text-[#1E2939] text-center max-w-60'>Produzione rapida per prototipi urgenti e campionari stagionali, senza mai sacrificare la qualità finale.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Qualita