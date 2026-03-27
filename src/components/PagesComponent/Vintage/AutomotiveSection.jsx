export default function AutomotiveSection() {
  return (
    <section className="section">
      <div className="container-main">
        <div className="section-header text-left">
          <h2 className="section-title mb-4">
            Automotive d'Epoca & Parti Rare
          </h2>

          <p className="section-description max-w-[800px]">
            Rigeneriamo componenti fuori produzione per auto storiche con
            precisione originale. Digitalizziamo ogni pezzo e lo ricreiamo con
            materiali superiori agli standard OEM — per restauratori esigenti,
            collezionisti appassionati e officine specializzate.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              className="px-6 py-3 cursor-pointer rounded-full border border-[var(--color-border-gray)] 
                           text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Riproduzione di Precisione
            </button>
            <button
              className="px-6 py-3 cursor-pointer rounded-full border border-[var(--color-border-gray)] 
                           text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Materiali Migliorati
            </button>
            <button
              className="px-6 py-3 cursor-pointer rounded-full border border-[var(--color-border-gray)] 
                           text-sm font-medium hover:bg-black hover:text-white transition"
            >
              Fuori Produzione
            </button>
          </div>
        </div>

        {/* ===== PROBLEM SECTION ===== */}
        <div className="mt-12">
          <h3 className="section-title mb-4">Il Problema che Risolviamo</h3>

          <p className="section-description max-w-[900px]">
            Trovare un componente originale per un'automobile degli anni '50,
            '60 o '70 è spesso una missione impossibile. I pezzi di ricambio non
            esistono più, i cataloghi sono esauriti da decenni e il mercato
            dell'usato offre parti consumate o irrecuperabili. Noi trasformiamo
            questo ostacolo in un'opportunità: digitalizziamo il pezzo originale
            tramite scansione 3D ad alta risoluzione e lo riproduciamo
            fedelmente.
          </p>
        </div>

        {/* ===== BEFORE / AFTER GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* BEFORE */}
          <div>
            <div className="bg-[#F2EEEE] h-[80px] flex items-center justify-center text-xl font-semibold">
              1
            </div>

            <div className="mt-4">
              <h4 className="item-title mb-2">Prima</h4>
              <p className="item-description">
                Componente introvabile, deteriorato o assente. Il restauro si
                blocca. Il collezionista rinuncia alla fedeltà storica.
              </p>
            </div>
          </div>

          {/* AFTER */}
          <div>
            <div className="bg-[#F2EEEE] h-[80px] flex items-center justify-center text-xl font-semibold">
              2
            </div>

            <div className="mt-4">
              <h4 className="item-title mb-2">Dopo</h4>
              <p className="item-description">
                Pezzo riprodotto con geometria identica all’originale, materiali
                tecnici selezionati e finitura pronta per il montaggio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
