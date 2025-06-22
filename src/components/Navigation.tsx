
import { Button } from "@/components/ui/button";
import { Home, User, Linkedin, Mail, Phone, BookOpen } from "lucide-react";

const Navigation = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/aman-parmar3/', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:amanparmar208@gmail.com', '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918511755657', '_self');
  };

  const handleSubstackClick = () => {
    window.open('https://amanparmar3.substack.com/', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Navigation icons */}
          <div className="flex items-center space-x-6">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Home className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleLinkedInClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleEmailClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </button>
            <button 
              onClick={handleSubstackClick}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <BookOpen className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Right side - Phone call button */}
          <Button 
            onClick={handlePhoneClick}
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
