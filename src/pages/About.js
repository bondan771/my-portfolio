import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaGraduationCap, 
  FaTools, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt,
  FaFigma,
  FaNodeJs
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

function About() {
  const technologies = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-blue-400" />, name: "React JS" },
    { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind CSS" },
    { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
    { icon: <FaFigma className="text-purple-500" />, name: "Figma" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 md:py-24" id="about">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">About Me</h2>
      
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column - About Me & Interests */}
        <div className="space-y-10">
          {/* About Me Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <FaGraduationCap className="text-indigo-600 text-xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Introduction</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              I'm a passionate Computer Science student at Pamulang University, currently in my 5th semester. 
              My focus is on frontend development where I combine technical skills with creative design thinking. 
              I'm dedicated to creating intuitive, responsive web experiences while continuously expanding my knowledge.
            </p>
          </motion.div>

          {/* Interests Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-indigo-600 text-xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">My Interests</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">UI/UX Design</h4>
                  <p className="text-gray-600 text-sm">Creating intuitive and engaging user experiences</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Responsive Development</h4>
                  <p className="text-gray-600 text-sm">Building websites that work seamlessly across all devices</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-full mr-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Modern JavaScript</h4>
                  <p className="text-gray-600 text-sm">Exploring ES6+ features and advanced patterns</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Column - Technologies & Education */}
        <div className="space-y-10">
          {/* Technologies Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <FaTools className="text-indigo-600 text-xl mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Technologies I Work With</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline Card */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Education History</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-indigo-200 z-0"></div>
              
              {/* Timeline items */}
              <div className="space-y-8 pl-10">
                <div className="relative z-10">
                  <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <FaGraduationCap className="text-white" />
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Bachelor of Computer Science</h4>
                    <p className="text-gray-600">Pamulang University</p>
                    <p className="text-gray-500 text-sm mt-1">2021 - Present (Expected Graduation: 2025)</p>
                    <p className="mt-2 text-gray-700 text-sm">Focus on web development and software engineering</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">GPA: 3.75</span>
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">Relevant Courses</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="absolute -left-9 top-0 w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center">
                    <FaGraduationCap className="text-white" />
                  </div>
                  <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800">Multimedia Program</h4>
                    <p className="text-gray-600">Kebangsaan Vocational School</p>
                    <p className="text-gray-500 text-sm mt-1">2018 - 2021</p>
                    <p className="mt-2 text-gray-700 text-sm">Learned digital design fundamentals and multimedia production</p>
                    <div className="mt-3">
                      <span className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded">Graduated with honors</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;