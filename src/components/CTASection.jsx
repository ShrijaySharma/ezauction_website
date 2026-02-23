import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-24 relative bg-primary overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 sport-grid opacity-20 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">
                    Ready to Run Your Auction <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Professionally?</span>
                </h2>
                <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto font-medium">
                    Join hundreds of tournament organizers who trust EzAuction for a seamless, glitch-free auction experience.
                </p>

                <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="group inline-flex items-center bg-white text-primary px-10 py-5 rounded-full text-xl font-black uppercase italic tracking-widest shadow-xl hover:shadow-accent/40 hover:bg-gray-100 transition-all transform hover:-translate-y-1"
                >
                    <span>Book Auction</span>
                    <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </section>
    );
};

export default CTASection;
