import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Shield, Award, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import miningVideo from "@/assets/mining-operations.mp4";
export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      company: formData.get('company'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      location: formData.get('location'),
      message: formData.get('message')
    };

    // Create mailto link for form submission
    const subject = `GSA Consultation Request - ${data.company || data.name}`;
    const body = `
Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Project Type: ${data.projectType}
Location: ${data.location}

Message:
${data.message}
    `.trim();
    window.location.href = `mailto:ulrichvanderheyde90@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  return <section id="contact" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Video Background with Subtle Motion */}
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
          <span className="text-primary font-semibold uppercase tracking-widest text-5xl">Get Started</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Request a <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
            Discuss your project requirements with our team of Competent Persons 
            and technical specialists.
          </p>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6,
        delay: 0.2
      }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-xl md:text-2xl mb-2 text-white">Head Office</h4>
              <p className="text-white/60 text-base">Durbanville Cape Town</p>
              <p className="text-white/60 text-base">South Africa</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-xl md:text-2xl mb-2 text-white">Telephone</h4>
              <p className="text-white/60 text-base">079 045 0207</p>
            </div>
          </div>

          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8 flex items-start gap-5">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="font-medium text-xl md:text-2xl mb-2 text-white">Email</h4>
              <a href="mailto:ulrichv@geologicalservicesafrica.co.za" className="text-primary hover:text-primary/80 transition-colors text-base">
                ulrichv@geologicalservicesafrica.co.za
              </a>
            </div>
          </div>

          {/* Compliance Badges - spans full width on larger screens */}
          <div className="md:col-span-2 lg:col-span-3 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-8">
            <h4 className="font-display text-xl md:text-2xl mb-6 text-white">Accreditation & Compliance</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg text-white font-medium">JORC (2012)</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-lg text-white font-medium">SAMREC (2016)</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <Award className="w-6 h-6 text-primary" />
                <span className="text-lg text-white font-medium">SACNASP</span>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 rounded-lg p-4">
                <FileCheck className="w-6 h-6 text-primary" />
                <span className="text-lg text-white font-medium">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}