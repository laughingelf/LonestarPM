import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav id='navbar'>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
        <img className='h-12 w-auto' src='/img/nav-mascot.svg' alt='Lonestar Mascot' />
        <Link onClick={() => window.scrollTo(0, 0)} to="/home">Lonestar Property Management</Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-white"
          title='drop down menu'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <div
          ref={menuRef}
          className={`${
            isOpen ? 'flex bg-gray-500' : 'hidden'
          } flex-col pl-4 absolute top-16 left-0 w-full  z-50 transition-all duration-300 ease-in-out sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:w-auto`}
        >
          <Link onClick={() => window.scrollTo(0, 0)} to="/home">Home</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/about-us">About Us</Link>
          {/* <Link to="/testimonials" className="px-4 py-2 hover:text-gray-400">Testimonials</Link> */}
          <Link onClick={() => window.scrollTo(0, 0)} to="/services">Services</Link>
          <Link onClick={() => window.scrollTo(0, 0)} to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
