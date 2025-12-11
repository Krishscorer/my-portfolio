import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, TrendingUp, Mail, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "email-automation",
    title: "Email Automation Workflow Optimization",
    description:
      "Redesigned and optimized email automation workflows to improve customer engagement and campaign performance.",
    highlights: [
      { icon: TrendingUp, text: "Improved email open rate by 25%" },
      { icon: Users, text: "Built customer segmentation groups" },
      { icon: Mail, text: "Automated onboarding & re-engagement flows" },
      { icon: Zap, text: "Increased campaign efficiency" },
    ],
    tools: ["HubSpot", "Mailchimp", "Google Analytics"],
    image: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 section-heading inline-block">
                Featured Case Studies
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Real-world projects showcasing marketing strategy and CRM optimization
              </p>
            </div>

            {/* Projects */}
            <div className="space-y-8">
              {projects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card overflow-hidden group"
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image/Preview */}
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-secondary to-muted overflow-hidden">
                      <div className="absolute inset-0 bg-accent-gradient opacity-10" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Mail className="w-10 h-10 text-primary" />
                          </div>
                          <p className="text-sm text-muted-foreground">Case Study Preview</p>
                        </div>
                      </div>
                      {/* Decorative grid */}
                      <div className="absolute inset-0 hero-grid opacity-50" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-10">
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">{project.description}</p>

                      {/* Highlights */}
                      <div className="space-y-3 mb-6">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <highlight.icon className="w-4 h-4 text-primary" />
                            </div>
                            <span className="text-sm text-foreground">{highlight.text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex flex-wrap gap-4">
                        <Button variant="hero" asChild>
                          <Link to={`/case-study/${project.id}`}>
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                        <Button variant="outline">
                          <ExternalLink className="w-4 h-4" />
                          LinkedIn
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Coming Soon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-muted-foreground font-medium">More Case Studies Coming Soon</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
