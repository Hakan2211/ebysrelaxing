import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Reveal from './reveal';
import { Ornament } from './section-heading';

/** Warm, dark closing band with a heading and two actions. */
function CtaBand({ eyebrow, title, children }) {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[var(--bg-background-color-7)] px-6 py-14 text-center text-[var(--bg-background-color-3)] shadow-[0_30px_60px_-25px_rgb(106_96_77_/_0.8)] md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--bg-background-color)] opacity-30 blur-3xl motion-safe:animate-breathe"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[rgb(191_193_154)] opacity-20 blur-3xl"
        />
        <div className="relative flex flex-col items-center">
          <Ornament />
          {eyebrow && (
            <p className="mt-5 font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-2)] md:text-base">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-light leading-tight text-white md:text-5xl">
            {title}
          </h2>
          {children && (
            <div className="mt-5 max-w-xl text-lg leading-relaxed text-[var(--bg-background-color-2)]">
              {children}
            </div>
          )}
          <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Button
              asChild
              variant="brand"
              size="xl"
              className="bg-[var(--bg-background-color-2)] text-slate-900 hover:bg-white hover:text-slate-900"
            >
              <Link href="/kontakt">Kontakt aufnehmen</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="rounded-full border-2 border-[var(--bg-background-color-2)] bg-transparent font-bold tracking-wide text-[var(--bg-background-color-3)] hover:bg-[var(--bg-background-color-2)] hover:text-slate-900"
            >
              <Link href="/#preise">Termin buchen</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default CtaBand;
