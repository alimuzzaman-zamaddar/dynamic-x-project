import React from 'react'
import Container from '../../../shared/Container'
import { Light, Materialli, Tech } from '../../SvgContainer/SvgContainer'

const Vita = () => {
  return (
    <section>
      <Container>
        <h2 className="section-title mb-3">
          Dai Vita alle Tue Idee
        </h2>

        <p className="section-description">
          Stiamo creando un catalogo di stampa 3D rivoluzionario. Esplora presto tecnologie innovative e materiali avanzati per trasformare ogni tua visione in realtà.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* Item 1 */}
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Materialli />
            </div>
            <h3 className="font-semibold text-black">
              Materiali Avanzati
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Resine, filamenti tecnici e polveri metalliche selezionati tra i migliori sul mercato.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Tech />
            </div>
            <h3 className="font-semibold text-black">
              Tecnologie d'Avanguardia
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              FDM, SLA, SLS e altro: scopri e confronta le tecnologie ideali per ogni progetto.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <Light />
            </div>
            <h3 className="font-semibold text-black">
              Ispirazioni Illimitate
            </h3>
            <p className="text-xs text-gray-600 leading-[160%]">
              Progetti, tutorial e casi studio per stimolare la tua creatività e potenziare le tue idee.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Vita