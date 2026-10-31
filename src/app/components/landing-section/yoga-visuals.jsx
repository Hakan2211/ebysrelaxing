import ArchImage from '../arch-image';
import Reveal from '../reveal';
import { Ornament } from '../section-heading';

const photos = [
  { src: '/yogamatte.jpg', alt: 'Yogamatte', offset: 'sm:mt-16' },
  { src: '/ebru3.jpg', alt: 'Ebru bei einer Yoga-Übung', offset: '' },
  {
    src: '/ebru_visuals3.jpg',
    alt: 'Ebru in entspannter Haltung',
    offset: 'sm:mt-16',
  },
];

function YogaVisuals() {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <Reveal className="flex flex-col items-center text-center">
        <Ornament />
        <p className="mt-4 font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)] md:text-base">
          Warum Entspannung?
        </p>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-700 md:text-xl">
          Es liegt in deiner Selbstverantwortung, dein Wohlbefinden auf den
          nächsten Level zu steigern. Im Alltag ist es oft hektisch und wir
          fühlen uns energielos, da sich Stress im Kopf und im Körper ansammelt.
          Regelmäßige Bewegung und emotionale Balance können das Zusammenspiel
          unserer Nervenzellen aktivieren, was zu einer verbesserten
          Gehirnaktivität führt. Gleichzeitig unterstützt eine bewusste Atmung
          den Blutkreislauf, harmonisiert die Muskeln und versorgt die Organe
          mit ausreichend Sauerstoff. Durch gezielte Übungen können Emotionen
          angenommen, verklebtes Gewebe sich lösen und die Energie wieder zum
          Fließen bringen.
        </p>
        <h2 className="mt-12 max-w-3xl text-balance font-display text-3xl font-light leading-snug text-slate-900 md:text-4xl">
          Daher erhältst du von mir eine einzigartige Mischung an Werkzeugen und
          das Know-how meiner eigenen Erfahrungen
        </h2>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8 md:gap-12">
        {photos.map((p, i) => (
          <Reveal key={p.src} delay={i * 150} className={p.offset}>
            <ArchImage
              src={p.src}
              alt={p.alt}
              sizes="(min-width: 640px) 30vw, 80vw"
              className="mx-auto w-full max-w-[16rem]"
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default YogaVisuals;
