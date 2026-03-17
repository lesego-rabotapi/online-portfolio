import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { TextShimmer } from "@/components/ui/text-shimmer";

const experience = [
  {
    type: "work" as const,
    title: "Digital Engineering Associate",
    org: "Project Y (in partnership with CAPACITI)",
    location: "Cape Town",
    period: "October 2025 – Present",
    description:
      "Working on digital engineering projects encompassing full-stack development, cloud infrastructure, and AI integration.",
    link: "https://www.projecty.world/",
  },
];

const education = [
  {
    type: "edu" as const,
    title: "Electrical Engineering N4",
    org: "Boland College",
    location: "Engineering Studies",
    period: "March 2022 – November 2024",
    description: "",
  },
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof experience)[0] | (typeof education)[0];
  index: number;
}) => {
  const isWork = "link" in item;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-[15px] top-10 bottom-0 w-px bg-border last:hidden" />

      {/* Icon dot */}
      <div className="absolute left-0 top-1 w-8 h-8 flex items-center justify-center rounded-full bg-accent border border-primary/30">
        {isWork ? (
          <Briefcase className="w-4 h-4 text-primary" />
        ) : (
          <GraduationCap className="w-4 h-4 text-primary" />
        )}
      </div>

      <div className="bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-all duration-300">
        <span className="text-xs font-heading tracking-widest uppercase text-primary mb-1 block">
          {item.period}
        </span>
        <h3 className="font-heading text-base text-parchment tracking-wide mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-steel mb-1">
          {item.org}
          {item.location ? ` · ${item.location}` : ""}
        </p>
        {item.description && (
          <p className="text-sm text-parchment/70 mt-2 leading-relaxed">
            {item.description}
          </p>
        )}
        {isWork && (item as (typeof experience)[0]).link && (
          <a
            href={(item as (typeof experience)[0]).link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-primary hover:text-gold-light mt-2 inline-block font-heading tracking-wide"
          >
            Visit →
          </a>
        )}
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <div className="max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-center">
            <TextShimmer as="span" className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
              Experience & Education
            </TextShimmer>
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        {/* Experience */}
        <h3 className="font-heading text-lg text-primary tracking-wide mb-6">Experience</h3>
        <div className="mb-12">
          {experience.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Education */}
        <h3 className="font-heading text-lg text-primary tracking-wide mb-6">Education</h3>
        <div>
          {education.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
