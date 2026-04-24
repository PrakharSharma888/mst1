'use client';

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text, Points, PointMaterial, Center } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const { mouse } = useThree();
  const points = useMemo(() => {
    const p = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      p[i * 3] = 12 * Math.sin(theta) * Math.cos(phi);
      p[i * 3 + 1] = 12 * Math.sin(theta) * Math.sin(phi);
      p[i * 3 + 2] = 12 * Math.cos(theta);
    }
    return p;
  }, []);

  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.05 + mouse.x * 0.1;
    ref.current.rotation.x = t * 0.02 + mouse.y * 0.1;
  });

  return (
    <group ref={ref}>
      <Points positions={points} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff2d2d"
          size={0.04}
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
    mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    mesh.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh}>
        <octahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial color="#ff2d2d" wireframe opacity={0.3} transparent />
      </mesh>
    </Float>
  );
}

export default function SectionHeader3D({ title, subtitle }) {
  const canvasKey = useMemo(() => "stable-3d-header", []); 

  return (
    <div className="relative w-full h-[500px] md:h-[700px] bg-[#0a0a0a] overflow-hidden">
      <Suspense fallback={
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#0a0a0a] text-white/20 font-mono text-[10px] tracking-[0.5em] uppercase animate-pulse">
          Initializing Engine...
        </div>
      }>
        <Canvas 
          key={canvasKey}
          camera={{ position: [0, 0, 18], fov: 40 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false
          }}
          dpr={[1, 2]} // Support high-DPI displays
        >
          <color attach="background" args={['#0a0a0a']} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#ff2d2d" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#ff0000" />
          
          <Text
            position={[0, 0, 0]}
            fontSize={1.2}
            color="white"
            anchorX="center"
            anchorY="middle"
            letterSpacing={0.2}
            maxWidth={10}
            textAlign="center"
          >
            {title}
          </Text>

          <ParticleSphere />
          <FloatingCore />
        </Canvas>
      </Suspense>

      {/* High-end decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f9fafb] to-transparent" />
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="w-px h-24 bg-gradient-to-b from-red-600/0 via-red-600 to-red-600/0 animate-pulse" />
        <span className="text-[9px] font-black tracking-[0.5em] text-white/30 uppercase">{subtitle}</span>
      </div>
    </div>
  );
}
