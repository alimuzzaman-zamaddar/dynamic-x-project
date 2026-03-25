import React from 'react'
import Container from '../../../shared/Container'

const Materiali = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Materiali & Tecnologie di Stampa</h2>
        <div className="flex md:flex-row flex-col lg:gap-18 gap-8 mt-10">
          <div className="w-full">
            <div className="border-b-2 border-black pb-5 w-full">
              <div className="w-full">
                <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>Dime di Montaggio</h4>
                <h5 className='text-xs font-normal text-[#1E2939] pt-3'></h5>
              </div>
            </div>
            <div className="border-b-2 border-black pb-10 w-full">
              <div className="w-full">
                <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>Nylon CF</h4>
                <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Fibra di carbonio rinforzata, elevata rigidità strutturale</h5>
              </div>
            </div>
            <div className="border-b-2 border-black pb-10 w-full">
              <div className="w-full">
                <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>PETG Industriale</h4>
                <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Resistenza chimica e meccanica per ambienti gravosi</h5>
              </div>
            </div>
            <div className="border-b-2 border-black pb-10 w-full">
              <div className="w-full">
                <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>ABS</h4>
                <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Tenacità e stabilità termica per uso continuativo</h5>
              </div>
            </div>
            <div className=" pb-10 w-full">
              <div className="w-full">
                <h4 className='text-[#0A0A0A] text-base font-semibold pt-3'>PC (Policarbonato)</h4>
                <h5 className='text-xs font-normal text-[#1E2939] pt-3'>Trasparenza, impatto e temperature elevate</h5>
              </div>
            </div>

          </div>
          <div className="w-full flex flex-col gap-4">
            <div className=" py-6">
              <h4 className='text-[#0A0A0A] text-base font-bold'>Tecnologie di Stampa</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-4'>Selezioniamo la tecnologia più adatta in base alla geometria, al materiale e alla funzione richiesta dal componente.</h5>
            </div>
            <div className="rounded-sm border border-black p-3">
              <h4 className='text-[#0A0A0A] text-base font-bold'>FDM</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-4'>Ideale per prototipi funzionali e fixture di grandi dimensioni con materiali tecnici ad alta resistenza.</h5>
            </div>
            <div className="rounded-sm border border-black p-3">
              <h4 className='text-[#0A0A0A] text-base font-bold'>SLA</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-4'>Alta risoluzione superficiale per maschere di precisione e componenti con tolleranze strette.</h5>
            </div>
            <div className="rounded-sm border border-black p-3">
              <h4 className='text-[#0A0A0A] text-base font-bold'>SLS</h4>
              <h5 className='text-xs font-normal text-[#1E2939] pt-4'>Geometrie complesse senza supporti, per parti funzionali con requisiti meccanici elevati.</h5>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Materiali