import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <motion.div 
            className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tight text-gray-900"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Zap className="text-primary" size={24} strokeWidth={3} />
            <span className="hidden sm:inline">TaxLens</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
            <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
            <a href="#workflow" className="hover:text-gray-900 transition-colors">Workflow</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* <button className="hidden md:block text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Sign In</button> */}
          <motion.button 
            onClick={() => navigate('/dashboard')}
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 md:px-6 md:py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Start Analysis
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
