import { didact, aboreto, maitree } from '@/app/fonts/fonts';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Instagram from '../footer/instagram';

function PersonalSection() {
  return (
    <div className="flex flex-col lg:flex-row p-16 gap-8 items-center lg:justify-evenly">
      <div className="h-[32rem] p-6 flex flex-col items-center md:translate-x-0">
        <h1
          className={`${aboreto.className} text-2xl md:text-4xl whitespace-nowrap tracking-wide text-slate-800 `}
        >
          Hi! Mein Name ist{' '}
          <span className="text-yellow-800 font-bold">Ebru.</span>
        </h1>
        <div className="p-2 mt-4 text-2xl md:text-3xl tracking-wide  text-slate-700">
          <h2>Ich bin Deine Entspannungstrainerin und Yoga-Coach</h2>
          <p>Ich helfe Dir dabei, dein Selbstbewusstsein zu finden,</p>
          <p>um Dich in deinem wundervollen Körper wohl zu fühlen.</p>
          <Button className="mt-8 p-6 bg-[var(--bg-background-color-6)] duration-500 ease-in-out transition-colors group hover:bg-[var(--bg-background-color-7)]">
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
      <div className="md:w-96">
        <Image
          className="rounded-full"
          src="/ebru_portrait.jpg"
          alt="Ebru"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default PersonalSection;
