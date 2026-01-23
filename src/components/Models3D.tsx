import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";
import { Box, Layers, Eye, Download, FileCheck } from "lucide-react";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";

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
    title: "Geological Modelling",
    description: "3D stratigraphic models with structural complexity and grade interpolation",
  },
  {
    icon: Box,
    title: "Block Models",
    description: "JORC/SAMREC-compliant resource estimation with uncertainty analysis",
  },
  {
    icon: Eye,
    title: "Drill Hole Visualization",
    description: "Interactive exploration of lithology, assay, and geotechnical data",
  },
  {
    icon: FileCheck,
    title: "Reporting Integration",
    description: "Export capabilities for Competent Persons Reports and technical documents",
  },
];

export function Models3D() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="3d-models" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={coreAnalysisVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-800/75 to-slate-900/95" />
      </div>

      <div className="page-x relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center w-full mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Geological Visualization</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            3D Block <span className="text-gradient">Modelling</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Advanced geological interpretation and resource modelling capabilities 
            supporting defensible mineral resource statements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Viewer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-4 aspect-square lg:aspect-[4/3]">
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
              <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-xs space-y-2">
                <div className="text-white/50 uppercase tracking-wider text-[10px] mb-2">Model Legend</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#8B7355' }} />
                  <span className="text-white/70">Overburden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: '#696969' }} />
                  <span className="text-white/70">Host Rock</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-white/70">Ore Body</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-500" />
                  <span className="text-white/70">Fault Zone</span>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-white/50 mt-4">
              Drag to rotate • Scroll to zoom • Interactive geological cross-section
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="font-display text-2xl md:text-3xl text-white">
              Transform Data Into <span className="text-gradient">Investment Decisions</span>
            </h3>
            <p className="text-xl md:text-2xl text-white/75 leading-relaxed">
              Our 3D modelling capabilities integrate seamlessly with resource estimation workflows, 
              providing visual validation of geological interpretations and grade distributions 
              for stakeholder presentations and technical review.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-medium text-xl md:text-2xl mb-3 text-white">{feature.title}</h4>
                  <p className="text-lg md:text-xl text-white/60 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero inline-flex mt-8"
            >
              Request Technical Demo
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
