import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className = '' }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'Software Engineer',
    'SOC Analyst',
    'Web Developer',
    'Data Structures & Algorithms'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${className} h-8 relative`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRole}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          {roles[currentRole]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TypewriterText;
