import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function GPRSurveys() {
  useDocumentMeta({
    title: "Ground Penetrating Radar (GPR) Surveys Africa | Subsurface Imaging | GSA",
    description: "High-resolution GPR surveys for alluvial investigations, overburden mapping, and near-surface geological characterisation. JORC-compliant subsurface imaging across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical/gpr-surveys",
  });

  const applications = [
    "Alluvial diamond and gold deposit delineation",
    "Overburden thickness mapping for open-pit planning",
    "Paleo-channel identification and mapping",
    "Near-surface void and cavity detection",
    "Foundation investigations for mine infrastructure",
    "Tailings dam integrity assessments",
  ];

  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Geophysical Surveys", href: "/services/geophysical-surveys" },
      { label: "GPR Surveys" },
    ]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Non-Invasive Imaging</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ground Penetrating Radar <span className="text-gradient">(GPR) Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              High-resolution shallow subsurface imaging for alluvial and near-surface investigations. 
              GPR provides continuous, non-invasive profiling of subsurface structures, enabling 
              cost-effective geological characterisation prior to drilling.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Methodology</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                GPR uses electromagnetic pulses to image subsurface structures. The radar signal is reflected 
                at boundaries between materials with different dielectric properties, producing a continuous 
                cross-sectional profile of the subsurface. Antenna frequency selection is optimised for the 
                target depth and resolution requirements.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Survey designs are tailored to each project's geological setting, with line spacing and 
                orientation determined by the target geometry. All data processing and interpretation is 
                performed by experienced geophysicists.
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Plan a GPR Survey</h2>
          <p className="text-lg text-white/60 mb-8">Non-invasive subsurface imaging tailored to your geological setting.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
