import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Gem, Sparkles, CircleDot, ArrowRight } from "lucide-react";
import miningVideo from "@/assets/mining-operations.mp4";
const commodities = [{
  id: "ree",
  name: "Rare Earth Elements",
  formula: "La, Ce, Pr, Nd, Pm, Sm, Eu, Gd, Tb, Dy, Ho, Er, Tm, Yb, Lu",
  description: "Critical minerals for clean energy technologies, electric vehicles, and advanced electronics. GSA provides exploration targeting, resource estimation, and beneficiation studies for carbonatite-hosted and ionic clay REE deposits.",
  applications: ["Permanent magnets", "Battery technologies", "Catalysts", "Specialty alloys"],
  icon: CircleDot,
  gradient: "from-emerald-500 to-teal-600"
}, {
  id: "diamonds",
  name: "Diamonds",
  formula: "C (crystalline)",
  description: "Expertise in kimberlite and alluvial diamond exploration, including microdiamond analysis, indicator mineral chemistry, and resource estimation for gem and industrial diamond deposits.",
  applications: ["Gem quality", "Industrial abrasives", "Cutting tools", "Thermal management"],
  icon: Gem,
  gradient: "from-sky-400 to-blue-600"
}, {
  id: "gold",
  name: "Gold",
  formula: "Au",
  description: "Comprehensive gold exploration services spanning orogenic, Carlin-type, and epithermal deposit styles. Resource estimation, metallurgical characterization, and feasibility studies for projects across African gold belts.",
  applications: ["Bullion", "Electronics", "Medical devices", "Aerospace"],
  icon: Sparkles,
  gradient: "from-amber-400 to-yellow-600"
}];
export function Commodities() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="commodities" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background */}
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
          <span className="text-primary font-semibold uppercase tracking-widest text-5xl">Commodity Expertise</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Strategic <span className="text-gradient">Mineral Focus</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed">
            Deep technical expertise across high-value commodity groups, delivering 
            defensible resource assessments for critical and precious mineral projects.
          </p>
        </motion.div>

        {/* Commodity Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {commodities.map((commodity, index) => <motion.div key={commodity.id} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: 0.2 + index * 0.15
        }} className="bg-slate-800/70 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300">
              {/* Header */}
              <div className={`bg-gradient-to-r ${commodity.gradient} p-8`}>
                <commodity.icon className="w-14 h-14 text-white mb-4" />
                <h3 className="font-display text-2xl md:text-3xl text-white mb-2">{commodity.name}</h3>
                <p className="text-white/80 text-base font-mono">{commodity.formula}</p>
              </div>
              
              {/* Content */}
              <div className="p-8 space-y-6">
                <p className="text-lg md:text-xl text-white/60 leading-relaxed">{commodity.description}</p>
                
                <div>
                  <div className="text-base text-white/50 uppercase tracking-wider mb-4">Key Applications</div>
                  <div className="flex flex-wrap gap-3">
                    {commodity.applications.map(app => <span key={app} className="px-4 py-2 rounded-full bg-white/10 text-white/60 text-base md:text-lg">
                        {app}
                      </span>)}
                  </div>
                </div>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-primary text-xl font-medium group-hover:gap-3 transition-all">
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>)}
        </div>

        {/* Additional Commodities Note */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.8
      }} className="mt-16 text-center">
          <p className="text-white/60 text-lg md:text-xl">
            Additional expertise in <span className="text-white/70">PGMs</span>, <span className="text-white/70">Copper</span>, <span className="text-white/70">Lithium</span>, <span className="text-white/70">Manganese</span>, and <span className="text-white/70">Iron Ore</span>
          </p>
        </motion.div>
      </div>
    </section>;
}