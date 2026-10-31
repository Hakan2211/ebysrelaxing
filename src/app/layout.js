import './globals.css';

import { fontVariables } from './fonts/fonts';
import Footer from './components/footer/footer';
import Header from './components/header/header';
export const metadata = {
  title: 'Ebru Bilgic - Ebysrelaxing',
  description: 'Die Homepage von Ebru Bilgic.',
  keywords:
    'Ebysrelaxing, Ebru Bilgic, Entspannung, Meditation, Soundhealing, Progressive Muskelentspannung, Emotional Freedom Techniques,',
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={fontVariables}>
      <body className="bg-[var(--bg-background-color-4)] font-sans text-slate-800 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
        >
          Zum Inhalt springen
        </a>
        <div className="flex min-h-svh flex-col">
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
