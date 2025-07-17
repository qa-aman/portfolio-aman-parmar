
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Product Management",
    skills: ["Product Strategy", "Roadmap Planning", "User Research", "Market Analysis", "Agile/Scrum", "Product Analytics"]
  },
  {
    category: "Technical Skills", 
    skills: ["Data Analysis", "SQL", "API Integration", "A/B Testing", "Wireframing", "Vibe Coding"]
  },
  {
    category: "Education Technology",
    skills: ["Learning Management Systems", "Educational Content", "Assessment Tools", "Student Analytics"]
  },
  {
    category: "Leadership & Communication",
    skills: ["Cross-functional Leadership", "Stakeholder Management", "Presentation Skills", "Team Collaboration", "Strategic Planning"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12">Skills & Expertise</h2>
        
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
