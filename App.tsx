import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { 
  TrustIndicators, 
  Benefits, 
  PropertyDetails, 
  Location, 
  HowItWorks, 
  FAQ, 
  FinalCTA, 
  Footer 
} from './components/Sections';

const App: React.FC = () => {
  return (
    <div className="font-sans text-brand-900 bg-white">
      <Header />
      <Hero />
      <TrustIndicators />
      <Benefits />
      <PropertyDetails />
      <Location />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default App;