import React from 'react'
import Container from '../../../shared/Container'
import { Link } from 'react-router'

const Portata = () => {
  return (
    <section className='lg:pt-18 pt-8'>
      <Container>
        <h2 className="section-title mb-3">
          Il Futuro è a Portata di Clic.
        </h2>
        <h3 className="font-semibold text-[#7C6FCD]">
          Molto Presto.
        </h3>
        <p className="section-description">
          Il nostro catalogo stampa 3D sta arrivando. Preparati a creare senza limiti: la rivoluzione inizia con un clic.
        </p>
        <Link to={"/upload-design"}>
          <button
            className='px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold mt-10'
          >
            Iscriviti e Resta Aggiornato
          </button>
        </Link>
      </Container>
    </section>
  )
}

export default Portata