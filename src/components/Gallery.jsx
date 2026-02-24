import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    {
        id: 1,
        title: "Premier League 2024",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1531415074984-7169197938bf?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Corporate Cup",
        location: "Bangalore",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e96e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "State Championship",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Youth League",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&q=80&w=800",
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute inset-0 sport-grid opacity-5 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-accent font-black tracking-widest text-sm uppercase italic border-b-2 border-accent pb-1">Success Stories</span>
                    <h2 className="text-4xl md:text-6xl font-black text-primary mt-6 uppercase italic tracking-tighter">
                        Auctions <span className="text-accent">Powered</span> by EzAuction
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Suncity Society Cricket Auction */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-white border border-gray-100"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                        <div className="p-8 h-full flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Suncity Society Cricket Auction</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Successfully managed 8 teams and 120+ players for a society-wide premium cricket league.
                            </p>
                            <div className="mt-6 flex items-center text-sm font-medium text-blue-600">
                                <span>Housing Society Tournament</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Parshuram Cup Cricket Auction */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg bg-white border border-gray-100"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                        <div className="p-8 h-full flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Parshuram Cup Cricket Auction</h3>
                            <p className="text-gray-500 leading-relaxed">
                                A high-stakes regional auction with real-time bidding for 18 franchises.
                            </p>
                            <div className="mt-6 flex items-center text-sm font-medium text-purple-600">
                                <span>Regional Cricket Tournament</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
