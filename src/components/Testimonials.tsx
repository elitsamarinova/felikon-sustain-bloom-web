
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Felikon's expertise in REC management has significantly increased our return on renewable investments while ensuring full regulatory compliance.",
    name: "Elena Petrova",
    title: "Sustainability Director, EnergiaBG",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    quote: "Their sustainability consulting services helped us identify opportunities we hadn't considered, resulting in both environmental improvements and cost savings.",
    name: "Martin Ivanov",
    title: "CEO, GreenTech Solutions",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    quote: "The energy monitoring software Felikon developed for us has provided unprecedented visibility into our consumption patterns and optimization opportunities.",
    name: "Sophia Dimitrova",
    title: "Operations Manager, Eco Industries",
    image: "https://i.pravatar.cc/100?img=3"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped businesses across Bulgaria and Europe transform their sustainability initiatives into profitable ventures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
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

export default Testimonials;
