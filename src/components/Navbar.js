// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-serif font-light tracking-wide cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-rose-400">Lumina</span>
          <span className={isScrolled ? 'text-gray-800' : 'text-white'}> Beauty</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.button
              key={link}
              whileHover={{ scale: 1.05 }}
              className={`text-sm uppercase tracking-wider transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white/90 hover:text-white'
              }`}
              onClick={() => scrollToSection(link)}
            >
              {link}
            </motion.button>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-2 bg-rose-400 text-white text-sm uppercase tracking-wider rounded-full hover:bg-rose-500 transition-colors shadow-md"
            onClick={() => scrollToSection('booking')}
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg py-5"
        >
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button
                key={link}
                className="text-gray-700 uppercase tracking-wider hover:text-rose-500 transition-colors"
                onClick={() => scrollToSection(link)}
              >
                {link}
              </button>
            ))}
            <button
              className="px-6 py-2 bg-rose-400 text-white uppercase tracking-wider rounded-full hover:bg-rose-500 transition-colors"
              onClick={() => scrollToSection('booking')}
            >
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;