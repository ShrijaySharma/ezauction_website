import React from 'react';
import { Zap, Key, Server, ListChecks, Eye, MonitorSmartphone, Gavel, Lock, Database, CheckCircle, Smartphone, Shield, Globe, Star, Award, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useSiteContent } from '../context/SiteContentContext';

const iconMap = {
    Zap, Key, Server, ListChecks, Eye, MonitorSmartphone,
    Gavel, Lock, Database, CheckCircle, Smartphone, Shield, Globe, Star, Award, Target, Users
};

const Features = () => {
    const { content } = useSiteContent();
    const feat = content.features;

    // A modern container variant for staggered children
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden text-textDark">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute inset-0 sport-grid opacity-5 pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold uppercase tracking-wide">
                            {feat.heading} <br /> 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
                                {feat.headingAccent}
                            </span> {feat.headingSuffix}
                        </h2>
                        <p className="text-textMuted max-w-2xl mx-auto text-lg mt-6 font-medium leading-relaxed">
                            {feat.description}
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {feat.features.map((feature, index) => {
                        const IconComp = iconMap[feature.iconName] || Star;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="group relative bg-surface/40 hover:bg-surfaceHigh/60 backdrop-blur-xl p-8 rounded-3xl border border-textMuted/10 hover:border-accent/40 shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                {/* Glowing ambient hover effect inside card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-500 pointer-events-none" />
                                
                                <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] transform group-hover:scale-110 transition-transform duration-300 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50`}>
                                    <div className={`absolute inset-0 rounded-2xl ${feature.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                                    <IconComp className="w-7 h-7 text-white relative z-10" />
                                </div>

                                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-textMuted leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Bottom highlight border */}
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-secondary group-hover:w-full transition-all duration-500 ease-out" />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
