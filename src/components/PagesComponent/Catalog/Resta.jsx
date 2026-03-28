import React from 'react'
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Resta = () => {
  return (
    <section>
      <Container>
        <h2 className="section-title mb-3">
          Resta Aggiornato!
        </h2>

        <p className="section-description">
          Il catalogo è quasi pronto. Iscriviti alla newsletter per scoprire in anteprima novità, offerte e risorse esclusive sul mondo della stampa 3D.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-between my-10">

          {/* Item 1 */}
          <div className="flex flex-col gap-3">

            <h3 className="font-semibold text-black">
              Anteprime
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Accesso anticipato ai lanci.
            </p>
          </div>
          <div className="flex flex-col gap-3">

            <h3 className="font-semibold text-black">
              Offerte
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Sconti riservati agli iscritti.
            </p>
          </div>
          <div className="flex flex-col gap-3">

            <h3 className="font-semibold text-black">
              Guide
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Consigli pratici per le tue stampe.
            </p>
          </div>
        </div>
        <Link to={"upload-design"}>
          <button
            className='px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Iscriviti Ora e Non Perderti Nulla!
          </button>
        </Link>
        <div className="mt-10">
          <h3 className="font-semibold text-black">
            Perché Iscriversi?
          </h3>
          <ul className="flex justify-between bg-[#F0EDE8] py-4 my-6">
            <li className='text-center text-[20px] font-semibold text-[#364153] w-full'>1</li>
            <li className='text-center text-[20px] font-semibold text-[#364153] w-full'>2</li>
            <li className='text-center text-[20px] font-semibold text-[#364153] w-full'>3</li>
          </ul>
          <div className="flex justify-between">
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold text-black">
                Inserisci la mail
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Registrati in pochi secondi.
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold text-black">
                Ricevi aggiornamenti
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Notizie direttamente in posta.
              </p>
            </div>
            <div className="w-full flex flex-col items-center">
              <h3 className="font-semibold text-black">
                Accesso anticipato
              </h3>
              <p className="text-xs text-gray-600 leading-[160%]">
                Esplora il catalogo per primo.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Resta