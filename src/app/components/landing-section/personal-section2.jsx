import Link from 'next/link';
import Instagram from '../footer/instagram';
import { Button } from '@/components/ui/button';
import ArchImage from '../arch-image';
import Reveal from '../reveal';

function PersonalSection2() {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="mx-auto w-full max-w-sm">
          <ArchImage
            src="/ebru.jpg"
            alt="Porträt von Ebru Bilgic"
            sizes="(min-width: 1024px) 24rem, 85vw"
            outlineClassName="border-white/70"
          />
        </Reveal>

        <Reveal delay={150}>
          <p className="font-eyebrow text-sm uppercase tracking-[0.25em] text-[var(--bg-background-color-7)] md:text-base">
            Über mich
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight text-slate-900 md:text-5xl">
            Hi! Ich bin{' '}
            <span className="font-script text-7xl leading-none text-yellow-900 md:text-8xl">
              Ebru
            </span>
            .
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-800 md:text-xl">
            von Herzen freue ich mich, dass du den Weg zu mir gefunden hast. Als
            deine Ansprechpartnerin für Entspannungstechniken, Yoga &
            Astrologische Psychologie möchte ich dich mit wirkungsvollen Methoden
            wie, Meditation, Emotional Freedom Technique (EFT), Yoga und
            Progressiver Muskelentspannung (PMR) in Begleitung mit Atemübungen
            und Klängen bereichern, um deine Selbstheilungskräfte zu aktivieren.
            Die Astrologische Psychologie bietet dir die Möglichkeit deinen
            einzigartigen Fußabdruck zu entdecken und deiner Selbst bewusst zu
            werden.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <Link href="/about">Mehr über mich</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="gap-2 rounded-full border-2 border-[var(--bg-background-color-7)] bg-transparent font-bold tracking-wide text-slate-800 hover:bg-[var(--bg-background-color-7)] hover:text-slate-100"
            >
              <a
                href="https://www.instagram.com/ebysrelaxing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <Instagram className="h-5 w-5 fill-current" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default PersonalSection2;
