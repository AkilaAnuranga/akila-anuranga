import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaJs, FaReact, FaPhp, FaHtml5, FaCss3Alt, FaLaravel, FaNodeJs,
  FaBootstrap, FaWordpress, FaShopify, FaDocker, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
  SiNextdotjs, SiExpress, SiTailwindcss, SiDrupal, SiMagento, SiPostgresql,
  SiMongodb, SiRedis, SiPowers, SiNginx
} from 'react-icons/si';
import { DiMysql } from 'react-icons/di';
import { HiCog } from 'react-icons/hi';
const Skills: React.FC = () => {
  const allSkills: { name: string, icon: any }[] = [
    { name: 'Python', icon: FaPython },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React.js', icon: FaReact },
    { name: 'PHP', icon: FaPhp },
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'Laravel', icon: FaLaravel },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'WordPress', icon: FaWordpress },
    { name: 'Drupal', icon: SiDrupal },
    { name: 'Magento 2', icon: SiMagento },
    { name: 'Shopify', icon: FaShopify },
    { name: 'MySQL', icon: DiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Redis', icon: SiRedis },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Docker', icon: FaDocker },
    { name: 'Nginx', icon: SiNginx },
    { name: 'GitHub Actions', icon: FaGithub },
    { name: 'Power Automate', icon: HiCog },
    { name: 'Power Apps', icon: SiPowers },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across modern web technologies and AI-driven solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-6 lg:p-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
            {allSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="text-5xl text-gray-400 group-hover:text-white transition-colors duration-300">
                    <IconComponent />
                  </div>
                  <div className="absolute bottom-full mb-2 w-max left-1/2 -translate-x-1/2 px-3 py-1.5 bg-dark-700 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    {skill.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-dark-700 rotate-45" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
