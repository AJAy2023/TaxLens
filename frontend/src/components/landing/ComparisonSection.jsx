import React from 'react';
import { Zap } from 'lucide-react';

const manualStats = [
  { label: "Time Saved", value: "0%", sub: "Hours per document" },
  { label: "Accuracy", value: "85%", sub: "Prone to human error" },
  { label: "Risk Detection", value: "Low", sub: "Misses hidden anomalies" }
];

const lensStats = [
  { label: "Time Saved", value: "98%", sub: "Seconds per document" },
  { label: "Accuracy", value: "99.8%", sub: "Consistent & precise" },
  { label: "Risk Detection", value: "High", sub: "Automated flagging" }
];

const ComparisonSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white border-y border-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Manual Review VS TaxLens</h2>
          <p className="text-lg sm:text-xl text-gray-500">The difference is undeniable.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-gray-200 rounded-2xl md:rounded-[32px] overflow-hidden">
          {/* Manual Review */}
          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 md:border-r border-b md:border-b-0 border-gray-200">
            <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-400 mb-6 md:mb-8">Manual Review</h3>
            <div className="space-y-6 md:space-y-8">
              {manualStats.map((stat, i) => (
                <div key={i} className="flex justify-between items-end border-b border-gray-200 pb-3 md:pb-4">
                  <div>
                    <div className="text-gray-900 font-semibold mb-1 text-sm md:text-base">{stat.label}</div>
                    <div className="text-xs md:text-sm text-gray-500">{stat.sub}</div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-400">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* TaxLens */}
          <div className="bg-white p-6 sm:p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-orange-50 rounded-full blur-[80px] -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-6 md:mb-8 flex items-center gap-2">
              <Zap size={16} /> TaxLens
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              {lensStats.map((stat, i) => (
                <div key={i} className="flex justify-between items-end border-b border-gray-100 pb-3 md:pb-4">
                  <div>
                    <div className="text-gray-900 font-semibold mb-1 text-sm md:text-base">{stat.label}</div>
                    <div className="text-xs md:text-sm text-gray-500">{stat.sub}</div>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
