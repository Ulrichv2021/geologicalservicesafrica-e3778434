import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

const RealisticGeologySection = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create realistic layered geology with natural colors
  const layers = useMemo(() => [
    { y: 1.8, color: "#6B4423", height: 0.25, name: "Topsoil" },
    { y: 1.45, color: "#8B6914", height: 0.3, name: "Alluvium" },
    { y: 1.0, color: "#A67B5B", height: 0.35, name: "Saprolite" },
    { y: 0.5, color: "#808080", height: 0.45, name: "Weathered Bedrock" },
    { y: -0.1, color: "#505050", height: 0.5, name: "Fresh Bedrock" },
    { y: -0.75, color: "#2563eb", height: 0.35, name: "Mineralized Zone" },
    { y: -1.3, color: "#3d3d3d", height: 0.5, name: "Basement" },
  ], []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Main geological layers */}
        {layers.map((layer, index) => (
          <mesh key={index} position={[0, layer.y, 0]}>
            <boxGeometry args={[2.8, layer.height, 2]} />
            <meshStandardMaterial
              color={layer.color}
              roughness={0.85}
              metalness={0.05}
            />
          </mesh>
        ))}

        {/* Realistic fold structure in middle layers */}
        <mesh position={[0, 0.2, 0]} rotation={[0, 0, 0.08]}>
          <boxGeometry args={[2.7, 0.1, 1.9]} />
          <meshStandardMaterial color="#707070" roughness={0.8} transparent opacity={0.7} />
        </mesh>

        {/* Drill holes with realistic appearance */}
        {[
          { x: -0.8, z: 0.5, angle: -0.05 },
          { x: 0.3, z: 0.2, angle: 0 },
          { x: 1.0, z: -0.3, angle: 0.08 },
        ].map((pos, i) => (
          <group key={`drill-${i}`} position={[pos.x, 1.2, pos.z]} rotation={[0, 0, pos.angle]}>
            {/* Collar */}
            <mesh position={[0, 0.7, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.1, 12]} />
              <meshStandardMaterial color="#4b5563" metalness={0.7} roughness={0.3} />
            </mesh>
            {/* Drill trace */}
            <mesh position={[0, -1.0, 0]}>
              <cylinderGeometry args={[0.025, 0.025, 3.5, 12]} />
              <meshStandardMaterial 
                color="#1d4ed8" 
                emissive="#3b82f6" 
                emissiveIntensity={0.2}
                transparent 
                opacity={0.85} 
              />
            </mesh>
          </group>
        ))}

        {/* Ore body with glow effect */}
        <mesh position={[0, -0.75, 0]}>
          <boxGeometry args={[1.8, 0.38, 1.2]} />
          <meshStandardMaterial
            color="#2563eb"
            emissive="#1e40af"
            emissiveIntensity={0.15}
            roughness={0.5}
            metalness={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
};

const GridFloor = () => {
  return (
    <gridHelper
      args={[15, 15, "#e5e7eb", "#d1d5db"]}
      position={[0, -2, 0]}
    />
  );
};

export function OreBody3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 10, 5]} intensity={1} />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#3b82f6" />
        
        <RealisticGeologySection />
        <GridFloor />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}