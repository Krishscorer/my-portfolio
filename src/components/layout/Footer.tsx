import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {new Date().getFullYear()} Krishna.</span>
            <span className="hidden sm:inline">Crafted with</span>
            <Heart className="hidden sm:inline w-4 h-4 text-primary fill-primary" />
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Data-driven Marketing & CRM Specialist
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-xl bg-secondary hover:bg-primary/10 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
