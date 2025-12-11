import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StatsSection from "@/components/sections/StatsSection";
import ContactSection from "@/components/sections/ContactSection";
import LanguagesSection from "@/components/sections/LanguagesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <LanguagesSection />
        <ProjectsSection />
        <StatsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;