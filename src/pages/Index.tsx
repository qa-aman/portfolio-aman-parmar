
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Mail, Linkedin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ToolsGrid from "@/components/ToolsGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import ContactSection from "@/components/ContactSection";
import StickyCtaButton from "@/components/StickyCtaButton";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="prose prose-lg mx-auto text-center text-gray-600 leading-relaxed">
            <p className="mb-6">
              I'm passionate about creating meaningful learning experiences that adapt to each learner's unique needs. 
              At Educational Initiatives, I've had the privilege of leading product teams that have impacted millions of students globally.
            </p>
            <p className="mb-6">
              My approach combines user-first thinking with data-driven decision making, ensuring every feature we build 
              creates genuine value for educators and learners alike.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              <Badge variant="secondary" className="px-4 py-2">Product Strategy</Badge>
              <Badge variant="secondary" className="px-4 py-2">User Research</Badge>
              <Badge variant="secondary" className="px-4 py-2">EdTech</Badge>
              <Badge variant="secondary" className="px-4 py-2">International Markets</Badge>
              <Badge variant="secondary" className="px-4 py-2">Adaptive Learning</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Stack */}
      <ToolsGrid />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Case Studies Preview */}
      <CaseStudiesPreview />

      {/* Contact Section */}
      <ContactSection />

      {/* Sticky CTA Button */}
      <StickyCtaButton />
    </div>
  );
};

export default Index;
