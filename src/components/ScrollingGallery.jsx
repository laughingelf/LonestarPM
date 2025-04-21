import React, { useEffect, useRef, useState } from 'react';

const ScrollingGallery = () => {
  const galleryRef = useRef(null);
  const [scrollingForward, setScrollingForward] = useState(true);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      const gallery = galleryRef.current;
      if (gallery) {
        const maxScrollLeft = gallery.scrollWidth - gallery.clientWidth;

        if (scrollingForward) {
          gallery.scrollLeft += 2;
          if (gallery.scrollLeft >= maxScrollLeft) {
            setScrollingForward(false);
          }
        } else {
          gallery.scrollLeft -= 2;
          if (gallery.scrollLeft <= 0) {
            setScrollingForward(true);
          }
        }
      }
    }, 30); // Adjust speed

    return () => clearInterval(scrollInterval);
  }, [scrollingForward]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={galleryRef}
        className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth py-4 px-8"
      >
        {[...Array(23)].map((_, i) => (
          <div key={i} className="flex-shrink-0 rounded-lg ">
            <img
              id='gallery-img'
              src={`/img/gal${i + 1}.jpg`}
              alt={`Gallery ${i + 1}`}
              className="w-64 h-48 rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingGallery;
