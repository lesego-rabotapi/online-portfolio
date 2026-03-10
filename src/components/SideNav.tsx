import { motion } from "framer-motion";
import { Home, User, Code2, FolderOpen, Award, ScrollText, Mail } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "certifications", icon: ScrollText, label: "Certs" },
  { id: "achievements", icon: Award, label: "Awards" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const SideNav = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-16 md:w-20 z-40 flex flex-col items-center justify-center gap-1 bg-background/80 backdrop-blur-md border-r border-border"
    >
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="group relative flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-md transition-all duration-300 hover:bg-accent"
          aria-label={item.label}
        >
          <item.icon className="w-4 h-4 md:w-5 md:h-5 text-steel transition-colors duration-300 group-hover:text-primary" />
          <span className="text-[9px] md:text-[10px] font-heading text-steel group-hover:text-primary mt-1 tracking-wider uppercase transition-colors duration-300">
            {item.label}
          </span>
        </button>
      ))}
    </motion.nav>
  );
};

export default SideNav;
