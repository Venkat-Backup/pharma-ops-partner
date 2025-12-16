import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Target, Users, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Target,
      title: "Strategic Execution",
      description: "Practical manufacturing experience with strategic planning"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Enabling clients to reduce risk and improve efficiency"
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      description: "Achieving sustainable operational excellence"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-background relative">
      <div className="section-container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
              Decades of Expertise in{" "}
              <span className="text-gradient">Regulatory Compliance</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Diven Pharma Consultancy Services is a leading consultancy firm with decades of hands-on experience across
                pharmaceuticals, cosmetics, Siddha, Ayurveda, and medical device
                industries. Our team focuses on helping organizations establish, scale,
                and optimize compliant manufacturing operations aligned with national
                and international regulatory standards.
              </p>
              <p>
                We have led and consulted on projects involving tablet, capsule, liquid
                oral manufacturing, and medical device production including hemodialysis
                fluids, ensuring adherence to WHO GMP and Medical Device Regulatory Rules.
              </p>
              <p>
                Our consultancy approach combines deep regulatory knowledge, practical
                manufacturing experience, and strategic execution, enabling clients to
                reduce risk, improve efficiency, and achieve sustainable operational
                excellence.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["WHO GMP Experts", "MDR Compliance", "Quality Systems"].map((credential, index) => (
                <motion.div
                  key={credential}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {credential}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-panel rounded-xl p-6 flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-panel-strong rounded-xl p-6 border-l-4 border-primary"
            >
              <blockquote className="text-foreground italic">
                "Compliance is not just about meeting standards—it's about building
                trust, ensuring safety, and achieving excellence in every operation."
              </blockquote>
              <cite className="block mt-3 text-sm text-muted-foreground not-italic">
                — Diven Pharma Consultancy Services
              </cite>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
