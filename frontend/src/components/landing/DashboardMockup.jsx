import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Search, Bell, FileText, CheckCircle2, ShieldAlert, AlertTriangle, FileCheck } from 'lucide-react';

const MockupStatCard = ({ title, value, sub, icon: Icon, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm flex flex-col gap-2"
  >
    <div className="flex justify-between items-center text-gray-500">
      <span className="text-xs font-medium uppercase tracking-wider">{title}</span>
      <Icon size={16} />
    </div>
    <div className="text-2xl font-semibold text-gray-900">{value}</div>
    <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md self-start font-medium">
      {sub}
    </div>
  </motion.div>
);

const DashboardMockup = () => {
  return (
    <div className="w-full max-w-[800px] h-[500px] bg-[#FAFAFA] rounded-2xl border border-gray-200 shadow-2xl overflow-hidden flex flex-col relative text-sm">
      {/* Topbar */}
      <div className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between z-10">
        <div className="flex items-center gap-2 text-gray-900 font-semibold">
          <div className="w-6 h-6 rounded bg-primary text-white flex items-center justify-center">
            <Zap size={14} />
          </div>
          TaxLens
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <Search size={18} />
          <Bell size={18} />
          <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300"></div>
        </div>
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-48 bg-white border-r border-gray-200 p-4 flex flex-col gap-2 hidden sm:flex">
          {['Dashboard', 'Documents', 'Extractions', 'Settings'].map((item, i) => (
            <div key={item} className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors ${i === 0 ? 'bg-orange-50 text-primary' : 'text-gray-600 hover:bg-gray-50'}`}>
              {item}
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden">
          <div className="grid grid-cols-3 gap-4">
            <MockupStatCard title="Processed" value="1,248" sub="+12% this week" icon={FileText} delay={0.5} />
            <MockupStatCard title="Avg Confidence" value="99.4%" sub="+0.2% improvement" icon={CheckCircle2} delay={0.6} />
            <MockupStatCard title="Risks Flagged" value="14" sub="-3 compared to last" icon={ShieldAlert} delay={0.7} />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex-1 bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex flex-col"
          >
            <div className="font-semibold text-gray-900 mb-4">Recent Documents</div>
            <div className="flex flex-col gap-3">
              {[
                { name: 'W2_Form_JohnDoe_2023.pdf', type: 'W-2', conf: '99.8%', status: 'Complete' },
                { name: '1040_Tax_Return_Smith.pdf', type: '1040', conf: '98.5%', status: 'Complete' },
                { name: 'Q3_Payroll_Summary.csv', type: 'Payroll', conf: '94.2%', status: 'Review' }
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${doc.status === 'Review' ? 'bg-yellow-50 text-yellow-600' : 'bg-green-50 text-green-600'}`}>
                      {doc.status === 'Review' ? <AlertTriangle size={14} /> : <FileCheck size={14} />}
                    </div>
                    <div>
                      <div className="text-gray-900 font-medium">{doc.name}</div>
                      <div className="text-gray-400 text-xs">Extracted as {doc.type}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-900 font-medium">{doc.conf}</div>
                    <div className="text-gray-400 text-xs">Confidence</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
