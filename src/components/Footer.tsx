import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900/80 border-t border-white/10">
      <div className="container mx-auto py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-xs">
            Crafted with passion and powered by AI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
