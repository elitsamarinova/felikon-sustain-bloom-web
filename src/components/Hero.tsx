
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, TrendingUp, Factory } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 pt-20 pb-16 overflow-hidden">
      <div className="hero-pattern absolute inset-0 z-0"></div>
      
      {/* Decorative floating elements */}
      <div className="hidden lg:block absolute right-10 top-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="hidden lg:block absolute left-10 bottom-10 w-96 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 mb-6">
              <Leaf className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">Sustainable Future. Profitable Present.</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Monetizing <span className="text-primary">Sustainability</span> Initiatives
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Felikon helps businesses in Bulgaria and Europe transform sustainability challenges into 
              profitable opportunities with innovative software and expert consulting.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-secondary/10 p-2 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900 block">Maximize ROI</span>
                  on sustainability investments
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                  <Factory className="h-6 w-6 text-primary" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  <span className="font-semibold text-gray-900 block">RECs Management</span>
                  and optimization strategies
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              {/* Main image */}
              <div className="bg-white rounded-xl shadow-lg p-2 z-10 relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Renewable Energy Solutions" 
                  className="rounded-lg w-full h-auto"
                />
                
                {/* Stats card */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-48">
                  <div className="flex items-center">
                    <div className="mr-3 bg-green-100 rounded-full p-2">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">ROI Increase</p>
                      <p className="text-2xl font-bold text-gray-900">+45%</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute -z-10 top-8 -left-8 w-full h-full bg-secondary/20 rounded-xl"></div>
              <div className="absolute -z-10 top-16 -left-16 w-full h-full bg-primary/10 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
