import React from 'react';
import { Check, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
    const navigate = useNavigate();

    const handlePlanSelect = () => {
        navigate('/#contact');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    return (
        <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 sport-grid opacity-20 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black text-primary mb-4 italic uppercase tracking-tighter">
                        Simple, <span className="text-accent">transparent</span> pricing
                    </h2>
                    <p className="text-gray-500 text-lg font-medium">Everything you need for a successful auction.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
                    {/* Pricing Image / Boy Banner */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="hidden lg:block w-1/3 relative"
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
                        <img
                            src="/pricing_img.png"
                            alt="Pricing Special Offer"
                            className="w-full object-contain relative z-10 drop-shadow-2xl animate-pulse delay-75 duration-[3000ms]"
                        />
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 w-full lg:w-2/3">
                        {/* Basic Plan */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Access</h3>
                                <p className="text-gray-500 text-sm">For Small Friendly Matches</p>
                                <div className="mt-4 flex items-center justify-center text-primary">
                                    <span className="text-3xl font-bold">₹2,000</span>
                                    <span className="text-gray-400 ml-1 text-sm font-medium">/ auction</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Full App Access for 1 Day",
                                    "Up to 4 Teams Only",
                                    "Admin, Host & Team Owner Dashboards",
                                    "Real-time Bidding System",
                                    "Secured Owner login"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mr-3 shrink-0">
                                            <Check className="w-3 h-3 text-gray-600" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handlePlanSelect}
                                className="w-full py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-black uppercase tracking-wider hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                            >
                                Choose Basic
                            </button>
                        </div>

                        {/* Standard Plan */}
                        <div className="bg-white p-6 rounded-3xl shadow-xl border-2 border-primary relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 z-10">
                            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                Recommended
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard</h3>
                                <p className="text-gray-500 text-sm">Complete Self-Managed Solution</p>
                                <div className="mt-4 flex items-center justify-center text-primary">
                                    <span className="text-4xl font-bold">₹4,000</span>
                                    <span className="text-gray-400 ml-1 text-sm font-medium">/ auction</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Full App Access for 1 Day",
                                    "Unlimited Teams & Players",
                                    "Admin, Host & Team Owner Dashboards",
                                    "Real-time Bidding System",
                                    "Video Call Support",
                                    "Full Setup Guidance",
                                    "Sold/Unsold Data Export"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 shrink-0">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handlePlanSelect}
                                className="w-full py-3 rounded-xl bg-primary text-white font-black uppercase tracking-wider hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg"
                            >
                                Choose Standard
                            </button>
                        </div>

                        {/* Premium Plan */}
                        <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-accent relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="absolute top-0 right-0 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                                VIP
                            </div>

                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Premium</h3>
                                <p className="text-gray-500 text-sm">Hassle-Free Management</p>
                                <div className="mt-4 flex items-center justify-center text-primary">
                                    <span className="text-3xl font-bold">₹5,000</span>
                                    <span className="text-gray-400 ml-1 text-sm font-medium">/ auction</span>
                                </div>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {[
                                    "Everything in Standard Plan",
                                    "Unlimited Teams & Players",
                                    "Full Tournament Management",
                                    "We Add Teams & Players for You",
                                    "Dedicated Priority Support",
                                    "Custom Branding Options"
                                ].map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-700 text-sm font-medium">
                                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 shrink-0">
                                            <Star className="w-3 h-3 text-accent" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={handlePlanSelect}
                                className="w-full py-3 rounded-xl bg-accent text-white font-black uppercase tracking-wider hover:bg-blue-600 transition-colors shadow-md flex items-center justify-center gap-2"
                            >
                                <Star className="w-4 h-4 fill-current" />
                                Book Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
