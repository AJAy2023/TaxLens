import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const IssuesCard = ({ issues = [] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="bg-white rounded-[32px] p-8 md:p-10 border border-orange-100 shadow-[0_8px_30px_rgba(255,122,0,0.05)] hover:shadow-[0_12px_40px_rgba(255,122,0,0.08)] transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-48 h-48 bg-orange-50 rounded-full blur-[60px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest">
          <AlertTriangle size={18} strokeWidth={2.5} /> 
          Detected Issues
        </div>
        <span className="bg-orange-50 text-primary text-xs font-bold px-3 py-1.5 rounded-lg tracking-wide border border-orange-100/50">
          {issues.length} {issues.length === 1 ? 'Warning' : 'Warnings'}
        </span>
      </div>
      
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-4"
      >
        {issues.length === 0 && (
          <div className="text-gray-500 font-medium text-sm">No issues detected in document.</div>
        )}
        {issues.map((issue, i) => (
          <motion.li 
            key={i}
            variants={itemVariants}
            className="flex items-start gap-4 text-gray-900 bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:border-orange-200 hover:bg-orange-50/30 transition-colors"
          >
            <ShieldAlert size={18} className="text-primary shrink-0 mt-0.5" />
            <span className="text-sm md:text-base font-medium leading-relaxed">{issue}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default IssuesCard;
