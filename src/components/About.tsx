import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Cpu, Building2, Leaf, Target, Shield, Award, Users } from "lucide-react";
import rockLayers from "@/assets/rock-layers.jpg";
import coreAnalysisVideo from "@/assets/core-analysis.mp4";
const differentiators = [{
  icon: Globe,
  title: "Pan-African Expertise",
  description: "Comprehensive spatial database of metallogenic belts from the Birimian to the Kaapvaal Craton, with operational experience across 20+ countries."
}, {
  icon: Shield,
  title: "JORC & SAMREC Compliance",
  description: "All resource estimations and technical reports adhere to JORC and SAMREC codes for Competent Persons' reporting."
}, {
  icon: Cpu,
  title: "Digital Integration",
  description: "Real-time data capture, cloud-based GIS platforms, and integrated modelling workflows for decision-ready outputs."
}, {
  icon: Building2,
  title: "Full Lifecycle Support",
  description: "From early-stage reconnaissance through to Bankable Feasibility Studies—complete technical oversight under one roof."
}, {
  icon: Target,
  title: "Data Integrity Assurance",
  description: "Rigorous QA/QC protocols ensuring investment decisions are backed by defensible, auditable geological data."
}, {
  icon: Leaf,
  title: "ESG Alignment",
  description: "Sustainable exploration practices with integrated environmental monitoring and stakeholder management."
}];
const credentials = [{
  icon: Award,
  label: "SACNASP Registered"
}, {
  icon: Shield,
  label: "SAMREC Compliant"
}, {
  icon: Users,
  label: "Competent Persons"
}];
export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Dark Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={coreAnalysisVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-900/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/90" />
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
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">About GSA</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Technical Excellence for <span className="text-gradient">Investment Decisions</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">Since 2019, Geological Services Africa has delivered cost-efficient, high-quality geological consulting across the continent — bridging rigorous field geology with advanced digital workflows to reduce risk and accelerate informed decision-making.</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Image */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img src={rockLayers} alt="Natural rock face showing geological layering and stratification" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            </div>
            
            {/* Credentials Card */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="absolute -bottom-8 -right-4 lg:-right-8 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-xs">
              <div className="text-base text-white/60 uppercase tracking-wider mb-4">Accreditations</div>
              <div className="flex flex-wrap gap-3">
                {credentials.map(cred => <div key={cred.label} className="flex items-center gap-2 bg-primary/20 rounded-lg px-4 py-3">
                    <cred.icon className="w-5 h-5 text-primary" />
                    <span className="text-base text-white font-medium">{cred.label}</span>
                  </div>)}
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.3
        }} className="space-y-8">
            <h3 className="font-display text-3xl md:text-4xl text-white">
              Independent Technical Advisory
            </h3>
            <div className="space-y-6 text-xl md:text-2xl text-white/75 leading-relaxed">
              <p>
                GSA provides independent geological consulting services to mining companies, 
                investors, and financial institutions seeking defensible technical opinions 
                on mineral assets across Africa.
              </p>
              <p>Our team of registered Competent Persons delivers resource estimations, technical due diligence, and feasibility studies that meet the stringent requirements of JORC, SAMREC, and international banking standards.</p>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Trusted by Industry Leaders</span>
                <div className="h-px flex-1 bg-gradient-to-l from-white/20 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Differentiators Grid */}
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          <h3 className="font-display text-2xl md:text-3xl text-center mb-12 text-white">
            Why Choose <span className="text-gradient">GSA</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item, index) => <motion.div key={item.title} initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.5,
            delay: 0.5 + index * 0.1
           }} className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-10 group hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-display text-2xl mb-4 text-white">{item.title}</h4>
                <p className="text-xl text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}