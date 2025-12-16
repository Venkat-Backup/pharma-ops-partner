import { motion } from "framer-motion";
import { Beaker } from "lucide-react";

const Profile = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          {/* Company Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Diven Pharma Consultancy Services"
                className="w-full h-full object-contain p-4"
                onError={(e) => {
                  // Fallback to icon if logo not found
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.classList.add('logo-fallback');
                }}
              />
              <Beaker className="w-24 h-24 text-primary hidden" />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl border-2 border-primary/10 -m-2 animate-pulse" />
          </motion.div>

          {/* Company Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Diven Pharma
          </motion.h2>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary font-medium mb-6"
          >
            Consultancy Services
          </motion.p>

          {/* Subtitle/Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-xl"
          >
            Pharma • Cosmetics • Siddha • Ayurveda • Medical Devices
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
