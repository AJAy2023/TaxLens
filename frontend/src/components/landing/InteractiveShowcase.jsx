import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, Brain, ShieldAlert } from 'lucide-react';

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(0);
  
  useEffect(() => {
    return value.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [value]);
  
  return <span>{display.toLocaleString()}</span>;
};

const InteractiveShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const statsCount = useTransform(smoothProgress, [0.2, 0.5], [120, 1542]);
  const confidenceScore = useTransform(smoothProgress, [0.3, 0.6], [85, 99.8]);
  const docOpacity1 = useTransform(smoothProgress, [0.2, 0.3], [0, 1]);
  const docOpacity2 = useTransform(smoothProgress, [0.3, 0.4], [0, 1]);
  const docOpacity3 = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);
  const panelOpacity = useTransform(smoothProgress, [0.4, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="h-auto md:h-[250vh] relative bg-white py-24 md:py-0">
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center items-center overflow-hidden pt-12 md:pt-20">
        <div className="text-center mb-8 md:mb-12 px-4 sm:px-6">
          <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
            See it in real-time
          </motion.h2>
          <p className="text-lg sm:text-xl text-text-muted">As fast as you can scroll, the data is structured.</p>
        </div>
        
        <div className="w-full max-w-[1000px] px-4 sm:px-6">
          <div className="bg-[#FAFAFA] rounded-2xl md:rounded-[24px] border border-gray-200 shadow-xl md:shadow-2xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 h-auto md:h-[550px] relative overflow-hidden">
            {/* Left Col: Real-time Feed */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white p-4 sm:p-5 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Docs Processed</div>
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                    <AnimatedNumber value={statsCount} />
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-5 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm flex-1">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">Avg Confidence</div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary flex items-baseline gap-1">
                    <AnimatedNumber value={confidenceScore} />
                    <span className="text-xl sm:text-2xl">%</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl md:rounded-2xl border border-gray-100 shadow-sm flex-1 overflow-hidden flex flex-col">
                <div className="font-semibold text-gray-900 mb-4 flex justify-between items-center text-sm md:text-base">
                  <span>Live Extraction Feed</span>
                  <span className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse"></span> Streaming
                  </span>
                </div>
                <div className="flex flex-col gap-3 md:gap-4">
                  {[
                    { op: docOpacity1, name: "Corp_Tax_Return_2023.pdf", fields: 124 },
                    { op: docOpacity2, name: "Q4_Financial_Statement.xlsx", fields: 89 },
                    { op: docOpacity3, name: "Employee_W2_Batch_4.pdf", fields: 432 },
                  ].map((item, i) => (
                    <motion.div style={{ opacity: item.op }} key={i} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg md:rounded-xl border border-gray-100">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-orange-100 text-primary flex items-center justify-center">
                          <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-[200px]">{item.name}</div>
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">{item.fields} fields</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Col: AI Summary Panel */}
            <motion.div 
              style={{ opacity: panelOpacity }}
              className="w-full md:w-80 bg-gray-900 rounded-xl md:rounded-2xl p-4 sm:p-6 text-white shadow-2xl flex flex-col mt-4 md:mt-0"
            >
              <div className="flex items-center gap-2 text-orange-400 mb-4 md:mb-6 font-semibold text-sm md:text-base">
                <Brain size={18} /> AI Summary
              </div>
              
              <div className="flex-1 space-y-4 md:space-y-6">
                <div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-1 uppercase tracking-wider">Entity Detected</div>
                  <div className="text-base sm:text-lg font-medium">Acme Corporation</div>
                </div>
                
                <div>
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-2 uppercase tracking-wider">Key Anomalies</div>
                  <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-2 sm:p-3 rounded-lg md:rounded-xl text-xs sm:text-sm flex gap-2">
                    <ShieldAlert size={14} className="shrink-0 mt-0.5 sm:w-4 sm:h-4" />
                    <p>Schedule C expenses increased by 42% YoY without corresponding revenue increase.</p>
                  </div>
                </div>

                <div className="mt-auto pt-4 md:pt-6 border-t border-gray-800">
                  <div className="text-[10px] sm:text-xs text-gray-500 mb-2 uppercase tracking-wider">Structured Output</div>
                  <div className="font-mono text-[10px] sm:text-xs text-gray-400 bg-black/50 p-2 sm:p-3 rounded-lg md:rounded-xl border border-gray-800 overflow-x-auto">
                    {`{`} <br/>
                    &nbsp;&nbsp;"revenue": 1450000,<br/>
                    &nbsp;&nbsp;"expenses": 920000,<br/>
                    &nbsp;&nbsp;"net_income": 530000<br/>
                    {`}`}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveShowcase;
