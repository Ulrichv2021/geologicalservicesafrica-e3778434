import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Drill, Gauge, Ruler, Shield, Target, Layers, ArrowRight, Download, ChevronRight, Clock, Crosshair, Mountain } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import drillingRig from "@/assets/drilling-rig.jpg";
import coreSamples from "@/assets/core-samples.jpg";

const kpis = [
  { icon: Gauge, label: "Drill Capacity", value: "3,000m NQ" },
  { icon: Layers, label: "Technology", value: "Wireline Core Recovery" },
  { icon: Ruler, label: "Site Footprint", value: "30m × 30m Pad" },
  { icon: Clock, label: "Operations", value: "24/7 Capability" },
];

const methodologies = [
  {
    icon: Drill,
    title: "Wireline Diamond Drilling",
    description:
      "Our Wireline Diamond Drilling utilises NQ and HQ diameter bits to achieve depths of 3,000m, ensuring near-100% core recovery in even the most fractured formations. The wireline system retrieves core samples without removing the entire drill string, dramatically reducing trip times and maximising metres per shift.",
    image: coreSamples,
    imageAlt: "Diamond drill core trays with geological samples",
  },
  {
    icon: Mountain,
    title: "Deep Hole NQ/HQ Coring",
    description:
      "Purpose-designed for deep-seated ore body definition, our rigs are rated to 3,000m NQ depth. HQ diameter coring delivers larger-diameter core for detailed structural and geotechnical logging, while NQ provides cost-effective coverage at extreme depths. All core is oriented where required for structural interpretation.",
    image: drillingRig,
    imageAlt: "Diamond drilling rig in operation",
  },
  {
    icon: Shield,
    title: "Site Management & Compliance",
    description:
      "We operate on a standard 30m × 30m drill pad, designed to house the rig, rod rack, and sumps while maintaining strict safety perimeters and environmental compliance. All sites include fluid containment, emergency response plans, and daily safety inspections aligned to ISO 45001 standards.",
    image: drillingRig,
    imageAlt: "Drilling site with safety perimeters at night",
  },
];

const applications = [
  { icon: Target, text: "Resource definition & reserve estimation" },
  { icon: Crosshair, text: "30m × 30m infill drilling for high-confidence modelling" },
  { icon: Mountain, text: "Deep exploration targeting to 3,000m" },
  { icon: Layers, text: "Geotechnical & structural logging" },
  { icon: Shield, text: "Bankable Feasibility Study (BFS) compliant programmes" },
  { icon: Gauge, text: "Grade control & reconciliation drilling" },
];

const fadeUp = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function DrillingSampling() {
  useDocumentMeta({
    title: "Diamond Drilling & Core Recovery Africa | JORC-Compliant | GSA",
    description:
      "Precision wireline diamond drilling to 3,000m NQ depth across Africa. JORC & SAMREC compliant core recovery programmes for bankable feasibility studies.",
    canonical: "https://geologicalservicesafrica.co.za/services/drilling-sampling",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Diamond Drilling & Core Recovery" }]}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={drillingRig} alt="Diamond drilling rig operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Drill className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Core Recovery Excellence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Precision <span className="text-gradient">Diamond Drilling</span> & Core Recovery
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Delivering high-fidelity geological data through advanced wireline technology. All programmes
              supervised by SACNASP-registered geologists to JORC and SAMREC standards for investment-grade
              resource assessment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Specs KPI Bar */}
      <section className="bg-slate-800 border-y border-white/10">
        <div className="page-x py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
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

      {/* Methodology Grid + Key Applications Sidebar */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Drilling Methodology</h2>
            <p className="text-lg text-white/60 mb-12 max-w-[65ch]">
              Purpose-built drilling programmes delivering representative core for accurate resource estimation
              and bankable feasibility studies.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Methodology Cards — 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {methodologies.map((m, i) => (
                <motion.div
                  key={m.title}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="bg-slate-800/60 border border-white/10 rounded-xl overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 shrink-0">
                      <img
                        src={m.image}
                        alt={m.imageAlt}
                        className="w-full h-56 md:h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-lg bg-primary/20 flex items-center justify-center">
                          <m.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="font-display text-xl text-white">{m.title}</h3>
                      </div>
                      <p className="text-base text-white/60 leading-relaxed">{m.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Applications Sidebar */}
            <motion.aside {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-1">
              <div className="bg-slate-800/60 border border-white/10 rounded-xl p-8 sticky top-32">
                <h3 className="font-display text-xl text-white mb-6 flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  Key Applications
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

      {/* Performance Highlight */}
      <section className="py-16 bg-slate-800/50 border-y border-white/10">
        <div className="page-x">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Key Performance</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                By maintaining a strict 30m × 30m grid spacing for infill programmes, we provide the
                high-density data required for bankable feasibility studies (BFS). Our wireline technology
                maximises metres per shift, reducing overall programme cost while maintaining near-100%
                core recovery.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  JORC Compliant
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  SAMREC Compliant
                </span>
                <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                  ISO 45001 Safety
                </span>
              </div>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
              <img
                src={drillingRig}
                alt="Night drilling operations showing 24/7 capability"
                className="w-full h-72 object-cover rounded-xl border border-white/10"
                loading="lazy"
              />
              <p className="text-sm text-white/40 mt-3 text-center">24/7 drilling operations capability</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="page-x text-center">
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Plan Your Drilling Programme</h2>
            <p className="text-lg text-white/60 mb-10 max-w-[55ch] mx-auto">
              Expert drill programme design for exploration, resource definition, and bankable feasibility studies.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5"
              >
                Consult a Drilling Expert <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-base px-10 py-5 rounded-xl border border-white/20 text-white/80 hover:border-primary/40 hover:text-primary transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download Drilling Specs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
