import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Laptop, Database, BarChart3, Box, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import tabletDataEntry from "@/assets/tablet-data-entry.jpg";

const services = [
  { icon: Database, name: "Mobile Data Capture", description: "Field data collection with built-in validation and QAQC checks. Digital geological logging eliminates transcription errors and enables real-time data review by senior geologists." },
  { icon: BarChart3, name: "Operational Dashboards", description: "Real-time project monitoring and KPI tracking platforms. Custom dashboards providing live visibility into drilling progress, sample turnaround, and budget tracking." },
  { icon: Laptop, name: "Cloud GIS Platforms", description: "Centralised spatial data management and multi-user access. ArcGIS Online and Enterprise deployments for secure, collaborative geospatial data governance." },
  { icon: Box, name: "3D Model Visualization", description: "Interactive geological model viewers for stakeholder presentations. Browser-based 3D visualisation tools enabling non-technical stakeholders to explore resource models." },
];

export default function DigitalSolutions() {
  useDocumentMeta({
    title: "Digital Geological Solutions Africa | Data-Driven Mining Workflows | GSA",
    description: "Integrated digital platforms for geological data capture, cloud GIS, operational dashboards, and 3D model visualisation. Investment-grade data management for mining projects.",
    canonical: "https://geologicalservicesafrica.co.za/services/digital-solutions",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Digital Solutions" }]}>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={tabletDataEntry} alt="Digital geological data capture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Laptop className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Data-Driven Workflows</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Digital <span className="text-gradient">Geological Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Integrated digital platforms enabling real-time data capture, validation, and visualisation 
              for operational efficiency. From mobile logging to enterprise GIS deployments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-12">Platform Capabilities</h2>
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Modernise Your Data Workflows</h2>
          <p className="text-lg text-white/60 mb-8">Custom digital solutions tailored to your project requirements.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
