import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Clock, Rocket, Workflow, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: 4,
    suffix: "+",
    label: "Year Experience",
    description: "Marketing & CRM",
  },
  {
    icon: Rocket,
    value: 10,
    suffix: "+",
    label: "Campaigns Executed",
    description: "Email & Digital",
  },
  {
    icon: Workflow,
    value: 50,
    suffix: "+",
    label: "Automated Workflows",
    description: "Built & Optimized",
  },
  {
    icon: TrendingUp,
    value: 75,
    suffix: "%",
    label: "Open Rate Improvement",
    description: "Average Increase",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="stat-card glass-card p-6 text-center group hover:shadow-elevated transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Value */}
                  <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                  </div>

                  {/* Label */}
                  <h3 className="font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
