
import Navigation from "@/components/Navigation";
import MinimalHero from "@/components/MinimalHero";
import AboutSection from "@/components/AboutSection";
import WorkExperience from "@/components/WorkExperience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <MinimalHero />
      <AboutSection />
      <WorkExperience />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
