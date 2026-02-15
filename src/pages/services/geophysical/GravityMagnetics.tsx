import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Droplets, ArrowRight, ChevronRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

export default function GravityMagnetics() {
  useDocumentMeta({
    title: "Gravity & Ground Magnetic Surveys Africa | Deep Structure Mapping | GSA",
    description: "Gravity and ground magnetic surveys for deep geological structure mapping across Africa. Density and magnetic susceptibility mapping for ore body delineation.",
    canonical: "https://geologicalservicesafrica.co.za/services/geophysical/gravity-magnetics",
  });

  const applications = [
    "Ore body delineation by density contrast",
    "Intrusion mapping and contact definition",
    "Fault and fracture zone identification",
    "Depth-to-basement estimation",
    "Bouguer anomaly mapping",
    "Regional geological framework development",
  ];

  return (
    <PageLayout breadcrumbs={[
      { label: "Services", href: "/#services" },
      { label: "Geophysical Surveys", href: "/services/geophysical-surveys" },
      { label: "Gravity & Ground Magnetics" },
    ]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Droplets className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Deep Structure Mapping</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Gravity & Ground <span className="text-gradient">Magnetic Surveys</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Density and magnetic susceptibility mapping for deep geological structures. 
              Gravity surveys detect density contrasts associated with ore bodies, intrusions, 
              and structural features at depth beyond the reach of other geophysical methods.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-2xl md:text-3xl text-white mb-6">Methodology</h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Gravity surveys measure variations in the Earth's gravitational field caused by density 
                contrasts in the subsurface. Ground magnetic surveys measure variations in the magnetic 
                field caused by differences in magnetic susceptibility. Both methods are passive and 
                non-invasive, making them ideal for early-stage regional exploration and complementary 
                to active-source methods like IP and seismic.
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
