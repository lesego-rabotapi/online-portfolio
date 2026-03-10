import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Small profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6"
        >
          {/* REPLACE: swap src with your own profile image */}
          <img
            src={profileImg}
            alt="Profile"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto border-2 border-primary/40 object-cover"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-sm tracking-[0.25em] uppercase text-steel font-heading mb-3"
        >
          Software Developer
        </motion.p>

        {/* REPLACE: Change the name below to your own */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="text-3xl md:text-5xl font-heading font-bold gradient-gold-text mb-4 leading-tight"
        >
          Your Name
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-base md:text-lg text-parchment/80 max-w-xl mx-auto mb-8 leading-relaxed"
        >
          Crafting intelligent solutions through AI integration, cloud architecture, and data-driven development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button variant="hero" size="lg" onClick={() => scrollTo("projects")}>
            View Projects
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollTo("contact")}>
            Contact Me
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - delayed */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border border-primary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="w-1 h-2 bg-primary/60 rounded-full mt-1.5"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
