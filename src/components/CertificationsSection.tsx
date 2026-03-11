import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const certifications = [
  {
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS",
    image: "/cert-thumbs/generative-ai-llm.jpg",
    pdfUrl: "/certs/generative-ai-llm.pdf",
    verifyUrl: "https://coursera.org/verify/WHMIMR9143NY",
  },
  {
    title: "DevOps on AWS: Code, Build, and Test",
    issuer: "Amazon Web Services",
    image: "/cert-thumbs/devops-aws.jpg",
    pdfUrl: "/certs/devops-aws.pdf",
    verifyUrl: "https://coursera.org/verify/3UHBXYPQQRDD",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: "/cert-thumbs/intro-genai.jpg",
    pdfUrl: "/certs/intro-genai.pdf",
    verifyUrl: "https://coursera.org/verify/PSNW5E5C89NH",
  },
  {
    title: "Version Control with Git",
    issuer: "Atlassian",
    image: "/cert-thumbs/version-control-git.jpg",
    pdfUrl: "/certs/version-control-git.pdf",
    verifyUrl: "https://coursera.org/verify/Q21J6WKJGK46",
  },
  {
    title: "A Tour of Google Cloud Hands-on Labs",
    issuer: "Google Cloud",
    image: "/cert-thumbs/google-cloud-tour.jpg",
    pdfUrl: "/certs/google-cloud-tour.pdf",
    verifyUrl: "https://coursera.org/verify/PP6K",
  },
  {
    title: "Building Data Lakes on AWS",
    issuer: "Amazon Web Services",
    image: "/cert-thumbs/data-lakes-aws.jpg",
    pdfUrl: "/certs/data-lakes-aws.pdf",
    verifyUrl: "https://coursera.org/verify/WHIXB3H74GCD",
  },
  {
    title: "Agile with Atlassian Jira",
    issuer: "Atlassian",
    image: "/cert-thumbs/agile-jira.jpg",
    pdfUrl: "/certs/agile-jira.pdf",
    verifyUrl: "https://coursera.org/verify/NGBJ8ECNZ",
  },
  {
    title: "Cloud Architecture Design Patterns",
    issuer: "Starweaver / Coursera",
    image: "/cert-thumbs/cloud-architecture.jpg",
    pdfUrl: "/certs/cloud-architecture.pdf",
    verifyUrl: "https://coursera.org/verify/CYL47LXUXY2M",
  },
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text mb-2 text-center">
            Certifications
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card/90 border border-border rounded-full text-steel hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-card/90 border border-border rounded-full text-steel hover:text-primary transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide px-12 pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex-shrink-0 w-64 snap-center bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedCert(i)}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm text-parchment mb-1">{cert.title}</h3>
                  <p className="text-xs text-steel">{cert.issuer}</p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-primary hover:text-gold-light mt-2 inline-block font-heading tracking-wide"
                    >
                      Verify →
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedCert !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-6"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute -top-12 right-0 text-steel hover:text-primary transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={certifications[selectedCert].image}
                  alt={certifications[selectedCert].title}
                  className="w-full rounded-lg border border-border"
                />
                <p className="text-center mt-4 font-heading text-parchment tracking-wide">
                  {certifications[selectedCert].title} — {certifications[selectedCert].issuer}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
