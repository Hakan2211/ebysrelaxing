'use client';

import HeroText from './components/landing-section/hero-text';
import YogaVisuals from './components/landing-section/yoga-visuals';
import PersonalSection from './components/landing-section/personal-section';
import Quote from './components/landing-section/quote';
import CardComponent from './components/landing-section/card-section';
import PriceSection from './components/landing-section/PriceSection';
import InvestmentSection from './components/landing-section/investment-section';

import Image from 'next/image';
import styles from './landing.module.css';
import PersonalSection2 from './components/landing-section/personal-section2';
import LandingPage from './components/landing-section/landing-page';

export default function Home() {
  return (
    <main className="col-start-1 col-end-6">
      <section className="">
        <LandingPage />
      </section>
      <section className=" bg-slate-50 text-black text-center p-8">
        <YogaVisuals />
      </section>

      <section className="bg-[var(--bg-background-color-5)]">
        <PersonalSection2 />
      </section>
      <section className=" bg-slate-50 text-black text-center p-8">
        <Quote />
      </section>
      <section className="bg-secondary ">
        <div className="flex flex-col justify-evenly md:flex-row gap-6 p-8 ">
          <CardComponent
            title="Entspannung"
            description={[
              'Stärkt Immunsystem',
              'Erweitert periphere Blutgefäße',
              'Löst Verspannungen',
              'Erhöht Konzentration',
              'Stärkt Eigenwahrnehmung',
              'Senkt Blutdruck',
            ]}
            src="/pose2.jpg"
          />
          <CardComponent
            title="Yoga"
            description={[
              'Verbessert Flexibilität',
              'Unterstützt Stressabbau',
              'Verbessert Körperhaltung',
              'Fördert mentale Klarheit',
              'Regt die Durchblutung an',
              'Steigert emotionale Balance',
            ]}
            src="/pose3.jpg"
          />
          <CardComponent
            title="Astrologie"
            description={[
              'Dient als Diagnoseinstrument',
              'Stärkt Selbstbewusstsein',
              'Unterstützt Selbstkennenlernen',
              'Fördert Selbsterkenntnisse',
              'Psychologischer Wegweiser',
              'Verständnis über Lebensphasen',
            ]}
            src="/planet.png"
          />
        </div>
      </section>
      <section className="bg-slate-50 text-gray-500 ">
        <InvestmentSection />
      </section>
      <section className=" mb-20 px-4 py-4 lg:p-16 lg:mb-0">
        <PriceSection />
      </section>
      {/* <Footer /> */}
    </main>
  );
}
