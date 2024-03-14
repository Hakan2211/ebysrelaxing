'use client';

import { Canvas } from '@react-three/fiber';
import dynamic from 'next/dynamic';
import HeroText from './components/landing-section/hero-text';
import YogaVisuals from './components/landing-section/yoga-visuals';
import PersonalSection from './components/landing-section/personal-section';
import Quote from './components/landing-section/quote';
import CardComponent from './components/landing-section/card-section';
import PriceSection from './components/landing-section/price-section';
import InvestmentSection from './components/landing-section/investment-section';
import Footer from './components/footer/footer';
import Image from 'next/image';

const Common = dynamic(() => import('@/app/components/canvas/common'), {
  ssr: false,
});

const LandingSection = dynamic(
  () => import('@/app/components/landing-section/landing-section'),
  { ssr: false }
);
const View = dynamic(
  () => import('@react-three/drei').then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          style={{ width: 40, height: 40 }}
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="col-start-1 col-end-6">
      <section className="grid md:grid-cols-5 h-[85svh]  grid-cols-1">
        <div className=" h-2/3 translate-y-6 p-8 md:col-start-1 md:col-end-4  flex flex-col items-center justify-center">
          <HeroText />
        </div>
        <div className="md:col-start-4 md:col-end-6 w-full md:place-items-center flex justify-center px-8   md:mt-0 md:translate-y-0">
          {/* <Canvas
            style={{ height: '100svh' }}
            className=" pointer-events-auto "
          >
            <Common />
            <LandingSection />
          </Canvas> */}
          <div
            className="flex 
          justify-center  h-[75%] md:-translate-y-32 translate-y-16  w-full self-end "
          >
            <Image
              src="/background_ebru.jpg"
              width={600}
              height={400}
              alt="background"
              className=" w-[90%] p-2 rounded-full h-[80%] md:h-[80%] md:w-[90%]"
              // aspectRatio={4 / 5}
            />
          </div>
        </div>
      </section>
      <section className=" bg-slate-50 text-black text-center p-8">
        <YogaVisuals />
      </section>

      <section className="bg-[var(--bg-background-color-5)]">
        <PersonalSection />
      </section>
      <section className=" bg-slate-50 text-black text-center p-8">
        <Quote />
      </section>
      <section className="bg-secondary ">
        <div className="flex flex-col md:flex-row gap-6 p-8 ">
          <CardComponent
            title="Entspannung"
            description="Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            src="/pose2.jpg"
          />
          <CardComponent
            title="Yoga"
            description="Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            src="/pose3.jpg"
          />
          <CardComponent
            title="Astrologie"
            description="Lorem ispum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            src="/planet.png"
          />
        </div>
      </section>
      <section className=" bg-slate-50 text-gray-500 ">
        <InvestmentSection />
      </section>
      <section className="p-8">
        <PriceSection />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
