import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, BarChart3, Users, FileText } from "lucide-react";

const skillCategories = [
  {
    title: "Database & ETL",
    color: "primary",
    icon: Database,
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
    icon: BarChart3,
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
    icon: Users,
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
    icon: FileText,
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
    <section id="skills" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-10 text-primary/10"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          delay: 0.5
        }}
      >
        <Database size={40} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-10 text-primary/10"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          delay: 1
        }}
      >
        <BarChart3 size={40} />
      </motion.div>

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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card p-8 relative overflow-hidden"
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Icon */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
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
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "hsl(var(--primary-soft))",
                          borderColor: "hsl(var(--primary) / 0.3)",
                        }}
                        className="skill-chip cursor-pointer"
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