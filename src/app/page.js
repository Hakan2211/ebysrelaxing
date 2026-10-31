import { Leaf, Moon, Wind } from 'lucide-react';
import YogaVisuals from './components/landing-section/yoga-visuals';
import CardComponent from './components/landing-section/card-section';
import PriceSection from './components/landing-section/PriceSection';
import InvestmentSection from './components/landing-section/investment-section';
import PersonalSection2 from './components/landing-section/personal-section2';
import LandingPage from './components/landing-section/landing-page';
import SectionHeading from './components/section-heading';
import Reveal from './components/reveal';
import Wave from './components/wave';

// Section colours, top to bottom.
const CREAM = 'var(--bg-background-color-3)';
const SAND = 'var(--bg-background-color-5)';
const SAGE = 'hsl(var(--secondary))';
const IVORY = 'var(--bg-background-color-4)';

const benefits = [
  {
    title: 'Entspannung',
    src: '/pose2.jpg',
    alt: 'Entspannungsübung',
    icon: Wind,
    description: [
      'Stärkt Immunsystem',
      'Erweitert periphere Blutgefäße',
      'Löst Verspannungen',
      'Erhöht Konzentration',
      'Stärkt Eigenwahrnehmung',
      'Senkt Blutdruck',
    ],
  },
  {
    title: 'Yoga',
    src: '/pose3.jpg',
    alt: 'Yoga-Pose',
    icon: Leaf,
    description: [
      'Verbessert Flexibilität',
      'Unterstützt Stressabbau',
      'Verbessert Körperhaltung',
      'Fördert mentale Klarheit',
      'Regt die Durchblutung an',
      'Steigert emotionale Balance',
    ],
  },
  {
    title: 'Astrologische Psychologie',
    src: '/planet.png',
    alt: 'Illustration eines Planeten',
    icon: Moon,
    description: [
      'Dient als Diagnoseinstrument',
      'Stärkt Selbstbewusstsein',
      'Unterstützt Selbstkennenlernen',
      'Fördert Selbsterkenntnisse',
      'Psychologischer Wegweiser',
      'Verständnis über Lebensphasen',
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="relative">
        <LandingPage />
      </section>

      <section style={{ background: CREAM }}>
        <YogaVisuals />
      </section>
      <Wave from={CREAM} to={SAND} />

      <section style={{ background: SAND }}>
        <PersonalSection2 />
      </section>
      <Wave from={SAND} to={CREAM} flip />

      <section style={{ background: CREAM }}>
        <div className="container px-4 py-16 md:px-6 md:py-24">
          <Reveal>
            <SectionHeading
              eyebrow="Deine Vorteile"
              title="Ich bin für Dich da, um Selbstwert und Selbstfürsorge zu stärken."
              ornament
            >
              <p>Erlebe diese potenziellen Vorteile:</p>
            </SectionHeading>
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 120} className="h-full">
                <CardComponent {...b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Wave from={CREAM} to={SAGE} />

      <section style={{ background: SAGE }}>
        <InvestmentSection />
      </section>
      <Wave from={SAGE} to={IVORY} flip />

      <section id="preise" aria-labelledby="preise-heading">
        <PriceSection />
      </section>
    </>
  );
}
