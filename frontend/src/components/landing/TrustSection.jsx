import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  return (
    <section className="py-12 border-y border-gray-200 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">Trusted by engineers at innovative companies</p>
        <div className="flex gap-16 justify-center items-center flex-wrap opacity-60 grayscale">
          {['Acme Corp', 'GlobalBank', 'TechNova', 'FinServe', 'ApexAI'].map((company, i) => (
            <motion.div 
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold font-serif"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
