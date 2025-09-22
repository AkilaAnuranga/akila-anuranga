import React from 'react';
import { motion } from 'framer-motion';
import ReactGA from 'react-ga4';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'anurangaakila@gmail.com',
      link: 'mailto:anurangaakila@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+94 770 534 618',
      link: 'tel:+94770534618'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Balangoda, Sri Lanka',
      link: 'https://maps.google.com/?q=Balangoda,Sri+Lanka'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://linkedin.com/in/akila-anuranga'
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-heading">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-heading">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={() => {
                    // Track contact info clicks
                    ReactGA.event({
                      category: 'Contact',
                      action: 'Click',
                      label: info.label,
                    });
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card glass-card-hover p-4 flex items-center group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="flex justify-center space-x-6">
                {[
                  { name: 'LinkedIn', icon: FaLinkedin, link: 'https://linkedin.com/in/akila-anuranga', color: 'text-blue-500' },
                  { name: 'GitHub', icon: FaGithub, link: 'https://github.com/AkilaAnuranga', color: 'text-gray-300' },
                  { name: 'WhatsApp', icon: FaWhatsapp, link: 'https://wa.me/94770534618', color: 'text-green-500' }
                ].map((social: { name: string, icon: any, link: string, color: string }, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        // Track social media clicks
                        ReactGA.event({
                          category: 'Social Media',
                          action: 'Click',
                          label: social.name,
                        });
                      }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 glass-card glass-card-hover rounded-full flex items-center justify-center group"
                    >
                      <IconComponent className={`w-8 h-8 ${social.color} group-hover:text-white transition-colors duration-300`} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
