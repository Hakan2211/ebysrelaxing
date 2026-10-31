import React from 'react';
import Document from '../components/icons/document';
import PageHeader from '../components/page-header';
function Datenschutz() {
  return (
    <>
      <PageHeader eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-10 text-slate-800 md:pb-24">
        <div className="flex flex-col md:flex-row gap-2 md:items-center text-xl mb-5 mt-3">
          <a
            className="underline underline-offset-4 transition-colors hover:text-[var(--bg-background-color-7)]"
            href="/datenschutzerklaerung.pdf"
            download="Datenschutzerklärung.pdf"
          >
            Datenschutzerklärung als PDF herunterladen
          </a>
          <Document className="w-6 h-6 shrink-0" />
        </div>

        <h2 className="mt-12 font-display text-3xl font-light text-slate-900 md:text-4xl">
          Allgemeine Geschäftsbedingungen
        </h2>
        <p className="mt-5 text-lg leading-relaxed tracking-wide md:text-xl">
          Vorbemerkung: Die auf dieser Website dargestellten Methoden bieten
          keine Garantie für bestimmte Ergebnisse und ersetzen keine
          medizinische Diagnose oder Behandlung durch Fachärzte. Kunden in
          ärztlicher Behandlung sollten vor der Nutzung meiner Dienstleistungen
          Rücksprache mit ihrem Arzt halten, um mögliche Risiken auszuschließen.
        </p>
        <ol className="mt-5 text-lg leading-relaxed tracking-wide md:text-xl mb-5">
          <li className="flex flex-col">
            <h3 className="font-medium">1. Allgemeines</h3>
            <p className="">
              Ebru Bilgic (im Folgenden "Entspannungstrainerin") führt
              Workshops, Trainings und Beratungen gemäß diesen Allgemeinen
              Geschäftsbedingungen (AGB) durch. Durch die Beauftragung
              akzeptiert der Auftraggeber (im Folgenden "Kunde") diese
              Bedingungen. Abweichende Geschäftsbedingungen des Kunden werden
              nicht anerkannt.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">
              2. Terminvereinbarung und Anmeldung:
            </h3>
            <p className="">
              Zeit und Ort eines Auftrags werden gemeinsam vereinbart. Die
              Anmeldung zu Veranstaltungen erfolgt ausschließlich online oder
              schriftlich. Vereinbarte Termine sind verbindlich, und der Kunde
              verpflichtet sich, pünktlich zu erscheinen.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">
              3. Angebote, Honorare, Zahlungsbedingungen:{' '}
            </h3>
            <p className="">
              Angebote sind unverbindlich und können sich ändern. Honorare sind
              nach Rechnungsstellung fällig.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">4. Stornierung durch den Kunden: </h3>
            <p className="">
              Bei Stornierung bis zu 7 Tagen vor dem Termin entstehen keine
              Kosten. Von 6 Tagen bis 2 Tage vor dem Termin werden 50 % des
              Honorars berechnet. Bei Absage 24 Stunden vor dem Termin oder
              Nichterscheinen wird das volle Honorar fällig, unabhängig vom
              Grund der Stornierung.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">
              5. Stornierung durch die Entspannungstrainerin:
            </h3>
            <p className="">
              Im Fall einer Absage seitens der Trainerin wird der Kunde umgehend
              informiert. Ein Ersatztermin kann angeboten werden, jedoch
              bestehen keine weiteren Ansprüche, einschließlich Schadensersatz.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">6. Haftung: </h3>
            <p className="">
              Die Entspannungstrainerin führt ihre Dienstleistungen nach bestem
              Wissen und Gewissen durch, übernimmt jedoch keine Gewährleistung
              für den Erfolg. Eine Haftung wird ausgeschlossen, und der Kunde
              stellt die Trainerin von Haftungsansprüchen frei. Der Kunde ist
              für seine Gesundheit selbst verantwortlich und haftet für
              eventuelle Schäden.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">7. Vertraulichkeit:</h3>
            <p className="">
              Die Entspannungstrainerin wahrt Stillschweigen über alle
              Angelegenheiten des Kunden, auch nach Vertragsende.
            </p>
          </li>
          <li className="flex flex-col mt-5">
            <h3 className="font-medium">8. Salvatorische Klausel:</h3>
            <p className="">
              Sollten einzelne Bestimmungen ungültig werden, bleiben die übrigen
              Bestimmungen und der Vertrag insgesamt gültig.
            </p>
          </li>
        </ol>
      </div>
    </>
  );
}

export default Datenschutz;
