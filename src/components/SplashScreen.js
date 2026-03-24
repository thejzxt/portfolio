import React from 'react';
import { motion } from 'framer-motion';

function SplashScreen() {
  return (
    <motion.div 
      className="splash"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <h1 className="logo-text">Justin</h1>
    </motion.div>
  );
}

export default SplashScreen;