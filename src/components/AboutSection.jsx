import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mx-auto flex justify-center"
        >
          <img
            src="/img/mascot-about-lg.png"
            alt="Lone Star Mascot"
            className="rounded-xl w-full"
            loading="eager"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-gray-800 text-xl md:text-2xl space-y-6 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 header-font text-gray-900">
            Who We Are
          </h2>

          <p>
            At Lone Star Property Maintenance, we're proud to be a family-owned and operated business based in Fort Worth, Texas.
            We serve the DFW area and surrounding communities, bringing our passion for quality work and customer service to every job.
            Our values are rooted in hard work, honesty, and the desire to make a positive impact.
          </p>

          <p>
            No project is too large or too small—whether it's restoring a driveway or maintaining a commercial site, we bring the same
            commitment to excellence. Lone Star is your trusted partner for property maintenance solutions that work with your needs and budget.
          </p>

          <p>
            As Texans, we know what our weather puts properties through. From intense heat to rough storms, we’re prepared to help you keep things
            looking sharp year-round.
          </p>

          <p>
            Whether you're refreshing curb appeal or tackling a large-scale upgrade, we treat every property with care and precision.
            Our team is here to exceed your expectations—every time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start pt-6">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4 sm:mb-0 sm:mr-4"
          >
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-md transition block text-center"
            >
              Request a Free Quote
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <a
              href="tel:8178793087"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-xl font-semibold shadow-md transition block text-center"
            >
              Call Us: (817) 879-3087
            </a>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
