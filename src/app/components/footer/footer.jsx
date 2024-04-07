import React from 'react';

import Logo2 from '../header/logo2';
import Link from 'next/link';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="bg-[var(--bg-background-color-1)] col-span-5 flex items-center self-end px-4">
      <div className="flex flex-col md:flex-row  md:justify-between  w-full items-center">
        <div className="flex items-center gap-4 self-start mb-3 md:mb-0 ">
          <Logo2 className="w-12 h-12 md:ml-4" />
          <h1 className="text-2xl text-slate-800">ebysrelaxing</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-xl text-slate-800 self-start md:self-end">
            &#169; Copyright {date} Hakan Bilgic
          </div>
          <div className="text-xl text-slate-800 hover:text-[var(--bg-background-color-7)] duration-300 transition-colors">
            <Link href={'/datenschutz'}>
              Allgemeine Geschäftsbedingungen & Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
