import React from 'react';
import HeroText from './hero-text';
import Image from 'next/image';

function LandingPage() {
  return (
    <div className="relative w-full py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 lg:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <HeroText />
          </div>
          <div className="flex justify-center">
            <Image
              src="/background_ebru.jpg"
              width={600}
              height={400}
              alt="background"
              className="overflow-hidden rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
