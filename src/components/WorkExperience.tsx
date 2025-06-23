import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "Jul 2024 - Present",
    role: "Senior Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-blue-100 text-blue-700",
    description: "Leading strategic EdTech transformations with a focus on scalable architecture, offline usability, personalization, and AI-integrated learning solutions."
  },
  {
    period: "Apr 2022 - Jun 2024", 
    role: "Product Manager",
    company: "Educational Initiatives",
    companyColor: "bg-green-100 text-green-700",
    description: "Delivered user-centric platform enhancements, drove localization for global rollouts, and improved learning outcomes through field-driven product iterations."
  },
  {
    period: "Jan 2021 - Mar 2022",
    role: "Associate Quality Assurance Manager", 
    company: "Educational Initiatives",
    companyColor: "bg-purple-100 text-purple-700",
    description: "Oversaw quality for cross-platform learning tools, ensuring reliability at scale through automation, mobile testing, and performance benchmarking."
  },
  {
    period: "Apr 2018 - Dec 2020",
    role: "Lead Quality Assurance Engineer",
    company: "Educational Initiatives", 
    companyColor: "bg-orange-100 text-orange-700",
    description: "Built automation and performance frameworks to support large-scale deployments, enabling robust learning experiences for diverse user environments."
  },
  {
    period: "Apr 2016 - Mar 2018",
    role: "Senior Software Test Engineer",
    company: "Educational Initiatives", 
    companyColor: "bg-red-100 text-red-700",
    description: "Tested and launched classroom-focused tools and offline education solutions, ensuring platform readiness across varied hardware and geographies."
  },
  {
    period: "Dec 2014 - Mar 2016",
    role: "Software Engineer in Test",
    company: "Educational Initiatives", 
    companyColor: "bg-indigo-100 text-indigo-700",
    description: "Validated early learning platform features that increased student engagement, teacher insights, and personalized feedback loops."
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
