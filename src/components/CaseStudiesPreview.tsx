
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const caseStudies = [
  {
    title: "Mindspark: Adaptive Learning at Scale",
    description: "How we built personalized learning paths for 2M+ students across 15 countries.",
    status: "Coming Soon",
    tags: ["Product Strategy", "AI/ML", "Scale"],
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "Mira: Teacher Dashboard Redesign",
    description: "Redesigning the educator experience with data-driven insights and intuitive workflows.",
    status: "Coming Soon",
    tags: ["UX Research", "Design System", "B2B"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Navigator: International Expansion",
    description: "Launching educational products in emerging markets with localized content strategies.",
    status: "Coming Soon",
    tags: ["Market Research", "Localization", "Growth"],
    gradient: "from-green-500 to-teal-500"
  }
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Case Studies</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Deep dives into product challenges, solutions, and impact. Detailed case studies coming soon.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.gradient}`}></div>
              
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                    <Clock className="w-3 h-3" />
                    {study.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-gray-50 transition-colors duration-300 opacity-50 cursor-not-allowed"
                  disabled
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
              
              {/* Coming Soon Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-500 italic">
            📝 Currently crafting detailed case studies. Check back soon for in-depth product stories!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
