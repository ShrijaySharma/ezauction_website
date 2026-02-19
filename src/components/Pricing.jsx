import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">Simple, transparent pricing</h2>
                    <p className="text-gray-500 text-lg">Everything you need for a successful auction.</p>
                </div>

                <div className="max-w-md mx-auto">
                    {/* Pro Plan */}
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-accent relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                            Best Value
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-800 mb-2">Full Access</h3>
                            <p className="text-gray-500">Complete Auction Solution</p>
                            <div className="mt-6 flex items-center justify-center text-primary">
                                <span className="text-5xl font-bold">₹4,000</span>
                                <span className="text-gray-400 ml-2 font-medium">/ auction</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Full App Access for 1 Day",
                                "Unlimited Teams & Players",
                                "Admin & Team Owner Dashboards",
                                "Real-time Bidding System",
                                "Video Call Support",
                                "Full Setup Guidance",
                                "Sold/Unsold Data Export"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 shrink-0">
                                        <Check className="w-4 h-4 text-green-600" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full py-4 rounded-xl bg-primary text-white text-lg font-bold hover:bg-accent transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <Star className="w-5 h-5 fill-current" />
                            Book Now
                        </button>

                        <p className="text-center text-xs text-gray-400 mt-4">
                            Strictly one-day access. Contact for multi-day events.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
