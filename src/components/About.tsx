import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, Building2, Leaf, Target, Shield } from "lucide-react";
import coreSamples from "@/assets/core-samples.jpg";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";

const differentiators = [
  {
    icon: Globe,
    title: "African Specialization",
    description: "Comprehensive spatial database of metallogenic belts across the continent, from the Birimian to the Kaapvaal Craton.",
  },
  {
    icon: Cpu,
    title: "The Tech Evolution",
    description: "Integrated mobile data capture, real-time dashboards, and AI-powered analytics for instant decision-making.",
  },
  {
    icon: Building2,
    title: "One-Stop-Shop",
    description: "From Ground Penetrating Radar surveys to Bankable Feasibility Studies—complete exploration lifecycle under one roof.",
  },
  {
    icon: Shield,
    title: "SAMREC Compliance",
    description: "All resource estimations and reports adhere to the South African Code for Reporting of Exploration Results.",
  },
  {
    icon: Target,
    title: "Data Integrity",
    description: "Rigorous QA/QC protocols ensuring your investment decisions are backed by defensible, auditable data.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description: "Sustainable exploration practices with integrated environmental monitoring and rehabilitation planning.",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/70 to-slate-900/90" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">The GSA Story</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 text-white drop-shadow-lg">
            Philosophy of <span className="text-gradient">Resourcefulness</span>
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            "What we save today, we have for tomorrow." This philosophy drives our commitment 
            to sustainable resource development, combining 35 years of legacy expertise with 
            cutting-edge technology across 20+ African countries.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src={coreSamples}
                alt="Geological core samples"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-md border border-white/10 rounded-xl p-6 max-w-xs"
            >
              <div className="text-4xl font-display font-bold text-gradient mb-2">15+</div>
              <p className="text-sm text-white/70">Years of Leadership Excellence in Mineral Exploration</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl text-white">
              A Unified Vision for Excellence
            </h3>
            <p className="text-white/75 leading-relaxed">
              Geological Services Africa brings together decades of combined expertise in 
              exploration geology, geophysics, drilling, and digital innovation under one roof.
            </p>
            <p className="text-white/75 leading-relaxed">
              Our integrated approach eliminates the fragmentation typical in exploration projects, 
              providing clients with seamless service delivery from initial reconnaissance to 
              final feasibility studies.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-white/20" />
              <span className="text-primary text-sm font-medium">Trusted by Major Mining Houses</span>
              <div className="h-px flex-1 bg-white/20" />
            </div>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl text-center mb-12 text-white">
            The <span className="text-gradient">GSA Difference</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg mb-2 text-white">{item.title}</h4>
                <p className="text-sm text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
