
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.open('mailto:amanparmar208@gmail.com', '_self');
  };

  const handlePhoneClick = () => {
    window.open('tel:+918511755657', '_self');
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8">Get in touch</h2>
        
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Building something that needs to convert? Need a product manager who 
          actually ships products that make impact? I'm open to discussing projects that 
          solve real educational challenges. Hit me up if you're serious about results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <Button 
            onClick={handleEmailClick}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send Message
          </Button>
          <span className="text-gray-500 py-3">or</span>
          <Button 
            onClick={handlePhoneClick}
            variant="outline" 
            className="border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full font-medium flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
