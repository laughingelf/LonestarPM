import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const MissionSection = ({ videoSrc = "/videos/lonestar-work.mp4" }) => {
  return (
    <section
      className="bg-white text-black py-16 px-6"
      aria-labelledby="mission-values-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg font-semibold tracking-widest text-red-600 uppercase">
            Mission and Values
          </p>

          <h2
            id="mission-values-heading"
            className="mt-2 text-4xl md:text-5xl font-bold text-blue-900"
          >
            Our Mission: Reliable Property Maintenance in Fort Worth & DFW
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-700 text-base md:text-lg">
            We help homeowners and businesses protect their property, improve curb appeal, and stay ahead of
            exterior upkeep with dependable service, clear communication, and honest pricing.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* LEFT: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full aspect-video">
              <img
                src="/img/lspm-fence.jpg"
                alt="Lone Star Property Maintenance crew working on fencing and exterior property upkeep in the Fort Worth and DFW area"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* RIGHT: Text Card */}
          <motion.article
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-1/2 rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg
                       hover:ring-gray-400 hover:shadow-xl transition overflow-hidden"
          >
            {/* subtle woodgrain */}
            <img
              src="/img/woodgrain.png"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover pointer-events-none"
              style={{ opacity: 0.12 }}
            />

            <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/55 to-white/80 p-8 md:p-12">
              <p className="mb-6 text-lg md:text-xl text-gray-800 leading-relaxed">
                At{" "}
                <span
                  style={{ fontFamily: "Rye, serif" }}
                  className="text-red-600 text-2xl md:text-3xl underline"
                >
                  Lone Star Property Maintenance
                </span>
                , our mission is to deliver high-quality, reliable{" "}
                <span className="font-semibold">property maintenance</span> and{" "}
                <span className="font-semibold">exterior cleaning</span> services that protect and enhance the
                value of every home and business we serve across{" "}
                <span className="font-semibold">Fort Worth, DFW, and surrounding areas</span>.
              </p>

              <p className="mb-6 text-lg md:text-xl text-gray-800 leading-relaxed">
                From{" "}
                <span className="font-semibold">pressure washing</span> and{" "}
                <span className="font-semibold">soft washing</span> to{" "}
                <span className="font-semibold">fencing</span>,{" "}
                <span className="font-semibold">haul-off</span>, and{" "}
                <span className="font-semibold">concrete sealing</span>, we focus on honest work, safe
                techniques, and results that last. Want to see everything we offer?{" "}
                <Link to="/services" className="text-blue-800 font-semibold underline underline-offset-4">
                  View our services
                </Link>
                .
              </p>

              <ul className="mt-6 space-y-2 text-gray-800 text-lg md:text-xl">
                {[
                  "Integrity First",
                  "Quality You Can Count On",
                  "Hard Work, Always",
                  "Respect for Our Community",
                  "Customer-First Service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-5 h-5 mt-0.5 text-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* brand accent */}
            <span
              className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                         bg-gradient-to-r from-red-600 via-blue-700 to-gray-500"
            />
          </motion.article>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-2xl rounded-full font-semibold shadow-md transition"
            aria-label="Contact Lone Star Property Maintenance for a free quote in Fort Worth and DFW"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
