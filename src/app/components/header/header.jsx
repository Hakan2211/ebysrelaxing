import Link from 'next/link';
import NavLinks from './nav-links';
import Logo2 from './logo2';

function Header() {
  return (
    <header className="sticky top-0 text-slate-800  col-span-full md:border-b-2 border-white z-20 bg-[var(--bg-background-color-1)] ">
      <div className="flex flex-col justify-between items-center py-8 px-8 md:flex-row">
        <Link href={'./'} className="flex items-center gap-4 mb-6 md:mb-0">
          <Logo2 className="w-12 h-12 ml-4" />
          <h1 className="text-2xl font-medium">ebysrelaxing</h1>
        </Link>
        <div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
