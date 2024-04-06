import { Button } from '@/components/ui/button';
import React from 'react';
import CalendlyEmbed from '../components/calendly/PopupWidget';

import ArrowRight from '../components/icons/arrow-right';

import Link from 'next/link';

function Leistungen() {
  return (
    <div className="md:col-start-2 md:col-end-5 col-start-1 col-end-6 text-slate-800 p-4">
      <h2 className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
        Gruppenspecial:
      </h2>
      <p className="mt-5 text-xl tracking-wider leading-relaxed">
        Im Laufe der Jahre habe ich meinen eigenen Stil entwickelt, der meine
        Lebenserfahrungen, meine Hingabe an Spiritualität und meine Liebe zur
        Bewegung & Entspannung vereint. Ebysrelaxing öffnet einen Online-Raum,
        um die Praktiken, die mir so viel Freude bereiten, zu teilen - eine
        Fusion aus Yoga, Entspannungstechniken und spirituellen Themen, die
        meine Leidenschaften zum Leben erweckt. Nähere Infos gebe ich in Social
        Media bekannt. Ich freue mich, wenn du Teil meiner Community auf
        Instagram wirst und vielleicht beim nächsten mal dabei bist. Bist du
        kein Social Media Mitglied, dann schaue einfach in den Buchungslink,
        dort werden Beschreibung und Termin bekannt gegeben.
      </p>
      <p className="mt-5 text-xl tracking-wider leading-relaxed">
        Du erhältst eine Mischung aus:
      </p>
      <ul className="text-xl tracking-wider leading-relaxed mt-5">
        <li className="flex items-center gap-5">
          <ArrowRight /> <span>Atemübungen</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Yoga</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Meditation</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>PMR</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>EFT</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Klangbad</span>
        </li>
      </ul>

      <div className="group w-fit">
        <Button
          className="mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/gruppenevent?background_color=fff7f2&text_color=6a604d&primary_color=6a604d">
            Jetzt buchen
          </CalendlyEmbed>
        </Button>
      </div>

      <h2 className="flex flex-col">
        <span className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
          Wellbeing Angebot
        </span>
        <span className="text-2xl tracking-wide leading-relaxed underline underline-offset-4 ">
          Betriebliche Gesundheitsförderung
        </span>
      </h2>

      <p className="text-xl tracking-wider leading-relaxed mt-5">
        Durch die Integration von Wellbeing-Angeboten wie Atemübungen, Yoga,
        Meditation, PMR und Klangbäder in den Arbeitsalltag Ihrer Mitarbeiter
        können Sie deren Leistungsfähigkeit, Gesundheit und Motivation
        entscheidend steigern. Ihr Engagement trägt nicht nur zur Verbesserung
        Ihres Images bei, sondern festigt auch die Bindung Ihrer Mitarbeiter an
        Ihr Unternehmen. Gesundheitstage können als Abend- oder
        Wochenendveranstaltung angeboten werden, um die individuellen Zeitpläne
        und Bedürfnisse Ihrer Mitarbeiter bestmöglich zu berücksichtigen.
      </p>

      <p className="text-xl tracking-wider leading-relaxed mt-5">
        Vorteile von betrieblicher Gesundheitsförderung:
      </p>
      <ul className="text-xl tracking-wider leading-relaxed mt-5">
        <li className="flex items-center gap-5">
          <ArrowRight /> <span>Verbessertes Mitarbeiter-Wohlbefinden</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight />{' '}
          <span>Erhöhte physische und psychische Belastbarkeit</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Reduzierung von Stress</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight />{' '}
          <span>Förderung einer angenehmen Arbeitsatmosphäre</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Steigerung der Konzentration</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Erhöhung Ihrer Mitarbeiterproduktivität</span>
        </li>
        <li className="flex items-center gap-5 mt-2">
          <ArrowRight /> <span>Verstärkung der Mitarbeiterzufriedenheit</span>
        </li>
      </ul>

      <div className="text-xl tracking-wider leading-relaxed mt-5">
        <span className="mr-2">
          Wenn Sie Fragen haben, zögern Sie bitte nicht, mich über die
          angegebene
        </span>
        <Link
          className="text-[var(--bg-background-color-6)] hover:text-[var(--bg-background-color-7)] duration-300 transition-colors underline underline-offset-4"
          href={'/kontakt'}
        >
          Kontaktmöglichkeit
        </Link>
        <span className="ml-2">
          zu erreichen. Ich freue mich darauf, Ihnen weiterzuhelfen.
        </span>
      </div>
      <div className="group w-fit">
        <Button
          className=" mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/business-yoga?background_color=fff7f2&text_color=6a604d&primary_color=6a604d">
            Jetzt buchen
          </CalendlyEmbed>
        </Button>
      </div>

      <h2 className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
        Astrologische Psychologie
      </h2>

      <p className=" text-xl tracking-wider leading-relaxed mt-5">
        Dein Geburtshoroskop ist ein Schnappschuss vom Himmel zum Zeitpunkt
        deiner Geburt an einem bestimmten Ort, die Planeten stehen in diesem
        Moment in bestimmten Zeichen und Häusern in unterschiedlichen
        Aspektierungen zueinander. Diese Kräfte sind wie ein Werkzeug und dienen
        als Diagnoseinstrument, in der du frei entscheidest, welchen Weg du
        gehst.
      </p>

      <p className=" text-xl tracking-wider leading-relaxed mt-5">
        Ich analysiere aus meiner Wahrnehmung und interpretiere nach dem
        Fünf-Schichten-Modell. Jede Schicht stellt eine eigene bewusstseinsebene
        dar. Zusammen können diese Schichten ein vollständiges Bild als Ganzes
        zeigen. Die psychologischen Ansätze beruhen auf Theorien von Carl Gustav
        Jung.
      </p>

      <ol className="text-xl tracking-wider leading-relaxed mt-5">
        <li>1. Schicht: Wesenszentrum</li>
        <li className="mt-2">2. Schicht: Aspektbild</li>
        <li className="mt-2">3. Schicht: Planeten</li>
        <li className="mt-2">4. Schicht: Tierkreiszeichen</li>
        <li className="mt-2">5. Schicht: Häuser</li>
      </ol>

      <div className="text-xl tracking-wider leading-relaxed mt-5">
        Diese Schichten stehen in Wechselwirkungen zueinander und wiederholen
        sich alle 25.000 Jahre in derselben Konstellation. Das macht deinen
        einzigartigen Chart aus.
      </div>
      <div className="group w-fit">
        <Button
          className=" mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/astrologie?background_color=fff7f2&text_color=6a604d&primary_color=6a604d">
            Jetzt buchen
          </CalendlyEmbed>
        </Button>
      </div>
    </div>
  );
}

export default Leistungen;
