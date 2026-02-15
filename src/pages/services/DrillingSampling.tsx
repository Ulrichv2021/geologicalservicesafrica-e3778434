import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Drill, Hammer, FileText, Target, Waves, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import drillingRig from "@/assets/drilling-rig.jpg";

const services = [
  { icon: Drill, name: "Diamond Core Drilling", description: "HQ/NQ core recovery for detailed lithological logging and assay sampling. Diamond core provides the highest quality geological information for resource estimation." },
  { icon: Hammer, name: "Reverse Circulation (RC) Drilling", description: "Cost-effective grade control and resource definition programs. RC drilling delivers rapid sample turnaround for exploration and infill campaigns." },
  { icon: FileText, name: "Core Logging & Photography", description: "Systematic geological documentation with digital capture workflows. All logging follows standardised coding systems for defensible geological interpretation." },
  { icon: Target, name: "Downhole Surveys", description: "Gyroscopic and magnetic deviation surveys for hole trajectory verification. Accurate downhole surveys are critical for reliable resource modelling." },
  { icon: Waves, name: "Sonic Drilling", description: "High-frequency vibratory drilling delivering continuous, high-recovery core in unconsolidated to semi-consolidated formations—ideal for heavy mineral sands, alluvials, clays, and coastal sediments." },
];

export default function DrillingSampling() {
  useDocumentMeta({
    title: "Drilling & Sampling Services Africa | QAQC-Compliant Programs | GSA",
    description: "JORC & SAMREC compliant drilling programs across Africa. Diamond core, RC, sonic drilling with full QAQC protocols for investment-grade resource assessment.",
    canonical: "https://geologicalservicesafrica.co.za/services/drilling-sampling",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Drilling & Sampling" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={drillingRig} alt="Drilling rig operations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Drill className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Core Recovery Excellence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              QAQC-Compliant <span className="text-gradient">Drilling & Sampling</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              JORC and SAMREC compliant drilling programs delivering representative samples for accurate resource 
              assessment and grade estimation. All programs supervised by experienced, registered geologists.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">Drilling Methods & Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <motion.div key={svc.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-slate-800/60 border border-white/10 rounded-xl p-8">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <svc.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-white mb-3">{svc.name}</h3>
                    <p className="text-base text-white/60 leading-relaxed">{svc.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Plan Your Drilling Program</h2>
          <p className="text-lg text-white/60 mb-8">Expert drill programme design for exploration and resource definition.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
