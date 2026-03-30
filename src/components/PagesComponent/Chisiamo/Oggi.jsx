import React from 'react'
import Container from '../../../shared/Container'

const Oggi = () => {
  return (
    <section>
      <Container>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          La Nostra Missione
        </h2>

        {/* Description */}
        <p className="text-[15px] font-normal text-[#1E2939] pt-4 max-w-4xl">
          La missione di DynamicsX è eliminare le lacune critiche nella catena di fornitura in quattro settori ad alto valore: produzione di droni, restauro di auto d'epoca, medicina veterinaria e attrezzature industriali specializzate. Grazie alla manifattura additiva, realizziamo componenti ingegnerizzati di precisione su richiesta, sostituendo parti fuori produzione, non reperibili o troppo costose tramite i canali tradizionali. Il nostro mercato di riferimento attuale è vasto e in rapida crescita, includendo circa 2,3 milioni di veicoli d'epoca in Italia che necessitano di ricambi non standard, oltre 40.000 operatori di droni registrati e un comparto di ortopedia veterinaria che registra un tasso di crescita annuo dell'8%.
        </p>
        <div className="py-10 flex flex-col gap-4">
          <div className="flex gap-7 items-center">
            <div className="py-4 px-8 bg-[#E8E8E8] flex justify-center items-center text-[28px] text-[#1A1A1A] font-extrabold">
              1
            </div>
            <div className="">
              <h3 className="text-sm font-semibold text-[#0A0A0A]">
                Oggi
              </h3>
              <p className="text-[15px] text-[#1E2939] mt-2">
                Produzione di telai per droni e componenti strutturali, parti meccaniche e di interni per auto d'epoca, impianti ortopedici veterinari, guide chirurgiche e dime industriali su misura.
              </p>
            </div>
          </div>
          <div className="flex gap-7 items-center">
            <div className="py-4 px-8 bg-[#E8E8E8] flex justify-center items-center text-[28px] text-[#1A1A1A] font-extrabold">
              2
            </div>
            <div className="">
              <h3 className="text-sm font-semibold text-[#0A0A0A]">
                Domani
              </h3>
              <p className="text-[15px] text-[#1E2939] mt-2">
                Sviluppo di biostampa conforme alle normative FDA/CE per impianti specifici per il paziente, creazione di scaffold riassorbibili per la rigenerazione ossea e partnership strategiche con chirurghi ortopedici e cliniche veterinarie per il co-sviluppo tecnologico.
              </p>
            </div>
          </div>

        </div>
        <h2 className="lg:text-4xl text-2xl font-semibold text-[#0A0A0A]">
          La Nostra Visione
        </h2>

        {/* Description */}
        <p className="text-[15px] font-normal text-[#1E2939] pt-4 ">
          L'obiettivo di DynamicsX è diventare il partner italiano di riferimento per la manifattura additiva di precisione nei settori di nicchia entro il 2027, implementando una linea di produzione medicale dedicata e certificata secondo la norma ISO 13485. La nostra strategia poggia su tre pilastri fondamentali: la Velocità, con uno standard di consegna in 48 ore; la Precisione, garantita da una tolleranza dimensionale di ±0.1mm; e la Personalizzazione totale, con soluzioni realizzate su misura e assenza di quantitativi minimi d'ordine.
        </p>
      </Container>
    </section>
  )
}

export default Oggi