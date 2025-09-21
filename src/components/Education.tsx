import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaCloud, FaCogs, FaCode } from 'react-icons/fa';

const Education: React.FC = () => {

  const education = [
    {
      degree: 'Bachelor of Engineering in Software Engineering',
      gpa: '3.52 GPA',
      institution: 'IIC University of Technology',
      location: 'Phnom Penh, Cambodia',
      period: '2016 - 2020',
      description: 'Comprehensive software engineering program covering modern development practices, algorithms, data structures, and software architecture.'
    },
    {
      degree: 'Professional Diploma in Software Engineering',
      gpa: 'SCQF Level 7 with 171 credit points',
      institution: 'JAVA Institute for Advanced Technology',
      location: 'Sri Lanka',
      period: '2014 - 2016',
      description: 'Advanced diploma program focusing on Java development, software design patterns, and enterprise application development.'
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            <span className="gradient-text">Education</span> Background
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Strong academic foundation in software engineering and computer science
          </p>
        </motion.div>

        {/* Code block header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-dark-800/80 border border-white/[.1] rounded-t-lg p-4 mb-0"
        >
          <div className="flex items-center space-x-2">
            <div className="flex space-x-2">
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="w-3 h-3 bg-yellow-500 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="flex-1 text-center">
              <motion.span
                className="text-gray-400 text-sm font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                education.json
              </motion.span>
            </div>
          </div>
        </motion.div>

        {/* Code block content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-dark-900/90 border-l border-r border-b border-white/[.1] rounded-b-lg p-6 font-mono text-sm relative overflow-hidden"
        >

          <div className="space-y-6">
            <div className="space-y-2">
              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.span
                  className="text-blue-400"
                  whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(59, 130, 246, 0.5)" }}
                >
                  const
                </motion.span>
                <motion.span
                  className="text-yellow-300 font-semibold"
                  whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(251, 191, 36, 0.5)" }}
                >
                  education
                </motion.span>
                <span className="text-gray-400">=</span>
                <motion.span
                  className="text-green-400"
                  whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                >
                  [
                </motion.span>
              </motion.div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="ml-4 space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + (index * 0.3), duration: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.span
                      className="text-green-400"
                      whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                    >
                      &#123;
                    </motion.span>
                  </div>
                  <div className="ml-4 space-y-1">
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">degree:</span>
                      <motion.span
                        className="text-white"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.degree}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">institution:</span>
                      <motion.span
                        className="text-cyan-400"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.institution}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.9 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">location:</span>
                      <motion.span
                        className="text-orange-400"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.location}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.1 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">period:</span>
                      <motion.span
                        className="text-yellow-400"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.period}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.3 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">gpa:</span>
                      <motion.span
                        className="text-green-300"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.gpa}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5 + (index * 0.3), duration: 0.3 }}
                    >
                      <span className="text-purple-400">description:</span>
                      <motion.span
                        className="text-gray-300"
                        whileHover={{ scale: 1.05, color: "#FF014F" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        "{edu.description}"
                      </motion.span>
                      <span className="text-gray-400">,</span>
                    </motion.div>
                  </div>
                  <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.7 + (index * 0.3), duration: 0.3 }}
                  >
                    <motion.span
                      className="text-green-400"
                      whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                    >
                      &#125;
                    </motion.span>
                    {index < education.length - 1 && <span className="text-gray-400">,</span>}
                  </motion.div>
                </motion.div>
              ))}

              <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 3.5, duration: 0.5 }}
              >
                <motion.span
                  className="text-green-400"
                  whileHover={{ scale: 1.1, textShadow: "0 0 8px rgba(34, 197, 94, 0.5)" }}
                >
                  ]
                </motion.span>
                <span className="text-gray-400">;</span>

                {/* Animated cursor at the end */}
                <motion.span
                  className="inline-block w-0.5 h-4 bg-primary-500 ml-2"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 4 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Additional achievements */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <motion.div
          className="glass-card glass-card-hover p-6 lg:p-8 max-w-4xl mx-auto"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-6 font-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Continuous Learning
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'AI & Machine Learning', icon: FaBrain },
              { name: 'Cloud Technologies', icon: FaCloud },
              { name: 'DevOps Practices', icon: FaCogs },
              { name: 'Modern Web Frameworks', icon: FaCode }
            ].map((skill: { name: string, icon: any }, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  viewport={{ once: true }}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:shadow-lg group-hover:shadow-primary-500/50"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      boxShadow: "0 0 20px rgba(255, 1, 79, 0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.name}
                  </motion.p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
