import { motion } from "framer-motion";
import { Linkedin, Mail, Mountain, Cpu, FlaskConical, Drill, Users } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import ulrichPhoto from "@/assets/ulrich-van-der-heyde.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const expertiseAreas = [
  {
    icon: Mountain,
    title: "Resource Modeling",
    detail:
      "JORC/SAMREC/NI 43-101 compliant 3D Modeling, Geostatistics (Kriging/Variography), and Leapfrog Geo & Edge.",
  },
  {
    icon: Drill,
    title: "Drilling Management",
    detail:
      "Lead for Sonic, RC, and Diamond programs; expert in remote and offshore logistics (HUET/STCW certified).",
  },
  {
    icon: Cpu,
    title: "Technical Innovation",
    detail:
      "Digital logging systems, UAV magnetic geophysics, and cloud-based database architecture (PostgreSQL).",
  },
  {
    icon: FlaskConical,
    title: "Geometallurgy",
    detail:
      "Integrating XRD/XRF and QEMSCAN data into block models to maximize NPV and recovery.",
  },
];

// Placeholder slots for future team members
const placeholderMembers = [
  {
    name: "Position Available",
    title: "Senior Geophysicist",
    summary:
      "We are actively recruiting experienced geophysicists with expertise in IP/Resistivity and UAV-borne magnetics for our expanding operations across Africa.",
  },
  {
    name: "Position Available",
    title: "Environmental & Compliance Specialist",
    summary:
      "Seeking a qualified environmental scientist to lead closure planning, EIA submissions, and regulatory compliance across multiple jurisdictions.",
  },
];

export default function Team() {
  useDocumentMeta({
    title: "Our Team – Geological Services Africa | Technical Leadership",
    description:
      "Meet the leadership and technical experts at Geological Services Africa. JORC & SAMREC Competent Persons delivering investment-grade geological solutions across Africa.",
  });

  return (
    <PageLayout
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
    >
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="page-x text-center max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Our Leadership & Technical Experts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-white/60"
          >
            Bridging the gap between geological exploration and financial
            certainty.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="pb-24">
        <div className="page-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ─── Ulrich Profile Card ─── */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-1 bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={ulrichPhoto}
                  alt="Ulrich van der Heyde, Pr.Sci.Nat."
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold text-white">
                  Ulrich van der Heyde
                </h2>
                <p className="text-primary text-sm font-medium mt-1">
                  Pr.Sci.Nat.
                </p>
                <p className="text-white/50 text-sm mt-0.5 mb-4">
                  Senior Exploration, Production & Resource Geologist |
                  Competent Person (CP)
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  A strategic Senior Geologist with 10+ years of international
                  experience across Africa. Specialises in transitioning assets
                  from greenfield exploration to 3D resource models and bankable
                  technical reports for Lithium, REE, Gold, Diamonds, and HMS.
                </p>

                {/* Technical Depth Accordion */}
                <div className="mb-6">
                  <h3 className="text-xs uppercase tracking-widest text-white/40 mb-3">
                    Technical Depth
                  </h3>
                  <Accordion type="single" collapsible className="space-y-1">
                    {expertiseAreas.map((area) => (
                      <AccordionItem
                        key={area.title}
                        value={area.title}
                        className="border-white/10"
                      >
                        <AccordionTrigger className="py-3 text-sm font-medium text-white/80 hover:text-primary hover:no-underline">
                          <span className="flex items-center gap-2">
                            <area.icon size={16} className="text-primary" />
                            {area.title}
                          </span>
                        </AccordionTrigger>
                        <AccordionContent className="text-white/60 text-sm leading-relaxed pb-3">
                          {area.detail}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* CTA Buttons */}
                <div className="mt-auto flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/ulrich-van-der-heyde-4840a99b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:text-primary hover:border-primary/30 transition-colors text-sm"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:ulrichv@geologicalservicesafrica.co.za"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ─── Placeholder Cards ─── */}
            {placeholderMembers.map((member, i) => (
              <motion.div
                key={member.title}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="aspect-[4/5] bg-white/[0.02] flex items-center justify-center">
                  <Users size={64} className="text-white/10" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-white/40">
                    {member.name}
                  </h2>
                  <p className="text-primary/50 text-sm font-medium mt-1 mb-4">
                    {member.title}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {member.summary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
