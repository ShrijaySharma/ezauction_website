import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

import SuccessStories from './components/SuccessStories';

function App() {
  return (
    <div className="min-h-screen bg-background font-sans overflow-x-hidden">
      <Navbar />
      <Hero />
      <SuccessStories />
      <Features />
      <Gallery />
      <HowItWorks />
      <Pricing />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
