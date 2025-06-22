
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const MinimalHero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <Avatar className="w-24 h-24">
            <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" alt="Aman Parmar" />
            <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-700">AP</AvatarFallback>
          </Avatar>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
          Hey, I'm Aman.
          <br />
          Product Manager & Educator.
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
          Most product managers can't code. Most developers can't strategize. I do both.
        </p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          5+ years turning educational ideas into scalable products.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium">
            Hire me
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
