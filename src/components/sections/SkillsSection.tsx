import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Database & ETL",
    color: "primary",
    skills: [
      "SQL",
      "Snowflake",
      "Celonis EMS",
      "Informatica",
    ],
  },
  {
    title: "Data Visualization & Analytics",
    color: "accent",
    skills: [
      "Tableau",
      "Power BI Dashboards",
      "R (Data Manipulation & Analysis)",
      "NPS Correlation Analysis",
      "Customer Segmentation",
    ],
  },
  {
    title: "ERP & CRM Systems",
    color: "secondary",
    skills: [
      "Salesforce",
      "Dynamics 365",
      "SAP",
      "Zoho",
    ],
  },
  {
    title: "Project Management & Documentation",
    color: "tertiary",
    skills: [
      "Jira",
      "Notion",
      "Technical Reports",
      "Architecture Conventions",
    ],
  },
];


const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-secondary/30 relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
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
                Skills & Expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                A comprehensive toolkit for modern marketing and CRM optimization
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                  className="glass-card p-8"
                >
                  <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-accent-gradient" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="skill-chip"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
