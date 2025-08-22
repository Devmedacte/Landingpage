'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Sphere, Cylinder } from '@react-three/drei'
import { useRef, useState } from 'react'
import * as THREE from 'three'

function AnimatedLogo() {
  const groupRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
      
      // Scale animation on hover
      if (hovered) {
        groupRef.current.scale.setScalar(1.1)
      } else {
        groupRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head - Turquoise sphere */}
      <Sphere args={[0.3, 32, 32]} position={[0, 1.2, 0]}>
        <meshStandardMaterial
          color="#06B6D4"
          metalness={0.3}
          roughness={0.2}
          emissive="#06B6D4"
          emissiveIntensity={0.1}
        />
      </Sphere>

      {/* Upper body/Arms - Curved cylinder */}
      <group position={[0, 0.5, 0]}>
        <Cylinder
          args={[0.15, 0.15, 1.2, 8]}
          position={[0.3, 0, 0]}
          rotation={[0, 0, Math.PI / 4]}
        >
          <meshStandardMaterial
            color="#4F46E5"
            metalness={0.4}
            roughness={0.3}
            emissive="#4F46E5"
            emissiveIntensity={0.05}
          />
        </Cylinder>
        
        <Cylinder
          args={[0.15, 0.15, 1.2, 8]}
          position={[-0.3, 0, 0]}
          rotation={[0, 0, -Math.PI / 4]}
        >
          <meshStandardMaterial
            color="#4F46E5"
            metalness={0.4}
            roughness={0.3}
            emissive="#4F46E5"
            emissiveIntensity={0.05}
          />
        </Cylinder>
      </group>

      {/* Lower body/Legs - Curved cylinders */}
      <group position={[0, -0.5, 0]}>
        <Cylinder
          args={[0.2, 0.2, 1.4, 8]}
          position={[0.2, -0.2, 0]}
          rotation={[0, 0, Math.PI / 6]}
        >
          <meshStandardMaterial
            color="#0891B2"
            metalness={0.5}
            roughness={0.2}
            emissive="#0891B2"
            emissiveIntensity={0.08}
          />
        </Cylinder>
        
        <Cylinder
          args={[0.2, 0.2, 1.4, 8]}
          position={[-0.2, -0.2, 0]}
          rotation={[0, 0, -Math.PI / 6]}
        >
          <meshStandardMaterial
            color="#0891B2"
            metalness={0.5}
            roughness={0.2}
            emissive="#0891B2"
            emissiveIntensity={0.08}
          />
        </Cylinder>
      </group>

      {/* Particle system around the logo */}
      <ParticleSystem />
    </group>
  )
}

function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    const radius = 2 + Math.random() * 2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI * 2

    positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi)
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi)
    positions[i * 3 + 2] = radius * Math.cos(theta)
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#4F46E5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function MedacteLogo() {
  return (
    <div className="w-full h-64 relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
        />
        <pointLight
          position={[-10, -10, -5]}
          intensity={0.5}
          color="#4F46E5"
        />

        {/* Logo */}
        <AnimatedLogo />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white drop-shadow-lg">
            Medacte
          </h2>
          <p className="text-sm text-white/80 drop-shadow-lg">
            Next Generation Health
          </p>
        </div>
      </div>
    </div>
  )
}