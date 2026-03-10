import { motion } from "framer-motion";
import { Trophy, Star, Medal, Award } from "lucide-react";

// REPLACE: Edit these achievements with your own
const achievements = [
  { icon: Trophy, title: "Hackathon Winner", description: "1st Place — AI Innovation Challenge 2025" },
  { icon: Star, title: "Open Source Contributor", description: "Top contributor to major ML framework" },
  { icon: Medal, title: "Dean's List", description: "Consistent academic excellence throughout degree" },
  { icon: Award, title: "Best Capstone Project", description: "Awarded for outstanding final year project" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
