
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sun } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background image of solar panel park with overlay */}
      <div className="absolute inset-0 z-0">
        <AspectRatio ratio={16 / 5} className="h-full">
          <img 
            src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
            alt="Solar Panel Park"
            className="w-full h-full object-cover brightness-50"
          />
        </AspectRatio>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Sun className="h-12 w-12 mx-auto mb-6 text-white" />
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
            Ready to Turn Sustainability into Profit?
          </h2>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join leading companies across Bulgaria and Europe who are monetizing their sustainability initiatives with Felikon's expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="secondary" className="bg-white text-secondary hover:bg-white/90">
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Our Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
