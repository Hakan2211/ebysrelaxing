import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowDown,
  AudioWaveform,
  Check,
  Clock,
  Flower2,
  Hand,
  Leaf,
  Sparkles,
  Wind,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { offerById, offers } from '@/app/data/offers';
import CalendlyEmbed from '../components/calendly/PopupWidget';
import PageHeader from '../components/page-header';
import Reveal from '../components/reveal';
import ArchImage from '../components/arch-image';
import ReadMore from '../components/read-more';
import CtaBand from '../components/cta-band';
import Wave from '../components/wave';

export const metadata = {
  title: 'Ebru Bilgic - Ebysrelaxing - Leistungen',
  description: 'Leistungen von Ebru Bilgic - Ebysrelaxing.',
};

const IVORY = 'var(--bg-background-color-4)';
const CREAM = 'var(--bg-background-color-3)';
const SAND = 'var(--bg-background-color-5)';

const lead =
  'font-display text-xl font-light leading-relaxed text-slate-800 md:text-2xl';
const body = 'text-lg leading-relaxed text-slate-700';
const subheading =
  'font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)]';

/* ---------- Building blocks ---------- */

function OverviewTile({ offer, index }) {
  const Icon = offer.icon;
  return (
    <Reveal delay={index * 120} className="h-full">
      <a
        href={`#${offer.id}`}
        className="group flex h-full flex-col rounded-[2rem] bg-white/70 p-5 shadow-[0_10px_40px_-20px_rgb(106_96_77_/_0.4)] ring-1 ring-[var(--bg-background-color-2)] transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgb(106_96_77_/_0.5)]"
      >
        <div className="relative aspect-[5/4] overflow-hidden rounded-t-full rounded-b-2xl">
          <Image
            src={offer.image.src}
            alt=""
            fill
            sizes="(min-width: 768px) 30vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col px-2 pb-2 pt-5">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--bg-background-color-2)] px-3 py-1 text-sm text-[var(--bg-background-color-7)]">
            <Icon className="h-4 w-4" aria-hidden="true" />
            {offer.format}
          </span>
          <h2 className="mt-4 font-display text-2xl text-slate-900">
            {offer.title}
          </h2>
          <p className="mt-1 text-slate-600">
            {offer.duration} · {offer.price}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 pt-5 font-medium text-[var(--bg-background-color-7)]">
            Mehr erfahren
            <ArrowDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

/** Sticky photo + "auf einen Blick" fact card + booking button. */
function OfferAside({ offer, outlineClassName }) {
  const Icon = offer.icon;
  return (
    <div>
      <ArchImage
        src={offer.image.src}
        alt={offer.image.alt}
        sizes="(min-width: 1024px) 26rem, 85vw"
        outlineClassName={outlineClassName}
        className="mx-auto w-full max-w-sm"
      />
      <div className="relative z-10 mx-auto -mt-20 w-[88%] max-w-xs rounded-3xl bg-white/90 p-6 shadow-xl backdrop-blur">
        <p className={subheading}>Auf einen Blick</p>
        <p className="mt-3 font-display text-5xl font-light text-slate-900">
          {offer.price}
        </p>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex items-center gap-3">
            <Clock
              className="h-4 w-4 text-[var(--bg-background-color-6)]"
              aria-hidden="true"
            />
            {offer.duration}
          </li>
          <li className="flex items-center gap-3">
            <Icon
              className="h-4 w-4 text-[var(--bg-background-color-6)]"
              aria-hidden="true"
            />
            {offer.format} · {offer.location}
          </li>
        </ul>
        <CalendlyEmbed url={offer.url} className="mt-6 w-full">
          Jetzt buchen
        </CalendlyEmbed>
      </div>
    </div>
  );
}

function OfferSection({ offer, reverse = false, outlineClassName, children }) {
  return (
    <section
      id={offer.id}
      aria-labelledby={`${offer.id}-title`}
      className="container px-4 py-16 md:px-6 md:py-24"
    >
      <div
        className={cn(
          'mx-auto grid max-w-6xl items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20',
          reverse && 'lg:grid-cols-[1.15fr_0.85fr]'
        )}
      >
        <Reveal
          // Mobile: text first, photo + booking card after it.
          className={cn(
            'order-last lg:sticky lg:top-28',
            !reverse && 'lg:order-first'
          )}
        >
          <OfferAside offer={offer} outlineClassName={outlineClassName} />
        </Reveal>
        <Reveal delay={120}>
          <p className={subheading}>{offer.format}</p>
          <h2
            id={`${offer.id}-title`}
            className="mt-3 font-display text-4xl font-light leading-tight text-slate-900 md:text-5xl"
          >
            {offer.title}
          </h2>
          {offer.subtitle && (
            <p className="mt-2 text-xl text-slate-600">{offer.subtitle}</p>
          )}
          <div className="mt-8 space-y-6">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

const methods = [
  { label: 'Atemübungen', icon: Wind },
  { label: 'Yoga', icon: Leaf },
  { label: 'Meditation', icon: Flower2 },
  { label: 'PMR', icon: Hand },
  { label: 'EFT', icon: Sparkles },
  { label: 'Klangbad', icon: AudioWaveform },
];

const layers = [
  'Wesenszentrum',
  'Aspektbild',
  'Planeten',
  'Tierkreiszeichen',
  'Häuser',
];

/** Concentric rings: layer 1 in the centre, layer 5 on the outside. */
function LayerRings() {
  return (
    <div className="grid items-center gap-8 rounded-[2rem] bg-white/60 p-6 ring-1 ring-[var(--bg-background-color-2)] sm:grid-cols-[auto_1fr] md:p-8">
      <div
        aria-hidden="true"
        className="relative mx-auto aspect-square w-52 md:w-60"
      >
        {layers.map((_, i) => {
          const n = layers.length - i; // outer ring first
          const size = 100 - i * 19;
          return (
            <div
              key={n}
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start justify-center rounded-full border border-[var(--bg-background-color-6)]"
              style={{
                width: `${size}%`,
                height: `${size}%`,
                background: `rgb(201 166 107 / ${0.06 + i * 0.07})`,
              }}
            >
              {n > 1 && (
                <span className="mt-1 font-display text-xs text-[var(--bg-background-color-7)]">
                  {n}
                </span>
              )}
            </div>
          );
        })}
        <div className="absolute left-1/2 top-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--bg-background-color-7)] font-display text-xs text-white">
          1
        </div>
      </div>
      <ol className="space-y-3">
        {layers.map((name, i) => (
          <li key={name} className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--bg-background-color-2)] font-display text-sm text-[var(--bg-background-color-7)]">
              {i + 1}
            </span>
            <span className="text-lg text-slate-800">
              <span className="sr-only">{i + 1}. </span>Schicht: {name}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

/* ---------- Page ---------- */

function Leistungen() {
  const gruppen = offerById.gruppen;
  const wellbeing = offerById.wellbeing;
  const astrologie = offerById.astrologie;

  return (
    <>
      <PageHeader eyebrow="Leistungen" title="Meine Leistungen" />

      {/* Overview */}
      <div className="container px-4 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-8">
          {offers.map((offer, i) => (
            <OverviewTile key={offer.id} offer={offer} index={i} />
          ))}
        </div>
      </div>

      <Wave from={IVORY} to={CREAM} />
      <div style={{ background: CREAM }}>
        <OfferSection offer={gruppen}>
          <p className={lead}>
            Im Laufe der Jahre habe ich meinen eigenen Stil entwickelt, der
            meine Lebenserfahrungen, meine Hingabe an Spiritualität und meine
            Liebe zur Bewegung & Entspannung vereint.
          </p>
          <ReadMore className={body}>
            <p>
              Ebysrelaxing öffnet einen Online-Raum, um die Praktiken, die mir
              so viel Freude bereiten, zu teilen - eine Fusion aus Yoga,
              Entspannungstechniken und spirituellen Themen, die meine
              Leidenschaften zum Leben erweckt. Nähere Infos gebe ich in Social
              Media bekannt. Ich freue mich, wenn du Teil meiner Community auf
              Instagram wirst und vielleicht beim nächsten mal dabei bist. Bist
              du kein Social Media Mitglied, dann schaue einfach in den
              Buchungslink, dort werden Beschreibung und Termin bekannt gegeben.
            </p>
          </ReadMore>
          <div>
            <p className={cn(subheading, 'mb-4')}>
              Du erhältst eine Mischung aus:
            </p>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {methods.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-[var(--bg-background-color-2)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-slate-800">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </OfferSection>
      </div>

      <Wave from={CREAM} to={SAND} flip />
      <div style={{ background: SAND }}>
        <OfferSection
          offer={wellbeing}
          reverse
          outlineClassName="border-white/70"
        >
          <p className={lead}>
            Durch die Integration von Wellbeing-Angeboten wie Atemübungen, Yoga,
            Meditation, PMR und Klangbäder in den Arbeitsalltag Ihrer
            Mitarbeiter können Sie deren Leistungsfähigkeit, Gesundheit und
            Motivation entscheidend steigern.
          </p>
          <ReadMore className="text-lg leading-relaxed text-slate-800">
            <p>
              Ihr Engagement trägt nicht nur zur Verbesserung Ihres Images bei,
              sondern festigt auch die Bindung Ihrer Mitarbeiter an Ihr
              Unternehmen. Gesundheitstage können als Abend- oder
              Wochenendveranstaltung angeboten werden, um die individuellen
              Zeitpläne und Bedürfnisse Ihrer Mitarbeiter bestmöglich zu
              berücksichtigen.
            </p>
          </ReadMore>
          <div>
            <p className={cn(subheading, 'mb-4')}>
              Vorteile von betrieblicher Gesundheitsförderung:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Verbessertes Mitarbeiter-Wohlbefinden',
                'Erhöhte physische und psychische Belastbarkeit',
                'Reduzierung von Stress',
                'Förderung einer angenehmen Arbeitsatmosphäre',
                'Steigerung der Konzentration',
                'Erhöhung Ihrer Mitarbeiterproduktivität',
                'Verstärkung der Mitarbeiterzufriedenheit',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white/60 px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--bg-background-color-7)] text-white">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-slate-800">
            Wenn Sie Fragen haben, zögern Sie bitte nicht, mich über die
            angegebene{' '}
            <Link
              className="font-medium text-[var(--bg-background-color-7)] underline underline-offset-4 transition-colors hover:text-slate-900"
              href="/kontakt"
            >
              Kontaktmöglichkeit
            </Link>{' '}
            zu erreichen. Ich freue mich darauf, Ihnen weiterzuhelfen.
          </p>
        </OfferSection>
      </div>

      <Wave from={SAND} to={CREAM} />
      <div style={{ background: CREAM }}>
        <OfferSection offer={astrologie}>
          <p className={lead}>
            Dein Geburtshoroskop ist ein Schnappschuss vom Himmel zum Zeitpunkt
            deiner Geburt an einem bestimmten Ort, die Planeten stehen in diesem
            Moment in bestimmten Zeichen und Häusern in unterschiedlichen
            Aspektierungen zueinander.
          </p>
          <p className={body}>
            Diese Kräfte sind wie ein Werkzeug und dienen als
            Diagnoseinstrument, in der du frei entscheidest, welchen Weg du
            gehst.
          </p>
          <div>
            <p className={cn(subheading, 'mb-4')}>Das Fünf-Schichten-Modell</p>
            <p className={cn(body, 'mb-6')}>
              Ich analysiere aus meiner Wahrnehmung und interpretiere nach dem
              Fünf-Schichten-Modell. Jede Schicht stellt eine eigene
              Bewusstseinsebene dar. Zusammen können diese Schichten ein
              vollständiges Bild als Ganzes zeigen. Die psychologischen Ansätze
              beruhen auf Theorien von Carl Gustav Jung.
            </p>
            <LayerRings />
          </div>
          <p className={body}>
            Diese Schichten stehen in Wechselwirkungen zueinander und
            wiederholen sich alle 25.000 Jahre in derselben Konstellation. Das
            macht deinen einzigartigen Chart aus.
          </p>
        </OfferSection>
      </div>
      <Wave from={CREAM} to={IVORY} flip />

      <CtaBand eyebrow="Fragen?" title="Hier bin ich für dich erreichbar" />
    </>
  );
}

export default Leistungen;
