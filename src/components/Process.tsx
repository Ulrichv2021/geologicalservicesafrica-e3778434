import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Database, BarChart3, FileCheck, ArrowRight } from "lucide-react";
import miningVideo from "@/assets/mining-operations.mp4";
const phases = [{
  icon: Search,
  phase: "Phase 1",
  title: "Data Review & Reconnaissance",
  description: "Systematic assessment of existing geological data, remote sensing interpretation, and target generation for exploration programs.",
  deliverables: ["Data compilation", "Target ranking", "Program design"]
}, {
  icon: Database,
  phase: "Phase 2",
  title: "Field Programs & Data Acquisition",
  description: "Execution of drilling, sampling, and geophysical surveys with rigorous QAQC protocols ensuring data integrity.",
  deliverables: ["Drill core/chips", "Assay results", "Survey data"]
}, {
  icon: BarChart3,
  phase: "Phase 3",
  title: "Modelling & Resource Estimation",
  description: "Geostatistical analysis and 3D geological modelling leading to JORC/SAMREC-compliant resource statements.",
  deliverables: ["Block models", "Resource reports", "Technical opinions"]
}, {
  icon: FileCheck,
  phase: "Phase 4",
  title: "Feasibility & Investment Decision",
  description: "Technical and economic studies supporting PFS, BFS, and project financing requirements.",
  deliverables: ["Feasibility studies", "CPR documents", "Due diligence support"]
}];
export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={miningVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-900/90" />
      </div>
      
      <div className="page-x relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center w-full mb-20">
          <span className="text-primary font-semibold uppercase tracking-widest text-5xl">Project Lifecycle</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Structured <span className="text-gradient">Methodology</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            A systematic approach to geological consulting, from initial data review 
            through to investment-grade feasibility studies.
          </p>
        </motion.div>

        {/* Process Phases */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, index) => <motion.div key={phase.title} initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.2 + index * 0.15
          }} className="relative">
                {/* Phase Card */}
                <div className="bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl p-10 h-full flex flex-col hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300">
                  {/* Phase Badge */}
                  <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-5 py-2 mb-6 w-fit">
                    <span className="text-base font-semibold text-primary uppercase tracking-wider">{phase.phase}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-18 h-18 rounded-xl bg-primary/20 flex items-center justify-center mb-6 p-4">
                    <phase.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-2xl mb-4 text-white">{phase.title}</h3>
                  <p className="text-xl text-white/60 mb-6 flex-1 leading-relaxed">{phase.description}</p>
                  
                  {/* Deliverables */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-base text-white/50 uppercase tracking-wider mb-4">Key Deliverables</div>
                    <div className="flex flex-wrap gap-3">
                      {phase.deliverables.map(item => <span key={item} className="text-base bg-white/10 text-white/70 rounded-lg px-4 py-2">
                          {item}
                        </span>)}
                    </div>
                  </div>
                  
                  {/* Arrow (except last) */}
                  {index < phases.length - 1 && <div className="hidden lg:block absolute -right-4 top-24 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>}
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}