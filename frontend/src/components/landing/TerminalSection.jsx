import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedTerminal = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const step1 = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const step2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const step3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const step4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  return (
    <div ref={containerRef} className="rounded-xl sm:rounded-2xl overflow-hidden border border-gray-800 bg-[#0D0D0D] shadow-2xl font-mono text-[10px] sm:text-xs md:text-sm max-w-2xl mx-auto w-full">
      <div className="bg-[#1A1A1A] px-3 sm:px-4 py-2 sm:py-3 border-b border-gray-800 flex items-center gap-1.5 sm:gap-2">
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500 border border-red-600"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 border border-yellow-600"></div>
        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500 border border-green-600"></div>
        <div className="mx-auto text-gray-500 text-[10px] sm:text-xs font-sans tracking-wide truncate">taxlens-cli run analyze</div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4 text-gray-300">
        <div className="flex gap-2 sm:gap-3">
          <span className="text-primary font-bold">❯</span>
          <span className="break-all sm:break-normal">taxlens analyze document.pdf --extract=all</span>
        </div>
        
        <motion.div style={{ opacity: step1 }} className="flex gap-2 sm:gap-3 flex-wrap">
          <span className="text-gray-500 whitespace-nowrap">[1/4]</span>
          <span>Reading document layout... <span className="text-green-400">✔ Completed in 120ms</span></span>
        </motion.div>
        
        <motion.div style={{ opacity: step2 }} className="flex gap-2 sm:gap-3 flex-wrap">
          <span className="text-gray-500 whitespace-nowrap">[2/4]</span>
          <span>Extracting financial fields... <span className="text-green-400">✔ 142 entities found</span></span>
        </motion.div>
        
        <motion.div style={{ opacity: step3 }} className="flex gap-2 sm:gap-3 flex-wrap">
          <span className="text-gray-500 whitespace-nowrap">[3/4]</span>
          <span>Analyzing risks & anomalies... <span className="text-yellow-400">⚠ 1 warning flagged</span></span>
        </motion.div>

        <motion.div style={{ opacity: step4 }} className="flex gap-2 sm:gap-3 flex-wrap">
          <span className="text-gray-500 whitespace-nowrap">[4/4]</span>
          <span>Generating structured JSON... <span className="text-green-400">✔ Completed</span></span>
        </motion.div>
        
        <motion.div style={{ opacity: step4 }} className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-800">
          <div className="text-blue-400 break-words">Successfully exported to <span className="text-white underline decoration-gray-600 underline-offset-4">output/summary.json</span></div>
          <div className="mt-3 sm:mt-4 flex"><span className="terminal-cursor"></span></div>
        </motion.div>
      </div>
    </div>
  );
};

const TerminalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Under the hood</h2>
          <p className="text-lg sm:text-xl text-gray-500">A developer-first experience.</p>
        </div>
        <AnimatedTerminal />
      </div>
    </section>
  );
};

export default TerminalSection;
