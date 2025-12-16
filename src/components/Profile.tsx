import { motion } from "framer-motion";

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
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Basker Muniswamy"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face";
                }}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 w-48 h-48 md:w-56 md:h-56 rounded-full border-2 border-primary/10 -m-2 animate-pulse" />
          </motion.div>

          {/* Name */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Basker Muniswamy
          </motion.h2>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-primary font-medium mb-6"
          >
            Project Consultant
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
