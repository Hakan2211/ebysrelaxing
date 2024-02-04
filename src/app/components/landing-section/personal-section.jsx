import { didact, aboreto, maitree } from '@/app/fonts/fonts';
import Image from 'next/image';

function PersonalSection() {
  return (
    <div className="flex p-16 gap-8 justify-evenly">
      <div className="h-[32rem] w-1/3 p-6 flex  flex-col items-center">
        <h1 className={`${aboreto.className} text-5xl whitespace-nowrap `}>
          Hi! Mein Name ist <span className="text-secondary">Ebru.</span>
        </h1>
        <div className="p-4 mt-8 text-3xl">
          <h2>Ich bin Deine Entspannungstrainerin und Yoga-Coach</h2>
          <p>Ich helfe Dir dabei, dein Selbstbewusstsein zu finden,</p>
          <p>um Dich in deinem wundervollen Körper wohl zu fühlen.</p>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-lg"
          src="/ebru_portrait.jpg"
          alt="Ebru"
          width={500}
          height={1000}
        />
      </div>
    </div>
  );
}

export default PersonalSection;
