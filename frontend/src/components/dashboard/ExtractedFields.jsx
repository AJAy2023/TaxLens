import React from 'react';
import { motion } from 'framer-motion';
import { Database } from 'lucide-react';

const ExtractedFields = ({ data = [] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest mb-8">
        <Database size={18} strokeWidth={2.5} /> 
        Structured Data
      </div>
      
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-4 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider w-1/3 md:w-1/2">Field</th>
              <th className="py-4 px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider w-2/3 md:w-1/2">Extracted Value</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="2" className="py-8 text-center text-gray-500">No fields extracted.</td>
              </tr>
            )}
            {data.map((field, i) => (
              <tr 
                key={i} 
                className="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors group"
              >
                <td className="py-5 px-2 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                  {field.label}
                </td>
                <td className="py-5 px-2 text-base md:text-lg font-semibold text-gray-900">
                  {field.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ExtractedFields;
