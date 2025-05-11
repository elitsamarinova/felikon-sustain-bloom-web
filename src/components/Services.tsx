import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Zap, FileChartColumnIncreasing, PanelTop } from "lucide-react";
import { Link } from "react-router-dom";
const services = [{
  title: "Renewable Energy Certificates",
  description: "Maximize value from RECs with our specialized trading and optimization platforms, ensuring compliance and revenue generation.",
  icon: <Leaf className="h-6 w-6 text-primary" />,
  link: "/services#rec"
}, {
  title: "Planning and Permits Consulting",
  description: "Navigate lengthy approval processes (2-5 years in countries like Germany), inconsistent EU regulations, NIMBY issues, and complex environmental impact assessments.",
  icon: <FileChartColumnIncreasing className="h-6 w-6 text-primary" />,
  link: "/services#consulting"
}, {
  title: "AI-powered Performance Optimization Tools",
  description: "Leverage AI-driven cleaning scheduling, robotic cleaning systems, panel-level monitoring, and solar tracking systems optimized for European latitudes.",
  icon: <Zap className="h-6 w-6 text-primary" />,
  link: "/services#software"
}, {
  title: "Grid Connection & Integration",
  description: "Solutions for limited grid capacity in rural areas, expensive connection costs, constraints during peak generation, and balancing intermittent generation with grid demands.",
  icon: <PanelTop className="h-6 w-6 text-primary" />,
  link: "/services#monetization"
}];
const Services = () => {
  return <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions to help your business turn solar into a real commercial opportunity</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link to={service.link} className="text-primary font-medium hover:underline inline-flex items-center">
                  Learn more
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-gray-300">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;