import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, HelpCircle, Lightbulb, RefreshCw, ArrowRight } from "lucide-react";
import miningVideo from "@/assets/mining-operations.mp4";

const steps = [
  {
    icon: BookOpen,
    title: "Learn & Understand",
    description: "Deep dive into your project's geological context, objectives, and constraints.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HelpCircle,
    title: "Question & Think",
    description: "Challenge assumptions, identify knowledge gaps, and develop testable hypotheses.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Lightbulb,
    title: "Solve & Share",
    description: "Apply innovative solutions and communicate findings transparently.",
    color: "from-primary to-gsa-blue-glow",
  },
  {
    icon: RefreshCw,
    title: "Repeat & Refine",
    description: "Iterate based on new data, continuously improving understanding and outcomes.",
    color: "from-indigo-500 to-indigo-600",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background with Dark Overlay */}
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
        <div className="absolute inset-0 bg-slate-900/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/90" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Methodology</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 text-white drop-shadow-lg">
            The GSA <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-white/80">
            A scientific approach to exploration that maximizes discovery potential 
            while minimizing risk.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/20 hidden lg:block" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center group h-full flex flex-col hover:bg-slate-800/80 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border border-white/20 flex items-center justify-center text-sm font-bold text-primary">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mt-4 mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl mb-3 text-white">{step.title}</h3>
                  <p className="text-sm text-white/60 flex-1">{step.description}</p>
                  
                  {/* Arrow (except last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
