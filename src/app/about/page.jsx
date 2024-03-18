import Image from 'next/image';
import React from 'react';
import ArrowRight from './arrow-right';

function About() {
  return (
    <div className="col-start-2 col-end-5 text-slate-800 p-4">
      <h2 className="text-2xl tracking-wide leading-relaxed">
        Hi. Ich bin{' '}
        <span className="text-[var(--bg-background-color-6)]">Ebru!</span>
      </h2>
      <p className="md:mb-10 text-xl tracking-wider leading-relaxed">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <div className="flex flex-col md:flex-row gap-2 md:mt-20  p-8 md:translate-y-4">
        <div className="flex justify-center rounded-lg  md:-rotate-3">
          <Image
            className="rounded-lg"
            src="/ebru_visuals2.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center rounded-lg md:scale-150 z-10">
          <Image
            className="rounded-lg"
            src="/ebru.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
        <div className="flex justify-center rounded-lg md:rotate-6">
          <Image
            className="rounded-lg"
            src="/ebru_visuals3.jpg"
            alt="Picture of the author"
            width={300}
            height={300}
          />
        </div>
      </div>
      <p className="md:mb-10 text-xl tracking-wider leading-relaxed md:mt-40">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <h2 className="text-2xl underline underline-offset-4 mt-5">
        10 Fakten über mich
      </h2>
      <ul className="flex flex-col text-lg">
        <li className="flex items-center gap-4 p-2 mt-5">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
        <li className="flex gap-4 p-2 mb-5 items-center">
          <ArrowRight /> <p>jaaofaifhofho</p>
        </li>
      </ul>
      <p className="md:mb-10 text-xl tracking-wider leading-relaxed md:mt-5">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
      <div className="rounded-lg flex justify-center mt-5 mb-5">
        <video className="rounded-lg" width={500} height={500} controls>
          <source src="/ebru_video.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="md:mb-10 text-xl tracking-wider leading-relaxed md:mt-5">
        Ich bin Meditations- und Yoga-Lehrerin und ich liebe es, Menschen zu
        helfen, sich zu entspannen und zu erholen. Ich bin spezialisiert auf
        Yoga und Meditation für Anfänger und Fortgeschrittene. Das Ziel meiner
        Arbeit ist es, Menschen zu helfen, sich zu entspannen und zu erholen.
      </p>
    </div>
  );
}

export default About;
