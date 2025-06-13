import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white pt-12 pb-6 px-6 text-lg shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 w-full md:w-2/3">
          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 font-medium justify-center md:justify-start">
            <Link onClick={() => window.scrollTo(0, 0)} to="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/services" className="hover:underline">
              Services
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>

          {/* Slogan */}
          <div className="text-center md:text-left text-xl italic text-gray-300">
            “Property Maintenance You Can Count On.”
          </div>

          {/* Service Info & CTA */}
          <div className="text-gray-400 text-sm">
            Proudly serving Fort Worth and the greater DFW area. Licensed & Insured.
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:8178793087"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition"
            >
              Call Us: (817) 879-3087
            </a>
          </div>
        </div>

        {/* Social & Location */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-end text-center md:text-right space-y-4">
          <div className="flex space-x-6">
            <motion.a
              href="https://www.facebook.com/profile.php?id=100072807586539"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Facebook"
              className="text-white hover:text-blue-500"
            >
              <Facebook className="w-7 h-7" />
            </motion.a>

            <motion.a
              href="https://www.facebook.com/profile.php?id=100072807586539"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Instagram"
              className="text-white hover:text-pink-500"
            >
              <Instagram className="w-7 h-7" />
            </motion.a>
          </div>

          <div className="text-sm text-gray-500 mt-4 md:mt-0 ">
            Fort Worth, TX • Lone Star Property Maintenance
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center  text-sm text-gray-500">
        &copy; {currentYear} Lone Star Property Maintenance. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
