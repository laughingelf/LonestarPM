import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollingGallery = () => {
  const imageCount = 23;
  const images = [...Array(imageCount)].map((_, i) => `/img/gal${i + 1}.jpg`);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const setActiveImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-12">
      {/* Main Image Display */}
      <div className="relative overflow-hidden rounded-2xl shadow-xl bg-black">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="w-full h-[70vh] object-contain rounded-2xl"
          />
        </AnimatePresence>

        {/* Nav Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full shadow transition"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-2 rounded-full shadow transition"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      </div>

      {/* Thumbnail Navigation */}
      <div className="mt-6 flex overflow-x-auto scrollbar-hide space-x-3 py-2 px-1">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Thumbnail ${i + 1}`}
            onClick={() => setActiveImage(i)}
            whileHover={{ scale: 1.05 }}
            className={`w-24 h-16 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${
              currentIndex === i ? 'border-blue-600 ring ring-blue-300' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollingGallery;
