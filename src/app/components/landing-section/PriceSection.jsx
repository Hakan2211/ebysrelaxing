import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import CalendlyEmbed from '../calendly/PopupWidget';
import { CheckIcon } from './price-section';

export default function PriceSection() {
  return (
    <div className="grid gap-6  md:gap-8  grid-cols-1 font-medium  md:grid-cols-3">
      <Card className="flex flex-col text-slate-800 border-none bg-[var(--bg-background-color-5)]">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <CardTitle className="text-3xl md:text-4xl font-medium tracking-wide">
              Gruppenevent
            </CardTitle>
            {/* <div className="text-4xl font-bold">499$</div> */}
            <div className="text-3xl md:text-4xl tracking-wide">49€</div>
          </div>
          <CardDescription className=" text-slate-800 text-xl tracking-wide">
            Onlineworkshop
          </CardDescription>
        </CardHeader>
        <CardContent className="text-lg md:text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Yoga
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Meditation
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Klangbad
            </li>
            <li className="flex items-center ">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span className="hidden md:block">
                EFT (Emotional Freedom Technique)
              </span>

              <span className="block md:hidden">EFT</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="group w-fit">
          <Button
            className="bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
            variant="outline"
          >
            <CalendlyEmbed url="https://calendly.com/ebysrelaxing/gruppenevent?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col border-none  text-slate-800 bg-[var(--bg-background-color-5)]">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <CardTitle className="text-3xl md:text-4xl font-medium  tracking-wide">
              Business Yoga
            </CardTitle>
            <div className="text-3xl md:text-4xl tracking-wide">150€</div>
          </div>

          <CardDescription className=" text-slate-800 text-xl tracking-wide">
            Gruppenkurs
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2  inline-block h-4 w-4" />
              <span className=""> 60 Minuten</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span>in Ihren Firmenräumlichkeiten</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span>angepasst an Ihre Bedürfnisse</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span>Terminzeiten nach Absprache</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="group w-fit">
          <Button
            className="bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
            variant="outline"
          >
            <CalendlyEmbed url="https://calendly.com/ebysrelaxing/business-yoga?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
          </Button>
        </CardFooter>
      </Card>

      <Card className="flex flex-col text-slate-800 border-none bg-[var(--bg-background-color-5)]">
        <CardHeader>
          <div className="flex md:flex-col lg:flex-row items-baseline justify-between">
            <CardTitle className="text-3xl md:text-4xl font-medium tracking-wide">
              Astrologie
            </CardTitle>
            <div className="text-3xl md:text-4xl">199€</div>
          </div>
          <CardDescription className="text-slate-800 text-xl tracking-wide">
            Geburtshoroskop
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              90 Minuten
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              1:1 Onlineberatung
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Persönliche Analyse
            </li>

            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span className="hidden md:block">
                ausführliches E-Book zum Nachlesen
              </span>
              <span className="block md:hidden">E-Book</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="group w-fit">
          <Button
            className="bg-[var(--bg-background-color-6)] group-hover:text-white duration-300 transition-colors"
            variant="outline"
          >
            <CalendlyEmbed url="https://calendly.com/ebysrelaxing/astrologie?background_color=fff7f2&text_color=6a604d&primary_color=6a604d" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
