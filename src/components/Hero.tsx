import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { OreBody3D } from "./OreBody3D";
import miningVideo from "@/assets/mining-operations.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background with Dark Obsidian Overlay */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={miningVideo} type="video/mp4" />
        </video>
        {/* Dark obsidian overlay with transparency */}
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-slate-900/40" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-white/80">Mineral Exploration Partner</span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-balance text-white drop-shadow-lg">
              <span className="block">Thirty-Five Years of</span>
              <span className="block text-gradient">Heritage.</span>
              <span className="block">Fifteen Years of</span>
              <span className="block text-gradient">Mastery.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed drop-shadow-md">
              De-risking through Data Integrity: Bridging the gap between 
              'boots-on-the-ground' geology and high-tech digital twins.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-hero group"
              >
                <span>Request Consultation</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
              
              <motion.a
                href="#services"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-all duration-300 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-xl text-white hover:bg-white/20 group"
              >
                <Play className="mr-2 h-4 w-4" />
                <span>Explore Services</span>
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">35+</div>
                <div className="text-sm text-white/70 mt-1">Years Legacy</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">20+</div>
                <div className="text-sm text-white/70 mt-1">Countries</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient">500+</div>
                <div className="text-sm text-white/70 mt-1">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - 3D Model */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-8">
              <div className="absolute inset-0 bg-gradient-radial opacity-30 pointer-events-none" />
              <OreBody3D />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-xs text-white/60">Interactive 3D Ore Body Model</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2 hidden lg:block"
            >
              <span className="text-xs text-white font-medium">SAMREC Compliant</span>
            </motion.div>
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
