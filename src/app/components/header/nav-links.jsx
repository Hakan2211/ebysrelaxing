'use client';
import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLinks() {
  const pathname = usePathname();
  const navLinks = [
    { name: `Leistungen`, href: `/leistungen` },
    { name: `About`, href: `/about` },
    { name: `Kontakt`, href: `/kontakt` },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            `px-4 py-2 text-2xl font-medium text-slate-800 hover:text-slate-100`,
            pathname === link.href && `text-slate-50`
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
