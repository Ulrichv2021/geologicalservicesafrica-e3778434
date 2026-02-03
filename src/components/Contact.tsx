import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle, Shield, Award, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import miningVideo from "@/assets/mining-operations.mp4";
import { trackFormSubmission, trackPhoneClick, trackEmailClick } from "@/lib/analytics";
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
    // Track form submission with lead quality parameters
    trackFormSubmission('contact-consultation-form', 'Consultation Request Form', {
      service_type: data.projectType as string || 'not_specified',
      geographic_region: data.location as string || 'not_specified',
      company_type: 'not_specified',
      project_stage: 'not_specified',
      commodity_sector: 'not_specified',
    });

    window.location.href = `mailto:ulrichvanderheyde90@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handlePhoneClick = () => {
    trackPhoneClick('+27790450207', 'Telephone Contact Card', 'contact_section');
  };

  const handleEmailClick = () => {
    trackEmailClick('ulrichv@geologicalservicesafrica.co.za', 'Email Contact Card', 'contact_section');
  };
  return <section id="contact" className="relative py-16 sm:py-20 md:py-28 lg:py-36 overflow-hidden">
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
      }} className="text-center w-full max-w-full mb-12 sm:mb-16 md:mb-20 px-2">
          <span className="text-primary font-semibold uppercase tracking-widest text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Get Started</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 sm:mt-6 mb-4 sm:mb-6 md:mb-8 text-white">
            Request a <span className="text-gradient">Consultation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto">
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
      }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full max-w-full box-border">
          {/* Contact Cards */}
          <div className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-5 w-full max-w-full box-border">
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-lg sm:text-xl md:text-2xl mb-2 text-white">Head Office</h4>
              <p className="text-white/60 text-sm sm:text-base">Cape Town</p>
              <p className="text-white/60 text-sm sm:text-base">South Africa</p>
            </div>
          </div>

          <a 
            href="tel:+27790450207" 
            onClick={handlePhoneClick}
            className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-5 hover:bg-slate-800/80 transition-colors cursor-pointer w-full max-w-full box-border"
          >
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-lg sm:text-xl md:text-2xl mb-2 text-white">Telephone</h4>
              <p className="text-white/60 text-sm sm:text-base">079 045 0207</p>
            </div>
          </a>

          <a 
            href="mailto:ulrichv@geologicalservicesafrica.co.za"
            onClick={handleEmailClick}
            className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 flex items-start gap-4 sm:gap-5 hover:bg-slate-800/80 transition-colors cursor-pointer w-full max-w-full box-border"
          >
            <div className="w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <h4 className="font-medium text-lg sm:text-xl md:text-2xl mb-2 text-white">Email</h4>
              <span className="text-primary hover:text-primary/80 transition-colors text-sm sm:text-base break-all">
                ulrichv@geologicalservicesafrica.co.za
              </span>
            </div>
          </a>

          {/* Compliance Badges - spans full width on larger screens */}
          <div className="md:col-span-2 lg:col-span-3 bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-full box-border">
            <h4 className="font-display text-xl md:text-2xl mb-4 sm:mb-6 text-white">Accreditation & Compliance</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 bg-primary/10 rounded-lg p-3 sm:p-4 min-w-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-white font-medium truncate">JORC (2012)</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-primary/10 rounded-lg p-3 sm:p-4 min-w-0">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-white font-medium truncate">SAMREC (2016)</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-primary/10 rounded-lg p-3 sm:p-4 min-w-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-white font-medium truncate">SACNASP</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-primary/10 rounded-lg p-3 sm:p-4 min-w-0">
                <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-primary shrink-0" />
                <span className="text-sm sm:text-base lg:text-lg text-white font-medium truncate">ISO 9001:2015</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}