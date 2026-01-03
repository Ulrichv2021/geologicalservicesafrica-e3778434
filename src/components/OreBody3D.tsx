import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Leapfrog-style block model with distinct geological units
const LeapfrogBlockModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Define block grid with Leapfrog-style coloring
  const blocks = useMemo(() => {
    const blockData: Array<{
      position: [number, number, number];
      color: string;
      name: string;
      opacity: number;
    }> = [];

    const blockSize = 0.28;
    const gap = 0.02;
    const spacing = blockSize + gap;

    // Grid dimensions
    const xBlocks = 8;
    const yLayers = 7;
    const zBlocks = 6;

    // Geological layer colors (Leapfrog style - vivid distinct colors)
    const layerColors = [
      { color: "#8B4513", name: "Overburden", yRange: [6, 6] },
      { color: "#D2691E", name: "Oxidized Zone", yRange: [5, 5] },
      { color: "#FFD700", name: "Transitional", yRange: [4, 4] },
      { color: "#32CD32", name: "Fresh Sulphide", yRange: [3, 3] },
      { color: "#00CED1", name: "High Grade Ore", yRange: [2, 2] },
      { color: "#9932CC", name: "Mineralized Host", yRange: [1, 1] },
      { color: "#4169E1", name: "Basement Rock", yRange: [0, 0] },
    ];

    // Ore body shape function (creates an irregular ore lens)
    const isOreZone = (x: number, y: number, z: number) => {
      const centerX = xBlocks / 2;
      const centerZ = zBlocks / 2;
      const distFromCenter = Math.sqrt(
        Math.pow((x - centerX) / (xBlocks / 2), 2) +
        Math.pow((z - centerZ) / (zBlocks / 2), 2)
      );
      
      // Create irregular ore body shape
      if (y >= 1 && y <= 3) {
        const threshold = 0.7 + Math.sin(x * 0.8 + z * 0.6) * 0.15;
        return distFromCenter < threshold;
      }
      return false;
    };

    for (let y = 0; y < yLayers; y++) {
      for (let x = 0; x < xBlocks; x++) {
        for (let z = 0; z < zBlocks; z++) {
          // Find layer color
          const layer = layerColors.find(l => y >= l.yRange[0] && y <= l.yRange[1]);
          
          let color = layer?.color || "#808080";
          let name = layer?.name || "Unknown";
          let opacity = 0.85;

          // Override for ore zone
          if (isOreZone(x, y, z)) {
            if (y === 2) {
              color = "#FF1493"; // Hot pink for high grade
              name = "High Grade Core";
              opacity = 0.95;
            } else if (y === 1 || y === 3) {
              color = "#FF6347"; // Tomato red for medium grade
              name = "Medium Grade";
              opacity = 0.9;
            }
          }

          // Add some randomness to colors for natural look
          const colorVariation = new THREE.Color(color);
          const hsl = { h: 0, s: 0, l: 0 };
          colorVariation.getHSL(hsl);
          colorVariation.setHSL(
            hsl.h + (Math.random() - 0.5) * 0.02,
            hsl.s * (0.9 + Math.random() * 0.2),
            hsl.l * (0.9 + Math.random() * 0.2)
          );

          blockData.push({
            position: [
              (x - xBlocks / 2 + 0.5) * spacing,
              (y - yLayers / 2 + 0.5) * spacing,
              (z - zBlocks / 2 + 0.5) * spacing,
            ],
            color: `#${colorVariation.getHexString()}`,
            name,
            opacity,
          });
        }
      }
    }

    return blockData;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle continuous rotation
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {blocks.map((block, index) => (
        <mesh
          key={index}
          position={block.position}
          onPointerOver={() => setHovered(block.name)}
          onPointerOut={() => setHovered(null)}
        >
          <boxGeometry args={[0.26, 0.26, 0.26]} />
          <meshStandardMaterial
            color={block.color}
            roughness={0.6}
            metalness={0.1}
            transparent
            opacity={hovered === block.name ? 1 : block.opacity}
          />
        </mesh>
      ))}
      
      {/* Wireframe outline for block model effect */}
      <mesh>
        <boxGeometry args={[2.5, 2.2, 1.9]} />
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </group>
  );
};

export function OreBody3D() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px]">
      <Canvas
        camera={{ position: [4, 3, 4], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} />
        <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />
        
        <LeapfrogBlockModel />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          autoRotate={false}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
      
      {/* Legend overlay */}
      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-3 text-xs space-y-1">
        <div className="text-white/80 font-medium mb-2">Geological Units</div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#8B4513" }} />
          <span className="text-white/70">Overburden</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#FFD700" }} />
          <span className="text-white/70">Transitional</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#32CD32" }} />
          <span className="text-white/70">Fresh Sulphide</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#FF1493" }} />
          <span className="text-white/70">High Grade Core</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: "#4169E1" }} />
          <span className="text-white/70">Basement</span>
        </div>
      </div>
    </div>
  );
}
