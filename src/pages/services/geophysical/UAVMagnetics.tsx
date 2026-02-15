import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function UAVMagnetics() {
  useDocumentMeta({
    title: "Airborne & UAV Magnetic Surveys Africa | Structural Mapping | GSA",
    description: "UAV and airborne magnetic surveys for rapid structural mapping and target generation across Africa. Cost-effective aeromagnetic data for mineral exploration.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical/uav-magnetics",
  });

  const applications = [
    "Regional structural mapping and lineament analysis",
    "Magnetic target generation for drill planning",
    "Depth-to-basement estimation",
    "Intrusion and dyke delineation",
    "Geological contact mapping under cover",
    "Complementary datasets for 3D geological modelling",
  ];

  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Geophysical Surveys", href: "/services/geophysical-surveys" },
      { label: "UAV Magnetics" },
    ]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Rapid Coverage</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Airborne & UAV <span className="text-gradient">Magnetic Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              UAV-mounted magnetometers deliver high-resolution aeromagnetic data at a fraction of the cost 
              of conventional fixed-wing surveys. Ideal for early-stage exploration target generation 
              and structural framework development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Methodology</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Drone-based magnetic surveys use high-sensitivity magnetometers mounted on multi-rotor or 
                fixed-wing UAV platforms. Flight lines are programmed at optimal altitude and spacing for the 
                target resolution. Data is processed with diurnal correction, IGRF removal, and micro-levelling 
                to produce TMI, RTP, and derivative maps for geological interpretation.
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
