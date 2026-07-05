import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardMockup from './DashboardMockup';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[100svh] flex flex-col justify-center relative overflow-hidden pt-24 pb-12 md:py-20">
      {/* Subtle background glow */}
      <div className="absolute top-[-10%] left-1/2 transform -translate-x-1/2 w-full sm:w-[800px] h-[400px] sm:h-[600px] bg-orange-500/10 rounded-full blur-[100px] sm:blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-xl mx-auto lg:mx-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-gray-600 mb-6 sm:mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              TaxLens Enterprise now available
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
              AI-powered <br className="hidden sm:block" />
              Financial Document <br className="hidden sm:block" />
              <span className="text-primary">Intelligence</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-500 mb-8 sm:mb-10 leading-relaxed font-light px-4 sm:px-0">
              Automate data extraction, risk detection, and summaries from complex financial forms in seconds. Engineered for modern finance teams.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
              <motion.button 
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-primary-hover shadow-lg shadow-orange-500/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Analysis
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                className="w-full sm:w-auto bg-white border border-gray-200 text-gray-900 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all hover:bg-gray-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} className="text-gray-500" />
                Watch Workflow
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        <div className="hidden lg:flex justify-end perspective-1000">
          <motion.div
            initial={{ opacity: 0, rotateY: 15, x: 50, z: -100 }}
            animate={{ opacity: 1, rotateY: -5, x: 0, z: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative z-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
