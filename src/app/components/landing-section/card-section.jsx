import Image from 'next/image';
import { Leaf } from 'lucide-react';

export default function CardComponent({ title, description, src, alt, icon: Icon }) {
  return (
    <article className="group flex h-full flex-col items-center rounded-[2rem] bg-white/70 p-6 text-center shadow-[0_10px_40px_-20px_rgb(106_96_77_/_0.4)] ring-1 ring-[var(--bg-background-color-2)] transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-20px_rgb(106_96_77_/_0.5)] md:p-8">
      <div className="relative w-full max-w-[13rem]">
        <div className="relative aspect-square overflow-hidden rounded-t-full">
          <Image
            alt={alt}
            src={src}
            fill
            sizes="13rem"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
        {Icon && (
          <span className="absolute -bottom-5 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--bg-background-color-6)] text-white shadow-md ring-4 ring-white">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
      </div>
      <h3 className="mt-10 font-display text-2xl text-slate-900 md:text-3xl">
        {title}
      </h3>
      <ul className="mt-5 space-y-2.5 text-left text-slate-700 md:text-lg">
        {description.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Leaf
              className="mt-1 h-4 w-4 shrink-0 text-[var(--bg-background-color-6)]"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
