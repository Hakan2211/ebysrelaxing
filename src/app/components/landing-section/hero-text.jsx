import { aboreto, maitree } from '@/app/fonts/fonts';

function HeroText() {
  return (
    <div className="flex flex-col items-center justify-center h-0 translate-y-28 md:translate-y-0">
      <h1
        className={`${aboreto.className} md:text-4xl text-xl md:p-2 leading-relaxed text-center hidden md:block `}
      >
        Ebysrelaxing
      </h1>
      <p
        className={`${aboreto.className} md:text-3xl text-2xl md:pb-8 leading-relaxed text-center`}
      >
        Entspannung durch Klangschalentherapie
      </p>
      <div className={`${maitree.className} text-lg leading-relaxed h-80`}>
        <p>Willkommen zu einer einzigartigen Erfahrung der Ruhe.</p>

        <p>Unsere Klangschalentherapie bietet tiefe Entspannung,</p>
        <p>ergänzt durch sanftes Yoga.</p>
      </div>
    </div>
  );
}

export default HeroText;
