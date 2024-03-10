'use client';

import './RenderMaterial';
import './SimulationMaterial';
import { getDataTexture } from './getDataTexture';
import { createPortal } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useFBO } from '@react-three/drei';

import { useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

function Particles() {
  const SIZE = 1024;

  const particles = new Float32Array(SIZE * SIZE * 3);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const k = i * SIZE + j;
      particles[k * 3 + 0] = (5 * i) / SIZE;
      particles[k * 3 + 1] = (5 * j) / SIZE;
      particles[k * 3 + 2] = 0;
    }
  }

  const ref = new Float32Array(SIZE * SIZE * 2);
  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      const k = i * SIZE + j;
      ref[k * 2 + 0] = i / (SIZE - 1);
      ref[k * 2 + 1] = j / (SIZE - 1);
    }
  }
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);
  let target0 = useFBO(SIZE, SIZE, {
    magFilter: THREE.NearestFilter,
    minFilter: THREE.NearestFilter,
    type: THREE.FloatType,
  });
  let target1 = useFBO(SIZE, SIZE, {
    magFilter: THREE.NearestFilter,
    minFilter: THREE.NearestFilter,
    type: THREE.FloatType,
  });
  const simMat = useRef();
  const renderMat = useRef();
  const followMouse = useRef();

  const { viewport } = useThree();

  const originalPosition = getDataTexture(SIZE);

  const texture = new TextureLoader().load('./ebru2.jpg');

  useFrame(({ pointer }) => {
    // followMouse.current.position.x = pointer.x * (viewport.width / 2);
    // followMouse.current.position.y = pointer.y * (viewport.height / 2);
    simMat.current.uniforms.uMouse.value.x = pointer.x * (viewport.width / 2);
    simMat.current.uniforms.uMouse.value.y = pointer.y * (viewport.height / 2);
  });

  useFrame(({ gl }) => {
    gl.setRenderTarget(target0);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    renderMat.current.uniforms.uPosition.value = target1.texture;
    simMat.current.uniforms.uPosition.value = target0.texture;

    let temp = target0;
    target0 = target1;
    target1 = temp;
  });

  return (
    <>
      {createPortal(
        <mesh positionY={4}>
          <planeGeometry args={[2, 2]} />
          <simulationMaterial
            ref={simMat}
            uPosition={originalPosition}
            uOriginalPosition={originalPosition}
          />
        </mesh>,
        scene
      )}
      {/* <mesh ref={followMouse}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="red" />
      </mesh> */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-ref"
            count={ref.length / 3}
            array={ref}
            itemSize={2}
          />
        </bufferGeometry>
        <renderMaterial
          transparent={true}
          blending={THREE.NoBlending}
          ref={renderMat}
          uTexture={texture}
          uRotation={Math.PI / 4}
        />
      </points>
    </>
  );
}
export default Particles;
