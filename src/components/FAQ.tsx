import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is JORC and SAMREC compliance?",
    answer: "JORC (2012) and SAMREC (2016) are international reporting codes governing public disclosure of mineral resources and reserves. These codes ensure transparency, competence, and materiality in all technical reporting, providing investors and stakeholders with defensible, auditable geological data that meets international banking and listing standards."
  },
  {
    question: "Who prepares your technical reports?",
    answer: "All reports are prepared and signed off by SACNASP-registered Competent Persons with relevant commodity and deposit experience. Our Competent Persons hold appropriate qualifications and have a minimum of five years' experience relevant to the style of mineralisation, deposit type, and activity being undertaken."
  },
  {
    question: "Are your reports bankable?",
    answer: "Yes. Our feasibility studies and Competent Persons Reports (CPRs) are routinely accepted by banks, investors, and financial institutions. We prepare Pre-Feasibility Studies (PFS) and Bankable Feasibility Studies (BFS) that meet the stringent requirements of project finance lenders and equity investors."
  },
  {
    question: "What software do you use for resource estimation?",
    answer: "We utilise industry-standard platforms including Leapfrog Geo for implicit geological modelling, advanced geostatistical tools for grade estimation, and validated QA/QC workflows. Our digital infrastructure includes cloud-based GIS platforms, 3D visualisation tools, and integrated data management systems."
  },
  {
    question: "Do you provide independent technical due diligence?",
    answer: "Yes. GSA provides independent technical reviews for acquisitions, listings, and project financing. Our due diligence services cover geological risk assessment, data verification, resource model audits, and technical opinion letters for transactions across all commodity types."
  },
  {
    question: "Which geophysical methods are most suitable for alluvial deposits?",
    answer: "For alluvial deposits, we commonly deploy Ground Penetrating Radar (GPR), magnetics, and resistivity methods. The optimal technique depends on deposit depth, groundwater salinity, and specific geological conditions. Our geophysical team designs fit-for-purpose survey programmes tailored to each project's exploration objectives."
  },
  {
    question: "What commodities does GSA have expertise in?",
    answer: "GSA has technical expertise across gold, diamonds, rare earth elements (REEs), critical minerals, base metals, heavy mineral sands, lithium, uranium, and industrial minerals. Our Competent Persons have direct experience with deposits across Africa's major mineral provinces."
  },
  {
    question: "How do bankable feasibility studies de-risk mining projects?",
    answer: "Bankable Feasibility Studies (BFS) systematically reduce project risk by defining ore reserves to a high confidence level, establishing detailed mine plans, confirming metallurgical recoveries, and providing robust financial models. This level of technical certainty satisfies project finance requirements and enables informed investment decisions."
  }
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Inject FAQ Schema into head
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    
    // Remove existing if present
    const existing = document.getElementById('faq-schema');
    if (existing) existing.remove();
    
    document.head.appendChild(script);

    return () => {
      const toRemove = document.getElementById('faq-schema');
      if (toRemove) toRemove.remove();
    };
  }, []);

  return (
    <section id="faq" className="relative py-28 lg:py-36 bg-slate-900">
      <div className="page-x" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center w-full mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-lg">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 text-white">
            Technical <span className="text-gradient">Expertise</span> Explained
          </h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
            Answers to common questions about JORC/SAMREC compliance, resource estimation, 
            and our technical consulting services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-slate-800/60 backdrop-blur-md border border-white/10 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg md:text-xl text-white hover:text-primary hover:no-underline py-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base md:text-lg leading-relaxed pl-10 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Trust Signal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-white/50 text-base">
            Have additional questions? Contact our team of SACNASP-registered Competent Persons for 
            <a href="#contact" className="text-primary hover:text-primary/80 ml-1">
              a confidential consultation
            </a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
