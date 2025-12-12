import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ArrowUpRight, Send } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "krishna@example.com",
    href: "mailto:krishna@example.com",
    color: "bg-red-500/10 text-red-600 hover:bg-red-500/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/krishna",
    href: "https://linkedin.com/in/krishna",
    color: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20",
  },
  {
    icon: Github,
    label: "Portfolio Docs",
    value: "github.com/krishna",
    href: "https://github.com/krishna",
    color: "bg-gray-500/10 text-gray-600 hover:bg-gray-500/20",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 section-heading inline-block">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Interested in working together? Let's connect and discuss how I can help optimize your marketing and CRM strategies.
              </p>
            </div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* CTA */}
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    Let's Build Something Great Together
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Whether you're looking to optimize your CRM workflows, improve email marketing performance, or develop comprehensive marketing strategies — I'm here to help.
                  </p>
                  <Button variant="hero" size="lg" asChild>
                    <a href="mailto:krishna@example.com">
                      <Send className="w-5 h-5" />
                      Send a Message
                    </a>
                  </Button>
                </div>

                {/* Contact Links */}
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${link.color}`}>
                        <link.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{link.label}</p>
                        <p className="text-sm text-muted-foreground">{link.value}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
