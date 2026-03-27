import React from 'react'
import Container from '../../../shared/Container'

const DynamicsX = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>DynamicsX Manifattura Additiva di Precisione</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>DynamicsX produce componenti personalizzati ad alta precisione per droni, automotive d'epoca, veterinaria e industria specializzata. Utilizziamo tecnologie FDM, SLA e SLS per consegnare prototipi in 48 ore e serie produttive in 5–10 giorni lavorativi. Nessun ordine minimo, nessun compromesso sulla qualità.</p>
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            className='px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Scopri i nostri servizi
          </button>
          <button
            className='px-7 py-3 rounded-2xl hover:bg-[#1A1A2E] cursor-pointer hover:text-white bg-transparent text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Contattaci
          </button>
        </div>
      </Container>
    </section>
  )
}

export default DynamicsX