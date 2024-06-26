import { didact, aboreto, maitree } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Instagram from '../footer/instagram';
import Link from 'next/link';

function PersonalSection() {
  return (
    <div className="flex flex-col lg:flex-row p-16 gap-8 items-center lg:justify-evenly">
      <div className="h-[32rem] p-6 flex flex-col items-center md:translate-x-0">
        <h1
          className={`${aboreto.className} text-2xl md:text-4xl whitespace-nowrap tracking-wider leading-relaxed text-slate-800 `}
        >
          Hi! Ich bin <span className="text-yellow-800 font-bold">Ebru.</span>
        </h1>
        <div className="p-2 mt-4 text-2xl md:text-3xl lg:max-w-[70%]  tracking-wider text-slate-700">
          <p>
            von Herzen freue ich mich, dass du den Weg zu mir gefunden hast. Als
            deine Ansprechpartnerin für Entspannungstechniken, Yoga &
            Astrologische Psychologie möchte ich dich mit wirkungsvollen
            Methoden wie, Meditation, Emotional Freedom Technique (EFT), Yoga
            und Progressiver Muskelentspannung (PMR) in Begleitung mit
            Atemübungen und Klängen bereichern, um deine Selbstheilungskräfte zu
            aktivieren.
          </p>
          <p>
            Die Astrologische Psychologie bietet dir die Möglichkeit deinen
            einzigartigen Fußabdruck zu entdecken und deiner Selbst bewusst zu
            werden.
          </p>

          <div className="flex flex-col gap-4 md:flex-row ">
            <Button className="mt-8 p-6 bg-[var(--bg-background-color-6)] duration-500 ease-in-out  transition-colors group hover:bg-[var(--bg-background-color-7)]">
              <Link href="/about">
                <span className="text-xl font-bold  tracking-wide text-slate-800 duration-500 ease-in-out transition-colors group-hover:text-slate-200">
                  Mehr über mich
                </span>
              </Link>
            </Button>
            <Button className="mt-8 p-6 bg-[var(--bg-background-color-6)] duration-500 ease-in-out  transition-colors group hover:bg-[var(--bg-background-color-7)]">
              <a
                href="https://www.instagram.com/ebysrelaxing"
                target="_blank"
                className="flex gap-2 group-hover:text-slate-200 "
              >
                <span className="text-xl font-bold  tracking-wide text-slate-800 duration-500 ease-in-out transition-colors group-hover:text-slate-200">
                  Instagram
                </span>
                <Instagram className="w-6 translate-y-[2px]  fill-slate-800 duration-500 ease-in-out transition-colors group-hover:fill-slate-200 " />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="md:w-96 p-4 md:p-0 shrink-0">
        <div className="rounded-full">
          <Image
            className="rounded-full"
            src="/ebru.jpg"
            alt="Ebru"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalSection;
