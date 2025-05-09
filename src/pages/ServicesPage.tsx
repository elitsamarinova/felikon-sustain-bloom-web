
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Zap, FileChartColumnIncreasing, PanelTop, Factory, BatteryCharging, Rocket, TrendingUp } from "lucide-react";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive solutions to help you capitalize on sustainability opportunities.
            </p>
          </div>
        </div>
      </section>
      
      {/* REC Section */}
      <section id="rec" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 mb-6">
                <Leaf className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Renewable Energy Certificates</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Maximize Value from Your RECs
              </h2>
              <p className="text-gray-600 mb-4">
                Our REC management services help you optimize the value of your renewable energy certificates 
                through strategic trading, compliance management, and portfolio optimization.
              </p>
              <p className="text-gray-600 mb-6">
                With deep knowledge of European REC markets and regulatory requirements, we ensure you're 
                maximizing returns while maintaining full compliance.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our REC Services Include:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                <li>Strategic REC trading and market intelligence</li>
                <li>Compliance management and reporting</li>
                <li>Portfolio optimization for maximum returns</li>
                <li>Market forecasting and trend analysis</li>
                <li>Regulatory strategy and advocacy</li>
              </ul>
              
              <Button className="bg-primary hover:bg-primary/90">
                Contact for REC Services
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-2 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Renewable Energy Certificates" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consulting Section */}
      <section id="consulting" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white rounded-lg shadow-lg p-2 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainability Consulting" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 mb-6">
                <FileChartColumnIncreasing className="h-4 w-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">Sustainability Consulting</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Turn Sustainability into Profit
              </h2>
              <p className="text-gray-600 mb-4">
                Our consulting services help you identify, develop, and monetize sustainability initiatives 
                across your organization, ensuring environmental responsibility drives business value.
              </p>
              <p className="text-gray-600 mb-6">
                From carbon reduction strategies to circular economy implementation, we provide actionable 
                guidance with a clear focus on ROI and financial returns.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Consulting Services Include:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                <li>Sustainability opportunity assessments</li>
                <li>ROI analysis and financial modeling</li>
                <li>Implementation roadmaps and execution support</li>
                <li>Sustainability reporting and communication</li>
                <li>Regulatory compliance strategies</li>
              </ul>
              
              <Button className="bg-secondary hover:bg-secondary/90">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Software Section */}
      <section id="software" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 mb-6">
                <Zap className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Energy Monitoring Software</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Data-Driven Energy Optimization
              </h2>
              <p className="text-gray-600 mb-4">
                Our software solutions provide comprehensive monitoring, analysis, and optimization of your 
                energy assets and consumption patterns, enabling data-driven decisions that improve efficiency and reduce costs.
              </p>
              <p className="text-gray-600 mb-6">
                With real-time visibility and actionable insights, you can identify opportunities for improvement, 
                track the impact of initiatives, and document the financial returns on your sustainability investments.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Software Solutions Include:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                <li>Real-time energy consumption monitoring</li>
                <li>Renewable energy production tracking</li>
                <li>Cost analysis and optimization recommendations</li>
                <li>Automated reporting and compliance documentation</li>
                <li>Integration with existing systems and sensors</li>
              </ul>
              
              <Button className="bg-primary hover:bg-primary/90">
                Request a Demo
              </Button>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-2 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Energy Monitoring Software" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Monetization Section */}
      <section id="monetization" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="bg-white rounded-lg shadow-lg p-2 z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Monetization Strategies" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              <div className="absolute -z-10 bottom-6 -right-6 w-full h-full bg-secondary/10 rounded-lg"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 mb-6">
                <PanelTop className="h-4 w-4 text-secondary mr-2" />
                <span className="text-sm font-medium text-secondary">Monetization Strategies</span>
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Unlock Hidden Value in Sustainability
              </h2>
              <p className="text-gray-600 mb-4">
                Our monetization strategies help you identify and capitalize on the financial opportunities embedded in your 
                sustainability initiatives, from carbon markets to green premiums and operational efficiencies.
              </p>
              <p className="text-gray-600 mb-6">
                We design comprehensive approaches that align environmental goals with business objectives, ensuring 
                your sustainability investments deliver measurable returns.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Monetization Services Include:</h3>
              <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-600">
                <li>Carbon credit generation and trading</li>
                <li>Green product development and premium pricing</li>
                <li>Energy efficiency financial models</li>
                <li>Green financing and investment strategies</li>
                <li>Sustainable supply chain optimization</li>
              </ul>
              
              <Button className="bg-secondary hover:bg-secondary/90">
                Explore Monetization Opportunities
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting your complete sustainability journey with specialized solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  In-depth analysis of renewable energy and carbon markets to inform strategic decision-making.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BatteryCharging className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Navigate complex regulatory environments while ensuring full compliance and identifying opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Project Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  End-to-end support for renewable energy and sustainability project development and implementation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Sustainability Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive reporting solutions that document environmental impact and financial returns.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default ServicesPage;
