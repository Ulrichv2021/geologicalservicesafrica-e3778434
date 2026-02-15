import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function IPResistivity() {
  useDocumentMeta({
    title: "Induced Polarization (IP) & Resistivity Surveys Africa | Sulphide Detection | GSA",
    description: "IP and resistivity surveys for sulphide mineralization detection across Africa. Investment-grade geophysical exploration for base metals, gold, and porphyry deposits.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical/ip-resistivity",
  });

  const applications = [
    "Disseminated sulphide mineralization detection",
    "Porphyry copper-gold target delineation",
    "VMS deposit exploration",
    "Groundwater exploration and aquifer mapping",
    "Resistivity contrasts for geological mapping",
    "Depth of weathering estimation",
  ];

  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Geophysical Surveys", href: "/services/geophysical-surveys" },
      { label: "IP/Resistivity" },
    ]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Sulphide Detection</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Induced Polarization & <span className="text-gradient">Resistivity Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              IP surveys are the primary geophysical tool for identifying chargeable anomalies associated 
              with sulphide-hosted mineralization. Combined IP/Resistivity provides both chargeability and 
              resistivity data for comprehensive subsurface characterisation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Methodology</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                IP surveys measure the capacity of subsurface materials to store electrical charge. 
                Current is injected into the ground and the decay of voltage is measured over time. 
                Sulphide minerals exhibit strong chargeability responses, making IP the method of choice 
                for base metal and gold exploration. Both dipole-dipole and pole-dipole array configurations 
                are deployed depending on target depth and resolution requirements.
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Key Applications</h2>
              <ul className="space-y-4">
                {applications.map((app) => (
                  <li key={app} className="flex items-start gap-3 text-lg text-white/60">
                    <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
