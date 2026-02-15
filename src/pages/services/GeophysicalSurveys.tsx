import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Radio, Waves, Plane, Mountain, Zap, Droplets, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import magneticEarth from "@/assets/magnetic-earth.jpg";

const geophysicalMethods = [
  {
    icon: Waves,
    name: "Ground Penetrating Radar (GPR)",
    slug: "gpr-surveys",
    description: "High-resolution shallow subsurface imaging for alluvial and near-surface investigations. GPR provides non-invasive, continuous profiling of subsurface structures, ideal for delineating overburden thickness, paleo-channels, and near-surface anomalies.",
  },
  {
    icon: Plane,
    name: "Airborne & UAV Magnetics",
    slug: "uav-magnetics",
    description: "Rapid coverage magnetic surveys for structural mapping and target generation. UAV-mounted magnetometers deliver high-resolution aeromagnetic data at a fraction of the cost of conventional fixed-wing surveys.",
  },
  {
    icon: Mountain,
    name: "LiDAR & Topographic Surveys",
    slug: "lidar-surveys",
    description: "Precision topographic mapping for pit design and volumetric calculations. LiDAR surveys provide centimetre-accurate digital elevation models essential for mine planning, environmental baseline, and stockpile reconciliation.",
  },
  {
    icon: Zap,
    name: "Induced Polarization (IP/Res)",
    slug: "ip-resistivity",
    description: "Detection of disseminated sulphide mineralization and resistivity contrasts. IP surveys are the primary geophysical tool for identifying chargeable anomalies associated with sulphide-hosted mineralization.",
  },
  {
    icon: Droplets,
    name: "Gravity & Ground Magnetics",
    slug: "gravity-magnetics",
    description: "Density and magnetic susceptibility mapping for deep geological structures. Gravity surveys detect density contrasts associated with ore bodies, intrusions, and structural features at depth.",
  },
];

export default function GeophysicalSurveys() {
  useDocumentMeta({
    title: "Geophysical Surveys Africa | Investment-Grade Subsurface Mapping | GSA",
    description: "JORC & SAMREC compliant geophysical surveys across Africa. GPR, UAV magnetics, LiDAR, IP/Res, and gravity surveys for mineral exploration and resource delineation.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical-surveys",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Geophysical Surveys" }]}>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={magneticEarth} alt="Geophysical magnetic survey" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900/85" />
        </div>
        <div className="page-x relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Radio className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Subsurface Characterization</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Investment-Grade <span className="text-gradient">Geophysical Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch]">
              Non-invasive geophysical methods providing defensible structural and lithological interpretations 
              for drill targeting and resource delineation. All survey designs and interpretations are prepared 
              by SACNASP-registered professionals to JORC and SAMREC standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methods Grid */}
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Survey Methods</h2>
          <p className="text-lg text-white/60 mb-12 max-w-[65ch]">
            Each method below links to a dedicated technical page with methodology, applications, and case context.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {geophysicalMethods.map((method, index) => (
              <motion.div
                key={method.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  to={`/services/geophysical/${method.slug}`}
                  className="block bg-slate-800/60 border border-white/10 rounded-xl p-8 hover:border-primary/30 hover:bg-slate-800/80 transition-all duration-300 h-full group"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-white mb-4">{method.name}</h3>
                  <p className="text-base text-white/60 leading-relaxed mb-6">{method.description}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Need a Geophysical Survey?</h2>
          <p className="text-lg text-white/60 mb-8">Our SACNASP-registered geophysicists design fit-for-purpose survey programmes.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
