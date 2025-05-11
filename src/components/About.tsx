import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const stats = [{
  value: "45+",
  label: "Clients"
}, {
  value: "30M+",
  label: "kWh Managed"
}, {
  value: "15+",
  label: "Years Experience"
}, {
  value: "95%",
  label: "Client Retention"
}];
const About = () => {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-3 z-10 relative">
                <img src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Renewable Energy Solutions" className="rounded-lg w-full h-auto" />
              </div>
              <div className="absolute -z-10 top-6 -right-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-6">
              Building a Sustainable Future for Bulgaria and Beyond
            </h2>
            
            <p className="text-gray-600 mb-6">Felicon is a premier renewable energy software and consulting firm based in Bulgaria, specialising in helping businesses monetise solar initiatives across Europe.</p>
            
            <p className="text-gray-600 mb-8">Our expert team combines deep industry knowledge with innovative technology solutions to transform solar management challenges into profitable opportunities. We focus on AI-driven performance optimisation, consulting, and developing custom software that drives measurable financial returns from green investments.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>)}
            </div>
            
            <Button className="bg-primary hover:bg-primary/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default About;