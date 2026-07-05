import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, CheckSquare, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const RecommendationsCard = ({ recommendations = [] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
      className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden group"
    >
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-50 rounded-full blur-[60px] -z-10 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest">
          <Lightbulb size={18} strokeWidth={2.5} /> 
          Action Plan
        </div>
      </div>
      
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {recommendations.length === 0 && (
          <div className="text-gray-500 font-medium text-sm">No recommended actions.</div>
        )}
        {recommendations.map((rec, i) => (
          <motion.li 
            key={i}
            variants={itemVariants}
            className="flex items-center gap-3 text-gray-700 bg-gray-50/50 border border-transparent p-3 rounded-xl hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all cursor-default group/item"
          >
            <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center group-hover/item:bg-primary/10 group-hover/item:text-primary transition-colors shrink-0">
              <CheckSquare size={16} strokeWidth={2} />
            </div>
            <span className="text-sm md:text-base font-medium flex-1">{rec}</span>
            <ArrowRight size={16} className="text-gray-300 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default RecommendationsCard;
