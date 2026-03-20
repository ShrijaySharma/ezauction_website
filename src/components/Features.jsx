import React from 'react';
import { Gavel, Lock, Database, CheckCircle, Smartphone, Shield, Zap, Globe, Star, Award, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteContent } from '../context/SiteContentContext';

const iconMap = {
    Gavel: Gavel, Lock: Lock, Database: Database, CheckCircle: CheckCircle,
    Smartphone: Smartphone, Shield: Shield, Zap: Zap, Globe: Globe,
    Star: Star, Award: Award, Target: Target, Users: Users,
};

const Features = () => {
    const { content } = useSiteContent();
    const feat = content.features;

    return (
        <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="absolute inset-0 sport-grid opacity-10 pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-primary uppercase italic tracking-tighter">
                        {feat.heading} <br /> <span className="text-accent">{feat.headingAccent}</span> {feat.headingSuffix}
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
                        {feat.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feat.features.map((feature, index) => {
                        const IconComp = iconMap[feature.iconName] || Star;
                        return (
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
                                    <IconComp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
