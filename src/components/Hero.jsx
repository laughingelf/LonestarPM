import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[60vh] overflow-hidden mt-20">
      {/* Background Image */}
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/img/lspm-header2.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 640px)"
          srcSet="/img/lspm-header2-sm.webp"
          type="image/webp"
        />
        <img
          src="/img/lspm-header2-sm.png"
          alt="Lone Star Property Maintenance"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </picture>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Split Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center h-full gap-8">
        {/* Left Text Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-white space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold header-font text-center md:text-left">
            Lone Star Property Maintenance
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-center md:text-left">
            Property Maintenance You Can Count On
          </h2>
           <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* Animated Link Button */}
            <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
            <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="bg-blue-700 text-white text-2xl px-6 py-3 rounded-lg shadow text-center block"
            >
                Get a Free Estimate
            </Link>
            </motion.div>

            {/* Animated Call Button */}
            <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            >
            <a
                href="tel:8178793087"
                className="bg-blue-700 text-white text-2xl px-6 py-3 rounded-lg shadow text-center block"
            >
                Call Us: (817) 879-3087
            </a>
            </motion.div>
        </div>
        </motion.div>

        {/* Right Video Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-2/3"
        >
          <div className="aspect-video w-full rounded-xl shadow-lg overflow-hidden border border-white/10">
            <video
              className="w-full h-full object-cover"
              src="/img/lspm-vid2.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
