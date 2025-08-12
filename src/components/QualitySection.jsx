import { motion } from "framer-motion";

const QualitySection = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Card */}
        <motion.article
          initial={{ opacity: 0, x: -30 }}
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

          <div className="relative z-10 rounded-2xl bg-gradient-to-b from-white/95 to-white/90 p-6 md:p-8">
            <p className="text-lg font-semibold tracking-widest text-red-600 uppercase mb-2">
              Our Standard
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
              High Quality Services
              <br />
              <span className="text-gray-900">At Honest, Affordable Prices</span>
            </h2>
          </div>

          {/* brand accent */}
          {/* <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                           bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" /> */}
        </motion.article>

        {/* Video Card */}
        <motion.article
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl ring-1 transition overflow-hidden"
        >
          {/* subtle woodgrain behind video frame */}
          {/* <img
            src="/img/woodgrain.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            style={{ opacity: 0.08 }}
          /> */}

          <div className="relative z-10 p-3 md:p-4">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/">
              <video
                src="/img/lspm-vid2.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* brand accent */}
          {/* <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl
                           bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" /> */}
        </motion.article>
      </div>
    </section>
  );
};

export default QualitySection;
