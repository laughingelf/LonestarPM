import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  // Close menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Show on scroll up, hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 50 || currentY < lastScrollY) setShowNav(true);
      else setShowNav(false);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const linkBase =
    "relative inline-flex items-center px-2 py-1 text-gray-800 hover:text-blue-700 transition";
  const activeClasses =
    "after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:bg-gradient-to-r after:from-blue-700 after:to-red-600 after:rounded-full";

  return (
    <AnimatePresence>
      {showNav && (
        <motion.nav
          id="navbar"
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.35 }}
          className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur ring-1 ring-gray-200 shadow-sm"
        >
          <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
            {/* Brand */}
            <Link
              to="/home"
              onClick={() => window.scrollTo(0, 0)}
              className="flex items-center gap-3"
              aria-label="Lone Star Property Maintenance Home"
            >
              {/* <img
                className="h-10 w-auto"
                src="/img/nav-mascot.svg"
                alt=""
                loading="eager"
                decoding="async"
              /> */}
              <span className="text-xl md:text-2xl font-semibold text-gray-900">
                Lone Star Property Maintenance
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-6 text-lg font-medium">
              {[
                { to: "/home", label: "Home" },
                { to: "/about-us", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => window.scrollTo(0, 0)}
                  className={({ isActive }) =>
                    `${linkBase} ${isActive ? activeClasses : "after:bg-transparent"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Primary CTA */}
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center rounded-full bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 shadow-sm transition"
              >
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="sm:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100 transition"
              title="Menu"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="ls-mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile overlay + sheet */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.button
                  aria-hidden
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-40 bg-black/30 sm:hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.div
                  ref={menuRef}
                  id="ls-mobile-menu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="sm:hidden relative z-50 bg-white border-t border-gray-200 px-6 pt-4 pb-6 text-lg text-gray-800"
                >
                  <div className="flex flex-col gap-4">
                    <NavLink
                      to="/home"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeClasses : ""}`
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/about-us"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeClasses : ""}`
                      }
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/services"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeClasses : ""}`
                      }
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/contact"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo(0, 0);
                      }}
                      className={({ isActive }) =>
                        `${linkBase} ${isActive ? activeClasses : ""}`
                      }
                    >
                      Contact Us
                    </NavLink>

                    {/* CTAs */}
                    <div className="mt-2 flex flex-col gap-2">
                      <Link
                        to="/contact"
                        onClick={() => {
                          setIsOpen(false);
                          window.scrollTo(0, 0);
                        }}
                        className="inline-flex w-full items-center justify-center rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-2.5 shadow-sm transition"
                      >
                        Get a Free Quote
                      </Link>
                      <a
                        href="tel:+18178793087"
                        className="inline-flex w-full items-center justify-center rounded-full bg-white text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white font-semibold px-5 py-2.5 shadow-sm transition"
                      >
                        <Phone className="w-5 h-5 mr-2" /> (817) 879-3087
                      </a>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
