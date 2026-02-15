import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Gem, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function DiamondsExploration() {
  useDocumentMeta({
    title: "Diamond Exploration & Resource Estimation Africa | Kimberlite & Alluvial | GSA",
    description: "Investment-grade diamond exploration across Africa. Kimberlite and alluvial diamond resource estimation, microdiamond analysis, and indicator mineral chemistry. JORC & SAMREC compliant.",
    canonical: "https://geologicalservicesafrica.co.za/commodities/diamonds",
  });

  const capabilities = [
    "Kimberlite pipe delineation and grade estimation",
    "Alluvial diamond deposit evaluation",
    "Microdiamond analysis and size frequency distribution",
    "Indicator mineral chemistry and provenance studies",
    "Dense media separation (DMS) and bulk sampling",
    "Diamond resource estimation and CPR preparation",
    "Feasibility studies for diamond mining operations",
    "Marine diamond exploration support",
  ];

  return (
    <PageLayout breadcrumbs={[{ label: "Commodities", href: "/#commodities" }, { label: "Diamonds" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900/30 to-blue-900/20" />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <Gem className="w-8 h-8 text-sky-400" />
              </div>
              <span className="text-sky-400 font-semibold uppercase tracking-widest text-lg">C (crystalline)</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Investment-Grade <span className="text-gradient">Diamond Exploration</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Expertise in kimberlite and alluvial diamond exploration, including microdiamond analysis, 
              indicator mineral chemistry, and JORC/SAMREC compliant resource estimation for gem and 
              industrial diamond deposits across Africa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">GSA Diamond Capabilities</h2>
              <ul className="space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-lg text-white/60">
                    <ChevronRight className="w-5 h-5 text-sky-400 mt-1 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Key Applications</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Gem quality", "Industrial abrasives", "Cutting tools", "Thermal management"].map((app) => (
                  <span key={app} className="px-4 py-2 rounded-full bg-sky-500/10 text-sky-400/80 text-base border border-sky-500/20">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Discuss Your Diamond Project</h2>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
