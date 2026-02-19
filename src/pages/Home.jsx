import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-background font-sans overflow-x-hidden">
            <Navbar />
            <Hero />
            <Features />
            <Gallery />
            <HowItWorks />
            {/* Pricing Section Removed from Home Page */}
            <CTASection />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
