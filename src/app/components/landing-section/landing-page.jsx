import Link from 'next/link';
import { Laptop, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ArchImage from '../arch-image';
import Wave from '../wave';

// Staggered on-load entrance for hero elements (CSS only, no JS needed).
const enter = (delay) => ({
  className: 'motion-safe:animate-fade-up',
  style: { animationDelay: `${delay}ms` },
});

function LandingPage() {
  return (
    <div className="soft-glow relative overflow-hidden">
      {/* Slowly "breathing" light behind the hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-[var(--bg-background-color)] opacity-20 blur-3xl motion-safe:animate-breathe"
      />

      <div className="container relative grid items-center gap-14 px-4 pb-24 pt-12 md:px-6 md:pb-36 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p
            style={enter(0).style}
            className={`${enter(0).className} font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)] md:text-base`}
          >
            Entspannung · Yoga · Astrologische Psychologie
          </p>
          <h1
            style={enter(120).style}
            className={`${enter(120).className} mt-5 text-balance font-display text-4xl font-light leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl`}
          >
            Glückshormone, Gelassenheit und Lebenslust
          </h1>
          <p
            style={enter(240).style}
            className={`${enter(240).className} mt-6 max-w-xl text-xl leading-relaxed text-slate-700 md:text-2xl`}
          >
            langfristig regulieren und durch das Leben entspannter gehen, komme
            was wolle.
          </p>

          <div
            style={enter(360).style}
            className={`${enter(360).className} mt-10 flex flex-col gap-4 sm:flex-row`}
          >
            <Button asChild variant="brand" size="xl">
              <Link href="#preise">Termin buchen</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-full border-2 border-[var(--bg-background-color-7)] bg-transparent font-bold tracking-wide text-slate-800 hover:bg-[var(--bg-background-color-7)] hover:text-slate-100"
            >
              <Link href="/leistungen">Meine Leistungen</Link>
            </Button>
          </div>
        </div>

        <div
          style={enter(200).style}
          className={`${enter(200).className} relative mx-auto w-full max-w-sm lg:max-w-md`}
        >
          <ArchImage
            src="/background_ebru.jpg"
            alt="Klangschale mit Blüten in zwei Händen"
            sizes="(min-width: 1024px) 28rem, 85vw"
            priority
          />
          {/* Floating info badge */}
          <div className="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-lg backdrop-blur motion-safe:animate-float sm:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]">
              <Laptop className="h-5 w-5" aria-hidden="true" />
            </span>
            <div className="text-sm leading-tight text-slate-800">
              <p className="font-semibold">Online &amp; vor Ort</p>
              <p className="flex items-center gap-1 text-slate-600">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Raum Frankfurt
              </p>
            </div>
          </div>
        </div>
      </div>

      <Wave
        from="transparent"
        to="var(--bg-background-color-3)"
        className="absolute inset-x-0 bottom-0"
      />
    </div>
  );
}

export default LandingPage;
