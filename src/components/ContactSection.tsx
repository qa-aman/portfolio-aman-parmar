
import { Mail, MessageCircle, Phone } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ContactSection = () => {
  const handleEmailClick = () => {
    window.open('mailto:amanparmar208@gmail.com', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918511755657', '_blank', 'noopener,noreferrer');
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
          solve real challenges. Hit me up if you're serious about results.
        </p>
        
        <TooltipProvider>
          <div className="flex gap-6 items-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={handleEmailClick}
                  className="p-4 bg-black hover:bg-gray-800 text-white rounded-full transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>amanparmar208@gmail.com</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={handleWhatsAppClick}
                  className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>8511755657</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <button 
                  onClick={handlePhoneClick}
                  className="p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
                >
                  <Phone className="w-6 h-6" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>8511755657</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default ContactSection;
