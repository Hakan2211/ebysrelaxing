import { CardContent, Card } from '@/components/ui/card';

export default function CardComponent({ title, description, src }) {
  return (
    <div className="">
      <Card className="border-none">
        <CardContent className="flex flex-col items-center bg-[var(--bg-background-color-4)] rounded-lg gap-4 p-4">
          <img
            alt="Category 1"
            className="w-full h-60 md:h-96 object-cover rounded-lg"
            height="200"
            src={src}
            style={{
              aspectRatio: '200/200',
              objectFit: 'cover',
            }}
            width="200"
          />
          <h3 className="text-xl md:text-3xl tracking-wide text-slate-800 font-medium">
            {title}
          </h3>
          <p className="text-center md:text-lg tracking-wide text-slate-700 ">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
