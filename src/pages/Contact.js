import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <section className="max-w-xl mx-auto px-6 py-20">
      <motion.h2 
        className="text-3xl font-bold text-gray-800 mb-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >Contact Me</motion.h2>

      <motion.form 
        className="bg-white rounded-lg shadow-md p-6 space-y-4 border border-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-indigo-400" />
        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-indigo-400" />
        <textarea placeholder="Your Message" className="w-full border border-gray-300 p-3 rounded-md h-32 focus:ring-2 focus:ring-indigo-400"></textarea>
        <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-md hover:bg-indigo-700 transition duration-300">Send Message</button>
      </motion.form>
    </section>
  );
}

export default Contact;