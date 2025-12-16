import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-radial noise-texture">
      {/* Ambient floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/5 blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-primary/3 blur-2xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              WHO GMP • Medical Device Regulations • Manufacturing Setup
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6"
          >
            <span className="text-gradient">Diven Pharma</span>{" "}
            Consultancy Services
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            Your trusted partner for Pharma, Cosmetics, Siddha, Ayurveda & Medical Devices
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            End-to-end consultancy for compliant, scalable, and quality-driven
            manufacturing operations.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-10 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Beaker className="w-4 h-4 text-primary" />
              <span>Process Optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Regulatory Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Quality Assurance</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group text-base px-8 py-6 shadow-soft hover:shadow-lift transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 py-6 glass-panel hover:bg-card/90 transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>

        {/* Glass Card Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="glass-panel-strong rounded-2xl p-8 sm:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Industry Sectors</div>
              </div>
              <div>
                <div className="text-3xl font-heading font-bold text-primary mb-1">WHO</div>
                <div className="text-sm text-muted-foreground">GMP Certified</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
