import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';

function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 py-20 max-w-6xl mx-auto gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="text-center md:text-left"
      >
        
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
          Hi, I'm Fadel 👋
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
          I'm a dedicated IT student with a passion for building clean, efficient, and modern web applications. Currently focused on front-end technologies and UI/UX design.
        </p>
        <a 
          href="#projects" 
          className="mt-6 inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition duration-300 shadow-sm"
        >
          Explore My Work
        </a>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img 
          src={profile} 
          alt="Fadel Profile" 
          className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
}

export default Home;