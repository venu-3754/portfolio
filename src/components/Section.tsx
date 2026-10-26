import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16 scroll-mt-24 md:scroll-mt-32"
    >
      {/* Reduced font size for the title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
        {title}
      </h2>
      {children}
    </motion.section>
  );
};

export default Section;
