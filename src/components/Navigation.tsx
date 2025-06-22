
import { Button } from "@/components/ui/button";
import { Home, User, Instagram, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
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
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Instagram className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Linkedin className="w-5 h-5 text-gray-700" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Mail className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Right side - Book a call button */}
          <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
            Book a call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
