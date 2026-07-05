import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gray-100 rounded-full hidden sm:block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gray-100 rounded-full hidden sm:block"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-[400px] h-full sm:h-[400px] border border-gray-100 sm:rounded-full bg-gray-50/50"></div>

      <motion.div 
        className="max-w-3xl mx-auto text-center relative z-10 px-4 sm:px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Ready to analyze your first financial document?
        </h2>
        <p className="text-lg sm:text-xl text-gray-500 mb-10 font-light">
          Join leading finance teams and automate your workflow today.
        </p>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-primary text-white text-lg px-8 py-4 md:px-10 md:py-5 rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 hover:bg-primary-hover transition-all w-full sm:w-auto"
        >
          Start Analysis Now
        </button>
      </motion.div>
    </section>
  );
};

export default CTASection;
