import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MissionSection = ({ videoSrc = "/videos/lonestar-work.mp4" }) => {
  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "Rye, serif" }}
          className="text-5xl font-bold text-center underline text-shadow-lg text-gray-900"
        >
          Our Mission & Values
        </motion.h2>

        {/* Content Grid */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Video or Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
            >
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full aspect-video">
                <img
                src="/img/lspm-fence.jpg" // Replace with your actual image path
                alt="Lone Star crew working"
                className="w-full h-full object-cover"
                />
            </div>
            </motion.div>


          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-gray-100 text-lg md:text-xl leading-relaxed p-8 md:p-12 rounded-lg shadow-lg"
          >
            <p className="mb-6">
              At{" "}
              <span
                style={{ fontFamily: "Rye, serif" }}
                className="text-red-600 text-2xl md:text-3xl underline text-shadow-lg"
              >
                Lone Star Property Maintenance
              </span>
              , our mission is to deliver high-quality, reliable exterior cleaning and property maintenance services that protect and enhance the value of every home and business we touch. We’re committed to honest work, exceptional results, and building lasting relationships with our community through trust, integrity, and Texas-sized customer care.
            </p>

            <ul className="list-disc list-inside font-semibold text-2xl underline space-y-2">
              <li>Integrity First</li>
              <li>Quality You Can Count On</li>
              <li>Hard Work, Always</li>
              <li>Respect for Community</li>
              <li>Customer-First Service</li>
            </ul>
          </motion.div>
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
            className="bg-red-600 hover:bg-blue-700 text-white px-8 py-4 text-2xl rounded-lg font-semibold shadow-lg transition transform hover:scale-110"
          >
            Contact Us Today!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
