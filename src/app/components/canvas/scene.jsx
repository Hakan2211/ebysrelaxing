'use client';

import { Canvas, addEffect } from '@react-three/fiber';
import { Preload, View } from '@react-three/drei';
import Lenis from '@studio-freight/lenis';
import { useRef, useEffect } from 'react';

// Use lenis smooth scroll
// const lenis = new Lenis({ syncTouch: true });
// addEffect((t) => lenis.raf(t));

export default function Scene({ style, ...props }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis({
        lerp: 0.9, // Example value, set the lerp amount you need for the smooth scroll
        smooth: true,
        syncTouch: true,
      });
    }

    const animate = () => {
      lenisRef.current.raf();
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
    return () => {
      if (lenisRef.current) {
        // Stop the animation frame loop when the component unmounts
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <Canvas
      shadows
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100svh',
        pointerEvents: 'none',
        ...style,
      }}
      eventSource={document.body}
      eventPrefix="client"
      {...props}
    >
      <View.Port />
      <Preload all />
    </Canvas>
  );
}
