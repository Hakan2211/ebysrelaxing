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
        <CardContent className="text-xl tracking-wide">
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
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              EFT (Emotional Freedom Technique)
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
              ausführliches E-Book zum Nachlesen
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

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
