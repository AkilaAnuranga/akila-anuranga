import React from 'react';
import { motion } from 'framer-motion';
import experienceImage from '../assets/images/professional-experience.jpg';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: '3Rive Technologies',
      position: 'Agentic AI & Workflow Automation Developer',
      period: '2025 July - Present',
      description: 'Automating daily tasks and generating content using Power Automate, Power Apps, and custom AI solutions.',
    },
    {
      company: 'Aspirations I-Lab',
      position: 'Senior Software Engineer',
      period: '2024 May - 2025 July',
      description: 'Led the development and deployment of AI-driven bots across multiple platforms including WhatsApp, Telegram, and Messenger.',
    },
    {
      company: 'DartXTool',
      position: 'Software Engineer',
      period: 'October 2016 - February 2024',
      description: 'Led development on DartXTool, a flagship SEO monitoring and optimization platform using Google Search Console data.',
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            <span className="gradient-text">Professional</span> Experience
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Building innovative solutions with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left side: Experience List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Timeline line */}
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-transparent opacity-30"></div>

                {/* Experience card */}
                <div className="relative bg-dark-800/30 border border-white/[.08] rounded-xl p-6 hover:bg-dark-800/50 hover:border-white/[.15] transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary-500/10">
                  {/* Timeline dot */}
                  <div className="absolute -left-2 top-6 w-4 h-4 bg-primary-500 rounded-full border-2 border-dark-900 group-hover:scale-110 transition-transform duration-300"></div>

                  {/* Content */}
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1 font-heading group-hover:text-primary-400 transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <h4 className="text-lg font-semibold gradient-text">{exp.company}</h4>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Experience number */}
                      <div className="flex-shrink-0 ml-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center border border-primary-500/30">
                          <span className="text-primary-400 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-transparent rounded-full opacity-50"></div>
                      <p className="text-gray-300 leading-relaxed pl-4 text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={experienceImage}
              alt="Professional Experience"
              className="rounded-2xl w-full max-h-[600px] object-cover shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
