import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import projectPlaceholder from "@/assets/project-placeholder.jpg";

const projects = [
  {
    title: "VigilWatch",
    description: "A web-based uptime and incident monitoring platform that performs synthetic checks against configured endpoints, detects failures, records incidents, and visualizes system health in near real-time.",
    tech: ["Python", "AWS Lambda", "DynamoDB", "API Gateway", "Terraform", "CloudWatch"],
    image: projectPlaceholder,
    github: "https://github.com/lesego-rabotapi/VigilWatch",
    demo: "",
  },
  {
    title: "Tasking",
    description: "A collaborative task management app with add, edit, delete, and completion features. Built using Agile methodology with defined user stories and sprint planning.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: projectPlaceholder,
    github: "https://github.com/lesego-rabotapi/tasking",
    demo: "",
  },
  {
    title: "Genie",
    description: "A marketing content generator that helps create promotional materials and copy efficiently.",
    tech: ["HTML"],
    image: projectPlaceholder,
    github: "https://github.com/lesego-rabotapi/genie",
    demo: "",
  },
  {
    title: "My Insights",
    description: "A Python-based data insights and analytics tool for extracting meaningful patterns from datasets.",
    tech: ["Python"],
    image: projectPlaceholder,
    github: "https://github.com/lesego-rabotapi/my-insights",
    demo: "",
  },
  {
    title: "Easy Gen",
    description: "A Python-powered generation tool with Docker support for streamlined deployment and execution.",
    tech: ["Python", "Docker"],
    image: projectPlaceholder,
    github: "https://github.com/lesego-rabotapi/easy-gen",
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-center">
            <TextShimmer as="span" className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
              Projects
            </TextShimmer>
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-gold"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-parchment mb-2">{project.title}</h3>
                <p className="text-sm text-steel leading-relaxed mb-4">{project.description}</p>
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-heading tracking-wider px-2.5 py-1 bg-accent/50 text-primary rounded border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" /> Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
