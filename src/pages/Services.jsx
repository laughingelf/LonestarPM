import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollingGallery from "../components/ScrollingGallery";
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <Navbar />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat pb-6 pt-6 md:pt-10"
        style={{
          backgroundImage: "url('/img/lspm-header2.png')",
          backgroundSize: 'cover', // Ensures image covers full screen
          backgroundPosition: 'center',
          // backgroundAttachment: 'fixed' // Keeps the image fixed while scrolling
        }}
      >
        {/* <ScrollingGallery/> */}
        <div id="services" className="bg-gray-100 bg-opacity-30 text-black py-12 px-6 rounded-lg shadow-lg max-w-5xl mx-auto mb-10">
          <h2>Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
            <div class='service'>
              <h3>Soft Washing</h3>
              <p>
                A gentle cleaning method ideal for roofs and delicate surfaces, using eco-friendly solutions to eliminate mold, mildew, and grime without damage.
              </p>
            </div>

            <div class='service'>
              <h3>Pressure Washing</h3>
              <p>
                High-powered cleaning for driveways, sidewalks, decks, and other hard surfaces. Restore your property’s appearance with ease and efficiency.
              </p>
            </div>

            <div class='service'>
              <h3>Fencing</h3>
              <p>
                From installation to repairs and cleaning, we offer comprehensive fencing services to enhance your property’s privacy and curb appeal.
              </p>
            </div>

            <div class='service'>
              <h3>All Property Maintenance</h3>
              <p>
                We provide full-service property maintenance to keep your home or business in top shape—inside and out. Ask about our custom packages!
              </p>
            </div>

            <div class='service'>
              <h3>Haul Off</h3>
              <p>
                Whether you're clearing a construction site or just doing spring cleaning, we haul off debris, junk, and unwanted materials quickly and efficiently.
              </p>
            </div>

            <div class='service'>
              <h3>Auto/Boat Detailing</h3>
              <p>
                Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.
              </p>
            </div>

            <div class='service'>
              <h3>Concrete Sealing</h3>
              <p>
                Extend the life of your concrete surfaces with our sealing services. Protect against stains, weathering, and cracks while enhancing appearance.
              </p>
            </div>

            <div class='service'>
              <h3>Other Services</h3>
              <p>
              At Lonestar Property Management, we offer a wide range of services beyond what’s listed on our site. If you’ve got a project in mind, give us a call—we’re 
              happy to talk it through and see how we can help. If we can do it, we will.
              </p>
            </div>

          </div>
          
          {/* Request a Free Quote Button */}
          <div id="buttons" className="mt-12 text-center flex flex-col items-center sm:flex-row sm:justify-center sm:gap-4">
            <Link to='/contact'>
                Get a Free Quote
            </Link>
            <a href="tel:1234567890">
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
