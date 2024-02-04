import Link from 'next/link';
import Logo from './logo';
import NavLinks from './nav-links';

function Header() {
  return (
    <header className="sticky top-0  col-span-full md:border-b-2 border-white z-20 bg-background ">
      <div className="flex flex-col justify-between items-center py-8 px-8 md:flex-row">
        <Link href={'./'} className="flex items-center gap-4 mb-6 md:mb-0">
          <Logo className="w-16 h-16 ml-4" />
          <h1 className="text-2xl">Ebysrelaxing</h1>
        </Link>
        <div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
