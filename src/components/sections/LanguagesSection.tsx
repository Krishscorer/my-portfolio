import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Languages } from "lucide-react";

const languages = [
  {
    name: "English",
    proficiency: "C1/C2",
    level: 4,
  },
    {
    name: "German",
    proficiency: "C1",
    level: 4,
  },
  {
    name: "Hindi",
    proficiency: "Native",
    level: 5,
  },
  {
    name: "Dutch",
    proficiency: "A1",
    level: 1,
  },

];

const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="languages" className="py-24 bg-background relative">
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
                Languages
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
                Multilingual capabilities for global communication
              </p>
            </div>

            {/* Language Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {language.name}
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-primary-soft text-accent-foreground text-sm font-medium">
                      {language.proficiency}
                    </span>
                  </div>
                  
                  {/* Proficiency Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="text-foreground font-medium">{language.level}/5</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${(language.level / 5) * 100}%` }}
                      ></div>
                    </div>
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

export default LanguagesSection;