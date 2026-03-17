import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Message sent! (Replace with actual submission logic)");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-24 px-6">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2 text-center">
            <TextShimmer as="span" className="text-2xl md:text-3xl font-heading font-bold gradient-gold-text">
              Contact
            </TextShimmer>
          </h2>
          <div className="divider-ornament w-24 mx-auto mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-5 mb-10"
        >
          <a href="https://github.com/lesego-rabotapi/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center border border-border rounded-md text-steel hover:text-primary hover:border-primary/40 transition-all duration-300">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/lesego-rabotapi-808173310/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center border border-border rounded-md text-steel hover:text-primary hover:border-primary/40 transition-all duration-300">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:rabotapilesego@gmail.com" className="w-11 h-11 flex items-center justify-center border border-border rounded-md text-steel hover:text-primary hover:border-primary/40 transition-all duration-300">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
            />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
            />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body resize-none"
            />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <Button variant="hero" size="lg" type="submit" className="w-full">
            Send Message
          </Button>
        </motion.form>
      </div>

      <div className="mt-20 text-center">
        <div className="divider-ornament w-32 mx-auto mb-6" />
        <p className="text-xs text-steel font-heading tracking-widest uppercase">
          © 2026 — Forged with purpose
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
