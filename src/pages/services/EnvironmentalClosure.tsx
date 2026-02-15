import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Leaf, FileText, Recycle, Droplets, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import environmentalImg from "@/assets/environmental.jpg";

const services = [
  { icon: FileText, name: "Environmental Management Plans", description: "Regulatory-compliant EMP development and implementation. Comprehensive environmental management frameworks aligned with South African NEMA requirements and international ESG standards." },
  { icon: Recycle, name: "Mine Closure Planning", description: "Progressive rehabilitation and closure cost estimation. Closure plans meeting DMR requirements with detailed financial provisioning and rehabilitation schedules." },
  { icon: Leaf, name: "Rehabilitation Monitoring", description: "Land restoration progress tracking and reporting. Systematic monitoring programmes with vegetation assessments, soil analysis, and compliance reporting." },
  { icon: Droplets, name: "Hydrogeological Studies", description: "Groundwater assessments and water management planning. Aquifer characterisation, groundwater modelling, and water use licence applications." },
];

export default function EnvironmentalClosure() {
  useDocumentMeta({
    title: "Environmental Management & Mine Closure Africa | ESG Compliance | GSA",
    description: "Environmental management plans, mine closure planning, and hydrogeological studies across Africa. ESG-compliant environmental services for mining operations.",
    canonical: "https://geologicalservicesafrica.co.za/services/environmental-closure",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Environmental & Closure" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={environmentalImg} alt="Environmental rehabilitation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">ESG Compliance</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Environmental Management & <span className="text-gradient">Mine Closure</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Environmental management and mine closure planning aligned with regulatory requirements 
              and ESG expectations. Defensible environmental deliverables for responsible mining.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">Environmental Services</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">ESG & Closure Planning</h2>
          <p className="text-lg text-white/60 mb-8">Defensible environmental deliverables for responsible mining.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
