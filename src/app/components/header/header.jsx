import Link from 'next/link';
import NavLinks from './nav-links';
import Logo2 from './logo2';

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-[rgb(237_232_212_/_0.97)] text-slate-800 backdrop-blur-md supports-[backdrop-filter]:bg-[rgb(237_232_212_/_0.8)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="ebysrelaxing – Startseite"
        >
          <Logo2 className="h-10 w-10 md:h-12 md:w-12" />
          <span className="font-eyebrow text-lg tracking-widest md:text-xl">ebysrelaxing</span>
        </Link>
        <NavLinks />
      </div>
    </header>
  );
}

export default Header;
