
import Navigation from "@/components/Navigation";
import MinimalHero from "@/components/MinimalHero";
import AboutSection from "@/components/AboutSection";
import WorkExperience from "@/components/WorkExperience";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MinimalHero />
      <AboutSection />
      <WorkExperience />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
