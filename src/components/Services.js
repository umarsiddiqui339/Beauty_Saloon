// components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Sparkles, Droplets, Hand, Wind } from 'lucide-react';

const services = [
  {
    icon: <Scissors size={40} />,
    title: 'Hair Styling',
    description: 'Precision cuts, vibrant colors, and elegant styling for any occasion.',
    price: '$65+',
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Makeup',
    description: 'Flawless application for everyday glam or special events.',
    price: '$85+',
  },
  {
    icon: <Droplets size={40} />,
    title: 'Skincare',
    description: 'Customized facials and rejuvenating treatments for radiant skin.',
    price: '$95+',
  },
  {
    icon: <Hand size={40} />,
    title: 'Nails',
    description: 'Manicures, pedicures, and art for perfectly polished nails.',
    price: '$45+',
  },
  {
    icon: <Wind size={40} />,
    title: 'Spa',
    description: 'Massages and body treatments for ultimate relaxation.',
    price: '$120+',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white to-rose-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light text-gray-800">Our Services</h2>
          <div className="w-20 h-0.5 bg-rose-300 mx-auto mt-4 mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Experience luxury treatments tailored to enhance your natural beauty
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="text-rose-400 mb-4 flex justify-center group-hover:text-rose-500 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{service.description}</p>
              <p className="text-rose-500 font-semibold text-lg">{service.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;