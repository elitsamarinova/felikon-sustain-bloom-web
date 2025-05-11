import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
const ContactPage = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">Have questions about our services? Ready to optimising rev? Contact us today.</p>
          </div>
        </div>
      </section>
      
      <Contact />
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="aspect-video w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46911.85417474265!2d23.3050400371589!3d42.6954322646131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia%2C%20Bulgaria!5e0!3m2!1sen!2sus!4v1588782453615!5m2!1sen!2sus" width="100%" height="100%" frameBorder="0" style={{
                border: 0
              }} allowFullScreen aria-hidden="false" tabIndex={0} title="Felikon office location"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default ContactPage;