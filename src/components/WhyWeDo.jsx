import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyWeDoSection = () => {
  return (
    <section className="bg-gray-200 py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 header-font">
            Why We Do What We Do
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed">
            At Lone Star Property Maintenance, we take pride in being a family-owned and operated business based in Fort Worth, Texas, proudly serving DFW and surrounding areas. Built on strong values, hard work, and a commitment to customer satisfaction, we treat every property like it’s our own—because when you choose Lone Star, you're part of the family.
            <br /><br />
            No job is too big or too small—we bring the same attention to detail and professionalism to every project. Whether you're a homeowner looking to refresh your driveway, or a business in need of regular property maintenance, Lone Star is your one-stop solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-blue-700 text-white text-lg px-6 py-3 rounded-lg shadow hover:shadow-lg transition"
              >
                Get a Free Estimate
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-white text-blue-700 border border-blue-700 text-lg px-6 py-3 rounded-lg shadow hover:bg-blue-700 hover:text-white transition"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <picture>
            <source srcSet="/img/working.jpg" type="image/jpg" />
            <img
              src="/img/working.jpg"
              alt="Mission"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-lg border border-gray-400"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeDoSection;
