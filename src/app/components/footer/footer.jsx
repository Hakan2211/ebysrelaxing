import React from 'react';
import Logo from '../header/logo';
import Logo2 from '../header/logo2';

function Footer() {
  return (
    <div className="bg-[var(--bg-background-color-1)] col-span-5 flex items-center">
      <div className="flex flex-col md:flex-row  md:justify-between w-full items-center py-8 px-8">
        <div className="flex items-center gap-4">
          <Logo2 className="w-12 h-12 ml-4" />
          <h1 className="text-2xl text-slate-800">ebysrelaxing</h1>
        </div>

        <div className="text-xl text-slate-800">
          &#169; Copyright 2024 Hakan Bilgic
        </div>
      </div>
    </div>
  );
}

export default Footer;
