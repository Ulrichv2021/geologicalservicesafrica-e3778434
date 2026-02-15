import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const categories = [
  "Sample Preparation Equipment", "Weighing & Measuring", "Glassware & Containers",
  "Heating & Cooling Equipment", "Microscopy & Imaging", "Chemical Analysis & Spectrometry",
  "Water & Soil Monitoring Instruments", "Civil & Geotechnical Testing Equipment",
  "XRF & Mineral Analysis Instruments", "Laboratory Automation & Mixers",
  "Cameras & Imaging Accessories", "Consumables & PPE",
];

export default function Sales() {
  useDocumentMeta({
    title: "Geological Equipment Sales Africa | Laboratory & Field Instruments | GSA",
    description: "Laboratory equipment, field instruments, and technical tools for geological, geotechnical, environmental, and mining applications across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/sales",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Sales" }]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <ShoppingBag className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Equipment & Tools</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Geological <span className="text-gradient">Equipment Sales</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Comprehensive range of laboratory equipment, field instruments, and technical tools 
              for geological, geotechnical, environmental, and mining applications.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div key={cat} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="bg-slate-800/60 border border-white/10 rounded-xl p-8 hover:border-primary/30 transition-colors">
                <h3 className="font-display text-lg text-white">{cat}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Request a Quote</h2>
          <p className="text-lg text-white/60 mb-8">Custom procurement, installation, and commissioning support.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Contact Sales <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
