
import { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

const MinimalHero = () => {
  const [profileImage, setProfileImage] = useState("/lovable-uploads/c8d71ce5-35dc-4466-ba5d-2473997ef45f.png");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Profile Photo with Upload Option */}
        <div className="mb-8 flex justify-center relative">
          <div className="relative group">
            <Avatar className="w-24 h-24">
              <AvatarImage src={profileImage} alt="Aman Parmar" />
              <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-700">AP</AvatarFallback>
            </Avatar>
            <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full cursor-pointer">
              <Camera className="w-6 h-6 text-white" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Main Heading - Bold Tagline */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Senior PM | EdTech Optimist | Building what actually works.
        </h1>

        {/* Description - Smaller Text */}
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          I turn complex educational challenges into intuitive, scalable products.
          <br />
          Built for 2M+ learners across 4 countries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium"
            onClick={() => window.open('https://wa.me/918511755657', '_blank')}
          >
            Let's Build Together
          </Button>
          <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Open to Opportunities
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;
