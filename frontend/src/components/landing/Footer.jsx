import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-gray-900">
          <Zap className="text-gray-900" size={20} strokeWidth={3} />
          TaxLens
        </div>
        <div className="text-sm font-medium text-gray-400">
          © {new Date().getFullYear()} TaxLens Inc.
        </div>
        <div className="flex gap-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
