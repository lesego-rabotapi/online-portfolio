import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-2 text-center">
            About Me
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-5 text-parchment/85 text-base md:text-lg leading-relaxed"
        >
          {/* REPLACE: Edit the paragraphs below with your own bio */}
          <p>
            I specialise in integrating AI technologies, designing cloud architectures, and crafting data-driven applications. Whether implementing large language models, building automated workflows, or developing user-centric interfaces, I focus on creating solutions that are both powerful and practical.
          </p>
          <p>
            I value growth, curiosity, and consistency. I take initiative, communicate well, and bring emotional intelligence into every team I join. Adapting quickly and learning fast are qualities I pride myself on.
          </p>
          <p>
            Outside of development, I stay creative and disciplined through fitness, boxing, guitar, and gaming.
          </p>
        </motion.div>

        {/* REPLACE: Update the href below to link to your résumé/CV file */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 font-heading text-sm tracking-widest uppercase text-primary hover:text-gold-light transition-colors border border-primary/30 px-6 py-3 rounded-md hover:border-primary/60"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
