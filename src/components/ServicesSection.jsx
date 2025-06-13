import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Soft Washing",
    desc: "A gentle cleaning method ideal for roofs and delicate surfaces, using eco-friendly solutions to eliminate mold, mildew, and grime without damage.",
    img: "/img/services/softwashing.png",
  },
  {
    title: "Pressure Washing",
    desc: "High-powered cleaning for driveways, sidewalks, decks, and other hard surfaces. Restore your property’s appearance with ease and efficiency.",
    img: "/img/services/pressurewashing.png",
  },
  {
    title: "Fencing",
    desc: "From installation to repairs and cleaning, we offer comprehensive fencing services to enhance your property’s privacy and curb appeal.",
    img: "/img/services/fencing.png",
  },
  {
    title: "All Property Maintenance",
    desc: "We provide full-service property maintenance to keep your home or business in top shape—inside and out. Ask about our custom packages!",
    img: "/img/services/mowing.png",
  },
  {
    title: "Haul Off",
    desc: "Whether you're clearing a construction site or just doing spring cleaning, we haul off debris, junk, and unwanted materials quickly and efficiently.",
    img: "/img/services/hauloff.png",
  },
  {
    title: "Auto/Boat Detailing",
    desc: "Professional detailing for vehicles and boats. We bring back that showroom shine inside and out—perfect for personal or resale use.",
    img: "/img/services/boatdetail.jpg",
  },
  {
    title: "Concrete Sealing",
    desc: "Extend the life of your concrete surfaces with our sealing services. Protect against stains, weathering, and cracks while enhancing appearance.",
    img: "/img/services/sealing.jpg",
  },
  {
    title: "Other Services",
    desc: "We offer a wide range of services beyond what’s listed on our site. Got a project in mind? Give us a call—we’re happy to help.",
    img: "/img/services/pool.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-14 text-gray-800 header-font underline">Our Services</h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col justify-between"
            >
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 header-font">{service.title}</h3>
                <p className="text-gray-700 text-lg mb-6 flex-grow">{service.desc}</p>

                <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                >
                <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="text-blue-700 text-lg hover:text-blue-900 font-semibold inline-flex items-center gap-1 transition-colors"
                >
                    Contact Us <ArrowRight size={18} />
                </Link>
                </motion.div>
            </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="tel:8178793087"
              className="bg-green-600 hover:bg-green-700 text-white text-xl font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Call Us: (817) 879-3087
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
