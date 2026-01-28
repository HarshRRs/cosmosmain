import React from 'react';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import ServicesSection from '../components/landing/ServicesSection';
import PortfolioSection from '../components/landing/PortfolioSection';
import WhyChooseSection from '../components/landing/WhyChooseSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import AIFeaturesSection from '../components/landing/AIFeaturesSection';
import ContactCTASection from '../components/landing/ContactCTASection';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseSection />
        <HowItWorksSection />
        <AIFeaturesSection />
        <ContactCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
