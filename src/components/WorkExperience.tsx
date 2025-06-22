
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jan 2019 - Present",
    role: "Senior Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-blue-100 text-blue-700",
    description: "Leading product strategy and development for educational technology solutions"
  },
  {
    period: "Jun 2017 - Dec 2018", 
    role: "Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-green-100 text-green-700",
    description: "Managed product lifecycle and cross-functional teams"
  },
  {
    period: "Aug 2015 - May 2017",
    role: "Associate Product Manager", 
    company: "Educational Initiatives",
    companyColor: "bg-purple-100 text-purple-700",
    description: "Supported product development and market research initiatives"
  },
  {
    period: "Jan 2014 - Jul 2015",
    role: "Business Analyst",
    company: "Educational Initiatives", 
    companyColor: "bg-orange-100 text-orange-700",
    description: "Analyzed business requirements and supported product decisions"
  }
];

const WorkExperience = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6 relative">
              <div className="absolute w-3 h-3 bg-black rounded-full -left-2 top-2"></div>
              <div className="space-y-2">
                <div className="text-gray-500 text-sm">
                  {exp.period}
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <Badge className={`${exp.companyColor} border-0 font-medium`}>
                    {exp.company}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
