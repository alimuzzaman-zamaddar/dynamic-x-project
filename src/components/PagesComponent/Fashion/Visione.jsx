import React from 'react'
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Visione = () => {
  return (
    <section className='lg:pt-18 pt-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Dai Vita alla Tua Visione</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Trasforma l'immaginazione in alta moda. Che tu abbia un concept audace o un prototipo pronto, il nostro team di esperti è al tuo fianco per elevare ogni dettaglio attraverso l'eccellenza della manifattura digitale.</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="rounded-sm border border-[#D1D5DC] p-6 flex flex-col items-center">
            <h4 className='text-[#0A0A0A] text-base text-center font-bold'>Consulenza Creativa</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939] py-4'>Discutiamo le tue ambizioni sartoriali. Un nostro specialista analizzerà la fattibilità del tuo progetto entro 24 ore.</h5>
            <Link to={"/upload-design"}>
              <button
                className='px-7 py-3 rounded-4xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
              >
                Richiedi Consulenza
              </button>
            </Link>
          </div>
          <div className="rounded-sm border border-[#D1D5DC] p-6 flex flex-col items-center">
            <h4 className='text-[#0A0A0A] text-base text-center font-bold'>Inizia la Produzione</h4>
            <h5 className='text-xs font-normal text-center text-[#1E2939] py-4'>Condividi il tuo file 3D e scopri come possiamo dare forma al tuo design esclusivo con precisione sartoriale.</h5>
            <Link to={"/upload-design"}>
              <button
                className='px-7 py-3 rounded-4xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
              >
                Carica il Progetto
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Visione