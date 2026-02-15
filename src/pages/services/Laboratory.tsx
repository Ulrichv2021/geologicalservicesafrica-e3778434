import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FlaskConical, Beaker, Atom, Layers, Pickaxe, Database, Droplets, Thermometer, Microscope, Cog, Container, Award, ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const sections = [
  { icon: Beaker, title: "Sample Preparation", description: "End-to-end sample preparation services including drying, screening, crushing, splitting, pulverising, XRF preparation, and microwave/acid/fusion digestion techniques." },
  { icon: Atom, title: "Analytical Services", description: "Chemical and elemental analysis using XRF, ICP-OES/ICP-MS, and AAS. Covers major elements, trace elements, ultra-trace elements, and ore-grade determinations." },
  { icon: Layers, title: "Heavy Mineral & Magnetic Separation", description: "Heavy liquid separation, magnetic and paramagnetic separation (LIMS, MIMS, WHIMS), mineral fractionation and concentrate preparation for diamond indicators and HMS projects." },
  { icon: Pickaxe, title: "Commodity-Specific Analysis", description: "Specialist analytical services for lithium, lead & zinc, gold (fire assay, BLEG), uranium, copper, and phosphates." },
  { icon: Database, title: "Multi-Element Packages", description: "Custom analytical suites for major elements, trace metals, base and precious metals, REEs, lithium and critical minerals." },
  { icon: Droplets, title: "Environmental & Water Analysis", description: "Particle size distribution, trace metals, TOC, pH, conductivity, TDS, hardness, alkalinity, iron and turbidity testing." },
  { icon: Thermometer, title: "Physical Property Testing", description: "Specific gravity by gas pycnometer or wax displacement, bulk density and porosity testing." },
  { icon: Microscope, title: "Mineral Characterisation & Metallurgy", description: "QEMSCAN, XRD, optical and scanning microscopy, bench-scale and pilot-scale metallurgical testwork." },
  { icon: Cog, title: "Process Evaluation & Engineering", description: "Mass flow evaluation, equipment selection, PFDs, mass and water balances, techno-economic assessments, and plant commissioning." },
  { icon: Container, title: "Mobile & Containerised Laboratories", description: "ISO-compliant modular laboratory design, construction, and commissioning for remote exploration and mine site operations." },
  { icon: Award, title: "Quality & Accreditation", description: "ISO/IEC 17025:2017 accredited laboratory. ISO 9001 certified QMS. External proficiency testing and full chain-of-custody procedures." },
];

export default function Laboratory() {
  useDocumentMeta({
    title: "Geological Laboratory Services Africa | ISO 17025 Accredited | GSA",
    description: "ISO/IEC 17025 accredited geological laboratory services. Sample preparation, XRF, ICP, fire assay, mineral characterisation, and mobile laboratory solutions across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/laboratory",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Laboratory" }]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <FlaskConical className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Analytical Excellence</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              ISO-Accredited <span className="text-gradient">Laboratory Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Comprehensive laboratory, analytical, scientific, and engineering services for mining, 
              minerals exploration, metallurgical, geotechnical, and environmental sectors. 
              ISO/IEC 17025:2017 accredited with full chain-of-custody procedures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((sec, i) => (
              <motion.div key={sec.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-slate-800/60 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5">
                  <sec.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-white mb-3">{sec.title}</h3>
                <p className="text-base text-white/60 leading-relaxed">{sec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Request Analytical Services</h2>
          <p className="text-lg text-white/60 mb-8">ISO-accredited results with full QA/QC documentation.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Request Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
