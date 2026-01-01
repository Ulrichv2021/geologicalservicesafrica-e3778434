import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { Box, Layers, Eye, Download } from "lucide-react";

function GeologicalLayers() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const layers = [
    { y: 1.5, color: "#8B4513", height: 0.3, name: "Overburden" },
    { y: 1.0, color: "#A0522D", height: 0.4, name: "Weathered Zone" },
    { y: 0.4, color: "#696969", height: 0.5, name: "Host Rock" },
    { y: -0.3, color: "#3b82f6", height: 0.4, name: "Ore Body" },
    { y: -0.9, color: "#4a5568", height: 0.5, name: "Basement" },
  ];

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        {layers.map((layer, index) => (
          <mesh key={index} position={[0, layer.y, 0]}>
            <boxGeometry args={[3, layer.height, 2]} />
            <MeshDistortMaterial
              color={layer.color}
              speed={0.5}
              distort={0.2}
              transparent
              opacity={0.85}
            />
          </mesh>
        ))}
        
        {/* Drill holes */}
        {[-0.8, 0, 0.8].map((x, i) => (
          <mesh key={`drill-${i}`} position={[x, 0.3, 0.5]}>
            <cylinderGeometry args={[0.03, 0.03, 2.5, 8]} />
            <meshBasicMaterial color="#60a5fa" transparent opacity={0.7} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

const features = [
  {
    icon: Layers,
    title: "Stratigraphic Modeling",
    description: "Visualize geological layers and structural relationships in 3D",
  },
  {
    icon: Box,
    title: "Block Models",
    description: "Grade distribution and resource estimation visualization",
  },
  {
    icon: Eye,
    title: "Virtual Core Logging",
    description: "Interactive exploration of drill hole data",
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
    <section id="3d-models" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-obsidian to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Interactive Visualization</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            3D Geological <span className="text-gradient">Models</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience your geological data like never before with our interactive 
            3D visualization platform.
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
            <div className="glass-card p-4 aspect-square lg:aspect-[4/3]">
              <Canvas camera={{ position: [4, 3, 4], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} intensity={0.8} />
                <pointLight position={[-5, -5, -5]} intensity={0.3} color="#3b82f6" />
                
                <GeologicalLayers />
                
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.3}
                  minDistance={4}
                  maxDistance={10}
                />
              </Canvas>
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 glass-card p-3 text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#8B4513]" />
                  <span className="text-muted-foreground">Overburden</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-primary" />
                  <span className="text-muted-foreground">Ore Body</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-[#4a5568]" />
                  <span className="text-muted-foreground">Basement</span>
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
            <h3 className="font-display text-2xl">
              Transform Data Into <span className="text-gradient">Insight</span>
            </h3>
            <p className="text-muted-foreground">
              Our 3D modeling capabilities integrate seamlessly with your exploration workflow, 
              providing real-time visualization of geological structures, grade distributions, 
              and resource estimates.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glass-card-hover p-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-medium mb-1">{feature.title}</h4>
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
