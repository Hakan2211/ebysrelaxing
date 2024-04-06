import { aboreto } from '@/app/fonts/fonts';
import Image from 'next/image';
import React from 'react';
import Instagram from '../footer/instagram';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function PersonalSection2() {
  return (
    <div className="relative w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1fr_2fr]">
          <div className="space-y-4">
            <h1
              className={`${aboreto.className} text-2xl md:text-4xl whitespace-nowrap tracking-wider leading-relaxed text-slate-800 `}
            >
              Hi! Ich bin
              <span className="text-yellow-800 font-bold"> Ebru.</span>
            </h1>
            <p className="max-w-[900px] text-xl text-slate-700 md:text-2xl/relaxed lg:text-2xl/relaxed xl:text-2xl/relaxed dark:text-gray-400">
              von Herzen freue ich mich, dass du den Weg zu mir gefunden hast.
              Als deine Ansprechpartnerin für Entspannungstechniken, Yoga &
              Astrologische Psychologie möchte ich dich mit wirkungsvollen
              Methoden wie, Mediation, Emotional Freedom Technique (EFT), Yoga
              und Progressiver Muskelentspannung (PMR) in Begleitung mit
              Atemübungen und Klängen bereichern, um deine Selbstheilungskräfte
              zu aktivieren. Die Astrologische Psychologie bietet dir die
              Möglichkeit deinen einzigartigen Fußabdruck zu entdecken und
              deiner Selbst bewusst zu werden.
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
          <div className="flex justify-center">
            <Image
              alt="Image"
              className="overflow-hidden rounded-full object-cover"
              height="500"
              src="/ebru.jpg"
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalSection2;
