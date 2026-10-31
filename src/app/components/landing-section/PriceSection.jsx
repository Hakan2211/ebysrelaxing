import { cn } from '@/lib/utils';
import { offers } from '@/app/data/offers';
import CalendlyEmbed from '../calendly/PopupWidget';
import Reveal from '../reveal';
import SectionHeading from '../section-heading';
import { CheckIcon } from './price-section';

export default function PriceSection() {
  return (
    <div className="container px-4 py-16 md:px-6 md:py-24">
      <Reveal>
        <SectionHeading
          id="preise-heading"
          eyebrow="Jetzt buchen"
          title="Angebote & Preise"
          ornament
        />
      </Reveal>
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
        {offers.map((offer, i) => {
          const Icon = offer.icon;
          const dark = offer.featured;
          return (
            <Reveal key={offer.title} delay={i * 120} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col rounded-[2rem] p-8 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 md:p-10',
                  dark
                    ? 'bg-[var(--bg-background-color-7)] text-[var(--bg-background-color-3)] shadow-[0_30px_60px_-25px_rgb(106_96_77_/_0.8)] lg:-translate-y-4 lg:hover:-translate-y-5'
                    : 'bg-white/70 text-slate-800 shadow-[0_10px_40px_-20px_rgb(106_96_77_/_0.4)] ring-1 ring-[var(--bg-background-color-2)] hover:shadow-[0_24px_50px_-20px_rgb(106_96_77_/_0.5)]'
                )}
              >
                <span
                  className={cn(
                    'inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm',
                    dark
                      ? 'bg-white/10 text-[var(--bg-background-color-2)]'
                      : 'bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]'
                  )}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {offer.format}
                </span>
                <h3 className="mt-6 font-display text-2xl md:text-3xl">
                  {offer.title}
                </h3>
                <p className="mt-4 flex items-baseline gap-2">
                  <span className="font-display text-5xl font-light md:text-6xl">
                    {offer.price}
                  </span>
                </p>
                <div
                  className={cn(
                    'my-8 h-px',
                    dark ? 'bg-white/15' : 'bg-[var(--bg-background-color-2)]'
                  )}
                />
                <ul className="space-y-3 text-lg">
                  {offer.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          'mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          dark
                            ? 'bg-white/15 text-white'
                            : 'bg-[var(--bg-background-color-2)] text-[var(--bg-background-color-7)]'
                        )}
                      >
                        <CheckIcon aria-hidden="true" className="h-3 w-3" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  <CalendlyEmbed
                    url={offer.url}
                    className={cn(
                      'w-full',
                      dark &&
                        'bg-[var(--bg-background-color-2)] text-slate-900 hover:bg-white hover:text-slate-900'
                    )}
                  />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
