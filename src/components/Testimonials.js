// components/Testimonials.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: "Absolutely incredible experience! The team at Lumina made me feel so pampered and beautiful. I've never loved my hair more.",
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    service: 'Hair Styling',
  },
  {
    id: 2,
    name: 'Emily Chen',
    rating: 5,
    text: 'The facial was transformative. My skin has never glowed like this. Professional, relaxing, and luxurious.',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    service: 'Skincare',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    rating: 5,
    text: 'Best makeup I have ever had for my wedding day. It lasted all night and looked perfect in photos.',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    service: 'Makeup',
  },
  {
    id: 4,
    name: 'Amanda Davis',
    rating: 5,
    text: 'The spa package was pure bliss. The attention to detail and serene atmosphere is unmatched.',
    image: 'https://randomuser.me/api/portraits/women/90.jpg',
    service: 'Spa',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800">Client Love</h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto mt-4 mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Real stories from our cherished clients
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-rose-50 to-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-rose-300"
                />
              </div>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg italic leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="text-xl font-serif font-semibold text-gray-800">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-rose-400 text-sm mt-1">{testimonials[currentIndex].service}</p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-rose-400" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-rose-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-rose-400" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-rose-400' : 'bg-rose-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;