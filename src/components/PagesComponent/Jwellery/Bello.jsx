import React from 'react'
import Container from '../../../shared/Container'

const Bello = () => {
  return (
    <section>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>La Tecnologia al Servizio del Bello</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>La nostra specializzazione nella micro-fusione a cera persa ci posiziona come partner ideale per designer, orafi e maison di lusso che non accettano compromessi sulla qualità. Utilizziamo tecnologia <span className='font-bold'>SLA ad altissima risoluzione</span> per produrre modelli master in resina castable, garantendo superfici lisce, dettagli micrometrici e geometrie complesse che sfidano i limiti della produzione artigianale tradizionale.</p>
        <div className="flex md:flex-row flex-col mt-10 border border-[#D1D5DC]">
          <div className="w-full group">

            <div className="p-8 border-r  border-[#D1D5DC] group bg-transparent group-hover:bg-black duration-300 ease-in-out">
              <h4 className='text-[#0A0A0A] text-[14px] font-bold group-hover:text-white'>Perché la Stampa SLA?</h4>
              <p className='text-xs font-normal text-[#1E2939] pt-4 group-hover:text-white'>La stereolitografia offre la qualità superficiale più elevata disponibile oggi sul mercato, con strati ultrasottili che restituiscono ogni sfumatura del design originale — dal più piccolo motivo traforato alla texture più raffinata.</p>
            </div>
          </div>
          <div className="w-full group">

            <div className="p-8 border-r  border-[#D1D5DC] group bg-transparent group-hover:bg-black duration-300 ease-in-out">
              <h4 className='text-[#0A0A0A] text-[14px] font-bold group-hover:text-white'>Resine Castable Certificate</h4>
              <p className='text-xs font-normal text-[#1E2939] pt-4 group-hover:text-white'>Le nostre resine castable sono state selezionate per garantire una combustione pulita e senza residui, assicurando risultati ottimali in camera di colata e riducendo al minimo i ritocchi post-fusione.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Bello