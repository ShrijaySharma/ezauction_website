import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';
import ElectricBorder from './ElectricBorder';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#050505] relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff8080]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-center items-center gap-12">

                <ElectricBorder
                    color="#ff8080"
                    speed={0.9}
                    chaos={0.12}
                    borderRadius={24}
                    className="w-full max-w-[600px]"
                >
                    <div className="w-full bg-[#110e15] p-10 md:p-14 rounded-[24px] text-white flex flex-col justify-between min-h-[600px] md:h-[650px] shadow-2xl relative z-10">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-bold tracking-wider text-white/70 mb-8 uppercase">
                                Connect With Us
                            </div>
                            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-sans tracking-tight">Get in Touch</h2>
                            <p className="text-white/60 leading-relaxed text-lg md:text-xl">
                                Ready to take your tournament to the next level? Contact us directly to book your slot and get started immediately.
                            </p>
                        </div>

                        <div className="mt-10">
                            <div className="flex gap-3 mb-8 flex-wrap">
                                <a href="tel:+917697544446" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-semibold text-white/90 hover:bg-white/10 transition-colors">
                                    +91 76975 44446
                                </a>
                                <a href="tel:+918770455678" className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm md:text-base font-semibold text-white/90 hover:bg-white/10 transition-colors">
                                    +91 87704 55678
                                </a>
                                <a href="https://www.instagram.com/ezauction_?igsh=Nmw3cnltN2FndTl1&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#FCAF45]/20 border border-white/10 text-sm md:text-base font-semibold text-white/90 hover:opacity-80 transition-opacity">
                                    <Instagram className="w-4 h-4 md:w-4 md:h-4" />
                                    Instagram
                                </a>
                            </div>

                            <a href="https://wa.me/917697544446" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-white text-black font-bold py-5 md:py-6 rounded-2xl hover:bg-gray-200 transition-colors text-lg md:text-xl">
                                <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </ElectricBorder>

            </div>
        </section>
    );
};

export default Contact;
