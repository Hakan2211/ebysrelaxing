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
    <div className="grid gap-6 md:gap-8  grid-cols-1 font-medium  xl:grid-cols-3">
      <Card className="flex flex-col text-slate-800 border-none bg-[var(--bg-background-color-5)]">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <CardTitle className="text-3xl md:text-4xl font-medium tracking-wide">
              Gruppenspecial
            </CardTitle>
            {/* <div className="text-4xl font-bold">499$</div> */}
            <div className="text-3xl md:text-4xl tracking-wide">35€</div>
          </div>
          <CardDescription className=" text-slate-800 text-xl tracking-wide">
            Onlineworkshop
          </CardDescription>
        </CardHeader>
        <CardContent className="text-lg md:text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              60 Minuten
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Yoga & PMR
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              EFT & Atem
            </li>
            <li className="flex items-center ">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span className="hidden md:block">Meditation & Klang</span>

              <span className="block md:hidden">Meditation & Klang</span>
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
              Wellbeing Angebot
            </CardTitle>
            <div className="text-3xl md:text-4xl tracking-wide">175€</div>
          </div>

          <CardDescription className=" text-slate-800 text-xl tracking-wide">
            Präsenzkurs
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2  inline-block h-4 w-4" />
              <span className="">60 Minuten</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              <span>Raum Frankfurt</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4 shrink-0" />
              <span>In Ihren Firmenräumlichkeiten</span>
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4 shrink-0" />
              <span>Angepasst an Ihre Bedürfnisse </span>
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
            <div className="text-3xl md:text-4xl">215€</div>
          </div>
          <CardDescription className="text-slate-800 text-xl tracking-wide">
            Onlineberatung
          </CardDescription>
        </CardHeader>
        <CardContent className="text-xl tracking-wide">
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              75 Minuten
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Geburtshoroskop
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4 shrink-0" />
              Fünf-Schichten-Modell Deutung
            </li>

            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4 shrink-0" />
              <span className="hidden md:block">
                Psychol. Ansätze nach C. G. Jung
              </span>
              <span className="block md:hidden">
                Psychol. Ansätze nach C. G. Jung
              </span>
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
