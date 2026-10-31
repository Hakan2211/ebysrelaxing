import { Didact_Gothic, Aboreto, Maitree, Allison } from 'next/font/google';

// Font roles (see tailwind.config.js → fontFamily):
//   font-sans    Didact Gothic – body text
//   font-display Maitree       – headings
//   font-eyebrow Aboreto       – small uppercase labels, brand accents
//   font-script  Allison       – rare handwritten accents
export const didact = Didact_Gothic({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-didact',
});
export const aboreto = Aboreto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aboreto',
});
export const maitree = Maitree({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-maitree',
});
export const allison = Allison({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allison',
});

export const fontVariables = [didact, aboreto, maitree, allison]
  .map((f) => f.variable)
  .join(' ');
