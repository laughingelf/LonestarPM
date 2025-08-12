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
    desc: "High powered cleaning for driveways, sidewalks, decks, and other hard surfaces. Restore your property’s appearance with ease and efficiency.",
    img: "/img/services/pressurewashing.png",
  },
  {
    title: "Fencing",
    desc: "From installation to repairs and cleaning, we offer comprehensive fencing services to enhance your property’s privacy and curb appeal.",
    img: "/img/services/fencing.png",
  },
  {
    title: "All Property Maintenance",
    desc: "We provide full service property maintenance to keep your home or business in top shape — inside and out. Ask about our custom packages!",
    img: "/img/services/mowing.png",
  },
  {
    title: "Haul Off",
    desc: "Whether you are clearing a construction site or just doing spring cleaning, we haul off debris, junk, and unwanted materials quickly and efficiently.",
    img: "/img/services/hauloff.png",
  },
  {
    title: "Auto/Boat Detailing",
    desc: "Professional detailing for vehicles and boats. We bring back that showroom shine inside and out — perfect for personal or resale use.",
    img: "/img/services/boatdetail.jpg",
  },
  {
    title: "Concrete Sealing",
    desc: "Extend the life of your concrete surfaces with our sealing services. Protect against stains, weathering, and cracks while enhancing appearance.",
    img: "/img/services/sealing.jpg",
  },
  {
    title: "Other Services",
    desc: "We offer a wide range of services beyond what is listed on our site. Got a project in mind? Give us a call — we are happy to help.",
    img: "/img/services/pool.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.07 } }),
};

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg font-semibold tracking-widest text-red-600 uppercase">What We Do</p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-blue-900">Our Services</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, idx) => (
          <motion.article
            key={service.title}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="group relative rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg overflow-hidden
                      transition hover:ring-gray-400 hover:shadow-xl"
          >
            {/* brand accent */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                            bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" />

            {/* Make whole card clickable */}
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              onClick={() => window.scrollTo(0, 0)}
              className="absolute inset-0 z-10"
              aria-label={`Get a quote for ${service.title}`}
            />

            {/* Image */}
            <div className="relative">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Text area with subtle woodgrain */}
            <div className="relative p-6">
              <img
                src="/img/woodgrain.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ opacity: 0.12 }}
              />
              <div className="relative z-0">
                <h3 className="text-2xl font-bold mb-2 text-blue-800">{service.title}</h3>
                <p className="text-gray-800 text-base md:text-lg">
                  {service.desc}
                </p>

                {/* Optional: very light micro-CTA, hidden on desktop until hover */}
                <div className="mt-4">
                  <span className="text-blue-700 text-lg font-semibold inline-flex items-center gap-1
                                  md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                    Get quote →
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        ))}

        </div>

        {/* CTA Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
          <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                         text-white text-xl font-semibold px-6 py-3 shadow-md"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.97 }}>
            <a
              href="tel:18178793087"
              className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                         border-2 border-blue-700 hover:bg-blue-700 hover:text-white
                         text-xl font-semibold px-6 py-3 shadow-sm transition"
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
