import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Box, Shield, BarChart3, FileText, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import modeling3d from "@/assets/3d-modeling.jpg";

const services = [
  { icon: Box, name: "Mineral Resource Estimation", description: "Geostatistical modelling with full uncertainty quantification. Block models, variography, and grade estimation using industry-standard software to deliver JORC/SAMREC-compliant resource statements." },
  { icon: Shield, name: "Competent Persons Reports (CPR)", description: "JORC and SAMREC compliant CPRs for listing, financing, and regulatory purposes. All reports signed by SACNASP-registered Competent Persons with relevant commodity experience." },
  { icon: BarChart3, name: "Pre-Feasibility Studies (PFS)", description: "Technical and economic assessments for project advancement. PFS reports provide the basis for investment decisions and project development planning." },
  { icon: FileText, name: "Bankable Feasibility Studies (BFS)", description: "Investment-grade technical reports meeting international banking and investment standards. BFS deliverables support project financing, offtake negotiations, and board-level approvals." },
];

export default function ResourceEstimation() {
  useDocumentMeta({
    title: "Resource Estimation & Feasibility Studies Africa | JORC & SAMREC | GSA",
    description: "Investment-grade mineral resource estimation and bankable feasibility studies across Africa. JORC & SAMREC compliant CPRs, PFS, and BFS by registered Competent Persons.",
    canonical: "https://geologicalservicesafrica.co.za/services/resource-estimation",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Resource Estimation & BFS" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={modeling3d} alt="3D geological modelling" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Box className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Investment-Grade Outputs</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              JORC & SAMREC <span className="text-gradient">Resource Estimation</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Mineral resource estimation and bankable feasibility studies meeting international banking 
              and investment standards. From geostatistical modelling through to investment-grade BFS deliverables.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">Technical Deliverables</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Need a Competent Person's Report?</h2>
          <p className="text-lg text-white/60 mb-8">SACNASP-registered CPs with relevant commodity and deposit experience.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
