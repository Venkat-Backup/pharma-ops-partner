import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Beaker,
  Sparkles,
  Heart,
  FileCheck,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Beaker,
    title: "Pharmaceutical & Traditional Medicine Consultancy",
    description: "Comprehensive support for pharmaceutical and traditional medicine manufacturing.",
    items: [
      "Pharmaceutical manufacturing projects",
      "Siddha & Ayurveda unit setup and compliance",
      "Process optimization and documentation",
      "Quality assurance systems",
    ],
    color: "primary",
  },
  {
    icon: Sparkles,
    title: "Cosmetics Industry Consultancy",
    description: "Expert guidance for cosmetics manufacturing excellence.",
    items: [
      "Cosmetics manufacturing unit setup",
      "Regulatory compliance & licensing support",
      "Formulation guidance and process improvement",
      "GMP-aligned operational workflows",
    ],
    color: "accent",
  },
  {
    icon: Heart,
    title: "Medical Device Consultancy",
    description: "Specialized consultancy for medical device manufacturing.",
    items: [
      "Medical device manufacturing projects",
      "Hemodialysis fluid manufacturing",
      "Medical Device Rules (MDR) compliance",
      "Quality management systems implementation",
    ],
    color: "primary",
  },
  {
    icon: FileCheck,
    title: "Regulatory & Compliance Expertise",
    description: "Navigate complex regulatory landscapes with confidence.",
    items: [
      "WHO GMP implementation & audits",
      "Documentation & SOP development",
      "Risk assessment and gap analysis",
      "Regulatory readiness for inspections",
    ],
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Project & Operations Consulting",
    description: "Strategic planning for operational success.",
    items: [
      "End-to-end project planning & execution",
      "Budgeting & cost optimization",
      "Vendor and supplier evaluation",
      "Performance metrics & continuous improvement",
    ],
    color: "primary",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="services" className="py-24 sm:py-32 gradient-bg relative noise-texture">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
            Consultancy Services
          </h2>
          <p className="text-muted-foreground">
            Comprehensive consultancy solutions tailored to your industry's unique
            regulatory and operational requirements.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className={`service-card group ${
                index === services.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${
                  service.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Items */}
              <ul className="space-y-2 mb-5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Hover indicator */}
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-medium text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
