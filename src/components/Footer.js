import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-4">Lumina Beauty</h3>
            <p className="text-sm leading-relaxed">
              Enhancing your natural beauty with premium treatments and personalized care.
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-white/60 hover:text-rose-400 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-white/60 hover:text-rose-400 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-white/60 hover:text-rose-400 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Services', 'About', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="hover:text-rose-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>11:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-rose-400" />
                <span>123 Beauty Avenue, NYC 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-rose-400" />
                <span>(212) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-rose-400" />
                <span>hello@luminabeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>&copy; 2024 Lumina Beauty. All rights reserved. | Designed with ❤️ for elegance</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;