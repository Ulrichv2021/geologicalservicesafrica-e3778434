import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import miningVideo from "@/assets/mining-operations.mp4";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
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
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 mb-6 text-white drop-shadow-lg">
            Start Your <span className="text-gradient">Exploration Journey</span>
          </h2>
          <p className="text-lg text-white/80">
            Ready to unlock the potential of your mineral assets? 
            Our team of experts is here to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl mb-6 text-white">Our Offices</h3>
              
              <div className="space-y-6">
                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Headquarters</h4>
                    <p className="text-white/60 text-sm">Hout Bay, Cape Town</p>
                    <p className="text-white/60 text-sm">South Africa</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Phone</h4>
                    <p className="text-white/60 text-sm">+27 (0) 21 790 5050</p>
                  </div>
                </div>

                <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1 text-white">Email</h4>
                    <p className="text-white/60 text-sm">info@geologicalservicesafrica.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compliance Badge */}
            <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h4 className="font-display text-lg mb-3 text-white">Compliance & Accreditation</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  SAMREC Compliant
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  ISO 9001:2015
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  SACNASP Registered
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="font-display text-xl mb-6 text-white">Request a Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Name</label>
                    <Input
                      placeholder="Your name"
                      className="bg-slate-900/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 mb-2 block">Company</label>
                    <Input
                      placeholder="Company name"
                      className="bg-slate-900/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-slate-900/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                    required
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Project Location</label>
                  <Input
                    placeholder="Country / Region"
                    className="bg-slate-900/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="text-sm text-white/70 mb-2 block">Message</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-slate-900/50 border-white/10 text-white placeholder:text-white/40 focus:border-primary resize-none"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full btn-hero"
                  disabled={isSubmitted}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
