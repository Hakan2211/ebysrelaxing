import { Button } from '@/components/ui/button';
import {
  Card,
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

export default function PriceSection() {
  return (
    <div className="grid gap-6 md:gap-8 mt-6 grid-cols-1 md:grid-cols-3">
      <Card className="flex flex-col border-none">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <CardTitle>Basic</CardTitle>
            <div className="text-4xl font-bold">150$</div>
          </div>

          <CardDescription className="translate-y-2">
            Einzelkunden - einmalgebuehr.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              60min Klangschalentherapie
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              20min Klopfen
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              10min Meditation
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col border-none">
        <CardHeader>
          <div className="flex items-baseline justify-between">
            <CardTitle>Pro</CardTitle>
            <div className="text-4xl font-bold">499$</div>
          </div>
          <CardDescription>Einzelkunden - 5er Karte</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Meditation
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Klangschale
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Klopfen
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Affirmation
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Choose Plan
          </Button>
        </CardFooter>
      </Card>
      <Card className="flex flex-col border-none">
        <CardHeader>
          <div className="flex md:flex-col lg:flex-row items-baseline justify-between">
            <CardTitle>Unternehmen</CardTitle>
            <div className="text-2xl font-bold">per Absprache</div>
          </div>
          <CardDescription>
            For large businesses with comprehensive needs.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Unlimited Projects
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Unlimited Storage
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              24/7 Support
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Free Updates
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 inline-block h-4 w-4" />
              Custom Options
            </li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline">
            Choose Plan
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
