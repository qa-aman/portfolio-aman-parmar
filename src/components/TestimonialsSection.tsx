
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "Aman brings user-first thinking to every project and drives impact through structured execution.",
    author: "Sarah Chen",
    role: "VP of Product",
    company: "Educational Initiatives",
    avatar: "SC"
  },
  {
    quote: "His ability to translate complex educational needs into intuitive product features is exceptional.",
    author: "Rajesh Kumar",
    role: "Engineering Lead",
    company: "Educational Initiatives",
    avatar: "RK"
  },
  {
    quote: "Aman's strategic thinking and international market insights have been crucial to our global expansion.",
    author: "Lisa Thompson",
    role: "Head of International Markets",
    company: "Educational Initiatives",
    avatar: "LT"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">What People Say</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Feedback from colleagues and collaborators I've had the pleasure to work with.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <svg className="w-8 h-8 text-blue-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className="text-gray-700 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
