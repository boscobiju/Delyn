import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshTransmissionMaterial, Environment } from '@react-three/drei'
import * as THREE from 'three'

// ── Floating Beauty Objects ──────────────────────────────────────────────────
function FloatingOrb({ position, scale, color, speed = 1, distort = 0.3 }: {
  position: [number, number, number]
  scale: number
  color: string
  speed?: number
  distort?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2
    meshRef.current.rotation.y += 0.004 * speed
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.0}
        metalness={0.85}
        distort={distort}
        speed={speed}
        envMapIntensity={1.2}
      />
    </mesh>
  )
}

function GlassSphere({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.003
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.15
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.25
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={256}
        transmission={0.95}
        roughness={0.02}
        thickness={2}
        ior={1.5}
        chromaticAberration={0.04}
        anisotropy={0.3}
        temporalDistortion={0.1}
        color="#F5EDE0"
      />
    </mesh>
  )
}

function MetallicTorus({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7 + 1) * 0.35
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.35, 32, 100]} />
      <meshStandardMaterial
        color="#C8A45C"
        roughness={0.05}
        metalness={1.0}
        envMapIntensity={2}
      />
    </mesh>
  )
}

function PearlCylinder({ position, scale }: { position: [number, number, number]; scale: number }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3 + 2) * 0.4
    meshRef.current.rotation.y += 0.006
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + 0.5) * 0.2
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <cylinderGeometry args={[1, 1, 0.25, 64]} />
      <meshStandardMaterial
        color="#EDE0CE"
        roughness={0.1}
        metalness={0.6}
        envMapIntensity={1.5}
      />
    </mesh>
  )
}

function SmallOrbs() {
  const orbData = [
    { pos: [-3.2, 1.5, -2] as [number, number, number], scale: 0.22, color: '#D4A8A0', speed: 1.3, distort: 0.5 },
    { pos: [4.0, -1.0, -3] as [number, number, number], scale: 0.18, color: '#C8A45C', speed: 0.8, distort: 0.4 },
    { pos: [-4.5, -2, -1] as [number, number, number], scale: 0.14, color: '#B8C4B0', speed: 1.1, distort: 0.6 },
    { pos: [3.5, 2.5, -2.5] as [number, number, number], scale: 0.20, color: '#EDE0CE', speed: 0.9, distort: 0.3 },
    { pos: [0.5, -3.0, -2] as [number, number, number], scale: 0.16, color: '#C8B4A0', speed: 1.4, distort: 0.5 },
  ]

  return (
    <>
      {orbData.map((orb, i) => (
        <FloatingOrb key={i} position={orb.pos} scale={orb.scale} color={orb.color} speed={orb.speed} distort={orb.distort} />
      ))}
    </>
  )
}

function Scene() {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F5EDE0" castShadow />
      <pointLight position={[-5, 3, 2]} intensity={0.6} color="#C8A45C" />
      <pointLight position={[0, -5, 3]} intensity={0.4} color="#D4A8A0" />

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <FloatingOrb position={[2, 0.5, 0]} scale={1.1} color="#C8A882" distort={0.35} speed={0.7} />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={1.0}>
        <GlassSphere position={[-1.8, -0.3, -1]} scale={0.75} />
      </Float>
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.6}>
        <MetallicTorus position={[-3.0, 0.8, 0.5]} scale={0.45} />
      </Float>
      <Float speed={1.0} rotationIntensity={0.4} floatIntensity={1.2}>
        <PearlCylinder position={[4.0, -0.5, -1]} scale={0.6} />
      </Float>
      <Float speed={2.0} rotationIntensity={0.8} floatIntensity={0.5}>
        <FloatingOrb position={[0.5, 2.5, -0.5]} scale={0.35} color="#D4A8A0" distort={0.6} speed={1.5} />
      </Float>

      <SmallOrbs />
    </>
  )
}

export default function Hero3D() {
  // Gracefully skip on reduced motion preference
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return null
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 65 }}
      dpr={[1, Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 1.5)]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
