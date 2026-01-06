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
  Recycle,
  Target,
  Shield
} from "lucide-react";
import geophysicsSurvey from "@/assets/geophysics-survey.jpg";
import drillingRig from "@/assets/drilling-rig.jpg";
import modeling3d from "@/assets/3d-modeling.jpg";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";
import tabletDataEntry from "@/assets/tablet-data-entry.jpg";

const servicePillars = [
  {
    id: "geophysics",
    icon: Radio,
    title: "Geophysical Surveys",
    tagline: "Subsurface Characterization",
    description: "Non-invasive geophysical methods providing defensible structural and lithological interpretations for drill targeting and resource delineation.",
    image: geophysicsSurvey,
    services: [
      { icon: Waves, name: "Ground Penetrating Radar (GPR)", description: "High-resolution shallow subsurface imaging for alluvial and near-surface investigations" },
      { icon: Plane, name: "Airborne & UAV Magnetics", description: "Rapid coverage magnetic surveys for structural mapping and target generation" },
      { icon: Mountain, name: "LiDAR & Topographic Surveys", description: "Precision topographic mapping for pit design and volumetric calculations" },
      { icon: Zap, name: "Induced Polarization (IP/Res)", description: "Detection of disseminated sulphide mineralization and resistivity contrasts" },
      { icon: Droplets, name: "Gravity & Ground Magnetics", description: "Density and magnetic susceptibility mapping for deep geological structures" },
    ],
  },
  {
    id: "drilling",
    icon: Drill,
    title: "Drilling & Sampling",
    tagline: "Core Recovery Excellence",
    description: "QAQC-compliant drilling programs delivering representative samples for accurate resource assessment and grade estimation.",
    image: drillingRig,
    services: [
      { icon: Drill, name: "Diamond Core Drilling", description: "HQ/NQ core recovery for detailed lithological logging and assay sampling" },
      { icon: Hammer, name: "Reverse Circulation (RC) Drilling", description: "Cost-effective grade control and resource definition programs" },
      { icon: FileText, name: "Core Logging & Photography", description: "Systematic geological documentation with digital capture workflows" },
      { icon: Target, name: "Downhole Surveys", description: "Gyroscopic and magnetic deviation surveys for hole trajectory verification" },
    ],
  },
  {
    id: "modeling",
    icon: Box,
    title: "Resource Estimation & BFS",
    tagline: "Investment-Grade Outputs",
    description: "JORC/SAMREC-compliant resource estimation and feasibility studies meeting international banking and investment standards.",
    image: modeling3d,
    services: [
      { icon: Box, name: "Mineral Resource Estimation", description: "Geostatistical modelling with full uncertainty quantification" },
      { icon: Shield, name: "Competent Persons Reports", description: "JORC/SAMREC-compliant CPRs for listing and financing purposes" },
      { icon: BarChart3, name: "Pre-Feasibility Studies (PFS)", description: "Technical and economic assessments for project advancement" },
      { icon: FileText, name: "Bankable Feasibility Studies", description: "Investment-grade technical reports for project financing" },
    ],
  },
  {
    id: "digital",
    icon: Laptop,
    title: "Digital Solutions",
    tagline: "Data-Driven Workflows",
    description: "Integrated digital platforms enabling real-time data capture, validation, and visualization for operational efficiency.",
    image: tabletDataEntry,
    services: [
      { icon: Database, name: "Mobile Data Capture", description: "Field data collection with built-in validation and QAQC checks" },
      { icon: BarChart3, name: "Operational Dashboards", description: "Real-time project monitoring and KPI tracking platforms" },
      { icon: Laptop, name: "Cloud GIS Platforms", description: "Centralized spatial data management and multi-user access" },
      { icon: Box, name: "3D Model Visualization", description: "Interactive geological model viewers for stakeholder presentations" },
    ],
  },
  {
    id: "environmental",
    icon: Leaf,
    title: "Environmental & Closure",
    tagline: "ESG Compliance",
    description: "Environmental management and mine closure planning aligned with regulatory requirements and ESG expectations.",
    image: null,
    services: [
      { icon: FileText, name: "Environmental Management Plans", description: "Regulatory-compliant EMP development and implementation" },
      { icon: Recycle, name: "Mine Closure Planning", description: "Progressive rehabilitation and closure cost estimation" },
      { icon: Leaf, name: "Rehabilitation Monitoring", description: "Land restoration progress tracking and reporting" },
      { icon: Droplets, name: "Hydrogeological Studies", description: "Groundwater assessments and water management planning" },
    ],
  },
];

export function Services() {
  const [activeService, setActiveService] = useState(servicePillars[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28 lg:py-36 overflow-hidden">
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
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-800/65 to-slate-900/85" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Technical Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Full Lifecycle <span className="text-gradient">Technical Support</span>
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            From early-stage reconnaissance through to bankable feasibility studies, 
            GSA delivers integrated geological services tailored to your project stage and investment requirements.
          </p>
        </motion.div>

        {/* Service Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {servicePillars.map((pillar) => (
            <button
              key={pillar.id}
              onClick={() => setActiveService(pillar)}
              className={`group flex items-center gap-2 px-6 py-4 rounded-xl transition-all duration-300 ${
                activeService.id === pillar.id
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-slate-800/60 backdrop-blur-md border border-white/10 text-white/80 hover:bg-slate-700/60 hover:text-white"
              }`}
            >
              <pillar.icon className="w-5 h-5" />
              <span className="font-medium">{pillar.title}</span>
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
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left - Image or Gradient */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={activeService.image || tabletDataEntry}
                  alt={activeService.title}
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              </div>
              
              {/* Info Card */}
              <div className="absolute -bottom-6 left-6 right-6 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-xl p-6">
                <h3 className="font-display text-2xl mb-2 text-white">{activeService.title}</h3>
                <p className="text-white/60">{activeService.tagline}</p>
              </div>
            </div>

            {/* Right - Service List */}
            <div className="space-y-8 pt-8 lg:pt-0">
              <p className="text-lg text-white/75 leading-relaxed">{activeService.description}</p>
              
              <div className="space-y-4">
                {activeService.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-5 flex items-start gap-4 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/30 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-lg mb-1 flex items-center gap-2 text-white">
                        {service.name}
                        <ChevronRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      <p className="text-white/60">{service.description}</p>
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
