import React from 'react';
import { Target } from 'lucide-react';

const ConfidenceCard = ({ confidence = 0, risk = "Unknown" }) => {
  const isHighRisk = risk.toLowerCase() === 'high';
  const isLowRisk = risk.toLowerCase() === 'low';
  
  return (
    <div className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow flex items-center justify-between">
      <div>
        <div className="flex items-center gap-2 text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">
          <Target size={16} /> Confidence
        </div>
        <div className="text-4xl font-bold text-gray-900 tracking-tight">{confidence}%</div>
      </div>
      <div className={`w-16 h-16 rounded-full border-[4px] flex items-center justify-center font-bold shadow-inner text-xs ${
        isLowRisk ? 'border-green-500 bg-green-50 text-green-600' :
        isHighRisk ? 'border-red-500 bg-red-50 text-red-600' :
        'border-yellow-500 bg-yellow-50 text-yellow-600'
      }`}>
        {risk}
      </div>
    </div>
  );
};

export default ConfidenceCard;
