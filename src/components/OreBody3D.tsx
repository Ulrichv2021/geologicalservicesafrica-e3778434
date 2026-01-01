import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function WireframeOreBody() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  // Create an irregular ore body shape
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 2);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Deform to create organic ore body shape
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      
      const noise = Math.sin(x * 2) * 0.3 + Math.cos(y * 3) * 0.2 + Math.sin(z * 1.5) * 0.25;
      const scale = 1 + noise;
      
      positions[i] *= scale;
      positions[i + 1] *= scale * 0.8;
      positions[i + 2] *= scale;
    }
    
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      glowRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Main wireframe */}
        <mesh ref={meshRef} geometry={geometry}>
          <meshBasicMaterial
            color="#3b82f6"
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Inner glow layer */}
        <mesh ref={glowRef} geometry={geometry} scale={0.95}>
          <meshBasicMaterial
            color="#60a5fa"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Core points representing ore deposits */}
        <points geometry={geometry}>
          <pointsMaterial
            color="#93c5fd"
            size={0.05}
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      </group>
    </Float>
  );
}

function GridFloor() {
  return (
    <gridHelper
      args={[20, 20, "#1e3a8a", "#1e3a5a"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

export function OreBody3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
        
        <WireframeOreBody />
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
