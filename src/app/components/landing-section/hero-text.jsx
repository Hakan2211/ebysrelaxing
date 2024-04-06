import { aboreto, maitree } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

function HeroText() {
  return (
    <div className="lg:h-[60svh]">
      <h1
        className={`${aboreto.className} md:text-4xl text-xl md:p-2 leading-relaxed tracking-wider mb-2 text-center hidden md:block `}
      >
        Ebysrelaxing
      </h1>

      <p
        className={`${aboreto.className} md:text-3xl text-2xl md:pb-8 leading-relaxed tracking-wider text-center`}
      >
        Glückshormone, Gelassenheit und Lebenslust
      </p>
      <div
        className={`${maitree.className} md:text-2xl text-lg tracking-wider text-slate-700  mt-2 leading-relaxed h-80`}
      >
        <p>
          langfristig regulieren und durch das Leben entspannter gehen, komme
          was wolle. Es liegt in deiner Selbstverantwortung, dein Wohlbefinden
          auf den nächsten Level zu steigern. Im Alltag ist es oft hektisch und
          wir fühlen uns energielos, da sich Stress im Kopf und im Körper
          ansammelt. Regelmäßige Bewegung und emotionale Balance können das
          Zusammenspiel unserer Nervenzellen aktivieren, was zu einer
          verbesserten Gehirnaktivität führt. Gleichzeitig unterstützt eine
          bewusste Atmung den Blutkreislauf, harmonisiert die Muskeln und
          versorgt die Organe mit ausreichend Sauerstoff. Durch gezielte Übungen
          können Emotionen angenommen, verklebtes Gewebe sich lösen und die
          Energie wieder zum Fließen bringen.
        </p>

        <Button className="mt-8 p-6 bg-[var(--bg-background-color-6)] duration-500 ease-in-out  transition-colors group hover:bg-[var(--bg-background-color-7)]">
          <Link href="/leistungen">
            <span className="text-xl font-bold  tracking-wide text-slate-800 duration-500 ease-in-out transition-colors group-hover:text-slate-200">
              Meine Leistungen
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroText;
