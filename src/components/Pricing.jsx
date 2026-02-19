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

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Standard Plan */}
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Standard Access</h3>
                            <p className="text-gray-500">Complete Self-Managed Solution</p>
                            <div className="mt-6 flex items-center justify-center text-primary">
                                <span className="text-4xl font-bold">₹4,000</span>
                                <span className="text-gray-400 ml-2 font-medium">/ auction</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Full App Access for 1 Day",
                                "Unlimited Teams & Players",
                                "Admin, Host & Team Owner Dashboards",
                                "Real-time Bidding System",
                                "Video Call Support",
                                "Full Setup Guidance",
                                "Secured Owner login"
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
                            className="w-full py-4 rounded-xl border-2 border-primary text-primary text-lg font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            Choose Standard
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-accent relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                        <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                            Most Popular
                        </div>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Premium Managed</h3>
                            <p className="text-gray-500">Hassle-Free Tournament Management</p>
                            <div className="mt-6 flex items-center justify-center text-primary">
                                <span className="text-4xl font-bold">₹5,000</span>
                                <span className="text-gray-400 ml-2 font-medium">/ auction</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Everything in Standard Plan",
                                "Full Tournament Management",
                                "We Add Teams & Players for You",
                                "Dedicated Priority Support",
                                "Custom Branding Options",
                                "Post-Auction Data Reports"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 font-medium">
                                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center mr-3 shrink-0">
                                        <Star className="w-4 h-4 text-accent" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full py-4 rounded-xl bg-accent text-white text-lg font-bold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                        >
                            <Star className="w-5 h-5 fill-current" />
                            Book Premium
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
