import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { analyzeDocument } from '../services/api';

import UploadZone from '../components/dashboard/UploadZone';
import Processing from '../components/dashboard/Processing';
import SummaryCard from '../components/dashboard/SummaryCard';
import ExtractedFields from '../components/dashboard/ExtractedFields';
import ConfidenceCard from '../components/dashboard/ConfidenceCard';
import IssuesCard from '../components/dashboard/IssuesCard';
import RecommendationsCard from '../components/dashboard/RecommendationsCard';

const Dashboard = () => {
  const [status, setStatus] = useState('upload'); // 'upload', 'processing', 'results'
  const [analysisData, setAnalysisData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleUpload = async (file) => {
    if (!file) return;
    setStatus('processing');
    setError(null);
    try {
      const result = await analyzeDocument(file);
      setAnalysisData(result.data);
      setStatus('results');
    } catch (err) {
      console.error(err);
      const backendMessage = err.response?.data?.message;
      const fallbackError = err.response?.data?.error || err.message || "An error occurred during analysis.";
      setError(backendMessage ? `Backend Error: ${backendMessage}` : fallbackError);
      setStatus('upload');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-gray-900 font-sans pb-24">
      {/* Minimal Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200 h-16 flex items-center px-6 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto w-full flex items-center">
          <button 
            onClick={() => navigate('/')} 
            className="text-gray-400 hover:text-gray-900 transition-colors mr-6"
          >
            <ArrowLeft size={20} />
          </button>
          <div className="flex items-center gap-2 font-bold text-lg tracking-tight text-gray-900">
            <Zap className="text-primary" size={20} strokeWidth={3} />
            TaxLens
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 mt-12 md:mt-16">
        <AnimatePresence mode="wait">
          {status === 'upload' && (
            <motion.div key="upload" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <div className="text-center mb-10 md:mb-12">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Analyze Document</h1>
                <p className="text-lg text-gray-500 font-light">Upload a financial PDF to automatically extract and structure data.</p>
              </div>
              
              {error && (
                <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-50 text-red-600 rounded-xl text-center border border-red-100 font-medium">
                  {error}
                </div>
              )}
              
              <UploadZone onUpload={handleUpload} />
            </motion.div>
          )}

          {status === 'processing' && (
            <motion.div key="processing" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }}>
              <Processing />
            </motion.div>
          )}

          {status === 'results' && analysisData && (
            <motion.div key="results" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Analysis Results</h1>
                  <p className="text-gray-500 font-medium">{analysisData.metadata?.filename}</p>
                </div>
                <button 
                  onClick={() => {
                    setAnalysisData(null);
                    setStatus('upload');
                  }} 
                  className="text-sm font-semibold text-primary hover:text-primary-hover bg-orange-50 px-5 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Analyze Another
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <SummaryCard data={analysisData.summary} />
                  <ExtractedFields data={analysisData.extractedFields} />
                </div>
                <div className="space-y-6">
                  <ConfidenceCard confidence={analysisData.summary?.confidence} risk={analysisData.summary?.risk} />
                  <IssuesCard issues={analysisData.issues} />
                  <RecommendationsCard recommendations={analysisData.recommendations} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Dashboard;
