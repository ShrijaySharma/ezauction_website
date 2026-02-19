import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-20 relative bg-primary overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Ready to Run Your Auction <br /> Professionally?
                </h2>
                <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
                    Join hundreds of tournament organizers who trust EzAuction for a seamless, glitch-free auction experience.
                </p>

                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                >
                    <span>Book Your Auction Now</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default CTASection;
