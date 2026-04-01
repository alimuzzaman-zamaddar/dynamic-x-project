import React from 'react';
import Container from '../shared/Container';

const TermsCondition = () => {
  return (
    <section className="py-16 lg:py-40 bg-white text-black">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b border-gray-200 pb-8 mb-12">
            <h1 className="text-3xl lg:text-5xl font-normal leading-tight mb-4">
              Termini e Condizioni di DynamicsX
            </h1>
          </header>

          <div className="space-y-10 text-base leading-relaxed text-black/80">

            {/* Introduzione */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4 uppercase tracking-wider">
                Introduzione
              </h2>
              <p className="mb-4">
                Questi Termini disciplinano l'utilizzo di questa Applicazione e qualsiasi altro Accordo o
                rapporto giuridico con il Titolare in maniera vincolante. Le espressioni con l'iniziale
                maiuscola sono definite nella relativa sezione di questo documento.
              </p>
              <p className="mb-4">L'Utente è pregato di leggere attentamente questo documento.</p>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="mb-1">Questa Applicazione è un servizio di:</p>
                <p className="font-medium">DynamicsX SRL</p>
                <p className="mt-2 text-primary-red">
                  Indirizzo email del Titolare:{' '}
                  <a href="mailto:support@dynamicsx.it" className="underline">
                    support@dynamicsx.it
                  </a>
                </p>
              </div>
            </section>

            {/* Condizioni d'uso */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4 uppercase tracking-wider">
                Condizioni d'uso
              </h2>
              <p className="mb-4">
                Salvo ove diversamente specificato, le condizioni d'uso di questa Applicazione esposte in
                questa sezione hanno validità generale. Ulteriori condizioni d'uso o d'accesso applicabili in
                particolari situazioni sono espressamente indicate in questo documento.
              </p>
            </section>

            {/* Contenuti */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Contenuti su questa Applicazione</h2>
              <p className="mb-4">
                Salvo ove diversamente specificato o chiaramente riconoscibile, tutti i contenuti disponibili
                su questa Applicazione sono di proprietà di o forniti dal Titolare o dei/dai suoi licenzianti.
              </p>
              <p className="mb-4">
                Il Titolare adotta la massima cura affinché il contenuto disponibile su questa Applicazione
                non violi la normativa applicabile o diritti di terze parti. Tuttavia, non sempre è possibile
                raggiungere tale risultato.
              </p>
              <p>
                In tali casi, senza alcun pregiudizio ai diritti ed alle pretese legalmente esercitabili, gli
                Utenti sono pregati di indirizzare i relativi reclami ai recapiti specificati in questo
                documento.
              </p>
            </section>

            {/* Accesso a risorse esterne */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Accesso a risorse esterne</h2>
              <p className="mb-4">
                Tramite questa Applicazione gli Utenti potrebbero avere accesso a risorse fornite da terzi.
                Gli Utenti riconoscono ed accettano che il Titolare non ha alcun controllo su tali risorse e
                che pertanto non risponde del loro contenuto e della loro disponibilità.
              </p>
              <p>
                Le condizioni applicabili alle risorse fornite da terzi, ivi incluse quelle applicabili a
                eventuali concessioni di diritti su contenuti, sono determinate dagli stessi terzi e regolate
                nei relativi termini e condizioni o, in loro assenza, dalla legge.
              </p>
            </section>

            {/* Uso ammesso */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Uso ammesso</h2>
              <p className="mb-4">
                Questa Applicazione ed il Servizio possono essere utilizzati solo per gli scopi per i quali
                sono offerti, secondo questi Termini ed ai sensi della legge applicabile.
              </p>
              <p>
                È responsabilità esclusiva dell'Utente di far sì che l'uso di questa Applicazione e/o del
                Servizio non violi la legge, i regolamenti o i diritti di terzi.
              </p>
            </section>

            {/* Disposizioni comuni */}
            <section className="bg-black text-white p-8 rounded-2xl">
              <h2 className="text-xl font-medium mb-6">Disposizioni comuni</h2>

              <div className="space-y-6 text-sm text-white/80">
                <div>
                  <h3 className="text-base font-medium text-white mb-2">Nessuna rinuncia implicita</h3>
                  <p>
                    Il mancato esercizio di diritti di legge o pretese derivanti da questi Termini da parte del
                    Titolare non costituisce rinuncia agli stessi. Nessuna rinuncia può essere considerata
                    definitiva in relazione ad uno specifico diritto o a qualsiasi altro diritto.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white mb-2">Interruzione del Servizio</h3>
                  <p className="mb-3">
                    Per garantire il miglior livello di servizio possibile, il Titolare si riserva di
                    interrompere il Servizio per finalità di manutenzione, aggiornamenti di sistema o per
                    qualsiasi altra modifica, dandone idonea notizia agli Utenti.
                  </p>
                  <p className="mb-3">
                    Nei limiti di legge, il Titolare si riserva di sospendere o cessare completamente
                    l'attività del Servizio. In caso di cessazione dell'attività del Servizio, il Titolare si
                    adopererà affinché gli Utenti possano estrarre i propri dati personali e le informazioni e
                    rispetterà i diritti degli Utenti relativi all'utilizzo continuato del prodotto e/o al
                    risarcimento, secondo le disposizioni di legge.
                  </p>
                  <p>
                    Inoltre, il Servizio potrebbe non essere disponibile per cause che si sottraggono al
                    ragionevole controllo del Titolare, quali cause di forza maggiore (p. es.
                    malfunzionamenti infrastrutturali, blackout etc.).
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white mb-2">Rivendita del Servizio</h3>
                  <p>
                    Gli Utenti non sono autorizzati a riprodurre, duplicare, copiare, vendere, rivendere o
                    sfruttare questa Applicazione o il Servizio in toto o in parte senza previo consenso
                    scritto del Titolare, espresso direttamente o attraverso un legittimo programma di
                    rivendite.
                  </p>
                </div>
              </div>
            </section>

            {/* Proprietà intellettuale */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Proprietà intellettuale</h2>
              <p className="mb-4">
                Senza pregiudizio ad alcuna previsione più specifica contenuta nei Termini, i diritti di
                proprietà intellettuale ed industriale, quali ad esempio diritti d'autore, marchi, brevetti e
                modelli relativi a questa Applicazione sono detenuti in via esclusiva dal Titolare o dai suoi
                licenzianti e sono tutelati ai sensi della normativa e dei trattati internazionali applicabili
                alla proprietà intellettuale.
              </p>
              <p>
                Tutti i marchi — denominativi o figurativi — ed ogni altro segno distintivo, ditta, marchio di
                servizio, illustrazione, immagine o logo che appaiono in collegamento con questa Applicazione
                sono e restano di esclusiva proprietà del Titolare o dei suoi licenzianti e sono tutelati ai
                sensi della normativa e dei trattati internazionali applicabili alla proprietà intellettuale.
              </p>
            </section>

            {/* Modifiche dei Termini */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Modifiche dei Termini</h2>
              <p className="mb-4">
                Il Titolare si riserva il diritto di modificare i Termini in ogni momento. In tal caso, il
                Titolare darà opportuna notizia delle modifiche agli Utenti.
              </p>
              <p className="mb-4">
                Le modifiche avranno effetto nel rapporto con l'Utente solo a partire dal momento comunicato
                all'Utente.
              </p>
              <p className="mb-4">
                L'utilizzo continuato del Servizio implica l'accettazione dell'Utente dei Termini aggiornati.
                Se l'Utente non desidera accettare le modifiche, deve cessare l'utilizzo del Servizio e può
                recedere dall'Accordo.
              </p>
              <p>
                La versione precedente continua a disciplinare il rapporto fino all'accettazione delle
                modifiche da parte dell'Utente. Tale versione può essere richiesta al Titolare.
              </p>
            </section>

            {/* Cessione del contratto */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Cessione del contratto</h2>
              <p className="mb-4">
                Il Titolare si riserva il diritto di trasferire, cedere, disporre di, novare o appaltare
                singoli o tutti i diritti e le obbligazioni secondo questi Termini, avendo riguardo per gli
                interessi legittimi degli Utenti. Si applicano le disposizioni relative alla modifica di questi
                Termini.
              </p>
              <p>
                L'Utente non è autorizzato a cedere o trasferire i propri diritti e le proprie obbligazioni
                secondo i Termini senza il consenso scritto del Titolare.
              </p>
            </section>

            {/* Contatti */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Contatti</h2>
              <p>
                Tutte le comunicazioni inerenti all'uso di questa Applicazione devono essere inviate ai
                recapiti indicati in questo documento.
              </p>
            </section>

            {/* Clausola di salvaguardia */}
            <section className="border-l-4 border-gray-200 pl-6">
              <h2 className="text-xl font-medium text-black mb-4">Clausola di salvaguardia</h2>
              <p>
                Qualora alcuna delle disposizioni di questi Termini dovesse essere o divenire nulla o
                inefficace ai sensi della legge applicabile, la nullità o inefficacia di tale disposizione non
                provoca inefficacia delle restanti previsioni, che permangono pertanto valide ed efficaci.
              </p>
            </section>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default TermsCondition;