import { CardContent, Card } from '@/components/ui/card';

export default function CardComponent({ title, description, src }) {
  return (
    <div className="">
      <Card className="border-none">
        <CardContent className="flex flex-col items-center bg-gray-300 gap-4 p-4">
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
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-center text-white ">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
