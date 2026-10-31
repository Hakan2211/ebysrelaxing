import Link from 'next/link';
import Logo2 from '../header/logo2';
import Instagram from './instagram';
import Wave from '../wave';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-slate-800">
      <Wave from="transparent" to="var(--bg-background-color-1)" />
      <div className="bg-[var(--bg-background-color-1)]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <Logo2 className="h-10 w-10" />
            <span className="font-eyebrow text-lg tracking-widest">
              ebysrelaxing
            </span>
          </div>

          <div className="flex flex-col gap-2 text-base md:items-end">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <a
                href="mailto:ebysrelaxing@gmail.com"
                className="underline-offset-4 transition-colors hover:text-[var(--bg-background-color-7)] hover:underline"
              >
                ebysrelaxing@gmail.com
              </a>
              <a
                href="https://www.instagram.com/ebysrelaxing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 underline-offset-4 transition-colors hover:text-[var(--bg-background-color-7)] hover:underline"
              >
                <Instagram className="h-4 w-4 fill-current" />
                Instagram
              </a>
              <Link
                href="/datenschutz"
                className="underline-offset-4 transition-colors hover:text-[var(--bg-background-color-7)] hover:underline"
              >
                AGB & Datenschutz
              </Link>
            </div>
            <p className="text-sm text-slate-600">&copy; {year} Hakan Bilgic</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
