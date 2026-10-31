import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ArchImage from '../arch-image';
import Reveal from '../reveal';
import { Ornament } from '../section-heading';

function InvestmentSection() {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-16">
        <Reveal className="text-center md:text-left">
          <Ornament className="justify-center md:justify-start" />
          <h2 className="mt-6 text-balance font-display text-3xl font-light leading-snug text-slate-900 md:text-5xl">
            Du bist herzlich eingeladen, dich auf die Reise der Selbstentfaltung
            zu begeben und deine innere Größe aufzuspüren.
          </h2>
          <Button asChild variant="brand" size="xl" className="mt-10">
            <Link href="#preise">Angebote ansehen</Link>
          </Button>
        </Reveal>
        <Reveal delay={150} className="mx-auto w-full max-w-[16rem]">
          <ArchImage
            src="/flow.png"
            alt=""
            sizes="16rem"
            outlineClassName="border-white/70"
          />
        </Reveal>
      </div>
    </div>
  );
}

export default InvestmentSection;
