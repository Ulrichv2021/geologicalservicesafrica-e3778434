import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { Box, Layers, Eye, Download } from "lucide-react";

const GeologicalLayers = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Create realistic geological cross-section with folding
  const layers = useMemo(() => {
    return [
      { baseY: 2.0, color: "#8B7355", name: "Topsoil", amplitude: 0.1, frequency: 2 },
      { baseY: 1.5, color: "#A0826D", name: "Alluvium", amplitude: 0.15, frequency: 1.5 },
      { baseY: 0.9, color: "#CD853F", name: "Weathered Zone", amplitude: 0.2, frequency: 1.2 },
      { baseY: 0.2, color: "#8B8682", name: "Fractured Rock", amplitude: 0.25, frequency: 1 },
      { baseY: -0.6, color: "#696969", name: "Host Rock", amplitude: 0.3, frequency: 0.8 },
      { baseY: -1.4, color: "#2563eb", name: "Ore Zone", amplitude: 0.15, frequency: 1.5 },
      { baseY: -2.2, color: "#4a5568", name: "Basement", amplitude: 0.1, frequency: 0.5 },
    ];
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  // Create folded layer geometry
  const createFoldedLayer = (baseY: number, amplitude: number, frequency: number, thickness: number) => {
    const shape = new THREE.Shape();
    const width = 3;
    const depth = 2;
    const segments = 32;
    
    const points: THREE.Vector3[] = [];
    
    for (let i = 0; i <= segments; i++) {
      const x = (i / segments) * width - width / 2;
      const fold = Math.sin(x * frequency) * amplitude + Math.cos(x * frequency * 0.5) * amplitude * 0.5;
      points.push(new THREE.Vector3(x, baseY + fold, 0));
    }
    
    return points;
  };

  return (
    <Float speed={1} rotationIntensity={0.05} floatIntensity={0.2}>
      <group ref={groupRef}>
        {/* Geological layers with realistic folding */}
        {layers.map((layer, index) => (
          <mesh key={index} position={[0, layer.baseY, 0]}>
            <boxGeometry args={[3.5, 0.35, 2.5]} />
            <meshStandardMaterial
              color={layer.color}
              roughness={0.8}
              metalness={0.1}
              transparent
              opacity={0.95}
            />
          </mesh>
        ))}
        
        {/* Fold deformation - curved overlay */}
        {layers.slice(2, 5).map((layer, index) => (
          <mesh key={`fold-${index}`} position={[0, layer.baseY + 0.1, 0]} rotation={[0, 0, Math.sin(index * 0.5) * 0.1]}>
            <boxGeometry args={[3.4, 0.08, 2.4]} />
            <meshStandardMaterial
              color={layer.color}
              roughness={0.6}
              metalness={0.2}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
        
        {/* Realistic drill holes with collars */}
        {[
          { x: -1, z: 0.6, angle: 0 },
          { x: 0.2, z: 0.3, angle: -0.1 },
          { x: 1.1, z: -0.4, angle: 0.15 },
        ].map((drill, i) => (
          <group key={`drill-${i}`} position={[drill.x, 1.5, drill.z]} rotation={[0, 0, drill.angle]}>
            {/* Drill collar */}
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.08, 0.08, 0.15, 16]} />
              <meshStandardMaterial color="#374151" metalness={0.8} roughness={0.2} />
            </mesh>
            {/* Drill hole */}
            <mesh position={[0, -1.2, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 4, 16]} />
              <meshStandardMaterial 
                color="#1e40af" 
                transparent 
                opacity={0.8}
                emissive="#3b82f6"
                emissiveIntensity={0.3}
              />
            </mesh>
            {/* Core sample indicator */}
            <mesh position={[0, -1.2, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
              <meshStandardMaterial color="#60a5fa" transparent opacity={0.5} />
            </mesh>
          </group>
        ))}

        {/* Fault line */}
        <mesh position={[0.5, -0.2, 0]} rotation={[0, 0, 0.3]}>
          <boxGeometry args={[0.03, 4, 2.6]} />
          <meshStandardMaterial color="#ef4444" transparent opacity={0.6} />
        </mesh>

        {/* Ore body highlight */}
        <mesh position={[0, -1.4, 0]}>
          <boxGeometry args={[2, 0.4, 1.5]} />
          <meshStandardMaterial 
            color="#3b82f6"
            emissive="#2563eb"
            emissiveIntensity={0.2}
            transparent
            opacity={0.85}
            roughness={0.4}
            metalness={0.3}
          />
        </mesh>
      </group>
    </Float>
  );
};

const features = [
  {
    icon: Layers,
    title: "Stratigraphic Modeling",
    description: "Visualize geological layers with realistic folding and structural relationships",
  },
  {
    icon: Box,
    title: "Block Models",
    description: "Grade distribution and resource estimation visualization",
  },
  {
    icon: Eye,
    title: "Virtual Core Logging",
    description: "Interactive exploration of drill hole data and core samples",
  },
  {
    icon: Download,
    title: "Export Capabilities",
    description: "Compatible with industry-standard mining software",
  },
];

export function Models3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="3d-models" className="relative py-24 lg:py-32 overflow-hidden bg-slate-50">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Interactive Visualization</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 text-foreground">
            3D Geological <span className="text-gradient">Models</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience your geological data with realistic cross-sections showing 
            folding, faulting, and drill hole trajectories.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card p-4 aspect-square lg:aspect-[4/3] bg-gradient-to-br from-slate-100 to-white">
              <Canvas camera={{ position: [5, 4, 5], fov: 45 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 8, 5]} intensity={1} castShadow />
                <pointLight position={[-5, -5, -5]} intensity={0.4} color="#3b82f6" />
                <pointLight position={[5, 2, 5]} intensity={0.3} color="#60a5fa" />
                
                <GeologicalLayers />
                
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.3}
                  minDistance={5}
                  maxDistance={12}
                  minPolarAngle={Math.PI / 6}
                  maxPolarAngle={Math.PI / 2.2}
                />
              </Canvas>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-card p-3 text-xs space-y-1 bg-white/90">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#8B7355' }} />
                  <span className="text-muted-foreground">Overburden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#696969' }} />
                  <span className="text-muted-foreground">Host Rock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-muted-foreground">Ore Body</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500" />
                  <span className="text-muted-foreground">Fault Zone</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              Drag to rotate • Scroll to zoom
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl text-foreground">
              Transform Data Into <span className="text-gradient">Insight</span>
            </h3>
            <p className="text-muted-foreground">
              Our 3D modeling capabilities integrate seamlessly with your exploration workflow, 
              providing real-time visualization of geological structures including realistic 
              folding, faulting, and drill hole intercepts.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card-hover p-4 group bg-white"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-1 text-foreground">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero inline-flex mt-6"
            >
              Request a Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}