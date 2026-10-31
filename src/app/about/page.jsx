import Link from 'next/link';
import {
  AudioWaveform,
  GraduationCap,
  Hand,
  Hash,
  Leaf,
  MessageCircle,
  Moon,
  Orbit,
  PlayCircle,
  Quote,
  Sparkles,
  Sun,
  Sunrise,
  Wind,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ArchImage from '../components/arch-image';
import Reveal from '../components/reveal';
import SectionHeading from '../components/section-heading';
import CtaBand from '../components/cta-band';
import Wave from '../components/wave';

export const metadata = {
  title: 'Ebru Bilgic - Ebysrelaxing - About',
  description: 'About Ebru Bilgic - Ebysrelaxing.',
};

const IVORY = 'var(--bg-background-color-4)';
const CREAM = 'var(--bg-background-color-3)';
const SAND = 'var(--bg-background-color-5)';
const SAGE = 'hsl(var(--secondary))';

const eyebrow =
  'font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)] md:text-base';

// Ebru's story, split into chapters (text unchanged, only divided).
const chapters = [
  {
    title: 'Äußere Reisen',
    image: {
      src: '/ebru_visuals2.jpg',
      alt: 'Räucherwerk und Kerzen auf einem Tisch',
    },
    text: 'Von meiner kleinen Weltreise bis hin zu meinem Leben auf verschiedenen Kontinenten und meiner Teilnahme an sozialen Projekten habe ich unzählige wertvolle Erfahrungen gesammelt.',
  },
  {
    title: 'Innere Reisen',
    image: { src: '/yogamatte.jpg', alt: 'Yogamatte' },
    text: 'In den Seiten von Büchern, an Weiterbildungen und Seminaren unternehme ich meine inneren Reisen. Ich stieß auf lebensverändernde Methoden, die mir bis heute helfen, stressige Situationen mit mehr Leichtigkeit zu meistern. Das Leben bringt unvorhergesehene Ereignisse oder überwältigende Situationen mit, doch, wie ich damit umgehe, liegt ganz bei mir selbst.',
  },
  {
    title: 'Meine Willensstärke',
    image: { src: '/ebru_visuals3.jpg', alt: 'Klangschalen und Kerzen' },
    text: 'Bedingt durch meinen späten Abord im 5. Monat meiner Zwillingsseelen, habe ich eines nie verloren: Meine Willensstärke. Dank EFT konnte ich den tiefen Schmerz und meine Wut immer mehr lösen. Aus der Wut kam die Trauer. Genau diese Gefühle in mir konnte ich Schicht für Schicht wie eine Zwiebel schälen und verarbeiten. Yoga und Entspannungstechniken unterstützten mich dabei, meinen Körper zu regenerieren und mir selbst liebevoller zu begegnen.',
  },
];

const facts = [
  { icon: Sun, label: 'Sonnenzeichen', value: 'Jungfrau' },
  { icon: Sunrise, label: 'Aszendent', value: 'Skorpion' },
  { icon: Moon, label: 'Mondzeichen', value: 'Jungfrau' },
  { icon: Hash, label: 'Numerologie', value: 'Lebenszahl 12' },
  {
    icon: Sparkles,
    label: 'Human Design',
    value: 'Generatorin · Profil 3/5',
    note: 'Lebensthema: Gemeinschaftliches Wohlergehen vorantreiben',
    wide: true,
  },
];

const education = [
  { icon: Wind, title: 'Entspannungstrainerin', type: 'Studium' },
  { icon: AudioWaveform, title: 'Klangtherapeutin', type: 'Weiterbildung' },
  { icon: Leaf, title: 'Yoga teacher', type: '200h Yoga Alliance' },
  {
    icon: Hand,
    title: 'Akupressurklopftechniken / EFT',
    type: 'Basis- und Aufbauseminar',
  },
  { icon: MessageCircle, title: 'Greator Coaching', type: 'Seminar' },
  { icon: Orbit, title: 'Astrologische Psychologie', type: 'Studium' },
];

function About() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="soft-glow relative overflow-hidden">
        <div className="container relative grid items-center gap-14 px-4 pb-24 pt-12 md:px-6 md:pb-36 md:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="motion-safe:animate-fade-up">
            <p className={eyebrow}>Über mich</p>
            <h1 className="mt-5 text-balance font-display text-4xl font-light leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
              Schön, dass du da bist,
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-700 md:text-2xl">
              mein Name ist{' '}
              <span className="font-script text-5xl leading-none text-yellow-900 md:text-6xl">
                Ebru
              </span>{' '}
              und ich liebe es zu reisen, sowohl äußerlich als auch innerlich.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="brand" size="xl" className="gap-2">
                <a href="#video">
                  <PlayCircle className="h-5 w-5" aria-hidden="true" />
                  Mein Weg im Video
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="rounded-full border-2 border-[var(--bg-background-color-7)] bg-transparent font-bold tracking-wide text-slate-800 hover:bg-[var(--bg-background-color-7)] hover:text-slate-100"
              >
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>

          <div
            className="relative mx-auto w-full max-w-sm motion-safe:animate-fade-up lg:max-w-md"
            style={{ animationDelay: '200ms' }}
          >
            <ArchImage
              src="/ebru2.jpg"
              alt="Porträt von Ebru"
              sizes="(min-width: 1024px) 28rem, 85vw"
              priority
              // Tall phone photo: anchor to the top so head and hair stay in frame.
              imageClassName="object-top"
            />
            <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/85 px-4 py-3 shadow-lg backdrop-blur motion-safe:animate-float sm:-left-10">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="text-sm leading-tight text-slate-800">
                <p className="font-semibold">Yoga teacher</p>
                <p className="text-slate-600">200h Yoga Alliance</p>
              </div>
            </div>
          </div>
        </div>
        <Wave
          from="transparent"
          to={CREAM}
          className="absolute inset-x-0 bottom-0"
        />
      </section>

      {/* ---------- Story ---------- */}
      <section style={{ background: CREAM }}>
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Meine Geschichte"
              title="Jede meiner Reisen bereichert mich auf eine ganz besondere Weise."
              ornament
            />
          </Reveal>

          <div className="relative mx-auto mt-16 max-w-5xl md:mt-24">
            {/* Timeline line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[var(--bg-background-color-6)] to-transparent md:block"
            />
            <ol className="space-y-20 md:space-y-28">
              {chapters.map((c, i) => {
                const flip = i % 2 === 1;
                return (
                  <li
                    key={c.title}
                    className="relative grid items-center gap-10 md:grid-cols-2 md:gap-24"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 z-10 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--bg-background-color-6)] ring-8 ring-[var(--bg-background-color-3)] md:block"
                    />
                    <Reveal className={cn(flip && 'md:order-last')}>
                      <ArchImage
                        src={c.image.src}
                        alt={c.image.alt}
                        sizes="(min-width: 768px) 22rem, 80vw"
                        className="mx-auto w-full max-w-[18rem] md:max-w-[20rem]"
                      />
                    </Reveal>
                    <Reveal delay={120} className={cn(flip && 'md:text-right')}>
                      <p className="font-display text-6xl font-light text-[var(--bg-background-color-6)] md:text-7xl">
                        0{i + 1}
                      </p>
                      <h3 className="mt-2 font-display text-3xl text-slate-900">
                        {c.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-slate-700">
                        {c.text}
                      </p>
                    </Reveal>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
      <Wave from={CREAM} to={SAND} />

      {/* ---------- Pull quote ---------- */}
      <section style={{ background: SAND }}>
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Reveal as="figure" className="mx-auto max-w-4xl text-center">
            <Quote
              className="mx-auto h-10 w-10 text-[var(--bg-background-color-7)] opacity-60"
              aria-hidden="true"
            />
            <blockquote className="mt-6 text-balance font-display text-3xl font-light leading-snug text-slate-900 md:text-5xl">
              Heute ist mir klar, dass eine Transformation Geduld erfordert, wie
              die Verwandlung einer Raupe zu einem Schmetterling, geschieht sie
              im eigenen Rhythmus.
            </blockquote>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-800 md:text-xl">
              Es erfüllt mich mit Freude, diese kostbaren Übungen und die darin
              liegende Magie mit dir zu teilen.
            </p>
            <figcaption className="mt-6 font-script text-6xl text-yellow-900">
              Ebru
            </figcaption>
          </Reveal>
        </div>
      </section>
      <Wave from={SAND} to={CREAM} flip />

      {/* ---------- Facts ---------- */}
      <section style={{ background: CREAM }}>
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Persönlich"
              title="5 Fakten über mich"
              ornament
            />
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facts.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal
                  as="li"
                  key={f.label}
                  delay={i * 90}
                  className={cn(f.wide && 'sm:col-span-2')}
                >
                  <div className="flex h-full items-start gap-4 rounded-[1.75rem] bg-white/70 p-6 shadow-[0_10px_40px_-20px_rgb(106_96_77_/_0.4)] ring-1 ring-[var(--bg-background-color-2)] transition-transform duration-500 ease-out-expo hover:-translate-y-1">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-eyebrow text-xs uppercase tracking-[0.2em] text-[var(--bg-background-color-7)]">
                        {f.label}
                      </p>
                      <p className="mt-1 font-display text-2xl text-slate-900">
                        {f.value}
                      </p>
                      {f.note && (
                        <p className="mt-1 text-slate-600">{f.note}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
      <Wave from={CREAM} to={SAGE} />

      {/* ---------- Education ---------- */}
      <section style={{ background: SAGE }}>
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Qualifikationen"
              title="Meine Ausbildungen"
              ornament
            />
          </Reveal>
          <ul className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((e, i) => {
              const Icon = e.icon;
              return (
                <Reveal as="li" key={e.title} delay={i * 90}>
                  <div className="flex h-full flex-col rounded-[1.75rem] bg-white/30 p-6 ring-1 ring-white/60 transition-colors duration-500 hover:bg-white/50">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--bg-background-color-7)] text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-slate-900">
                      {e.title}
                    </h3>
                    <p className="mt-auto pt-3">
                      <span className="inline-block rounded-full bg-white/60 px-3 py-1 text-sm text-slate-700">
                        {e.type}
                      </span>
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>
      <Wave from={SAGE} to={IVORY} flip />

      {/* ---------- Video ---------- */}
      <section id="video" className="scroll-mt-24">
        <div className="container px-4 pt-16 md:px-6 md:pt-24">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
            <Reveal className="text-center md:text-left">
              <p className={eyebrow}>Mein Weg im Video</p>
              <h2 className="mt-4 text-balance font-display text-3xl font-light leading-tight text-slate-900 md:text-5xl">
                In diesem Video fasse ich meinen Weg in aller Kürze zusammen
              </h2>
              <p className="mt-6 inline-flex items-center gap-2 text-slate-600">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                ca. 4 Minuten
              </p>
            </Reveal>
            <Reveal delay={120} className="mx-auto w-full max-w-xs md:max-w-sm">
              {/* Portrait video (3:4) in an arch frame */}
              <div className="overflow-hidden rounded-b-[2rem] rounded-t-full bg-[var(--bg-background-color-7)] p-2 shadow-[0_30px_60px_-25px_rgb(106_96_77_/_0.8)]">
                <video
                  className="aspect-[3/4] w-full rounded-b-[1.6rem] rounded-t-full bg-[var(--bg-background-color-7)] object-cover object-top"
                  controls
                  preload="metadata"
                  poster="/ebru2.jpg"
                >
                  <source src="/ebru_video.mp4" type="video/mp4" />
                </video>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Lass uns sprechen"
        title="Hier bin ich für dich erreichbar"
      />
    </>
  );
}

export default About;
