'use client';
import clsx from 'clsx';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLinks() {
  const pathname = usePathname();
  const navLinks = [
    { name: `About`, href: `/about` },
    { name: `Contact`, href: `/contact` },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            `px-4 py-2 text-2xl font-medium text-gray-500 hover:text-gray-900`,
            pathname === link.href && `text-gray-900`
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
