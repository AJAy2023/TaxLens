import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { motion } from 'framer-motion';

const UploadZone = ({ onUpload }) => {
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (onUpload && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/pdf';
    input.onchange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        onUpload(e.target.files[0]);
      }
    };
    input.click();
  };

  return (
    <motion.div 
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`max-w-3xl mx-auto border-2 rounded-[32px] p-16 md:p-24 text-center cursor-pointer transition-all duration-300 ease-in-out shadow-[0_8px_30px_rgba(0,0,0,0.04)] group relative overflow-hidden ${
        isDragActive 
          ? 'border-primary bg-orange-50/50 shadow-[0_8px_30px_rgba(255,122,0,0.1)]' 
          : 'border-transparent bg-white hover:border-orange-100 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]'
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-8 text-primary pointer-events-none transition-transform duration-300 group-hover:scale-110">
        <UploadCloud size={40} strokeWidth={1.5} />
      </div>
      
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 pointer-events-none tracking-tight">
        {isDragActive ? "Drop the PDF here" : "Upload your financial document"}
      </h3>
      
      <p className="text-gray-500 mb-10 text-lg font-light pointer-events-none max-w-md mx-auto">
        Drag and drop your files here, or click to browse your computer.
      </p>
      
      <motion.div 
        className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold pointer-events-none shadow-lg shadow-gray-900/10"
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        Browse Files
      </motion.div>
      
      <div className="mt-8 text-sm font-medium text-gray-400 uppercase tracking-widest pointer-events-none">
        Supported format: PDF
      </div>
    </motion.div>
  );
};

export default UploadZone;
