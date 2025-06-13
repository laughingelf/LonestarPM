import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PageHero = ({ title, subtitle, ctaLabel, ctaLink, image }) => {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image or Solid Color */}
      {image ? (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-700 z-0" />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1] }}
        className="relative z-20 text-center max-w-4xl px-4 text-white"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl md:text-6xl header-font font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="text-xl md:text-2xl mb-8"
        >
          {subtitle}
        </motion.p>

        {/* CTA Button with hover animation */}
        <motion.div
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            to={ctaLink}
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-lg text-white text-xl header-font font-semibold transition shadow-md"
          >
            {ctaLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PageHero;
