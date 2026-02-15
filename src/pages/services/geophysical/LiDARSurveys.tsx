import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mountain, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function LiDARSurveys() {
  useDocumentMeta({
    title: "LiDAR & Topographic Surveys Africa | Precision Mine Mapping | GSA",
    description: "LiDAR and topographic surveys for pit design, volumetric calculations, and mine planning across Africa. Centimetre-accurate DEMs for investment-grade feasibility studies.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical/lidar-surveys",
  });

  const applications = [
    "Open-pit mine design and optimisation",
    "Stockpile volumetric reconciliation",
    "Tailings storage facility monitoring",
    "Environmental baseline topographic mapping",
    "Cut-and-fill calculations for earthworks",
    "High-resolution DTMs for hydrological modelling",
    "Infrastructure corridor planning",
  ];

  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Geophysical Surveys", href: "/services/geophysical-surveys" },
      { label: "LiDAR & Topographic Surveys" },
    ]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Mountain className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Precision Mapping</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              LiDAR & Topographic <span className="text-gradient">Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Precision topographic mapping delivering centimetre-accurate digital elevation models 
              essential for mine planning, environmental baseline, stockpile reconciliation, and 
              investment-grade feasibility studies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Methodology</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-6">
                Light Detection and Ranging (LiDAR) surveys use laser pulses to measure distances to the 
                Earth's surface with millimetre precision. Airborne LiDAR (UAV or helicopter-mounted) 
                provides rapid coverage of large areas, while terrestrial laser scanning delivers 
                ultra-high-density point clouds for detailed infrastructure and pit face surveys.
              </p>
              <p className="text-lg text-white/60 leading-relaxed">
                Deliverables include classified point clouds, digital terrain models (DTMs), digital surface 
                models (DSMs), contour maps, and orthophotography. All products are delivered in project-specified 
                coordinate systems with full survey control documentation.
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
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Commission a LiDAR Survey</h2>
          <p className="text-lg text-white/60 mb-8">Centimetre-accurate topographic data for mine planning and feasibility.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
