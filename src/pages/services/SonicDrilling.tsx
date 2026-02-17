import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Gauge, Ruler, Shield, Target, Layers, ArrowRight, ChevronRight, Clock, Zap, Leaf, Crosshair, Mountain } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

// VITE IMPORTS: Relative paths match your src/assets folder
import sonicHero from "../assets/Drilling.JPG";
import sampleIntegrityImg from "../assets/Sample_Integrety.JPG"; 
import drillStringImg from "../assets/Drill String.JPG";
import coreRecoveryImg from "../assets/Core_recovery.JPG";
import environmentalImg from "../assets/Enviromental.JPG";

const kpis = [
  { icon: Gauge, label: "Core Recovery", value: "95–100%" },
  { icon: Zap, label: "Speed", value: "2–3× Faster" },
  { icon: Leaf, label: "Waste Reduction", value: "Up to 80% Less" },
  { icon: Ruler, label: "Deviation", value: "Minimal" },
];

const whyChoose = [
  {
    icon: Target,
    title: "Superior Core Recovery",
    description: "Achieve 95-100% recovery even in difficult loose soil conditions. Our Sonic technology captures near-perfect representative samples.",
    image: coreRecoveryImg,
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Up to 2–3× faster than conventional drilling. High-frequency vibrations enable rapid penetration with minimal downtime.",
    image: drillStringImg,
  },
  {
    icon: Leaf,
    title: "Reduced Waste",
    description: "Produces up to 80% less drill cuttings. Minimal use of drilling fluids reduces containment requirements and site impact.",
    image: environmentalImg,
  },
];

const applications = [
  { icon: Layers, text: "Mineral Sands exploration & resource definition" },
  { icon: Mountain, text: "Alluvial Gold & Diamond sampling programmes" },
  { icon: Shield, text: "Tailings Storage Facilities (TSF) investigations" },
  { icon: Leaf, text: "Environmental & geotechnical sampling" },
  { icon: Target, text: "Coastal sediment & near-shore investigations" },
  { icon: Gauge, text: "QAQC-compliant validation & twinned holes" },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function SonicDrilling() {
  useDocumentMeta({
    title: "Sonic Drilling Services Africa | High-Recovery Core | GSA",
    description: "Advanced Sonic Drilling delivering 95–100% core recovery in unconsolidated formations across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/sonic-drilling",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Sonic Drilling" }]}>
      {/* Hero with Object-Center for Large Backgrounds */}
      <section className="relative py-20 lg:py-28 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={sonicHero} 
            alt="Sonic drilling operations" 
            className="w-full h-full object-cover object-center"
            loading="eager" 
          />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Unconsolidated Formation Specialists</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Advanced <span className="text-gradient">Sonic Drilling</span> Services
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Exceptional core recovery in the most challenging unconsolidated ground conditions.
              QAQC-compliant programmes supervised by SACNASP-registered geologists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPI Bar */}
      <section className="bg-slate-800 border-y border-white/10">
        <div className="page-x py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <motion.div key={kpi.label} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <kpi.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/50 uppercase tracking-wider">{kpi.label}</p>
                  <p className="text-lg font-display text-white">{kpi.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section - Enhanced for Large Images */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Service Overview</h2>
            <p className="text-lg text-white/60 mb-16 max-w-[75ch]">
              Our Sonic technology excels in loose soil, sands, and silts, providing a near-perfect representative sample of the subsurface.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <h3 className="font-display text-2xl text-white mb-2">Technical Advantages</h3>
              {whyChoose.map((item, i) => (
                <motion.div key={item.title} {...fadeUp} transition={{ duration: 0.4, delay: i * 0.12 }} className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 shrink-0 bg-slate-800">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-56 md:h-full object-cover object-center transition-opacity duration-500" 
                        loading="lazy" 
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-display text-xl text-white">{item.title}</h4>
                      </div>
                      <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <motion.aside {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-1">
              <div className="bg-slate-800/60 border border-white/10 rounded-xl p-8 sticky top-32">
                <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  Technical Applications
                </h3>
                <ul className="space-y-5">
                  {applications.map((app) => (
                    <li key={app.text} className="flex items-start gap-3">
                      <app.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-base text-white/70 leading-relaxed">{app.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Technical Highlight - Large Image Handling */}
      <section className="py-16 bg-slate-800/50 border-y border-white/10">
        <div className="page-x">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Sample Integrity</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Large diameter cores that maintain the original stratigraphy. Near-100% recovery with minimal 
                contamination ensures representative samples for grade estimation and metallurgical testing.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">JORC Compliant</span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">SAMREC Compliant</span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">QAQC Validated</span>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <div className="rounded-xl border border-white/10 overflow-hidden bg-slate-800">
                <img 
                  src={sampleIntegrityImg} 
                  alt="High-recovery sonic core samples" 
                  className="w-full h-auto max-h-[400px] object-cover object-center" 
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-white/40 mt-3 text-center">Exceptional core recovery in unconsolidated formations</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="page-x text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Plan Your Sonic Drilling Programme</h2>
            <p className="text-lg text-white/60 mb-10 max-w-[55ch] mx-auto">
              Expert programme design for mineral sands, alluvials, and environmental sampling.
            </p>
            <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
              Consult a Drilling Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
