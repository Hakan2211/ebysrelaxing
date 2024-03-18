import { Button } from '@/components/ui/button';
import React from 'react';
import CalendlyEmbed from '../components/calendly/PopupWidget';

function Leistungen() {
  return (
    <div className="md:col-start-2 md:col-end-5 col-start-1 col-end-6 text-slate-800 p-4">
      <h2 className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
        Onlineworkshops
      </h2>
      <p className="mt-5 text-xl tracking-wider leading-relaxed">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>

      <p className="text-xl tracking-wider leading-relaxed">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <div className="group w-fit">
        <Button
          className="mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/gruppenevent?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
        </Button>
      </div>

      <h2 className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
        Business Yoga
      </h2>

      <p className=" text-xl tracking-wider leading-relaxed mt-5">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>

      <p className=" text-xl tracking-wider leading-relaxed">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <div className="group w-fit">
        <Button
          className=" mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/business-yoga?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
        </Button>
      </div>

      <h2 className="text-2xl tracking-wide leading-relaxed underline underline-offset-4">
        Astrologie
      </h2>

      <p className=" text-xl tracking-wider leading-relaxed mt-5">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>

      <p className=" text-xl tracking-wider leading-relaxed">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <div className="group w-fit">
        <Button
          className=" mb-10 mt-5 bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
          variant="outline"
        >
          <CalendlyEmbed url="https://calendly.com/ebysrelaxing/astrologie?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
        </Button>
      </div>
    </div>
  );
}

export default Leistungen;
