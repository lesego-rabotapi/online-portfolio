import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", level: 70 },
      { name: "JavaScript", level: 70 },
      { name: "SQL", level: 60 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 82 },
      { name: "Azure", level: 70 },
      { name: "Docker", level: 75 },
      { name: "CI/CD", level: 78 },
      { name: "Terraform", level: 70 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="mb-3">
    <div className="flex justify-between mb-1">
      <span className="text-sm text-parchment/90 font-heading tracking-wide">{name}</span>
      <span className="text-xs text-steel">{level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-gold-dark via-primary to-gold-light rounded-full"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-2 text-center">
            Skills & Arsenal
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-card border border-border rounded-lg p-6"
            >
              <h3 className="font-heading text-lg text-primary mb-5 tracking-wide">{cat.title}</h3>
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} delay={ci * 0.1 + si * 0.08} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
