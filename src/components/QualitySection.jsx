import { motion } from "framer-motion";

const QualitySection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-red-700 header-font leading-tight">
            High-Quality Services<br />At Honest, Affordable Prices
          </h1>
        </motion.div>

        {/* Video Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-2/3"
        >
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <video
              src="/img/lspm-vid2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;
