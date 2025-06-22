
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm always excited to discuss product opportunities, share insights about EdTech, 
          or explore how we can create meaningful learning experiences together.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-gray-300 mb-4">Let's start a conversation</p>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                onClick={() => window.open('mailto:amanparmar@example.com', '_blank')}
              >
                Send Email
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2">Connect on LinkedIn</h3>
              <p className="text-gray-300 mb-4">Professional networking</p>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/amanparmar', '_blank')}
              >
                View Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Currently Open To</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">💼</div>
              Product Roles
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🚀</div>
              Consulting
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🎓</div>
              Speaking
            </div>
            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl mb-2">🤝</div>
              Mentoring
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
