import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GraduationCap, Map, Layers, Pickaxe, Globe, Smartphone, LineChart, Code, BookOpen, Target, Settings, BoxSelect, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const streams = [
  { title: "Core ArcGIS Platform Training", courses: ["ArcGIS Pro – Foundations", "ArcGIS Pro – Advanced"] },
  { title: "ArcGIS for Geologists", courses: ["ArcGIS for Exploration, Mining & Geotechnical Geology"] },
  { title: "ArcGIS Online & Field Data Ecosystem", courses: ["ArcGIS Online – Administration", "Mobile Logging Application", "ArcGIS Dashboards"] },
  { title: "Python & Automation", courses: ["Python for ArcGIS – Fundamentals"] },
  { title: "3D Geological Modelling & Geostatistics", courses: ["Three-Dimensional Geological Modeling: Zero to Hero"] },
];

export default function Training() {
  useDocumentMeta({
    title: "Geological GIS & ArcGIS Training Africa | Professional Development | GSA",
    description: "Comprehensive ArcGIS, geological data, 3D modelling, and geostatistics training programmes for exploration, mining, and geotechnical professionals across Africa.",
    canonical: "https://geologicalservicesafrica.co.za/services/training",
  });

  return (
    <PageLayout breadcrumbs={[{ label: "Services", href: "/#services" }, { label: "Training" }]}>
      <section className="py-20 lg:py-28 bg-slate-900">
        <div className="page-x">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <span className="text-primary font-semibold uppercase tracking-widest text-lg">Professional Development</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Geological <span className="text-gradient">Training Programmes</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-[75ch] mb-16">
              Comprehensive ArcGIS and geological data training programs designed for exploration, mining, 
              and geotechnical professionals. From foundational GIS skills to advanced 3D modelling and geostatistics.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streams.map((stream, i) => (
              <motion.div key={stream.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="bg-slate-800/60 border border-white/10 rounded-xl p-8">
                <h3 className="font-display text-xl text-white mb-6">{stream.title}</h3>
                <ul className="space-y-3">
                  {stream.courses.map((course) => (
                    <li key={course} className="flex items-start gap-3 text-base text-white/60">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50 border-t border-white/10">
        <div className="page-x text-center">
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">Book Training</h2>
          <p className="text-lg text-white/60 mb-8">Custom training programmes for teams and organisations.</p>
          <Link to="/#contact" className="btn-hero inline-flex items-center gap-2 text-base px-10 py-5">
            Enquire Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
