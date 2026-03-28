import React from 'react'
import Container from '../../../shared/Container'
import { Link, useNavigate } from 'react-router'

const DynamicsX = () => {
  const navigate = useNavigate();

  return (
    <section className='lg:py-18 py-8'>
      <Container>
        <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>DynamicsX Manifattura Additiva di Precisione</h2>
        <p className='text-xs font-normal text-[#1E2939] pt-4'>DynamicsX produce componenti personalizzati ad alta precisione per droni, automotive d'epoca, veterinaria e industria specializzata. Utilizziamo tecnologie FDM, SLA e SLS per consegnare prototipi in 48 ore e serie produttive in 5–10 giorni lavorativi. Nessun ordine minimo, nessun compromesso sulla qualità.</p>
        <div className="flex flex-wrap gap-4 mt-10">

          <button
            onClick={() => navigate("/#services")}
            className='px-7 py-3 rounded-xl bg-[#1A1A2E] cursor-pointer text-white hover:bg-transparent hover:text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Scopri i nostri servizi
          </button>

          <button
            onClick={() => navigate("/upload-design")}
            className='px-7 py-3 rounded-2xl hover:bg-[#1A1A2E] cursor-pointer hover:text-white bg-transparent text-black border border-[#1A1A2E] duration-300 ease-in-out text-base font-semibold'
          >
            Contattaci
          </button>
        </div>
        <div className="pt-18">
          <h2 className='lg:text-4xl text-2xl font-semibold text-[#0A0A0A]'>Chi Siamo</h2>
          <p className='text-xs font-normal text-[#1E2939] pt-4'>DynamicsX è un'azienda di manifattura 3D all'avanguardia nata per trasformare il modo in cui i componenti ad alta precisione vengono progettati e realizzati. Siamo specializzati nel servire settori di nicchia dove i componenti standard non sono disponibili, offrendo soluzioni su misura che combinano versatilità e rigore tecnico. Attraverso l'impiego di avanzate tecnologie FDM, SLA e SLS, gestiamo l'intero ciclo di vita del prodotto: dal reverse engineering e la ricostruzione CAD fino alle fasi di post-processing e finiture premium. Grazie a un workflow ottimizzato, garantiamo consegne rapide e affidabili, solitamente comprese tra i 3 e i 7 giorni lavorativi.</p>
        </div>
        <div className="my-10">
          <h3 className="font-semibold text-black">
            La Nostra Filosofia
          </h3>
          <p className="text-xs text-gray-600 leading-[160%] mt-4">
            Consideriamo la stampa 3D non come una semplice alternativa, ma come uno strumento strategico fondamentale per la produzione di componenti a bassa tiratura e alta complessità. La nostra missione è garantire standard ingegneristici d'eccellenza per ogni singolo pezzo, indipendentemente dal volume, che si tratti di un prototipo unico o di una serie produttiva da 50 unità. Per raggiungere questi obiettivi, utilizziamo un ampio ventaglio di materiali performanti, tra cui PLA, PETG, Nylon, resine tecniche, TPU e filamenti rinforzati con fibra di carbonio, assicurando che ogni componente soddisfi requisiti specifici di durabilità e precisione.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-black">
            Il Nostro Metodo
          </h3>
          <p className="text-xs text-gray-600 leading-[160%] mt-4">
            Il nostro processo operativo è studiato per offrire un supporto completo e costante al cliente. Si parte dalla ricezione del brief tecnico o del campione fisico, a cui segue un'analisi di fattibilità e una consulenza sui materiali più idonei entro le prime 24 ore. Il percorso prosegue con la modellazione CAD o il reverse engineering, per poi passare alla fase di stampa e al delicato lavoro di post-processing, che include operazioni di levigatura, verniciatura, rivestimenti protettivi e assemblaggio finale. Questo approccio integrato ci permette di mantenere elevati standard qualitativi su ogni progetto, con una tempistica media di realizzazione che varia tra i 5 e i 10 giorni lavorativi.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default DynamicsX