import React from 'react';
import Logo from '../header/logo';
import Instagram from './instagram';

function Footer() {
  return (
    <div className="bg-gray-800  h-[13rem] md:h-[8rem]">
      <div className="flex flex-col md:flex-row  md:justify-between items-center py-8 px-8">
        <div className="flex items-center gap-4 mb-6 md:mb-0">
          <Logo className="w-12 h-12 ml-4" />
          <h1 className="text-2xl">Ebysrelaxing</h1>
        </div>
        <a href="https://www.instagram.com/ebysrelaxing/">
          <Instagram className="" />
        </a>

        <div className="mt-6 md:mt-0">&#169; Copyright 2024 Hakan</div>
      </div>
    </div>
  );
}

export default Footer;
