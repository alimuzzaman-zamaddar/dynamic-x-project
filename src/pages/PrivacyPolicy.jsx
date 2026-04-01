import React from 'react';
import Container from '../shared/Container';

const PrivacyPolicy = () => {
  return (
    <section className="py-16 lg:py-40 bg-white text-black">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b border-gray-200 pb-8 mb-12">
            <h1 className="text-3xl lg:text-5xl font-normal leading-tight mb-4">
              Privacy Policy di DynamicsX
            </h1>
            <p className="text-black/50 text-sm italic">
              Ultima modifica: 31 marzo 2026
            </p>
          </header>

          <div className="space-y-10 text-base leading-relaxed text-black/80">
            <p>
              Benvenuto nella privacy policy di dynamicsx. Questa policy ti aiuterà a comprendere quali
              dati raccogliamo, perché li raccogliamo e quali sono i tuoi diritti in merito.
            </p>

            {/* Titolare */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4 uppercase tracking-wider">
                Titolare del Trattamento dei Dati
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-medium">DynamicsX SRL</p>
                <p>Via Monviso 6, 20044, Arese Milano</p>
                <p className="mt-2 text-primary-red">
                  Email del Titolare:{' '}
                  <a href="mailto:support@dynamicsx.it" className="underline">
                    support@dynamicsx.it
                  </a>
                </p>
              </div>
            </section>

            {/* Tipologia Dati */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Tipo di Dati che raccogliamo</h2>
              <p className="mb-4">
                Il Titolare non fornisce una lista di tipologie di Dati Personali raccolti. Dettagli completi
                su ciascuna tipologia di Dati Personali raccolti sono forniti nelle sezioni dedicate di questa
                privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei
                Dati stessi.
              </p>
              <p className="mb-4">
                I Dati Personali possono essere liberamente forniti dall'Utente o, nel caso di Dati di
                Utilizzo, raccolti automaticamente durante l'uso di questa Applicazione.
              </p>
              <p className="mb-4">
                Se non diversamente specificato, tutti i Dati richiesti da questa Applicazione sono
                obbligatori. Se l'Utente rifiuta di comunicarli, potrebbe essere impossibile per questa
                Applicazione fornire il Servizio. Nei casi in cui questa Applicazione indichi alcuni Dati come
                facoltativi, gli Utenti sono liberi di astenersi dal comunicare tali Dati, senza che ciò abbia
                alcuna conseguenza sulla disponibilità del Servizio o sulla sua operatività.
              </p>
              <p className="mb-4">
                Gli Utenti che dovessero avere dubbi su quali Dati siano obbligatori sono incoraggiati a
                contattare il Titolare.
              </p>
              <p>
                L'eventuale utilizzo di Cookie — o di altri strumenti di tracciamento — da parte di questa
                Applicazione o dei titolari dei servizi terzi utilizzati da questa Applicazione ha la finalità
                di fornire il Servizio richiesto dall'Utente, oltre alle ulteriori finalità descritte nel
                presente documento e nella Cookie Policy. L'Utente si assume la responsabilità dei Dati
                Personali di terzi ottenuti, pubblicati o condivisi mediante questa Applicazione.
              </p>
            </section>

            {/* Modalità Trattamento */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Modalità e luogo del trattamento dei Dati raccolti</h2>

              <h3 className="text-lg font-normal text-black mb-2">Modalità di trattamento</h3>
              <p className="mb-4">
                Il Titolare adotta le opportune misure di sicurezza volte ad impedire l'accesso, la
                divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali. Il trattamento
                viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e
                con logiche strettamente correlate alle finalità indicate. Oltre al Titolare, in alcuni casi,
                potrebbero avere accesso ai Dati altri soggetti coinvolti nell'organizzazione di questa
                Applicazione (personale amministrativo, commerciale, marketing, legali, amministratori di
                sistema) ovvero soggetti esterni (come fornitori di servizi tecnici terzi, corrieri postali,
                hosting provider, società informatiche, agenzie di comunicazione) nominati anche, se
                necessario, Responsabili del Trattamento da parte del Titolare. L'elenco aggiornato dei
                Responsabili potrà sempre essere richiesto al Titolare del Trattamento.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Luogo</h3>
              <p className="mb-4">
                I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le
                parti coinvolte nel trattamento siano localizzate. Per ulteriori informazioni, contatta il
                Titolare.
              </p>
              <p>
                I Dati Personali dell'Utente potrebbero essere trasferiti in un paese diverso da quello in
                cui l'Utente si trova. Per ottenere ulteriori informazioni sul luogo del trattamento l'Utente
                può fare riferimento alla sezione relativa ai dettagli sul trattamento dei Dati Personali.
              </p>

              <h3 className="text-lg font-normal text-black mt-4 mb-2">Periodo di conservazione</h3>
              <p>
                Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati
                per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere
                conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del
                consenso degli Utenti.
              </p>
            </section>

            {/* Cookie Policy */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Cookie Policy</h2>
              <p>
                Questa Applicazione fa utilizzo di Strumenti di Tracciamento. Per saperne di più, gli Utenti
                possono consultare la Cookie Policy.
              </p>
            </section>

            {/* UE */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">
                Ulteriori informazioni per gli utenti nell'Unione Europea
              </h2>

              <h3 className="text-lg font-normal text-black mb-2">Base giuridica del trattamento</h3>
              <p className="mb-4">
                Il Titolare tratta Dati Personali relativi all'Utente in caso sussista una delle seguenti
                condizioni:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>L'Utente ha prestato il consenso per una o più finalità specifiche.</li>
                <li>Il trattamento è necessario all'esecuzione di un contratto con l'Utente e/o all'esecuzione di misure precontrattuali.</li>
                <li>Il trattamento è necessario per adempiere un obbligo legale al quale è soggetto il Titolare.</li>
                <li>Il trattamento è necessario per l'esecuzione di un compito di interesse pubblico o per l'esercizio di pubblici poteri di cui è investito il Titolare.</li>
                <li>Il trattamento è necessario per il perseguimento del legittimo interesse del Titolare o di terzi.</li>
              </ul>
              <p>
                È comunque sempre possibile richiedere al Titolare di chiarire la concreta base giuridica di
                ciascun trattamento ed in particolare di specificare se il trattamento sia basato sulla legge,
                previsto da un contratto o necessario per concludere un contratto.
              </p>

              <h3 className="text-lg font-normal text-black mt-6 mb-2">Ulteriori informazioni sul tempo di conservazione</h3>
              <p className="mb-4">
                Se non diversamente indicato in questo documento, i Dati Personali sono trattati e conservati
                per il tempo richiesto dalla finalità per la quale sono stati raccolti e potrebbero essere
                conservati per un periodo più lungo a causa di eventuali obbligazioni legali o sulla base del
                consenso degli Utenti. Pertanto:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  I Dati Personali raccolti per scopi collegati all'esecuzione di un contratto tra il Titolare
                  e l'Utente saranno trattenuti sino a quando sia completata l'esecuzione di tale contratto.
                </li>
                <li>
                  I Dati Personali raccolti per finalità riconducibili all'interesse legittimo del Titolare
                  saranno trattenuti sino al soddisfacimento di tale interesse. L'Utente può ottenere ulteriori
                  informazioni in merito all'interesse legittimo perseguito dal Titolare nelle relative sezioni
                  di questo documento o contattando il Titolare.
                </li>
              </ul>
              <p className="mb-4">
                Quando il trattamento è basato sul consenso dell'Utente, il Titolare può conservare i Dati
                Personali più a lungo sino a quando detto consenso non venga revocato. Inoltre, il Titolare
                potrebbe essere obbligato a conservare i Dati Personali per un periodo più lungo per adempiere
                ad un obbligo di legge o per ordine di un'autorità.
              </p>
              <p>
                Al termine del periodo di conservazione i Dati Personali saranno cancellati. Pertanto, allo
                spirare di tale termine il diritto di accesso, cancellazione, rettificazione ed il diritto alla
                portabilità dei Dati non potranno più essere esercitati.
              </p>
            </section>

            {/* Diritti GDPR */}
            <section className="bg-black text-white p-8 rounded-2xl">
              <h2 className="text-xl font-medium mb-4">
                Diritti dell'Utente sulla base del Regolamento Generale sulla Protezione dei Dati (GDPR)
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare.
                In particolare, nei limiti previsti dalla legge, l'Utente ha il diritto di:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/80 mb-6">
                <div className="flex gap-2"><span>•</span> Revocare il consenso in ogni momento</div>
                <div className="flex gap-2"><span>•</span> Opporsi al trattamento dei propri Dati</div>
                <div className="flex gap-2"><span>•</span> Accedere ai propri Dati</div>
                <div className="flex gap-2"><span>•</span> Verificare e chiedere la rettificazione</div>
                <div className="flex gap-2"><span>•</span> Ottenere la limitazione del trattamento</div>
                <div className="flex gap-2"><span>•</span> Ottenere la cancellazione o rimozione (Diritto all'oblio)</div>
                <div className="flex gap-2"><span>•</span> Ricevere i propri Dati o farli trasferire ad altro titolare (portabilità)</div>
                <div className="flex gap-2"><span>•</span> Proporre reclamo all'autorità di controllo</div>
              </div>
              <p className="text-white/70 text-sm mb-4">
                Gli Utenti hanno diritto di ottenere informazioni in merito alla base giuridica per il
                trasferimento di Dati all'estero incluso verso qualsiasi organizzazione internazionale regolata
                dal diritto internazionale o costituita da due o più paesi.
              </p>

              <h3 className="text-base font-medium text-white mb-2">Dettagli sul diritto di opposizione</h3>
              <p className="text-white/70 text-sm mb-3">
                Quando i Dati Personali sono trattati nell'interesse pubblico, nell'esercizio di pubblici poteri
                di cui è investito il Titolare oppure per perseguire un interesse legittimo del Titolare, gli
                Utenti hanno diritto ad opporsi al trattamento per motivi connessi alla loro situazione
                particolare.
              </p>
              <p className="text-white/70 text-sm mb-4">
                Si fa presente agli Utenti che, ove i loro Dati fossero trattati con finalità di marketing
                diretto, possono opporsi al trattamento in qualsiasi momento, gratuitamente e senza fornire
                alcuna motivazione. Qualora gli Utenti si oppongano al trattamento per finalità di marketing
                diretto, i Dati Personali non sono più oggetto di trattamento per tali finalità.
              </p>

              <h3 className="text-base font-medium text-white mb-2">Come esercitare i diritti</h3>
              <p className="text-white/70 text-sm">
                Eventuali richieste di esercizio dei diritti dell'Utente possono essere indirizzate al Titolare
                attraverso i recapiti forniti in questo documento. La richiesta è gratuita e il Titolare
                risponderà nel più breve tempo possibile, in ogni caso entro un mese, fornendo all'Utente tutte
                le informazioni previste dalla legge.
              </p>
            </section>

            {/* Svizzera */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Ulteriori informazioni per gli utenti in Svizzera</h2>
              <p className="mb-4">
                Questa sezione si applica agli Utenti in Svizzera e, per tali Utenti, sostituisce qualsiasi
                altra informazione eventualmente divergente o in conflitto contenuta nell'informativa sulla
                privacy.
              </p>
              <p className="mb-4">
                Ulteriori dettagli relativi alle categorie di Dati trattati, alle finalità del trattamento, alle
                categorie di destinatari dei dati personali, se presenti, al periodo di conservazione e ad altre
                informazioni sui Dati personali sono reperibili nella sezione "Informazioni dettagliate sul
                trattamento dei Dati personali" all'interno del presente documento.
              </p>
              <h3 className="text-lg font-normal text-black mb-2">
                I diritti degli utenti ai sensi della Legge federale sulla protezione dei dati personali
              </h3>
              <p className="mb-3">Gli Utenti possono esercitare alcuni diritti relativi ai loro dati nei limiti della legge, tra cui:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Diritto di accesso ai Dati personali.</li>
                <li>Il diritto di opporsi al trattamento dei propri Dati Personali (che consente anche agli Utenti di richiedere la limitazione del trattamento, la cancellazione o la distruzione dei Dati personali, il divieto di divulgazione a terzi).</li>
                <li>Diritto di ricevere i propri Dati Personali e di trasferirli a un altro titolare del trattamento (portabilità dei dati).</li>
                <li>Diritto di chiedere la rettifica di Dati Personali errati.</li>
              </ul>
              <p>
                Eventuali richieste di esercizio dei diritti dell'Utente possono essere indirizzate al Titolare
                attraverso i recapiti forniti in questo documento. Tali richieste sono gratuite e il Titolare
                risponderà nel più breve tempo possibile.
              </p>
            </section>

            {/* Brasile */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Ulteriori informazioni per gli Utenti in Brasile</h2>
              <p className="mb-4">
                Questa sezione del documento integra e completa le informazioni contenute nel resto della
                privacy policy ed è fornita dall'entità che gestisce questa Applicazione e, se del caso, dalla
                sua capogruppo e dalle sue controllate e affiliate.
              </p>
              <p className="mb-4">
                Questa sezione si applica a tutti gli Utenti in Brasile ai sensi della{' '}
                <em>Lei Geral de Proteção de Dados</em> (LGPD).
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Basi giuridiche in virtù delle quali trattiamo le tue informazioni personali</h3>
              <p className="mb-3">Trattiamo le tue informazioni personali esclusivamente nel caso in cui sussista una delle seguenti basi giuridiche:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Il tuo consenso alle attività di trattamento in questione.</li>
                <li>L'adempimento ad obblighi di legge che siamo tenuti a soddisfare.</li>
                <li>L'esecuzione di norme dettate da leggi o regolamenti o da contratti, accordi o altri simili strumenti giuridici.</li>
                <li>Gli studi condotti da enti di ricerca, preferibilmente effettuati su informazioni personali anonimizzate.</li>
                <li>L'esecuzione di un contratto e dei relativi adempimenti precontrattuali, qualora tu sia parte di tale contratto.</li>
                <li>L'esercizio dei nostri diritti in giudizio, in procedure amministrative o in arbitrati.</li>
                <li>La difesa o l'incolumità fisica tua o di un terzo.</li>
                <li>La tutela della salute nel contesto di procedure messe in atto da entità o professionisti del settore sanitario.</li>
                <li>Il nostro legittimo interesse, a condizione che i tuoi diritti e libertà fondamentali non prevalgano su tali interessi.</li>
                <li>La tutela del credito.</li>
              </ul>

              <h3 className="text-lg font-normal text-black mb-2">I tuoi diritti relativi alla privacy in Brasile</h3>
              <p className="mb-3">Hai il diritto di:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Ottenere conferma dell'esistenza di attività di trattamento riguardanti le tue informazioni personali.</li>
                <li>Accedere alle tue informazioni personali.</li>
                <li>Ottenere la rettifica delle tue informazioni personali incomplete, inaccurate o non aggiornate.</li>
                <li>Ottenere l'anonimizzazione, il blocco o la cancellazione delle informazioni personali non necessarie o eccessive, o di quelle trattate in contrasto alle disposizioni della LGPD.</li>
                <li>Ottenere informazioni riguardo la possibilità di prestare o rifiutare il tuo consenso e le relative conseguenze.</li>
                <li>Ottenere informazioni riguardo le terze parti con le quali condividiamo le tue informazioni personali.</li>
                <li>Ottenere, a fronte di una tua richiesta esplicita, la portabilità delle tue informazioni personali verso altri fornitori, a condizione che i nostri segreti commerciali e industriali siano salvaguardati.</li>
                <li>Ottenere la cancellazione delle informazioni personali trattate qualora il trattamento sia stato effettuato sulla base del tuo consenso, a meno che sia applicabile una delle eccezioni previste dall'articolo 16 LGPD.</li>
                <li>Revocare il tuo consenso in qualsiasi momento.</li>
                <li>Presentare un reclamo riguardante le tue informazioni personali all'ANPD (Autorità Nazionale di Protezione dei Dati) o ad un organismo di tutela dei consumatori.</li>
                <li>Opporsi ad attività di trattamento nei casi in cui tale trattamento non sia effettuato in conformità alle disposizioni di legge.</li>
                <li>Richiedere informazioni chiare ed adeguate riguardo ai criteri e alle procedure utilizzate nell'ambito dei processi decisionali automatizzati.</li>
                <li>Richiedere la revisione delle decisioni che ledono i tuoi interessi, effettuate esclusivamente sulla base di processi decisionali automatizzati delle tue informazioni personali.</li>
              </ul>
              <p className="mb-4 italic text-sm">
                Non sarai mai discriminato, né subirai in alcun modo alcun trattamento che ti sia sfavorevole,
                a seguito dell'esercizio dei tuoi diritti.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Come e in quanto tempo gestiamo la tua richiesta</h3>
              <p className="mb-3">
                Faremo il possibile per rispondere alla tua richiesta nel più breve tempo possibile. Qualora
                tu decida di inoltrare una richiesta di accesso o di conferma dell'esistenza del trattamento,
                ti preghiamo di specificare se preferisci ricevere le tue informazioni personali in formato
                elettronico o cartaceo.
              </p>
              <p>
                In caso di richiesta di informativa completa, risponderemo entro 15 giorni dal momento della
                tua richiesta, fornendoti tutte le informazioni riguardanti l'origine delle tue informazioni
                personali, la conferma o meno della loro esistenza, tutti i criteri utilizzati per il
                trattamento e le finalità di tale trattamento.
              </p>
            </section>

            {/* USA */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Further information for Users in the United States</h2>
              <p className="mb-4">
                The information contained in this section applies to all Users who are residents in the
                following states: California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Nevada,
                Delaware, Iowa, New Hampshire, New Jersey, Nebraska, Tennessee, Minnesota, Maryland, Indiana,
                Kentucky, Rhode Island and Montana.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Notice at collection</h3>
              <p className="mb-4">
                The following Notice at collection provides you with timely notice about the categories of
                Personal Information collected or disclosed in the past 12 months so that you can exercise
                meaningful control over our use of that Information. We won't process your Information for
                unexpected purposes, or for purposes that are not reasonably necessary to and compatible with
                the purposes originally disclosed, without your consent.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Your privacy rights under US state laws</h3>
              <p className="mb-3">You may exercise certain rights regarding your Personal Information. In particular, to the extent permitted by applicable law, you have:</p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>The right to access Personal Information: the right to know whether or not we are processing your Personal Information and to access such Personal Information.</li>
                <li>The right to correct inaccurate Personal Information.</li>
                <li>The right to request the deletion of your Personal Information.</li>
                <li>The right to obtain a copy of your Personal Information in a portable and usable format.</li>
                <li>The right to opt out from the Sale of your Personal Information.</li>
                <li>The right to non-discrimination.</li>
              </ul>

              <h3 className="text-lg font-normal text-black mb-2">Additional rights for Users residing in California</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>The right to opt out of the Sharing of your Personal Information for cross-context behavioral advertising.</li>
                <li>The right to request to limit our use or disclosure of your Sensitive Personal Information to only that which is necessary to perform the services or provide the goods.</li>
              </ul>

              <h3 className="text-lg font-normal text-black mb-2">
                Additional rights for Users in Virginia, Colorado, Connecticut, Texas, Oregon, Nevada, Delaware, Iowa, New Hampshire, New Jersey, Nebraska, Tennessee, Minnesota, Maryland, Indiana, Kentucky, Rhode Island and Montana
              </h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>The right to opt out of the processing of your personal information for Targeted Advertising or profiling in furtherance of decisions that produce legal or similarly significant effects concerning you.</li>
                <li>The right to freely give, deny or withdraw your consent for the processing of your Sensitive Personal Information. In Maryland, your Sensitive Personal Information will be collected or processed only if strictly necessary to provide or maintain a specific product or service requested by you.</li>
              </ul>
              <p className="mb-4 text-sm">
                In Minnesota and Maryland, Users also have the right to obtain a list of the specific third
                parties to which the controller has disclosed the consumer's personal data. In Minnesota, you
                additionally have the right to question the results of profiling, be informed of the reason the
                profiling resulted in the decision, review personal data used in profiling, and have inaccurate
                data corrected and the profiling decision reevaluated.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Additional rights for users residing in Utah and Iowa</h3>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>The right to opt out of the processing of your Personal Information for Targeted Advertising.</li>
                <li>The right to opt out of the processing of your Sensitive Personal Information.</li>
              </ul>

              <h3 className="text-lg font-normal text-black mb-2">How to exercise your privacy rights under US state laws</h3>
              <p className="mb-4">
                To exercise the rights described above, you need to submit your request to us by contacting us
                via the contact details provided in this document. We will not respond to any request if we are
                unable to verify your identity. You are not required to create an account with us to submit your
                request.
              </p>
              <p>
                We will respond to your request without undue delay, but in all cases within the timeframe
                required by applicable law. We do not charge a fee to process or respond to your request unless
                such request is manifestly unfounded or excessive.
              </p>
            </section>

            {/* Ulteriori informazioni */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">Ulteriori informazioni sul trattamento</h2>

              <h3 className="text-lg font-normal text-black mb-2">Difesa in giudizio</h3>
              <p className="mb-4">
                I Dati Personali dell'Utente possono essere utilizzati da parte del Titolare in giudizio o nelle
                fasi preparatorie alla sua eventuale instaurazione per la difesa da abusi nell'utilizzo di questa
                Applicazione o dei Servizi connessi da parte dell'Utente. L'Utente dichiara di essere consapevole
                che il Titolare potrebbe essere obbligato a rivelare i Dati per ordine delle autorità pubbliche.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Informative specifiche</h3>
              <p className="mb-4">
                Su richiesta dell'Utente, in aggiunta alle informazioni contenute in questa privacy policy,
                questa Applicazione potrebbe fornire all'Utente delle informative aggiuntive e contestuali
                riguardanti Servizi specifici, o la raccolta ed il trattamento di Dati Personali.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Log di sistema e manutenzione</h3>
              <p className="mb-4">
                Per necessità legate al funzionamento ed alla manutenzione, questa Applicazione e gli eventuali
                servizi terzi da essa utilizzati potrebbero raccogliere log di sistema, ossia file che registrano
                le interazioni e che possono contenere anche Dati Personali, quali l'indirizzo IP Utente.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Informazioni non contenute in questa policy</h3>
              <p className="mb-4">
                Ulteriori informazioni in relazione al trattamento dei Dati Personali potranno essere richieste
                in qualsiasi momento al Titolare del Trattamento utilizzando gli estremi di contatto.
              </p>

              <h3 className="text-lg font-normal text-black mb-2">Modifiche a questa privacy policy</h3>
              <p>
                Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy
                policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su
                questa Applicazione nonché, qualora tecnicamente e legalmente fattibile, inviando una notifica
                agli Utenti attraverso uno degli estremi di contatto di cui è in possesso. Si prega dunque di
                consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica
                indicata in fondo. Qualora le modifiche interessino trattamenti la cui base giuridica è il
                consenso, il Titolare provvederà a raccogliere nuovamente il consenso dell'Utente, se
                necessario.
              </p>
            </section>

            {/* Definizioni */}
            <footer className="pt-12 mt-12 border-t border-gray-100">
              <h2 className="text-xl font-medium text-black mb-4">Definizioni e riferimenti legali</h2>

              <dl className="space-y-4 text-sm text-black/70">
                <div>
                  <dt className="font-medium text-black">Dati Personali (o Dati) / Informazioni Personali</dt>
                  <dd className="mt-1">
                    Costituisce dato personale qualunque informazione che, direttamente o indirettamente, anche
                    in collegamento con qualsiasi altra informazione, ivi compreso un numero di identificazione
                    personale, renda identificata o identificabile una persona fisica.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Informazioni Personali Sensibili</dt>
                  <dd className="mt-1">
                    Per Informazioni Personali Sensibili si intendono tutte le Informazioni Personali che non
                    sono disponibili pubblicamente e che rivelano informazioni considerate sensibili ai sensi
                    della normativa applicabile in materia di privacy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Dati di Utilizzo</dt>
                  <dd className="mt-1">
                    Sono le informazioni raccolte automaticamente attraverso questa Applicazione, tra cui: gli
                    indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente che si connette con
                    questa Applicazione, gli indirizzi in notazione URI, l'orario della richiesta, il metodo
                    utilizzato nell'inoltrare la richiesta al server, la dimensione del file ottenuto in
                    risposta, il codice numerico indicante lo stato della risposta dal server, il paese di
                    provenienza, le caratteristiche del browser e del sistema operativo utilizzati dal
                    visitatore, le varie connotazioni temporali della visita e i dettagli relativi all'itinerario
                    seguito all'interno dell'Applicazione.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Utente</dt>
                  <dd className="mt-1">
                    L'individuo che utilizza questa Applicazione che, salvo ove diversamente specificato,
                    coincide con l'Interessato.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Interessato</dt>
                  <dd className="mt-1">La persona fisica cui si riferiscono i Dati Personali.</dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Responsabile del Trattamento (o Responsabile)</dt>
                  <dd className="mt-1">
                    La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che tratta
                    dati personali per conto del Titolare, secondo quanto esposto nella presente privacy policy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Titolare del Trattamento (o Titolare)</dt>
                  <dd className="mt-1">
                    La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che,
                    singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di dati
                    personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative al
                    funzionamento ed alla fruizione di questa Applicazione.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Questa Applicazione</dt>
                  <dd className="mt-1">
                    Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati Personali
                    degli Utenti.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Servizio</dt>
                  <dd className="mt-1">
                    Il Servizio fornito da questa Applicazione così come definito nei relativi termini (se
                    presenti) su questo sito/applicazione.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Vendita</dt>
                  <dd className="mt-1">
                    Per Vendita si intende qualsiasi scambio di Informazioni Personali da parte del Proprietario
                    a un terzo, in cambio di denaro o a diverso titolo oneroso, come definito dalla normativa
                    statale statunitense applicabile in materia di privacy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Condivisione</dt>
                  <dd className="mt-1">
                    Per Condivisione si intende qualsiasi condivisione, affitto, rilascio, divulgazione,
                    diffusione, messa a disposizione, trasferimento o diversa comunicazione delle Informazioni
                    Personali di un consumatore da parte dell'azienda a un terzo per la pubblicità comportamentale
                    cross-context, sia in cambio di denaro che ad altro titolo oneroso, come definito dalle leggi
                    sulla privacy della California.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Pubblicità mirata</dt>
                  <dd className="mt-1">
                    Per Pubblicità mirata si intende la visualizzazione di annunci pubblicitari a un consumatore
                    per cui l'annuncio è selezionato in base alle Informazioni Personali ottenuti dalle attività
                    di tale consumatore nel tempo e su siti web o applicazioni online non affiliati per prevedere
                    le preferenze o gli interessi di tale consumatore.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Unione Europea (o UE)</dt>
                  <dd className="mt-1">
                    Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in questo
                    documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea e dello
                    Spazio Economico Europeo.
                  </dd>
                </div>
              </dl>

              <p className="mt-8 text-xs text-black/40 leading-relaxed border-t border-gray-100 pt-6">
                La presente policy è redatta sulla base di molteplici ordinamenti legislativi. Ove non
                diversamente specificato, questa policy riguarda esclusivamente questa Applicazione.
              </p>
            </footer>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PrivacyPolicy;