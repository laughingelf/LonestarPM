import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image LEFT (no border or shadow) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <picture>
            <source srcSet="/img/mascot-about-lg.png" type="image/png" />
            <img
              src="/img/mascot-about-lg.png"
              alt="Lone Star mascot illustration"
              loading="lazy"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl"
            />
          </picture>
        </motion.div>

        {/* Text Card RIGHT */}
        <motion.article
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
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
          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/65 to-white/80 p-6 md:p-8">
            <p className="text-lg font-semibold tracking-widest text-red-600 uppercase mb-2">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Who We Are
            </h2>

            <div className="space-y-4 max-w-prose text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                At Lone Star Property Maintenance, we are a family owned and operated business based in
                Fort Worth, Texas. We serve the DFW area and surrounding communities, bringing our passion
                for quality work and customer service to every job. Our values are rooted in hard work,
                honesty, and the desire to make a positive impact.
              </p>
              <p>
                No project is too large or too small. Whether it is restoring a driveway or maintaining a
                commercial site, we bring the same commitment to excellence. Lone Star is your trusted partner
                for property maintenance that fits your needs and budget.
              </p>
              <p>
                As Texans, we know what our weather puts properties through. From intense heat to rough storms,
                we are ready to help you keep things looking sharp year round.
              </p>
              <p>
                Whether you are refreshing curb appeal or tackling a large upgrade, we treat every property with
                care and precision. Our team is here to exceed your expectations every time.
              </p>
            </div>

            {/* CTAs */}
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
                  Request a Free Quote
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a
                  href="tel:18178793087"
                  className="inline-flex items-center justify-center rounded-full bg-white text-blue-700
                             border-2 border-blue-700 hover:bg-blue-700 hover:text-white
                             text-lg font-semibold px-6 py-3 shadow-sm transition"
                >
                  Call Us: (817) 879-3087
                </a>
              </motion.div>
            </div>
          </div>

          {/* brand accent */}
          <span
            className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                       bg-gradient-to-r from-red-600 via-blue-700 to-gray-500"
          />
        </motion.article>
      </div>
    </section>
  );
};

export default AboutSection;
