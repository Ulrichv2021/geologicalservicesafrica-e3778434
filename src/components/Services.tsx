import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { 
  Radio, 
  Drill, 
  Box, 
  Laptop, 
  Leaf,
  ChevronRight,
  Waves,
  Plane,
  Mountain,
  Zap,
  Droplets,
  Hammer,
  FileText,
  Database,
  BarChart3,
  Recycle
} from "lucide-react";
import geophysicsSurvey from "@/assets/geophysics-survey.jpg";
import drillingRig from "@/assets/drilling-rig.jpg";
import modeling3d from "@/assets/3d-modeling.jpg";

const servicePillars = [
  {
    id: "geophysics",
    icon: Radio,
    title: "Advanced Geophysics",
    tagline: "Seeing Through the Overburden",
    description: "State-of-the-art geophysical surveys that reveal subsurface structures with unprecedented clarity.",
    image: geophysicsSurvey,
    services: [
      { icon: Waves, name: "Ground Penetrating Radar (GPR)", description: "High-resolution subsurface imaging for shallow investigations" },
      { icon: Plane, name: "UAV Magnetics", description: "Drone-based magnetic surveys for rapid coverage of large areas" },
      { icon: Mountain, name: "LiDAR Scanning", description: "Precise topographic mapping and structural analysis" },
      { icon: Zap, name: "Induced Polarization (IP)", description: "Detecting disseminated sulphide mineralization at depth" },
      { icon: Droplets, name: "Ground Gravity", description: "Density contrast mapping for deep geological structures" },
    ],
  },
  {
    id: "drilling",
    icon: Drill,
    title: "Precision Drilling",
    tagline: "Core Recovery Excellence",
    description: "Comprehensive drilling solutions delivering quality samples for accurate resource assessment.",
    image: drillingRig,
    services: [
      { icon: Drill, name: "Sonic Drilling", description: "100% core recovery in unconsolidated materials" },
      { icon: Hammer, name: "Percussion Drilling", description: "Efficient penetration in hard rock formations" },
      { icon: Droplets, name: "Water Borehole Drilling", description: "Residential and commercial water supply solutions" },
      { icon: FileText, name: "Core Logging & Management", description: "Detailed geological documentation and secure storage" },
    ],
  },
  {
    id: "modeling",
    icon: Box,
    title: "3D Modelling & BFS",
    tagline: "From Data to Decisions",
    description: "SAMREC-compliant resource estimation and comprehensive feasibility studies.",
    image: modeling3d,
    services: [
      { icon: Box, name: "Resource Estimation", description: "SAMREC-compliant mineral resource statements" },
      { icon: Mountain, name: "Target Generation", description: "AI-assisted prospectivity mapping and drill targeting" },
      { icon: BarChart3, name: "2D/3D Inversion", description: "Advanced geophysical data processing and interpretation" },
      { icon: FileText, name: "Bankable Feasibility Studies", description: "Investment-grade technical reports" },
    ],
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Digital Transformation",
    tagline: "aGISs/MIS Solutions",
    description: "Custom digital solutions to control information overload and enable data-driven decisions.",
    image: null,
    services: [
      { icon: Database, name: "Mobile Data Capture", description: "Real-time field data collection and validation" },
      { icon: BarChart3, name: "Operational Dashboards", description: "Live project monitoring and KPI tracking" },
      { icon: Laptop, name: "Management Information Systems", description: "Integrated data management platforms" },
      { icon: Box, name: "3D Visualization Platforms", description: "Interactive geological model viewers" },
    ],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental & Advisory",
    tagline: "Sustainable Exploration",
    description: "Comprehensive environmental services ensuring responsible resource development.",
    image: null,
    services: [
      { icon: FileText, name: "Environmental Management Plans", description: "Regulatory-compliant EMP development" },
      { icon: Recycle, name: "Mine Closure Planning", description: "Sustainable decommissioning strategies" },
      { icon: Leaf, name: "Rehabilitation Services", description: "Land restoration and ecosystem recovery" },
      { icon: Droplets, name: "Groundwater Dynamics", description: "Hydrogeological assessments and monitoring" },
    ],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(servicePillars[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Integrated Service Pillars</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6">
            Your <span className="text-gradient">One-Stop-Shop</span> for Exploration
          </h2>
          <p className="text-lg text-muted-foreground">
            From geophysical reconnaissance to bankable feasibility studies, 
            we deliver end-to-end solutions tailored to your project needs.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {servicePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveService(pillar)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-lg transition-all duration-300 ${
                activeService.id === pillar.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "glass-card hover:bg-muted/50"
              }`}
            >
              <pillar.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{pillar.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active Service Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left - Image or Gradient */}
            <div className="relative">
              {activeService.image ? (
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 via-secondary to-background aspect-[4/3] flex items-center justify-center">
                  <activeService.icon className="w-24 h-24 text-primary/50" />
                </div>
              )}
              
              {/* Info Card */}
              <div className="absolute -bottom-6 left-6 right-6 glass-card p-6">
                <h3 className="font-display text-xl mb-2">{activeService.title}</h3>
                <p className="text-sm text-muted-foreground">{activeService.tagline}</p>
              </div>
            </div>

            {/* Right - Service List */}
            <div className="space-y-6 pt-8 lg:pt-0">
              <p className="text-muted-foreground">{activeService.description}</p>
              
              <div className="space-y-4">
                {activeService.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="glass-card-hover p-4 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium mb-1 flex items-center gap-2">
                        {service.name}
                        <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
