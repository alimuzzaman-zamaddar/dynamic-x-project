import React from 'react'
import Inti from "../../../assets/img/inti.png"
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Iniziate = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Iniziate a Collaborare con Noi</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Inviateci il vostro file 3D e scoprite come la nostra tecnologia può elevare il vostro prossimo progetto. Offriamo consulenza tecnica preventiva per valutare insieme fattibilità, materiali e specifiche di stampa ideali per ogni creazione.</p>
        <div className="my-10 p-6 bg-[#DDE0EF] flex gap-4 items-center">
          <img src={Inti} alt="Inti" />
          <p className='text-xs font-normal text-[#1E2939]'>Ogni progetto è trattato con la massima riservatezza. I vostri file e i vostri design sono protetti da accordi di non divulgazione disponibili su richiesta.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to={"/upload-design"}>
            <button
              className='px-7 py-3 rounded-4xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
            >
              Richiedi un Preventivo
            </button>
          </Link>
          <Link to={"/upload-design"}>
            <button
              className='px-7 py-3 rounded-4xl hover:bg-[#1A1A2E] cursor-pointer hover:text-white bg-transparent text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
            >
              Scopri i Materiali
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Iniziate