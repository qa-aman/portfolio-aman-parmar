
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium">
            Send Message
          </Button>
          <span className="text-gray-500 py-3">or</span>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-8 py-3 rounded-full font-medium">
            Book a call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
