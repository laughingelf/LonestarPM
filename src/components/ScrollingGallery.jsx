import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollingGallery = () => {
  const imageCount = 23;
  const images = [...Array(imageCount)].map((_, i) => `/img/gal${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);
  const frameRef = useRef(null);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const setActiveImage = (index) => setCurrentIndex(index);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Frame card */}
      <div
        ref={frameRef}
        className="relative rounded-2xl bg-white ring-1 ring-gray-300 shadow-lg overflow-hidden"
      >
        {/* brand accent */}
        <span className="pointer-events-none absolute inset-x-0 top-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-red-600 via-blue-700 to-gray-500" />

        {/* subtle woodgrain under content */}
        <img
          src="/img/woodgrain.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ opacity: 0.08 }}
        />

        <div className="relative z-10 p-3 md:p-4">
          {/* Main Image Display */}
          <div className="relative overflow-hidden rounded-xl bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt={`Gallery image ${currentIndex + 1} of ${images.length}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="w-full h-[70vh] object-contain"
              />
            </AnimatePresence>

            {/* Nav Arrows */}
            <button
              onClick={goToPrevious}
              aria-label="Previous image"
              className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-blue-800 ring-1 ring-blue-200 p-2 md:p-3 shadow transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next image"
              className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-white/90 hover:bg-white text-blue-800 ring-1 ring-blue-200 p-2 md:p-3 shadow transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter chip */}
            <div className="absolute bottom-3 right-3 rounded-full bg-white/90 text-gray-900 text-sm px-3 py-1 ring-1 ring-gray-300 shadow">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="relative mt-6">
            {/* woodgrain is already behind from parent; keep thumbnails above */}
            <div className="flex overflow-x-auto scrollbar-hide gap-3 py-2">
              {images.map((img, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  whileHover={{ scale: 1.04 }}
                  className={`shrink-0 rounded-lg overflow-hidden ring-2 transition ${
                    currentIndex === i
                      ? 'ring-blue-700'
                      : 'ring-transparent hover:ring-gray-300'
                  }`}
                  aria-label={`Show image ${i + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${i + 1}`}
                    className="w-28 h-18 object-cover block"
                    loading="lazy"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollingGallery;
