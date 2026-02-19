import React from 'react';
import { Phone, MessageCircle, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2">

                        {/* Visual Side */}
                        <div className="bg-primary p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-4">Rent EzAuction Today</h2>
                                <p className="text-blue-200 leading-relaxed">
                                    Ready to take your tournament to the next level? Contact us directly on WhatsApp or Call to book your slot.
                                </p>
                            </div>

                            <div className="mt-12 relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <Phone className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400">Call / WhatsApp</p>
                                        <p className="text-xl font-bold">+91 76975 44446</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Circles */}
                            <div className="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-accent rounded-full opacity-50 blur-2xl" />
                            <div className="absolute top-[-50px] left-[-50px] w-40 h-40 bg-secondary rounded-full opacity-50 blur-2xl" />
                        </div>

                        {/* Content Side */}
                        <div className="p-12 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8">Connect With Us</h3>

                            <div className="flex flex-col gap-4 w-full max-w-xs">
                                {/* Phone Button */}
                                <a href="tel:+917697544446" className="flex items-center justify-center gap-3 w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-4 rounded-xl border border-gray-200 transition-all group">
                                    <Phone className="w-5 h-5 text-gray-600 group-hover:text-primary" />
                                    <span className="font-semibold">Call +91 76975 44446</span>
                                </a>

                                {/* WhatsApp Button */}
                                <a href="https://wa.me/917697544446" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl shadow-lg shadow-green-200 transition-all">
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                    <span className="font-bold">Chat on WhatsApp</span>
                                </a>

                                {/* Instagram Button */}
                                <a href="#" className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white py-4 rounded-xl shadow-lg shadow-orange-200 transition-all hover:opacity-90">
                                    <Instagram className="w-5 h-5" />
                                    <span className="font-bold">Follow on Instagram</span>
                                </a>
                            </div>

                            <p className="mt-8 text-sm text-gray-500">
                                Available 24/7 for tournament bookings
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
