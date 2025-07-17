
import { Button } from "@/components/ui/button";
import { Home, Linkedin, Github, BookOpen } from "lucide-react";

const Navigation = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aman-parmar3/', '_blank', 'noopener,noreferrer');
  };

  const handleGithubClick = () => {
    window.open('https://github.com/qa-aman', '_blank', 'noopener,noreferrer');
  };

  const handleSubstackClick = () => {
    window.open('https://amanparmar3.substack.com/', '_blank', 'noopener,noreferrer');
  };

  const handleHomeClick = () => {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation icons */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={handleHomeClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Home className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleGithubClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleSubstackClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <BookOpen className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
