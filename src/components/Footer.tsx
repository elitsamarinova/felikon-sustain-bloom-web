import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/77286e81-727a-4c17-ad2d-d43ed92a27bd.png" 
                alt="Felicon logo" 
                className="h-20 object-contain"
              />
            </div>
            <p className="text-gray-600 mb-4">Pioneering sustainable energy solutions and monetisation opportunities in Bulgaria and across Europe.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#rec" className="text-gray-600 hover:text-primary transition-colors">Performance Optimisation Tools</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-600 hover:text-primary transition-colors">
                  Sustainability Consulting
                </Link>
              </li>
              <li>
                <Link to="/services#software" className="text-gray-600 hover:text-primary transition-colors">
                  Energy Software Solutions
                </Link>
              </li>
              <li>
                <Link to="/services#monetization" className="text-gray-600 hover:text-primary transition-colors">
                  Monetization Strategies
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-600">Sofia, Bulgaria</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-600">feliconenergy@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-600">+359 2 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} Felikon. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-500 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          <div className="mt-4 flex justify-center md:justify-start items-center text-sm text-gray-500">
            <Leaf className="w-4 h-4 mr-2 text-primary" /> 
            <span>Committed to a sustainable future</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
