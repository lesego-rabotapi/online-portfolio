import { motion } from "framer-motion";
import { Award } from "lucide-react";

const achievements = [
  { icon: Award, title: "CAPACITI Leadership Certificate", description: "Recognised for leadership excellence during the CAPACITI Digital Engineering programme" },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-2 text-center">
            Achievements
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <div className="max-w-lg mx-auto">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-accent rounded-md">
                <a.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-sm text-parchment tracking-wide mb-1">{a.title}</h3>
                <p className="text-sm text-steel">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
