import React from 'react'
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Futuro = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Il Futuro della Stampa 3D</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Il nuovo catalogo che rivoluzionerà il tuo modo di progettare e stampare in 3D. Stiamo creando qualcosa di straordinario, in arrivo a breve.</p>
        <div className="flex flex-wrap gap-4 mt-10">
          <button
            className='px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Scopri di più
          </button>
          <Link to={"/upload-design"}>
            <button
              className='px-7 py-3 rounded-2xl hover:bg-[#1A1A2E] cursor-pointer hover:text-white bg-transparent text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
            >
              Iscriviti alla Newsletter
            </button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default Futuro