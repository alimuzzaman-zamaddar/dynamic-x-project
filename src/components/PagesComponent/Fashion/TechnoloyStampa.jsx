import React from 'react'
import Container from '../../../shared/Container'
import { FDM, SLA } from '../../SvgContainer/SvgContainer'

const TechnoloyStampa = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Tecnologie di Stampa</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Selezioniamo la tecnologia di stampa ottimale per ogni progetto, bilanciando risoluzione, materiali e costi. Le nostre tecnologie principali si integrano perfettamente nel workflow creativo fashion.</p>
        <div className="flex md:flex-row flex-col gap-4 my-10">
          <div className="flex gap-x-4">
            <FDM />
            <div className="">
              <h4 className='text-[#0A0A0A] text-base font-bold'>FDM — Fused Deposition Modeling</h4>
              <h5 className='text-xs font-normal text-[#1E2939] py-4'>Ideale per prototipi rapidi e pezzi strutturali. L'uso di TPU flessibile permette di creare suole e inserti resistenti con costi contenuti e tempi di produzione ridotti.</h5>
              <ul className='flex flex-col gap-1'>
                <li className='text-xs font-normal text-[#1E2939]'>Prototipazione rapida</li>
                <li className='text-xs font-normal text-[#1E2939]'>Materiali flessibili (TPU)</li>
                <li className='text-xs font-normal text-[#1E2939]'>Ideale per grandi volumi</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-4">
            <SLA />
            <div className="">
              <h4 className='text-[#0A0A0A] text-base font-bold'>SLA — Stereolithography</h4>
              <h5 className='text-xs font-normal text-[#1E2939] py-4'>Garantisce una risoluzione eccezionale per accessori couture e dettagli finissimi. Le resine elastiche offrono precisione e flessibilità, ideali per pezzi da passerella.</h5>
              <ul className='flex flex-col gap-1'>
                <li className='text-xs font-normal text-[#1E2939]'>Altissima risoluzione</li>
                <li className='text-xs font-normal text-[#1E2939]'>Dettagli micro-strutturali</li>
                <li className='text-xs font-normal text-[#1E2939]'>Finiture lisce e lucide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-center flex flex-wrap md:gap-0 gap-3 pb-10">
          <div className="xl:h-60 h-40 xl:w-60 w-40 rounded-full border-2 border-[#3D3A6B] flex flex-col justify-center px-8 -mr-10 shrink-0">
            <h4 className='text-[#0A0A0A] text-base font-bold text-center'>Brief</h4>
            <h5 className='text-xs font-normal text-[#1E2939] py-4 text-center'>Definizione degli obiettivi e dei requisiti.</h5>
          </div>
          <div className="xl:h-60 h-40 xl:w-60 w-40 rounded-full border-2 border-[#3D3A6B] flex flex-col justify-center px-8 xl:-mr-10 shrink-0">
            <h4 className='text-[#0A0A0A] text-base font-bold text-center'>Selezione</h4>
            <h5 className='text-xs font-normal text-[#1E2939] py-4 text-center'>Scelta dei materiali e del design.</h5>
          </div>
          <div className="xl:h-60 h-40 xl:w-60 w-40 rounded-full border-2 border-[#3D3A6B] flex flex-col justify-center px-8 -mr-10 shrink-0">
            <h4 className='text-[#0A0A0A] text-base font-bold text-center'>Stampa</h4>
            <h5 className='text-xs font-normal text-[#1E2939] py-4 text-center'>Processo di produzione e realizzazione.</h5>
          </div>
          <div className="xl:h-60 h-40 xl:w-60 w-40 rounded-full border-2 border-[#3D3A6B] flex flex-col justify-center px-8 xl:-mr-10 shrink-0">
            <h4 className='text-[#0A0A0A] text-base font-bold text-center'>Consegna</h4>
            <h5 className='text-xs font-normal text-[#1E2939] py-4 text-center'>Distribuzione del prodotto finale.</h5>
          </div>
        </div>
        <h5 className='text-xs font-normal text-[#1E2939] text-center'>Il nostro processo garantisce trasparenza dalla fase creativa alla consegna, trasformando la tua visione in realtà tangibile.</h5>
      </Container>
    </section>
  )
}

export default TechnoloyStampa