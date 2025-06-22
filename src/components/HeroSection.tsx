
import { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>

      <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-300">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Aman Parmar" />
            <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">AP</AvatarFallback>
          </Avatar>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
          Aman Parmar
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light">
          Senior Product Manager
        </p>
        <p className="text-lg text-gray-500 mb-8">
          Ahmedabad, Gujarat • Educational Initiatives
        </p>

        {/* Hero Description */}
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            I lead the lifecycle of EdTech products that create 
            <span className="font-semibold text-blue-600"> adaptive learning experiences</span> for millions of students worldwide.
          </p>
          <p className="text-base md:text-lg text-gray-600">
            Specializing in <strong>Mindspark</strong>, <strong>Mira</strong>, and <strong>Navigator</strong> — 
            products focused on personalization and international market expansion.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-gray-300 hover:border-gray-400 px-8 py-3 rounded-full transition-all duration-300"
          >
            Let's Connect
          </Button>
        </div>
      </div>

      {/* 3D Visual Placeholder */}
      <div className="absolute bottom-10 right-10 opacity-20">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
};

export default HeroSection;
