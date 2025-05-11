import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Leaf, Factory, BatteryFull, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
const AboutPage = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">About Felicon</h1>
            <p className="text-xl text-gray-600 mb-8">
              Pioneers in renewable energy solutions and sustainability monetization in Bulgaria and across Europe.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">Founded in 2022, Felicon began with a simple mission: to help Bulgaria harness the financial potential of renewable energy and solar. What started as a small family-owned project has grown into a comprehensive solution provider at the intersection of environmental responsibility and business profitability.</p>
              <p className="text-gray-600 mb-4">As the European renewable energy landscape evolved, so did we. We expanded our services to include cutting-edge software solutions that enable precise tracking, analysis, and optimization of energy assets.</p>
              <p className="text-gray-600 mb-4">Today, we're proud to help organizations across Bulgaria and Europe transform their solar management challenges into profitable opportunities, ensuring that doing good for the planet also means doing well for business.</p>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-2 z-10 relative">
                <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Sustainable Landscape" className="rounded-lg w-full h-auto" />
              </div>
              <div className="absolute -z-10 bottom-6 -left-6 w-full h-full bg-primary/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that sustainability and profitability can and should go hand in hand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously develop new approaches and technologies to unlock value from sustainability initiatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expertise</h3>
              <p className="text-gray-600">
                Our deep industry knowledge ensures we deliver results that meet both environmental and financial goals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BatteryFull className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                We are committed to transparency, honesty, and ethical practices in all our operations and advice.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">
                We measure our success by the tangible financial benefits our clients realize from sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-secondary to-primary rounded-2xl text-white p-8 sm:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">Ready to Optimise Solar?</h2>
              <p className="text-xl text-white/80 mb-8">Contact our team to discover how Felicon can help transform your solar management challeng into profit.</p>
              <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90">
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default AboutPage;