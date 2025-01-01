import Image from "next/image";
import React from "react";
import ArrowRight from "./arrow-right";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Ebru Bilgic - Ebysrelaxing - About",
  description: "About Ebru Bilgic - Ebysrelaxing.",
  keywords:
    "Ebysrelaxing, Ebru Bilgic, Spiritualität, Persönlichkeitsentwicklung, mentale Gesundheit, Coaching,",
};

function About() {
  return (
    <div className="md:col-start-2 md:col-end-5 col-start-1 col-end-6 text-slate-800 p-4">
      <h2 className="text-2xl tracking-wide leading-relaxed">
        Schön, dass du da bist,
        {/* <span className="text-[var(--bg-background-color-6)]">Ebru!</span> */}
      </h2>
      <p className="md:mb-10 text-xl tracking-wider leading-relaxed mt-5">
        mein Name ist Ebru und ich liebe es zu reisen, sowohl äußerlich als auch
        innerlich. Jede meiner Reisen bereichert mich auf eine ganz besondere
        Weise. Von meiner kleinen Weltreise bis hin zu meinem Leben auf
        verschiedenen Kontinenten und meiner Teilnahme an sozialen Projekten
        habe ich unzählige wertvolle Erfahrungen gesammelt. In den Seiten von
        Büchern, an Weiterbildungen und Seminaren unternehme ich meine inneren
        Reisen. Ich stieß auf lebensverändernde Methoden, die mir bis heute
        helfen, stressige Situationen mit mehr Leichtigkeit zu meistern. Das
        Leben bringt unvorhergesehene Ereignisse oder überwältigende Situationen
        mit, doch, wie ich damit umgehe, liegt ganz bei mir selbst. Bedingt
        durch meinen späten Abord im 5. Monat meiner Zwillingsseelen, habe ich
        eines nie verloren: Meine Willensstärke. Dank EFT konnte ich den tiefen
        Schmerz und meine Wut immer mehr lösen. Aus der Wut kam die Trauer.
        Genau diese Gefühle in mir konnte ich Schicht für Schicht wie eine
        Zwiebel schälen und verarbeiten. Yoga und Entspannungstechniken
        unterstützten mich dabei, meinen Körper zu regenerieren und mir selbst
        liebevoller zu begegnen. Heute ist mir klar, dass eine Transformation
        Geduld erfordert, wie die Verwandlung einer Raupe zu einem
        Schmetterling, geschieht sie im eigenen Rhythmus. Es erfüllt mich mit
        Freude, diese kostbaren Übungen und die darin liegende Magie mit dir zu
        teilen.
      </p>
      <div className="flex flex-col md:flex-row gap-2 xl:p-20 md:mt-20 py-8 md:translate-y-4">
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
            src="/ebru2.jpg"
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

      <h2 className="text-2xl underline underline-offset-4 mt-5 md:mt-40">
        5 Fakten über mich
      </h2>
      <ul className="flex flex-col text-lg">
        <li className="flex items-center gap-4  mt-5">
          <ArrowRight className="h-6 w-6" /> <p>Sonnenzeichen - Jungfrau</p>
        </li>
        <li className="flex gap-4 mt-2 items-center">
          <ArrowRight className="h-6 w-6" /> <p>Aszendent - Skorpion</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6" /> <p>Mondzeichen - Jungfrau</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6" /> <p>Numerologie - Lebenszahl 12</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6 shrink-0" />
          <p>
            Human Design - Generatorin Profil 3/5 Lebensthema:
            Gemeinschaftliches Wohlergehen vorantreiben
          </p>
        </li>
      </ul>
      <h2 className="md:mb-5 text-xl tracking-wider underline underline-offset-4 leading-relaxed mt-10">
        Meine Ausbildungen
      </h2>
      <ul className="flex flex-col text-lg">
        <li className="flex items-center gap-4  mt-5">
          <ArrowRight className="h-6 w-6" />{" "}
          <p>Entspannungstrainerin (Studium)</p>
        </li>
        <li className="flex gap-4 mt-2 items-center">
          <ArrowRight className="h-6 w-6" />{" "}
          <p>Klangtherapeutin (Weiterbildung) </p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6" />{" "}
          <p>Yoga teacher (200h Yoga Alliance)</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6 shrink-0 " />{" "}
          <p>Akupressurklopftechniken / EFT (Basis- und Aufbauseminar)</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6" /> <p>Greator Coaching (Seminar)</p>
        </li>
        <li className="flex gap-4 mt-2  items-center">
          <ArrowRight className="h-6 w-6" />{" "}
          <p>Astrologische Psychologie (Studium)</p>
        </li>
      </ul>
      <p className=" md:mb-10 text-xl tracking-wider leading-relaxed mt-10">
        In diesem Video fasse ich meinen Weg in aller Kürze zusammen
      </p>
      <div className="rounded-lg flex  mt-5 mb-10">
        <video className="rounded-lg w-[70%]" width={500} height={500} controls>
          <source src="/ebru_video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mt-5 flex flex-col gap-4 md:flex-row mb-10 ">
        <Button className=" p-6 bg-[var(--bg-background-color-6)] duration-500 ease-in-out  transition-colors group hover:bg-[var(--bg-background-color-7)]">
          <Link href="/kontakt">
            <span className="text-xl font-bold  tracking-wide text-slate-800 duration-500 ease-in-out transition-colors group-hover:text-slate-200">
              Hier bin ich für dich erreichbar
            </span>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default About;
