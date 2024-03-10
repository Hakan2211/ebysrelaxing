import { aboreto, maitree } from '@/app/fonts/fonts';
import Logo2 from '../header/logo2';

function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center h-0 translate-y-28 md:translate-y-0 text-slate-800 ">
      <h1
        className={`${aboreto.className} md:text-4xl text-xl md:p-2 leading-relaxed tracking-wider mb-2 text-center hidden md:block `}
      >
        Ebysrelaxing
      </h1>

      <p
        className={`${aboreto.className} md:text-3xl text-2xl md:pb-8 leading-relaxed tracking-wider text-center`}
      >
        Entspannung durch Klangschalentherapie
      </p>
      <div
        className={`${maitree.className} md:text-2xl text-lg tracking-wider text-slate-700 text-balance  mt-2 text-center leading-relaxed h-80`}
      >
        <p>Willkommen zu einer einzigartigen Erfahrung der Ruhe.</p>

        <p>Unsere Klangschalentherapie bietet tiefe Entspannung,</p>
        <p>ergänzt durch sanftes Yoga.</p>
      </div>
    </div>
  );
}

export default HeroText;
