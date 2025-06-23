
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jul 2024 - Present",
    role: "Senior Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-blue-100 text-blue-700",
    description: "Leading product strategy and development for educational technology solutions"
  },
  {
    period: "Apr 2022 - Jun 2024", 
    role: "Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-green-100 text-green-700",
    description: "Managed full product lifecycle and cross-functional teams"
  },
  {
    period: "Jan 2021 - Mar 2022",
    role: "Associate Quality Assurance Manager", 
    company: "Educational Initiatives",
    companyColor: "bg-purple-100 text-purple-700",
    description: "Led QA initiatives and ensured product quality across teams"
  },
  {
    period: "Apr 2018 - Dec 2020",
    role: "Lead Quality Assurance Engineer",
    company: "Educational Initiatives", 
    companyColor: "bg-orange-100 text-orange-700",
    description: "Supervised QA engineering efforts and led quality frameworks"
  },
  {
    period: "Apr 2016 - Mar 2018",
    role: "Senior Software Test Engineer",
    company: "Educational Initiatives", 
    companyColor: "bg-red-100 text-red-700",
    description: "Designed and executed comprehensive testing strategies"
  },
  {
    period: "Dec 2014 - Mar 2016",
    role: "Software Engineer in Test",
    company: "Educational Initiatives", 
    companyColor: "bg-indigo-100 text-indigo-700",
    description: "Built automation frameworks and performed test engineering"
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
