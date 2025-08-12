import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyWeDoSection = () => {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Card */}
        <motion.article
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg
                     hover:ring-gray-400 hover:shadow-xl transition overflow-hidden"
        >
          {/* woodgrain texture */}
          <img
            src="/img/woodgrain.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            // style={{ opacity: 0.12 }}
          />

          {/* content */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/60 to-white/90 p-6 md:p-8">
            <p className="text-xl font-semibold tracking-widest text-red-600 uppercase mb-2">
              Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Why We Do What We Do
            </h2>

            <div className="space-y-4 max-w-prose">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                At Lone Star Property Maintenance, we take pride in being a family owned and operated business based in Fort Worth, proudly serving DFW and the surrounding areas. Built on strong values, hard work, and a commitment to customer satisfaction, we treat every property like it is our own — because when you choose Lone Star, you are part of the family.
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                No job is too big or too small. Whether you are a homeowner looking to refresh your driveway or a business in need of regular property maintenance, Lone Star is your one stop solution.
              </p>
            </div>


            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center rounded-full bg-red-600 hover:bg-red-700
                             text-white text-lg font-semibold px-6 py-3 shadow-md"
                >
                  Get a Free Estimate
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/services"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                             border-2 border-blue-700 hover:bg-blue-700 hover:text-white
                             text-lg font-semibold px-6 py-3 shadow-sm transition"
                >
                  View Services
                </Link>
              </motion.div>
            </div>
          </div>

          {/* brand accent */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                       bg-gradient-to-r from-red-600 via-blue-700 to-gray-500"
          />
        </motion.article>

        {/* Image Frame */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <picture>
            <source srcSet="/img/working.jpg" type="image/jpg" />
            <img
              src="/img/working.jpg"
              alt="Our team at work on site"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg ring-1 ring-gray-300"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeDoSection;
