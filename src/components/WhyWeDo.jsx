import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WhyWeDoSection = () => {
  return (
    <section
      className="bg-white py-16 px-6 sm:px-12 lg:px-20"
      aria-labelledby="why-lonestar-heading"
    >
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
            style={{ opacity: 0.12 }}
          />

          {/* content */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/60 to-white/90 p-6 md:p-8">
            <p className="text-xl font-semibold tracking-widest text-red-600 uppercase mb-2">
              Our Mission
            </p>

            <h2
              id="why-lonestar-heading"
              className="text-4xl md:text-5xl font-bold mb-4 text-blue-900"
            >
              Property Maintenance in Fort Worth & DFW - Done the Right Way
            </h2>

            <div className="space-y-4 max-w-prose">
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                At <span className="font-semibold">Lone Star Property Maintenance</span>, we’re a
                family-owned and operated team based in <span className="font-semibold">Fort Worth, TX</span>,
                proudly serving <span className="font-semibold">DFW</span> and surrounding areas.
                We believe in honest work, consistent communication, and treating every home or commercial site
                like it’s our own - because when you hire Lone Star, you’re not just another job on the schedule.
              </p>

              <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                No project is too big or too small. Whether you need{" "}
                <span className="font-semibold">pressure washing</span>,{" "}
                <span className="font-semibold">soft washing</span>,{" "}
                <span className="font-semibold">fence work</span>,{" "}
                <span className="font-semibold">haul-off</span>,{" "}
                <span className="font-semibold">concrete sealing</span>, or ongoing{" "}
                <span className="font-semibold">property maintenance</span>, we’re a
                one-stop solution for keeping your property clean, protected, and looking its best year-round.
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
                  aria-label="Get a free estimate for property maintenance in Fort Worth and DFW"
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
                  aria-label="View Lone Star Property Maintenance services"
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
              alt="Lone Star Property Maintenance crew working on a property in the Fort Worth and DFW area"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-2xl shadow-lg ring-1 ring-gray-300"
              loading="lazy"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeDoSection;
