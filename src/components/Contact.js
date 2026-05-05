import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800">Visit Us</h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto mt-4 mb-6" />
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-rose-400 mt-1" />
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">Our Location</h3>
                <p className="text-gray-500">123 Beauty Avenue, New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-rose-400 mt-1" />
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">Call Us</h3>
                <p className="text-gray-500">(212) 555-0123</p>
                <p className="text-gray-500 text-sm">Mon-Sun, 9am - 8pm</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-rose-400 mt-1" />
              <div>
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-1">Email Us</h3>
                <p className="text-gray-500">hello@luminabeauty.com</p>
                <p className="text-gray-500 text-sm">Inquiries within 24h</p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="p-2 bg-rose-50 rounded-full text-rose-400 hover:bg-rose-400 hover:text-white transition-all"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="p-2 bg-rose-50 rounded-full text-rose-400 hover:bg-rose-400 hover:text-white transition-all"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  href="#"
                  className="p-2 bg-rose-50 rounded-full text-rose-400 hover:bg-rose-400 hover:text-white transition-all"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1x3024.2219901290355!2d-74.00369368400567!3d40.71312937933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb6d44d%3A0xc39eeb9d27ed7c29!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Salon Location Map"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;