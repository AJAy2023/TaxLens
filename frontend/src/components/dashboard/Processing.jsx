import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  "Reading document...",
  "Extracting text...",
  "Analyzing financial data...",
  "Detecting issues...",
  "Generating summary..."
];

const Processing = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let step = 0;
    const interval = setInterval(() => {
      if (step < steps.length - 1) {
        step++;
        setCurrentStep(step);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md mx-auto mt-20">
      <div className="bg-white rounded-[32px] p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">AI Analysis</h3>
        
        <div className="space-y-6 relative">
          {/* Subtle vertical connection line */}
          <div className="absolute left-[15px] top-4 bottom-4 w-px bg-gray-100 -z-10"></div>
          
          {steps.map((text, i) => {
            const isCompleted = currentStep > i;
            const isActive = currentStep === i;
            const isPending = currentStep < i;

            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isPending ? 0.3 : 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-5 relative bg-white"
              >
                <div className="relative flex items-center justify-center w-8 h-8 shrink-0">
                  {isCompleted ? (
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-sm"
                    >
                      <Check size={16} strokeWidth={3} className="text-white" />
                    </motion.div>
                  ) : isActive ? (
                    <div className="relative flex items-center justify-center w-8 h-8">
                      {/* Pulsing outer ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{ opacity: [1, 0], scale: [1, 1.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                      />
                      {/* Solid inner core */}
                      <div className="w-3 h-3 rounded-full bg-primary" />
                    </div>
                  ) : (
                    <div className="w-4 h-4 rounded-full border-2 border-gray-200 bg-white" />
                  )}
                </div>
                
                <span className={`text-lg transition-colors duration-500 ${
                  isActive ? 'font-medium text-gray-900' : 
                  isCompleted ? 'font-normal text-gray-500' : 
                  'font-light text-gray-400'
                }`}>
                  {text}
                </span>
                
                {/* Active state moving dots for "thinking" feel */}
                {isActive && (
                  <motion.div className="flex gap-1 ml-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    {[0, 1, 2].map((dot) => (
                      <motion.div
                        key={dot}
                        className="w-1.5 h-1.5 bg-gray-300 rounded-full"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: dot * 0.15 }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Processing;
