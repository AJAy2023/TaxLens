import React from 'react';
import Navbar from '../components/landing/Navbar';
import HeroSection from '../components/landing/HeroSection';
import WorkflowSection from '../components/landing/WorkflowSection';
import InteractiveShowcase from '../components/landing/InteractiveShowcase';
import FeatureSection from '../components/landing/FeatureSection';
import ComparisonSection from '../components/landing/ComparisonSection';
import TerminalSection from '../components/landing/TerminalSection';
import CTASection from '../components/landing/CTASection';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="bg-background text-text-main w-full min-h-screen relative">
      <Navbar />
      <HeroSection />
      <WorkflowSection />
      <InteractiveShowcase />
      <FeatureSection />
      <ComparisonSection />
      <TerminalSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default LandingPage;
