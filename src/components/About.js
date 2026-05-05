// components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
                alt="Salon interior"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800 mb-4">
              About Lumina
            </h2>
            <div className="w-16 h-0.5 bg-rose-300 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a passion for celebrating individuality, Lumina Beauty has been a sanctuary
              for self-care and transformation since 2015. Our team of award-winning artists and
              therapists are dedicated to providing an unparalleled experience that blends luxury with
              genuine care.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that beauty is an expression of your inner radiance. Every treatment is
              personalized to enhance your natural features, using only premium, cruelty-free products
              to ensure both stunning results and ethical practices.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <Award className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                <p className="text-2xl font-serif font-semibold text-gray-800">10+</p>
                <p className="text-xs text-gray-500">Years Excellence</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                <p className="text-2xl font-serif font-semibold text-gray-800">15k+</p>
                <p className="text-xs text-gray-500">Happy Clients</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-rose-400 mx-auto mb-2" />
                <p className="text-2xl font-serif font-semibold text-gray-800">100%</p>
                <p className="text-xs text-gray-500">Satisfaction</p>
              </div>
            </div>

            <button className="px-6 py-2 border border-rose-400 text-rose-500 rounded-full hover:bg-rose-400 hover:text-white transition-all duration-300">
              Discover Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;