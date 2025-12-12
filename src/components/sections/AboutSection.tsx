import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  Users, 
  Mail, 
  Target, 
  FlaskConical, 
  BarChart3, 
  Lightbulb, 
  FileText,
  Settings,
  TrendingUp,
  PieChart,
  Calendar,
  MessageSquare
} from "lucide-react";

const strengths = [
  { icon: Settings, label: "CRM Automation" },
  { icon: Users, label: "Customer Segmentation" },
  { icon: Mail, label: "Email Campaigns" },
  { icon: Target, label: "Lead Nurturing" },
  { icon: FlaskConical, label: "A/B Testing" },
  { icon: BarChart3, label: "Google Analytics" },
  { icon: Lightbulb, label: "Marketing Strategy" },
  { icon: FileText, label: "Content Planning" },
  { icon: Zap, label: "Marketing Automation Tools" },
];

const floatingIcons = [TrendingUp, PieChart, Calendar, MessageSquare, BarChart3, Target];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/5"
          style={{
            top: `${20 + (index * 10)}%`,
            right: `${5 + (index % 3) * 8}%`,
            fontSize: `${20 + (index % 3) * 10}px`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon />
        </motion.div>
      ))}
      
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
                About Me
              </h2>
            </div>

            <div className="grid lg:grid-cols-5 gap-12">
              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-3"
              >
                <div className="glass-card p-8 h-full">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Professional Profile
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a passionate <span className="text-foreground font-medium">Marketing & CRM Specialist</span> with 
                      expertise in digital marketing, CRM workflows, and customer lifecycle strategies. With{" "}
                      <span className="text-primary font-semibold">4+ year of hands-on experience</span>, I've developed 
                      a strong foundation in creating data-driven marketing solutions.
                    </p>
                    <p>
                      My expertise spans across <span className="text-foreground font-medium">email marketing, automation flows, 
                      segmentation, and campaign analytics</span>. I have a strong understanding of customer journey mapping 
                      and retention strategies that drive business growth.
                    </p>
                    <p>
                      I thrive in <span className="text-foreground font-medium">Agile and fast-paced environments</span>, 
                      bringing creativity and analytical thinking to every project. I'm dedicated to helping businesses 
                      build meaningful customer relationships through strategic automation and insights.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Strengths */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-2"
              >
                <div className="glass-card p-8 h-full">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                    Core Strengths
                  </h3>
                  <div className="space-y-3">
                    {strengths.map((strength, index) => (
                      <motion.div
                        key={strength.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-primary-soft transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <strength.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground group-hover:text-accent-foreground transition-colors">
                          {strength.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;