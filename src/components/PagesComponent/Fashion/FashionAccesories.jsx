import React from 'react'
import Container from "../../../shared/Container";


const FashionAccesories = () => {
  return (
    <section className='lg:py-18 py-8 '>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Fashion & Design Accessori Innovativi</h2>
        <p className='text-xs font-light text-[#1E2939] pt-4'>Dove la tecnologia incontra l'alta moda. Realizziamo accessori fashion, strutture tessili stampate in 3D e pezzi da runway che ridefiniscono i confini tra artigianato tradizionale e produzione digitale. Ogni pezzo è pensato per stupire: dalla fase prototipale alla passerella, accompagniamo designer e team di produzione in ogni step creativo.</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10">
          <div className="bg-[#F2F0EE] p-6 rounded-sm">
            <h4 className='text-[#0A0A0A] text-lg font-bold'>Accessori Couture</h4>
            <h5 className='text-xs font-normal text-[#1E2939] pt-3 pb-4'>Pezzi unici per collezioni haute couture e capsule di lusso, con finiture impeccabili e geometrie impossibili da ottenere con metodi tradizionali.</h5>
          </div>
          <div className="bg-[#F2F0EE] p-6 rounded-sm">
            <h4 className='text-[#0A0A0A] text-lg font-bold'>Prototipi Runway</h4>
            <h5 className='text-xs font-normal text-[#1E2939] pt-3 pb-4'>Iterazione rapida per la moda da passerella: dalla concept sketch al prototipo indossabile in tempi ridotti, senza compromessi estetici.</h5>
          </div>
          <div className="bg-[#F2F0EE] p-6 rounded-sm">
            <h4 className='text-[#0A0A0A] text-lg font-bold'>Strutture Tessili</h4>
            <h5 className='text-xs font-normal text-[#1E2939] pt-3 pb-4'>Inserti e reticoli stampati che si integrano con i tessuti, aprendo nuove possibilità costruttive per la moda sperimentale e tecnica.</h5>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FashionAccesories