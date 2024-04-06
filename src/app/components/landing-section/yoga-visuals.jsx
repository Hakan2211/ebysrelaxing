import { didact } from '@/app/fonts/fonts';
import Image from 'next/image';

function YogaVisuals() {
  return (
    <div className={`${didact.className} relative `}>
      <div>
        <div className="border border-t-2 border-secondary rotate-90 absolute rounded-full -top-10 left-[50%]  w-20 -translate-x-[50%]"></div>
        <Image
          className=" absolute -top-10 left-[50%] rounded-full -translate-x-[50%] translate-y-5"
          src="/transitionflower.jpg"
          alt="Yoga-1"
          width={30}
          height={30}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <h2 className="text-xl md:text-2xl md:max-w-[40%] text-center p-2 mt-2 translate-y-1 tracking-wide text-slate-700 font-normal">
          Daher erhälst du von mir eine einzigartige Mischung an Werkzeugen und
          das Know-how meiner eigenen Erfahrungen
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-16 p-8">
        <div className="flex flex-col items-center ">
          <div className="h-72">
            <Image
              className="rounded-full object-cover h-[100%]"
              src="/yogamatte.jpg"
              alt="Yoga-1"
              width={300}
              height={300}
            />
          </div>

          {/* <h2 className="p-8">Yoga</h2> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="h-72">
            <Image
              className="rounded-full object-cover  h-[100%]"
              src="/ebru3.jpg"
              alt="Yoga-1"
              width={300}
              height={300}
            />
          </div>

          {/* <h2 className="p-8">Yoga</h2> */}
        </div>
        <div className="flex flex-col items-center">
          <div className="h-72">
            <Image
              className="rounded-full object-cover  h-[100%]"
              src="/ebru_visuals3.jpg"
              alt="Yoga-1"
              width={300}
              height={300}
            />
          </div>

          {/* <h2 className="p-8">Yoga</h2> */}
        </div>
        {/* <div className="flex flex-col items-center">
          <div className="h-32">
            <Image
              className="rounded-full object-cover  h-[100%]"
              src="/pose4.jpg"
              alt="Yoga-1"
              width={200}
              height={200}
            />
          </div>

          
        </div> */}
      </div>
    </div>
  );
}

export default YogaVisuals;
