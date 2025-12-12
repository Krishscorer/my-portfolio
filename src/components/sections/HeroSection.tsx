import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Sparkles, Mail, Phone, MapPin, Github, Linkedin, Twitter, Star, Heart, Zap, Code, Database, TrendingUp } from "lucide-react";
import profilePic from "@/krish.png";

const HeroSection = () => {
  // Array of icon components for background animation
  const backgroundIcons = [Mail, Phone, MapPin, Github, Linkedin, Twitter, Star, Heart, Zap, Code, Database, TrendingUp];
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient hero-grid">
      {/* Existing floating shapes */}
      <div className="floating-shape w-96 h-96 bg-primary/20 -top-20 -right-20" />
      <div className="floating-shape w-72 h-72 bg-primary/15 bottom-20 -left-20" style={{ animationDelay: "-7s" }} />
      <div className="floating-shape w-48 h-48 bg-primary/10 top-1/3 right-1/4" style={{ animationDelay: "-14s" }} />
      
      {/* New animated background icons */}
      {backgroundIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/10"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 24 + 16}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-soft border border-primary/20 text-accent-foreground text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Krishna</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-2xl md:text-3xl font-semibold text-muted-foreground mb-6"
            >
              Marketing & CRM Specialist
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-10"
            >
              Data-driven Marketing & CRM Optimization — Helping businesses build meaningful customer relationships through strategic automation and insights.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="/Krishna_Lebenslauf_CV.pdf" download="Krishna_Lebenslauf_CV.pdf">
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#projects">
                  View Case Studies
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent-gradient rounded-full blur-3xl opacity-30 scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-card shadow-elevated bg-card">
                <img 
                  src={profilePic} 
                  alt="Krishna's profile picture" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-current" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;