
import { Card, CardContent } from "@/components/ui/card";

const tools = [
  { name: "Figma", icon: "🎨", category: "Design" },
  { name: "Webflow", icon: "🌐", category: "Development" },
  { name: "Notion", icon: "📝", category: "Documentation" },
  { name: "ChatGPT", icon: "🤖", category: "AI Tools" },
  { name: "Linear", icon: "📊", category: "Project Management" },
  { name: "Jira", icon: "🔧", category: "Development" },
  { name: "Miro", icon: "🗂️", category: "Collaboration" },
  { name: "Amplitude", icon: "📈", category: "Analytics" },
];

const ToolsGrid = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Tools & Stack</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          The technologies and tools I use to bring ideas to life and drive product success.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={tool.name}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm bg-gradient-to-br from-gray-50 to-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                <p className="text-sm text-gray-500">{tool.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
