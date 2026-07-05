import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ShieldAlert, CheckCircle2, FileText, Zap, Code } from 'lucide-react';

const features = [
  { icon: Brain, title: "AI Extraction", desc: "Go beyond templates. Our models understand document context just like a human auditor would." },
  { icon: ShieldAlert, title: "Risk Detection", desc: "Automatically identify digital alterations, mathematical errors, and compliance risks." },
  { icon: CheckCircle2, title: "Confidence Score", desc: "Every extracted field includes a probability score, minimizing the need for manual review." },
  { icon: FileText, title: "Smart Summary", desc: "Get an instant, concise summary of 100-page documents highlighting only what matters." },
  { icon: Zap, title: "Lightning Fast", desc: "Process complex forms in milliseconds. Massively scale your firm's throughput." },
  { icon: Code, title: "Structured JSON", desc: "Developer-first approach. Receive perfectly structured, strictly typed JSON responses." }
];

const FeatureSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">Premium Capabilities</h2>
          <p className="text-lg sm:text-xl text-gray-500">Built to handle the most demanding financial use cases.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-gray-200 hover:border-gray-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-50 text-gray-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-orange-50 group-hover:text-primary transition-colors">
                <feature.icon size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
