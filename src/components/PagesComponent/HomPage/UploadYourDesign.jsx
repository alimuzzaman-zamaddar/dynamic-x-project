import React from 'react'
import { Analysis, Carica, Consegna, FileUpload, Preventivo, Prodizune } from '../../SvgContainer/SvgContainer'
import { FeatureCard } from '../../CommonComponents/FeatureCard'
import Container from '../../../shared/Container'

const UploadYourDesign = () => {
  return (
    <section className='bg-black py-16 px-4'>
      <Container>
        <h4 className="text-white text-4xl font-normal text-center leading-tight">
          Come Funziona: dal File alla Produzione
        </h4>

        {/* Cards grid — 2 cols on mobile, 3 on md, 5 on lg+ */}
        <div className="py-8 sm:py-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-7">
          <FeatureCard icon={Carica} title="UPLOAD" description="Carica il file in formato STL, STEP. OBL o file 2D" />
          <FeatureCard icon={Analysis} title="ANALISI" description="Verifichiamo il tuo progetto in tempo reale" />
          <FeatureCard icon={Preventivo} title="PREVENTIVO" description="Ricevi un offerta chiara e immediata tempo di realizzazione" />
          <FeatureCard icon={Prodizune} title="PRODUZIONE" description="Stampiamo con precisione" />
          <FeatureCard icon={Consegna} title="CONSEGNA" description="Ricevo il tuo modello in pochi giorni" />
        </div>

        {/* Upload drop-zone */}
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.16)",
            background: "#fff",
            backdropFilter: "blur(5.1px)",
          }}
          className="relative h-auto w-full py-10 sm:py-14 px-4 rounded-xl flex items-center justify-center cursor-pointer"
        >
          <div className="flex flex-col gap-y-4 sm:gap-y-5 items-center pointer-events-none">
            <FileUpload />
            <span className="text-xs sm:text-sm md:text-base font-normal leading-[133%] text-black text-center">
              Upload Your Design
            </span>
          </div>
          {/* <input
            type="file"
            className="absolute top-0 left-0 h-full w-full rounded-xl opacity-0 cursor-pointer"
          /> */}
        </div>
      </Container>
    </section>
  )
}

export default UploadYourDesign