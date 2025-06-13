import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Scroll behavior to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 50 || currentY < lastScrollY) {
        setShowNav(true); // Scrolling up
      } else {
        setShowNav(false); // Scrolling down
      }
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          id="navbar"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all"
        >
          <div className="max-w-7xl mx-auto px-4 py-0 flex items-center justify-between">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <img
                className="h-18 w-auto"
                src="/img/nav-mascot.svg"
                alt="Lonestar Mascot"
              />
              <Link
                className="text-xl md:text-2xl font-semibold text-gray-900"
                onClick={() => window.scrollTo(0, 0)}
                to="/home"
              >
                Lone Star Property Maintenance
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              className="sm:hidden text-gray-800"
              title="Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden sm:flex gap-6 text-lg text-gray-800 font-medium">
              <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
              <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
                About Us
              </Link>
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                Services
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={menuRef}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="sm:hidden bg-white border-t border-gray-200 px-6 pt-4 pb-6 text-lg text-gray-700 flex flex-col gap-4"
              >
                <Link to="/home" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                  Home
                </Link>
                <Link to="/about-us" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                  About Us
                </Link>
                <Link to="/services" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                  Services
                </Link>
                <Link to="/contact" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}>
                  Contact Us
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
