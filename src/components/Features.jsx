import React from 'react';
import { Gavel, Lock, Database, CheckCircle, Smartphone, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Gavel className="w-8 h-8 text-white" />,
        title: "Real-Time Live Bidding",
        description: "Experience the thrill of a live auction with millisecond-latency updates for all teams.",
        color: "bg-blue-500"
    },
    {
        icon: <Lock className="w-8 h-8 text-white" />,
        title: "Private Team Portals",
        description: "Secure login portals for team owners to manage bids and maintain privacy.",
        color: "bg-purple-500"
    },
    {
        icon: <Database className="w-8 h-8 text-white" />,
        title: "Complete Auction Data",
        description: "Automatically store detailed records of sold players, prices, and team allocations.",
        color: "bg-indigo-500"
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-white" />,
        title: "Sold & Unsold Tracking",
        description: "Automatically categorize players as they are sold or passed, with easy unsold handling.",
        color: "bg-green-500"
    },
    {
        icon: <Shield className="w-8 h-8 text-white" />,
        title: "Fully Transparent",
        description: "Every bid is logged and displayed visible to everyone, ensuring a fair auction process.",
        color: "bg-red-500"
    },
    {
        icon: <Smartphone className="w-8 h-8 text-white" />,
        title: "Multi-Device Support",
        description: "Works seamlessly on laptops, tablets, and phones for auctioneers and team owners.",
        color: "bg-orange-500"
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 sport-grid opacity-10 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-primary uppercase italic tracking-tighter">
                        Powerful Features for <br /> <span className="text-accent">Professional</span> Auctions
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
                        Everything you need to run a seamless, high-stakes sports auction (Cricket, Football, Volleyball, Hockey) powered by modern technology.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform ${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
