'use client';

import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const points = useMemo(() => {
    const p = new Float32Array(1500 * 3); // Reduced count for stability
    for (let i = 0; i < 1500; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      p[i * 3] = 10 * Math.sin(theta) * Math.cos(phi);
      p[i * 3 + 1] = 10 * Math.sin(theta) * Math.sin(phi);
      p[i * 3 + 2] = 10 * Math.cos(theta);
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff2d2d"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingCore() {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[2, 1]} />
        <meshStandardMaterial color="#ff2d2d" wireframe opacity={0.2} transparent />
      </mesh>
    </Float>
  );
}

export default function SectionHeader3D({ title, subtitle }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-full h-[500px] md:h-[700px] bg-black" />;

  return (
    <div className="relative w-full h-[500px] md:h-[700px] bg-black overflow-hidden flex items-center justify-center">
      {/* Background Gradient to prevent "Blank Black" look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.05)_0%,transparent_70%)]" />
      
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 15], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} color="#ff2d2d" />
          <Suspense fallback={null}>
            <ParticleSphere />
            <FloatingCore />
          </Suspense>
        </Canvas>
      </div>

      {/* HTML Content Overlay for 100% Reliability */}
      <div className="relative z-10 flex flex-col items-center pointer-events-none text-center px-6">
        <h2 className="bungee-regular text-4xl sm:text-6xl md:text-7xl text-white tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(255,45,45,0.3)]">
          {title}
        </h2>
        <div className="mt-8 flex flex-col items-center gap-4">
          <div className="w-px h-16 bg-gradient-to-b from-red-600/0 via-red-600 to-red-600/0 animate-pulse" />
          <span className="text-[10px] font-black tracking-[0.6em] text-white/40 uppercase">
            {subtitle}
          </span>
        </div>
      </div>

      {/* Decorative Overlays */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
    </div>
  );
}
