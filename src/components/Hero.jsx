
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronRight, ChevronLeft } from 'lucide-react';

const dashboards = [
    {
        src: "/admin_dashboard.png",
        title: "Admin Dashboard",
        color: "from-blue-500 to-cyan-500" // Indicator color
    },
    {
        src: "/team_owner_dashbaord.png",
        title: "Team Owner Dashboard",
        color: "from-purple-500 to-pink-500"
    },
    {
        src: "/host dashboard.png",
        title: "Host Dashboard",
        color: "from-orange-500 to-red-500"
    }
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % dashboards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + dashboards.length) % dashboards.length);
    };

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-white space-y-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                        <span>Live Cricket Auctions Made Easy</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                        Run Your Auction <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            Like IPL
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed">
                        EzAuction is the professional real-time platform that transforms your local cricket tournament into a world-class bidding experience. Transparent, exciting, and paperless.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center justify-center space-x-2 bg-accent hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-accent/50 transition-all transform hover:-translate-y-1"
                        >
                            <span>Book Your Auction</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
                            <Play className="w-5 h-5 fill-current" />
                            <span>View Demo</span>
                        </button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-gray-400 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-primary" />
                                ))}
                            </div>
                            <span>Trusted by 100+ Organizers</span>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image/Carousel */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="relative perspective-1000"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500 group">
                        <div className="bg-gray-800 py-2 px-4 flex items-center gap-2 border-b border-white/10 justify-between">
                            <div className="flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                </div>
                                <span className="text-xs text-gray-400 font-medium ml-2">
                                    EzAuction - {dashboards[currentIndex].title}
                                </span>
                            </div>
                        </div>

                        {/* Carousel Container */}
                        <div className="relative overflow-hidden bg-gray-900 aspect-[16/10] group/carousel">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentIndex}
                                    src={dashboards[currentIndex].src}
                                    alt={dashboards[currentIndex].title}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-auto block object-contain"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/800x500/1e293b/ffffff?text=Image+Not+Found";
                                    }}
                                />
                            </AnimatePresence>

                            {/* Navigation Overlays */}
                            <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={prevSlide}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all transform hover:scale-110"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                {dashboards.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex
                                                ? `w-6 bg-gradient-to-r ${dashboards[idx].color}`
                                                : 'bg-white/30 hover:bg-white/50'
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
