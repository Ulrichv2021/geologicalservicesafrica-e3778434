import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CircleDot, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function REEExploration() {
  useDocumentMeta({
    title: "Rare Earth Elements (REE) Exploration Africa | Critical Minerals | GSA",
    description: "Investment-grade REE exploration across Africa. JORC & SAMREC compliant resource estimation for carbonatite-hosted and ionic clay rare earth element deposits.",
    canonical: "https://geologicalservicesafrica.co.za/commodities/rare-earth-elements",
  });

  const capabilities = [
    "Carbonatite-hosted REE deposit targeting",
    "Ionic adsorption clay REE evaluation",
    "REE resource estimation with full elemental breakdown",
    "Beneficiation and metallurgical testwork coordination",
    "Critical minerals supply chain advisory",
    "Competent Persons Reports for REE projects",
    "Environmental baseline for REE mining operations",
    "Techno-economic assessment for REE processing",
  ];

  return (
    <PageLayout breadcrumbs={[{ label: "Commodities", href: "/#commodities" }, { label: "Rare Earth Elements" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-teal-900/20" />
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <CircleDot className="w-8 h-8 text-emerald-400" />
              </div>
              <span className="text-emerald-400 font-semibold uppercase tracking-widest text-lg">Critical Minerals</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Rare Earth Element <span className="text-gradient">Exploration</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Critical minerals for clean energy technologies, electric vehicles, and advanced electronics. 
              GSA provides exploration targeting, JORC/SAMREC compliant resource estimation, and beneficiation 
              studies for carbonatite-hosted and ionic clay REE deposits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">GSA REE Capabilities</h2>
              <ul className="space-y-4">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-lg text-white/60">
                    <ChevronRight className="w-5 h-5 text-emerald-400 mt-1 shrink-0" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Key Applications</h2>
              <div className="flex flex-wrap gap-3">
                {["Permanent magnets", "Battery technologies", "Catalysts", "Specialty alloys"].map((app) => (
                  <span key={app} className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400/80 text-base border border-emerald-500/20">
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Discuss Your REE Project</h2>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
