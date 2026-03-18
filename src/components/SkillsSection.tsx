import { motion } from "framer-motion";
import { TextShimmer } from "@/components/ui/text-shimmer";

import { 
  SiPython, 
  SiJavascript, 
  SiReact, 
  SiTypescript,
  SiAmazon,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGooglecloud,
  SiMicrosoftAzure,
} from "react-icons/si";

import { 
  Python, 
  Code2, 
  Database, 
  Cloud, 
  Docker, 
  GitBranch, 
  Hammer,
  Brain
} from "lucide-react";

const skills = [
  { name: "Python", icon: Python },
  { name: "JavaScript", icon: Code2 },
  { name: "SQL", icon: Database },
  { name: "AWS", icon: Cloud },
  { name: "Azure", icon: Cloud },
  { name: "Docker", icon: Docker },
  { name: "CI/CD", icon: GitBranch },
  { name: "Terraform", icon: Hammer },
  { name: "AI/ML", icon: Brain },
];

const SkillCard = ({ skill, delay }: { skill: typeof skills[0]; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-card border border-border rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-primary/30 transition-all duration-300 group"
  >
    <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
    <span className="text-sm text-parchment/90 font-heading tracking-wide text-center">
      {skill.name}
    </span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-center">
            <TextShimmer as="span" className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
              Skills & Arsenal
            </TextShimmer>
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
