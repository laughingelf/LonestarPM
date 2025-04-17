import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollingGallery from "../components/ScrollingGallery";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/mission.jpg')",
          backgroundSize: 'cover', // Ensures image covers full screen
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Keeps the image fixed while scrolling
        }}
      >
        <ScrollingGallery/>
        <div className="bg-gray-900 bg-opacity-90 text-white py-12 px-6 rounded-lg shadow-lg max-w-5xl mx-auto mt-10 mb-10">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">Soft Washing</h3>
              <p className="text-gray-300">
                A gentle cleaning method ideal for roofs and delicate surfaces, using eco-friendly solutions to eliminate mold, mildew, and grime without damage.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">Pressure Washing</h3>
              <p className="text-gray-300">
                High-powered cleaning for driveways, sidewalks, decks, and other hard surfaces. Restore your property’s appearance with ease and efficiency.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">Fencing</h3>
              <p className="text-gray-300">
                From installation to repairs and cleaning, we offer comprehensive fencing services to enhance your property’s privacy and curb appeal.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">All Property Maintenance</h3>
              <p className="text-gray-300">
                We provide full-service property maintenance to keep your home or business in top shape—inside and out. Ask about our custom packages!
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">Haul Off</h3>
              <p className="text-gray-300">
                Whether you're clearing a construction site or just doing spring cleaning, we haul off debris, junk, and unwanted materials quickly and efficiently.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow">
              <h3 className="text-xl text-center font-semibold mb-2">Auto/Boat Detailing</h3>
              <p className="text-gray-300">
                Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow md:col-span-2">
              <h3 className="text-xl text-center font-semibold mb-2">Concrete Sealing</h3>
              <p className="text-gray-300">
                Extend the life of your concrete surfaces with our sealing services. Protect against stains, weathering, and cracks while enhancing appearance.
              </p>
            </div>
          </div>
          
          {/* Request a Free Quote Button */}
          <div id="buttons" className="mt-12 text-center flex flex-col sm:flex-row sm:justify-center sm:gap-4">
            <Link to='/contact' className="mr-4 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition mb-4 sm:mb-0">
                Get a Free Quote
            </Link>
            <a href="tel:1234567890" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition">
                Call Us: (123) 456-7890
            </a>
            </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
