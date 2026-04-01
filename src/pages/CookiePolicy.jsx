import React from 'react';
import Container from '../shared/Container';

const CookiePolicy = () => {
  return (
    <section className="py-16 lg:py-40 bg-white text-black">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="border-b border-gray-200 pb-8 mb-12">
            <h1 className="text-3xl lg:text-5xl font-normal leading-tight mb-4">
              Cookie Policy di DynamicsX
            </h1>
            <p className="text-black/50 text-sm italic">Ultima modifica: 31 marzo 2026</p>
          </header>

          <div className="space-y-10 text-base leading-relaxed text-black/80">
            <p>
              Benvenuto nella cookie policy di dynamicsx. Questa policy ti aiuterà a comprendere quali
              cookie e tecnologie di tracciamento utilizziamo, come li utilizziamo e quali sono i tuoi
              diritti in merito.
            </p>

            {/* Introduzione */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4 uppercase tracking-wider">
                Introduzione
              </h2>
              <p className="mb-4">
                Questo documento contiene informazioni in merito alle tecnologie che consentono a questa
                Applicazione di raggiungere gli scopi descritti di seguito. Tali tecnologie permettono al
                Titolare di raccogliere e salvare informazioni (per esempio tramite l'utilizzo di Cookie) o
                di utilizzare risorse (per esempio eseguendo uno script) sul dispositivo dell'Utente quando
                quest'ultimo interagisce con questa Applicazione.
              </p>
              <p className="mb-4">
                Per semplicità, in questo documento tali tecnologie sono sinteticamente definite "Strumenti
                di Tracciamento", salvo vi sia ragione di differenziare.
              </p>
              <p className="mb-4">
                Per esempio, sebbene i Cookie possano essere usati in browser sia web sia mobili, sarebbe
                fuori luogo parlare di Cookie nel contesto di applicazioni per dispositivi mobili, dal
                momento che si tratta di Strumenti di Tracciamento che richiedono la presenza di un browser.
                Per questo motivo, all'interno di questo documento il termine Cookie è utilizzato solo per
                indicare in modo specifico quel particolare tipo di Strumento di Tracciamento.
              </p>
              <p className="mb-4">
                Alcune delle finalità per le quali vengono impiegati Strumenti di Tracciamento potrebbero,
                inoltre, richiedere il consenso dell'Utente. Se viene prestato il consenso, esso può essere
                revocato liberamente in qualsiasi momento seguendo le istruzioni contenute in questo
                documento.
              </p>
              <p>
                Questa Applicazione utilizza solo Strumenti di Tracciamento gestiti direttamente dal
                Titolare (comunemente detti Strumenti di Tracciamento "di prima parte"). Durata e scadenza
                dei Cookie di prima parte e degli altri Strumenti di Tracciamento simili possono variare a
                seconda di quanto impostato dal Titolare. Alcuni di essi scadono al termine della sessione
                di navigazione dell'Utente.
              </p>
            </section>

            {/* Titolare */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4 uppercase tracking-wider">
                Titolare del Trattamento dei Dati
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <p className="font-medium">DynamicsX SRL</p>
                <p>Via Monviso 6, 20044, Arese Milano</p>
                <p className="mt-2 text-primary-red">
                  Indirizzo email del Titolare:{' '}
                  <a href="mailto:support@dynamicsx.it" className="underline">
                    support@dynamicsx.it
                  </a>
                </p>
              </div>
            </section>

            {/* Come utilizza gli strumenti */}
            <section>
              <h2 className="text-xl font-medium text-black mb-4">
                Come questa Applicazione utilizza gli Strumenti di Tracciamento
              </h2>
              <h3 className="text-lg font-normal text-black mb-2">Necessari</h3>
              <p>
                Questa Applicazione utilizza Cookie comunemente detti "tecnici" o altri Strumenti di
                Tracciamento analoghi per svolgere attività strettamente necessarie a garantire il
                funzionamento o la fornitura del Servizio.
              </p>
            </section>

            {/* Gestione preferenze */}
            <section className="bg-black text-white p-8 rounded-2xl">
              <h2 className="text-xl font-medium mb-6">Come gestire le preferenze</h2>

              <div className="space-y-6 text-sm text-white/80">
                <div>
                  <h3 className="text-base font-medium text-white mb-2">Su questa Applicazione</h3>
                  <p>
                    Gli Utenti possono impostare o aggiornare le proprie preferenze tramite il relativo
                    pannello delle scelte in materia di privacy disponibile su questa Applicazione.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    Tramite le impostazioni del dispositivo
                  </h3>
                  <p className="mb-3">
                    Gli Utenti possono utilizzare le impostazioni del proprio browser per vedere, bloccare
                    o cancellare Cookie e tecnologie simili. Le impostazioni del browser, tuttavia, non
                    consentono un controllo granulare del consenso per categoria.
                  </p>
                  <p className="mb-3">
                    Gli Utenti possono trovare informazioni su come gestire i Cookie nei seguenti browser:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      'Google Chrome',
                      'Mozilla Firefox',
                      'Apple Safari',
                      'Microsoft Internet Explorer',
                      'Microsoft Edge',
                      'Brave',
                      'Opera',
                    ].map((browser) => (
                      <div key={browser} className="flex gap-2 items-center">
                        <span className="text-white/40">•</span>
                        <span>{browser}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4">
                    Gli Utenti possono inoltre gestire alcuni Strumenti di Tracciamento per applicazioni
                    mobili disattivandoli tramite le apposite impostazioni del dispositivo, quali le
                    impostazioni di pubblicità per dispositivi mobili o le impostazioni relative al
                    tracciamento in generale.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-medium text-white mb-2">
                    Conseguenze legate al rifiuto degli Strumenti di Tracciamento
                  </h3>
                  <p>
                    Gli Utenti sono liberi di decidere se permettere o meno l'utilizzo di Strumenti di
                    Tracciamento. Tuttavia, si noti che gli Strumenti di Tracciamento consentono a questa
                    Applicazione di fornire agli Utenti un'esperienza migliore e funzionalità avanzate.
                    Pertanto, qualora l'Utente decida di bloccarli, il Titolare potrebbe non essere in
                    grado di fornire le relative funzionalità.
                  </p>
                </div>
              </div>
            </section>

            {/* Definizioni */}
            <footer className="pt-12 mt-12 border-t border-gray-100">
              <h2 className="text-xl font-medium text-black mb-6">Definizioni e riferimenti legali</h2>

              <dl className="space-y-4 text-sm text-black/70">
                <div>
                  <dt className="font-medium text-black">Dati Personali (o Dati) / Informazioni Personali</dt>
                  <dd className="mt-1">
                    Costituisce dato personale qualunque informazione che, direttamente o indirettamente,
                    anche in collegamento con qualsiasi altra informazione, ivi compreso un numero di
                    identificazione personale, renda identificata o identificabile una persona fisica.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Informazioni Personali Sensibili</dt>
                  <dd className="mt-1">
                    Per Informazioni Personali Sensibili si intendono tutte le Informazioni Personali che
                    non sono disponibili pubblicamente e che rivelano informazioni considerate sensibili ai
                    sensi della normativa applicabile in materia di privacy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Dati di Utilizzo</dt>
                  <dd className="mt-1">
                    Sono le informazioni raccolte automaticamente attraverso questa Applicazione, tra cui:
                    gli indirizzi IP o i nomi a dominio dei computer utilizzati dall'Utente, gli indirizzi
                    in notazione URI, l'orario della richiesta, il metodo utilizzato nell'inoltrare la
                    richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico
                    indicante lo stato della risposta dal server, il paese di provenienza, le
                    caratteristiche del browser e del sistema operativo, le varie connotazioni temporali
                    della visita e i dettagli relativi all'itinerario seguito all'interno dell'Applicazione.
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
                    La persona fisica, giuridica, la pubblica amministrazione e qualsiasi altro ente che
                    tratta dati personali per conto del Titolare, secondo quanto esposto nella presente
                    privacy policy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Titolare del Trattamento (o Titolare)</dt>
                  <dd className="mt-1">
                    La persona fisica o giuridica, l'autorità pubblica, il servizio o altro organismo che,
                    singolarmente o insieme ad altri, determina le finalità e i mezzi del trattamento di
                    dati personali e gli strumenti adottati, ivi comprese le misure di sicurezza relative
                    al funzionamento ed alla fruizione di questa Applicazione.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Questa Applicazione</dt>
                  <dd className="mt-1">
                    Lo strumento hardware o software mediante il quale sono raccolti e trattati i Dati
                    Personali degli Utenti.
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
                    Per Vendita si intende qualsiasi scambio di Informazioni Personali da parte del
                    Proprietario a un terzo, in cambio di denaro o a diverso titolo oneroso, come definito
                    dalla normativa statale statunitense applicabile in materia di privacy.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Condivisione</dt>
                  <dd className="mt-1">
                    Per Condivisione si intende qualsiasi condivisione, affitto, rilascio, divulgazione,
                    diffusione, messa a disposizione, trasferimento o diversa comunicazione delle
                    Informazioni Personali di un consumatore da parte dell'azienda a un terzo per la
                    pubblicità comportamentale cross-context, come definito dalle leggi sulla privacy della
                    California.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Pubblicità mirata</dt>
                  <dd className="mt-1">
                    Per Pubblicità mirata si intende la visualizzazione di annunci pubblicitari a un
                    consumatore per cui l'annuncio è selezionato in base alle Informazioni Personali
                    ottenuti dalle attività di tale consumatore nel tempo e su siti web o applicazioni
                    online non affiliati, come definito dalla legge statale statunitense in materia di
                    privacy applicabile.
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-black">Unione Europea (o UE)</dt>
                  <dd className="mt-1">
                    Salvo ove diversamente specificato, ogni riferimento all'Unione Europea contenuto in
                    questo documento si intende esteso a tutti gli attuali stati membri dell'Unione Europea
                    e dello Spazio Economico Europeo.
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

export default CookiePolicy;