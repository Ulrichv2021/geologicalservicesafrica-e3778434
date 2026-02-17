import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Gauge, Ruler, Shield, Target, Layers, ArrowRight, ChevronRight, Clock, Zap, Leaf, Crosshair, Mountain } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import drillingRig from "@/assets/drilling-rig.jpg";
import coreSamples from "@/assets/core-samples.jpg";

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
    description:
      "Achieve 95-100% recovery even in difficult loose soil conditions where standard rigs fail. Our Sonic technology captures near-perfect representative samples of the subsurface.",
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description:
      "Up to 2–3× faster than conventional drilling in specific formations. High-frequency vibrations enable rapid penetration through unconsolidated materials with minimal downtime.",
  },
  {
    icon: Leaf,
    title: "Reduced Waste",
    description:
      "Produces up to 80% less drill cuttings, making it the most environmentally friendly choice for sensitive sites. Minimal use of drilling fluids reduces containment requirements.",
  },
  {
    icon: Crosshair,
    title: "Vertical Accuracy",
    description:
      "Minimal hole deviation ensures precise data for resource estimation. Consistent core alignment supports accurate stratigraphic and grade control interpretations.",
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
    description:
      "Advanced Sonic Drilling delivering 95–100% core recovery in unconsolidated formations. Ideal for mineral sands, alluvials, and environmental sampling across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/sonic-drilling",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Sonic Drilling" }]}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={drillingRig} alt="Sonic drilling operations" className="w-full h-full object-cover" />
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

      {/* Quick Specs KPI Bar */}
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

      {/* Service Overview */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-6">Service Overview</h2>
            <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-[75ch] mb-16">
              Our Sonic Drilling technology utilises high-frequency mechanical vibrations to take continuous, relatively
              undisturbed core samples. Unlike traditional methods, Sonic drilling excels in loose soil, sands, and silts,
              providing a near-perfect representative sample of the subsurface without the use of excessive fluids.
            </p>
          </motion.div>

          {/* Why Choose Grid + Applications Sidebar */}
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <h3 className="font-display text-2xl text-white mb-2">Why Choose Sonic Drilling?</h3>
              {whyChoose.map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="bg-slate-800/60 border border-white/10 rounded-xl p-8 flex items-start gap-5"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white mb-3">{item.title}</h4>
                    <p className="text-base text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Applications Sidebar */}
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

      {/* Technical Capabilities */}
      <section className="py-16 bg-slate-800/50 border-y border-white/10">
        <div className="page-x">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Sample Integrity</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Large diameter cores that maintain the original stratigraphy of the soil. Near-100% core recovery
                with minimal loss or contamination ensures representative samples for grade estimation and
                metallurgical testing. The preserved in-situ sedimentary structures, moisture content, and stratigraphy
                are critical for accurate geological interpretation and bulk density determinations.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  JORC Compliant
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  SAMREC Compliant
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  QAQC Validated
                </span>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <img
                src={coreSamples}
                alt="High-recovery sonic core samples showing undisturbed stratigraphy"
                className="w-full h-72 object-cover rounded-xl border border-white/10"
                loading="lazy"
              />
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
              Expert programme design for mineral sands, alluvials, environmental sampling, and unconsolidated formation exploration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
                Consult a Drilling Expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
