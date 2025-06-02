import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    <div className="w-full max-w-4xl mx-auto py-8">
      {/* Main Image */}
      <div className="relative mb-6 ">
        <div className="relative mb-6 flex items-center justify-center">
          <img
            src={images[currentIndex]}
            alt={`Main Gallery ${currentIndex + 1}`}
            className="w-auto h-[70vh] object-contain rounded-xl bg-black"
          />
        </div>
        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-black hover:bg-red-600 p-2 rounded-full shadow"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-black hover:bg- p-2 rounded-full shadow"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex overflow-x-auto scrollbar-hide space-x-3 px-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Thumb ${i + 1}`}
            onClick={() => setActiveImage(i)}
            className={`w-24 h-16 object-cover rounded-md cursor-pointer border-2 ${
              currentIndex === i ? 'border-blue-500' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
