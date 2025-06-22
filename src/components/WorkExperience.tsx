
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jan 2019 - Present",
    role: "Senior Product Manager at",
    company: "Educational Initiatives",
    companyColor: "bg-blue-100 text-blue-700"
  },
  {
    period: "Jun 2017 - Dec 2018",
    role: "Product Manager at",
    company: "Educational Initiatives",
    companyColor: "bg-green-100 text-green-700"
  },
  {
    period: "Aug 2015 - May 2017",
    role: "Associate Product Manager at",
    company: "Educational Initiatives",
    companyColor: "bg-purple-100 text-purple-700"
  },
  {
    period: "Jan 2014 - Jul 2015",
    role: "Business Analyst at",
    company: "Educational Initiatives",
    companyColor: "bg-orange-100 text-orange-700"
  }
];

const WorkExperience = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-12">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="text-gray-500 text-sm sm:w-48 flex-shrink-0">
                {exp.period}
              </div>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-gray-700">{exp.role}</span>
                <Badge className={`${exp.companyColor} border-0 font-medium`}>
                  {exp.company}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
