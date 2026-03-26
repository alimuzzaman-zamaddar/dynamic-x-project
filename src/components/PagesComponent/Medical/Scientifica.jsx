import React from 'react'
import Container from '../../../shared/Container'

const Scientifica = () => {
  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Ingegneria di Precisione per l'Avanguardia Scientifica</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>Supportiamo l'innovazione nei settori biotech e della ricerca avanzata fornendo componenti customizzati ad altissima precisione. Grazie a tecnologie di manifattura additiva di ultima generazione, trasformiamo geometrie complesse in realtà tangibili con tolleranze micrometriche, abbattendo drasticamente i tempi di sviluppo e i costi di prototipazione. Selezioniamo rigorosamente materiali ad elevate performance per garantire compatibilità chimica, integrità strutturale e precisione assoluta anche negli ambienti di laboratorio più rigorosi..</p>
        <div className="flex md:flex-row flex-col gap-4 mt-10 border border-[#111]">
          <div className="border-l-3 border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Supporti Pipette Custom</h4>
            <h5 className='text-xs font-normal text-[#1E2939]'>Sistemi di stoccaggio e rack personalizzati per pipette, ingegnerizzati per massimizzare l'efficienza del workflow e ottimizzare lo spazio operativo in laboratorio.</h5>
          </div>
          <div className="border-l-3 border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Alloggiamenti Sensori Precision</h4>
            <h5 className='text-xs font-normal  text-[#1E2939]'>Involucri ergonomici per sensori di monitoraggio ambientale e di flusso, progettati per un'integrazione perfetta e una protezione superiore in contesti di ricerca critica.</h5>
          </div>
          <div className="border-l-3 border-black p-6">
            <h4 className='text-[#0A0A0A] text-base font-bold py-3'>Architetture Microfluidiche</h4>
            <h5 className='text-xs font-normal text-[#1E2939]'>Componenti fluidici su misura, inclusi manifold e raccordi a basso volume morto, essenziali per l'efficienza dei sistemi lab-on-chip e di analisi miniaturizzata.</h5>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Scientifica