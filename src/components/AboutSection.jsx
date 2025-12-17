import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const trustPoints = [
  "Family-owned & locally operated in Fort Worth, TX",
  "Residential + commercial property maintenance across DFW",
  "Clear pricing, honest recommendations, reliable scheduling",
  "One crew for pressure washing, soft washing, fencing, haul-off & more",
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6" aria-labelledby="about-lonestar-heading">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image LEFT */}
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
              alt="Lone Star Property Maintenance mascot illustration representing local Texas service"
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
            style={{ opacity: 0.12 }}
          />

          {/* content */}
          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/65 to-white/85 p-6 md:p-8">
            <p className="text-lg font-semibold tracking-widest text-red-600 uppercase mb-2">
              About Us
            </p>

            <h2
              id="about-lonestar-heading"
              className="text-4xl md:text-5xl font-bold mb-4 text-blue-900"
            >
              Fort Worth & DFW Property Maintenance You Can Trust
            </h2>

            <div className="space-y-4 max-w-prose text-lg md:text-xl text-gray-800 leading-relaxed">
              <p>
                <span className="font-semibold">Lone Star Property Maintenance</span> is a{" "}
                <span className="font-semibold">family-owned</span> company based in{" "}
                <span className="font-semibold">Fort Worth, Texas</span>, proudly serving{" "}
                <span className="font-semibold">DFW and surrounding communities</span>. We’re built on hard
                work, honesty, and doing right by our customers - every single job.
              </p>

              <p>
                We help property owners keep homes and commercial sites clean, protected, and looking sharp year
                round. That includes{" "}
                <span className="font-semibold">pressure washing</span>,{" "}
                <span className="font-semibold">soft washing</span>,{" "}
                <span className="font-semibold">fencing</span>,{" "}
                <span className="font-semibold">haul-off</span>,{" "}
                <span className="font-semibold">concrete sealing</span>, and custom maintenance packages.
              </p>

              <p>
                Texas weather can be rough - heat, storms, and everything in between. Our goal is simple:
                show up on time, communicate clearly, and leave your property better than we found it.
              </p>
            </div>

            {/* Trust bullets (UX + SEO scanning) */}
            <ul className="mt-6 space-y-2 text-gray-800">
              {trustPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <Check className="w-4 h-4 mt-1 text-blue-700" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  aria-label="Request a free quote for property maintenance in Fort Worth and DFW"
                >
                  Request a Free Quote
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
                  aria-label="Call Lone Star Property Maintenance at 817-879-3087"
                >
                  Call: (817) 879-3087
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
