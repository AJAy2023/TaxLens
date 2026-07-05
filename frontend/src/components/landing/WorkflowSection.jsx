import React from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, Brain, ShieldAlert, FileCheck, Download } from 'lucide-react';

const workflowSteps = [
  { icon: Upload, title: "Upload PDF", desc: "Securely upload unstructured financial forms via web UI or API." },
  { icon: FileText, title: "Extract Text", desc: "Proprietary OCR reads tables, handwriting, and complex layouts flawlessly." },
  { icon: Brain, title: "AI Analysis", desc: "LLMs understand context, associating values with proper financial entities." },
  { icon: ShieldAlert, title: "Risk Detection", desc: "Automated flagging of anomalies, missing signatures, or tax liabilities." },
  { icon: FileCheck, title: "Structured Summary", desc: "A human-readable overview of the most critical extracted data." },
  { icon: Download, title: "Export", desc: "Download as CSV, JSON, or pipe directly into your accounting software." }
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 md:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Complete Workflow</h2>
          <p className="text-lg sm:text-xl text-gray-500">From messy PDF to strictly typed intelligence.</p>
        </div>

        <div className="relative pl-2 sm:pl-0">
          {/* Continuous background line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-200"></div>
          
          <div className="space-y-12">
            {workflowSteps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 sm:gap-6 relative"
              >
                <motion.div 
                  initial={{ borderColor: '#E5E7EB', color: '#6B7280' }}
                  whileInView={{ borderColor: '#FF7A00', color: '#FF7A00' }}
                  viewport={{ margin: "-50% 0px -50% 0px" }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 flex items-center justify-center shrink-0 z-10 shadow-sm relative ml-[4px] sm:ml-0 bg-white"
                >
                  <step.icon size={18} className="sm:w-5 sm:h-5" />
                </motion.div>
                
                <div className="pt-1 sm:pt-2 pb-4 sm:pb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-lg text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
