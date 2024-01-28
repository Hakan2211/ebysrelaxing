'use client';

import dynamic from 'next/dynamic';

const Particles = dynamic(() => import('./Particles'), { ssr: false });

function LandingSection() {
  return (
    <>
      {/* <mesh>
        <planeGeometry args={[2, 2]} />
        <meshNormalMaterial color="red" />
      </mesh> */}
      <Particles />
      {/* <TestCursor /> */}
    </>
  );
}

export default LandingSection;
