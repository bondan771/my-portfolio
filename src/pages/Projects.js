// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  const skills = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  ];

  const projects = [
    {
      title: "Website Perpustakaan Kampus",
      description: "Website statis untuk perpustakaan kampus menggunakan HTML, CSS, dan JavaScript dasar. Menampilkan jadwal buka, koleksi buku, dan kontak.",
      image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Form Pendaftaran Seminar",
      description: "Formulir pendaftaran seminar sederhana dengan validasi input menggunakan JavaScript. Data disimpan di localStorage.",
      image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Blog Pribadi Sederhana",
      description: "Blog statis tentang pengalaman belajar pemrograman. Dibuat dengan HTML dan CSS tanpa framework. Hosting menggunakan GitHub Pages.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Aplikasi To-Do List",
      description: "Aplikasi daftar tugas harian dengan fitur tambah, edit, dan hapus task. Menggunakan JavaScript DOM manipulation.",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Kalkulator Sederhana",
      description: "Kalkulator web dasar dengan operasi matematika penjumlahan, pengurangan, perkalian, dan pembagian.",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Landing Page UKM Kampus",
      description: "Halaman utama untuk UKM teknologi kampus. Desain sederhana menggunakan flexbox dan grid CSS.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="projects">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Project Saya</h2>

      <div className="flex flex-wrap justify-center gap-6 mb-14">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <img src={skill.logo} alt={skill.name} className="w-10 h-10" />
            <span className="text-sm text-gray-600">{skill.name}</span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={proj.image} 
                alt={proj.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{proj.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{proj.description}</p>
              <div className="flex flex-wrap gap-1">
                {index % 2 === 0 && <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">HTML/CSS</span>}
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">JavaScript</span>
                {index === 1 && <span className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded">LocalStorage</span>}
                {index === 3 && <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">DOM Manipulation</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
