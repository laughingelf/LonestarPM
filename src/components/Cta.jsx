import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTAButton = ({
  to = "/contact",
  label = "Get Your Free Quote",
  image = "/img/flag.svg", // Replace with your actual image path
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex justify-center"
    >
      <Link
        to={to}
        onClick={() => window.scrollTo(0, 0)}
        className="relative text-white text-2xl font-semibold px-10 py-4 rounded-xl shadow-lg shadow-gray-600 overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300 group"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-100 transition-opacity duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Overlay color */}
        <div className="absolute inset-0 bg-black/40 rounded-xl pointer-events-none" />

        {/* Text */}
        <span className="relative z-10 text-3xl md:text-5xl header-font">{label}</span>
      </Link>
    </motion.div>
  );
};

export default CTAButton;
