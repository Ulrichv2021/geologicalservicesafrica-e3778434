import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import * as THREE from "three";

// Pink Diamond with brilliant cut facets
const PinkDiamond = () => {
  const diamondRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (diamondRef.current) {
      diamondRef.current.rotation.y += 0.008;
      diamondRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Create diamond geometry with brilliant cut proportions
  const crownHeight = 0.35;
  const pavilionHeight = 0.85;
  const tableRadius = 0.45;
  const girdleRadius = 1;
  const culletRadius = 0.02;

  return (
    <group ref={diamondRef}>
      {/* Crown (top part) */}
      <mesh position={[0, pavilionHeight / 2 + crownHeight / 2, 0]}>
        <coneGeometry args={[girdleRadius, crownHeight, 8, 1, true]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.0}
          thickness={0.5}
          ior={2.42}
          chromaticAberration={0.06}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ff69b4"
          color="#ffb6c1"
        />
      </mesh>

      {/* Table (flat top) */}
      <mesh position={[0, pavilionHeight / 2 + crownHeight, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[tableRadius, 8]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.95}
          roughness={0.0}
          thickness={0.3}
          ior={2.42}
          chromaticAberration={0.08}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#ff69b4"
          color="#ffb6c1"
        />
      </mesh>

      {/* Pavilion (bottom cone) */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[girdleRadius, pavilionHeight, 8, 1, false]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          resolution={512}
          transmission={0.92}
          roughness={0.0}
          thickness={0.8}
          ior={2.42}
          chromaticAberration={0.1}
          anisotropy={0.5}
          distortion={0.3}
          distortionScale={0.4}
          temporalDistortion={0.15}
          clearcoat={1}
          attenuationDistance={0.4}
          attenuationColor="#ff1493"
          color="#ffb6c1"
        />
      </mesh>

      {/* Inner glow effect */}
      <pointLight position={[0, 0, 0]} intensity={0.5} color="#ff69b4" distance={3} />
    </group>
  );
};

// Sparkle particles around the diamond
const Sparkles = () => {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 50;
  const positions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1.5 + Math.random() * 1.5;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

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
        size={0.03}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

export function OreBody3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0f172a"]} />
        
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} />
        <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#ff69b4" />
        <spotLight position={[0, 10, 0]} intensity={2} angle={0.3} penumbra={0.5} color="#ffffff" />
        
        <Environment preset="studio" />
        
        <PinkDiamond />
        <Sparkles />
        
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Diamond info overlay */}
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 text-sm">
        <div className="text-white/90 font-display font-semibold mb-2">Pink Diamond</div>
        <div className="space-y-1 text-xs text-white/70">
          <div>Cut: Brilliant Round</div>
          <div>Color: Fancy Intense Pink</div>
          <div>Clarity: VVS1</div>
          <div>Origin: Argyle Mine, Australia</div>
        </div>
      </div>
    </div>
  );
}
