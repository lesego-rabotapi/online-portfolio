import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectPlaceholder from "@/assets/project-placeholder.jpg";

// REPLACE: Edit these projects with your own project details
const projects = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Full-stack analytics platform with LLM-powered insights, real-time data visualization, and automated reporting workflows.",
    tech: ["React", "Python", "FastAPI", "PostgreSQL", "OpenAI"],
    image: projectPlaceholder,
    github: "https://github.com",  // REPLACE with your repo URL
    demo: "https://example.com",   // REPLACE with your live demo URL
  },
  {
    title: "Cloud Infrastructure Orchestrator",
    description: "Automated cloud resource management tool supporting multi-cloud deployments with Terraform and CI/CD pipelines.",
    tech: ["TypeScript", "AWS", "Terraform", "Docker", "Node.js"],
    image: projectPlaceholder,
    github: "https://github.com",
    demo: "",
  },
  {
    title: "Conversational AI Chatbot",
    description: "Context-aware chatbot built with LangChain and vector databases for intelligent document Q&A capabilities.",
    tech: ["Python", "LangChain", "Pinecone", "React", "FastAPI"],
    image: projectPlaceholder,
    github: "https://github.com",
    demo: "https://example.com",
  },
  {
    title: "Real-Time Collaboration Platform",
    description: "WebSocket-powered collaborative workspace with live editing, presence indicators, and role-based access control.",
    tech: ["Next.js", "Socket.io", "MongoDB", "Redis", "Tailwind"],
    image: projectPlaceholder,
    github: "https://github.com",
    demo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-2 text-center">
            Projects
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
              {/* REPLACE: swap the image src with your project screenshot */}
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
