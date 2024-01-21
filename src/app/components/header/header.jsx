import Logo from './logo';
import NavLinks from './nav-links';

function Header() {
  return (
    <header>
      <div className="flex justify-between items-center py-8 px-8">
        <div className="flex items-center gap-4">
          <Logo className="w-16 h-16 ml-4" />
          <h1 className="text-2xl">Ebysrelaxing</h1>
        </div>
        <div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}

export default Header;
