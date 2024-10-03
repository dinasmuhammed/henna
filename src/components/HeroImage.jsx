import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div 
      className="w-full h-96 md:h-[500px] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <img 
        src="/hero-image.jpg" 
        alt="Intricate bridal henna" 
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default HeroImage;