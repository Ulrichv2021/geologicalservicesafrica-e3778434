import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function GoldExploration() {
  useDocumentMeta({
    title: "Gold Exploration & Resource Estimation Africa | JORC & SAMREC | GSA",
    description: "Investment-grade gold exploration services across Africa's gold belts. JORC & SAMREC compliant resource estimation, feasibility studies, and CPRs for orogenic, Carlin-type, and epithermal gold deposits.",
    canonical: "https://geologicalservicesafrica.co.za/commodities/gold-exploration",
  });

  const capabilities = [
    "Orogenic gold deposit targeting and drill programme design",
    "Carlin-type and epithermal gold exploration strategies",
    "Gold resource estimation using geostatistical methods",
    "Fire assay and BLEG analytical programmes",
    "Competent Persons Reports for gold projects",
    "Bankable feasibility studies for gold mining operations",
    "Grade control and reconciliation programmes",
    "Metallurgical characterisation and recovery optimisation",
  ];

  return (
    <PageLayout breadcrumbs={[{ label: "Commodities", href: "/#commodities" }, { label: "Gold Exploration" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 to-yellow-900/20" />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <span className="text-amber-400 font-semibold uppercase tracking-widest text-lg">Au</span>
              </div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Investment-Grade <span className="text-gradient">Gold Exploration</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Comprehensive gold exploration services spanning orogenic, Carlin-type, and epithermal 
              deposit styles. JORC and SAMREC compliant resource estimation, metallurgical characterisation, 
              and bankable feasibility studies for projects across African gold belts.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">GSA Gold Capabilities</h2>
              <ul className="space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-lg text-white/60">
                    <ChevronRight className="w-5 h-5 text-amber-400 mt-1 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Key Applications</h2>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Bullion", "Electronics", "Medical devices", "Aerospace"].map((app) => (
                  <span key={app} className="px-4 py-2 rounded-full bg-amber-500/10 text-amber-400/80 text-base border border-amber-500/20">
                    {app}
                  </span>
                ))}
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6 mt-12">African Gold Belts</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                GSA operates across Africa's major gold provinces including the Birimian greenstone belts 
                of West Africa, the Witwatersrand Basin, the Limpopo Belt, and the Arabian-Nubian Shield. 
                Our geologists have direct experience across multiple deposit styles and geological settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Discuss Your Gold Project</h2>
          <p className="text-lg text-white/60 mb-8">SACNASP-registered CPs with direct gold deposit experience.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
