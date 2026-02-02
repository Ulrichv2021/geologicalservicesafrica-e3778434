import { motion } from "framer-motion";
import { FileCheck, Shield, TrendingUp, Award } from "lucide-react";
import miningVideo from "@/assets/mining-operations.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Strategic Overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={miningVideo} type="video/mp4" />
        </video>
        {/* Investor-grade overlay - exactly as specified */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-800/70 to-slate-900/90" />
      </div>

      <div className="page-x relative z-10 pt-32 pb-16">
        <div className="w-full text-center">
          {/* Compliance Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/90 tracking-wide">JORC (2012)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/90 tracking-wide">SAMREC (2016)</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-white/90 tracking-wide">SACNASP Registered</span>
            </div>
          </motion.div>

          {/* Main Headline - Larger Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-balance text-white mb-8"
          >
            <span className="block">Investment-Grade</span>
            <span className="block text-gradient text-7xl py-[15px]">Geological Intelligence</span>
          </motion.h1>

          {/* Value Proposition */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl lg:text-2xl text-white/85 w-full leading-relaxed mb-6"
          >
            Independent geological consulting across Africa. JORC & SAMREC compliant 
            resource estimation, feasibility studies, and Competent Persons Reports.
          </motion.p>

          {/* Authority Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-base md:text-lg text-white/60 w-full leading-relaxed mb-12"
          >
            All technical reports prepared and signed by SACNASP-registered Competent Persons 
            with relevant commodity and deposit experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-hero group text-base px-10 py-5"
            >
              <span>Request Consultation</span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-flex items-center justify-center px-10 py-5 text-base font-semibold transition-all duration-300 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl text-white hover:bg-white/20"
            >
              <span>Technical Capabilities</span>
            </motion.a>
          </motion.div>

          {/* Key Differentiators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-3 gap-6 w-full"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <FileCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-display font-semibold text-white mb-3">Bankable Feasibility Studies</div>
              <div className="text-lg md:text-xl text-white/60 leading-relaxed">PFS & BFS meeting international banking and investment standards</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-display font-semibold text-white mb-3">Resource Estimation</div>
              <div className="text-lg md:text-xl text-white/60 leading-relaxed">JORC/SAMREC compliant Mineral Resource & Ore Reserve statements</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-xl md:text-2xl font-display font-semibold text-white mb-3">Technical Due Diligence</div>
              <div className="text-lg md:text-xl text-white/60 leading-relaxed">Independent reviews for acquisitions, listings, and project finance</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}