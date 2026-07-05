import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, ShieldAlert } from 'lucide-react';

const SummaryCard = ({ data }) => {
  const text = data?.text || "No summary provided.";
  const confidence = data?.confidence || 0;
  const risk = data?.risk || "Unknown";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-6">
        <FileText size={18} strokeWidth={2.5} /> 
        AI Executive Summary
      </div>
      
      <p className="text-gray-900 leading-relaxed text-2xl md:text-3xl font-medium tracking-tight mb-10 max-w-2xl">
        {text}
      </p>

      <div className="grid grid-cols-2 md:flex md:items-center gap-6 md:gap-12 pt-8 border-t border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <Target size={24} />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Confidence</div>
            <div className="text-2xl font-bold text-gray-900 leading-none">{confidence}%</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-primary flex items-center justify-center shrink-0">
            <ShieldAlert size={24} />
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Risk Level</div>
            <div className="text-2xl font-bold text-gray-900 leading-none">{risk}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SummaryCard;
