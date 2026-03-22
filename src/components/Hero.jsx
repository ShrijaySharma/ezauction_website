import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, ChevronRight, ChevronLeft } from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';

const Hero = () => {
    const { content } = useSiteContent();
    const hero = content.hero;
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % hero.dashboards.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + hero.dashboards.length) % hero.dashboards.length);
    };

    return (
        <section id="home" className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden bg-background text-textDark selection:bg-accent selection:text-primary">
            {/* Background Atmosphere Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[100px] md:blur-[160px] -translate-y-1/2 translate-x-1/3 will-change-transform" />
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/15 rounded-full blur-[80px] md:blur-[140px] translate-y-1/2 -translate-x-1/3 will-change-transform" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-textMuted/20 to-transparent" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 hidden md:block mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-8 text-center lg:text-left pt-12 lg:pt-0"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center space-x-3 bg-surface/50 backdrop-blur-md border border-textMuted/20 px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wide mx-auto lg:mx-0 shadow-[0_0_15px_rgba(0,230,245,0.1)]">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                        </span>
                        <span className="text-accent uppercase tracking-wider font-bold">{hero.badgeText}</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold leading-[1.05] tracking-tight uppercase">
                        {hero.titleLine1} <br />
                        <span className="text-textDark drop-shadow-[0_0_25px_rgba(207,92,255,0.3)]">{hero.titleLine2}</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-secondary animate-gradient-x">
                            {hero.titleLine3}
                        </span>
                    </h1>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-2">
                        {hero.sports.map((sport, i) => (
                            <span key={i} className="px-5 py-2 bg-surface text-sm font-mono font-medium text-textMuted rounded-lg border border-textMuted/20 shadow-sm hover:border-accent/50 hover:bg-surfaceHigh transition-all cursor-default transform hover:-translate-y-1 hover:text-white">
                                {sport}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="text-lg lg:text-xl text-textMuted max-w-xl leading-relaxed mx-auto lg:mx-0">
                        {hero.description}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group relative flex items-center justify-center space-x-3 overflow-hidden rounded-xl bg-gradient-to-r from-accent to-blue-500 text-primary px-8 py-4 text-lg font-bold transition-all transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,230,245,0.4)] w-full sm:w-auto"
                        >
                            <span className="relative z-10">{hero.ctaText}</span>
                            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </button>
                        
                        <button className="group flex items-center justify-center space-x-3 bg-surface/50 hover:bg-surfaceHigh backdrop-blur-md border border-textMuted/30 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all w-full sm:w-auto hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]">
                            <Play className="w-5 h-5 opacity-80 group-hover:opacity-100" />
                            <span>{hero.secondaryCtaText}</span>
                        </button>
                    </div>

                    <div className="pt-6 flex items-center gap-4 text-textMuted text-sm font-medium justify-center lg:justify-start">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-background bg-surfaceHigh flex items-center justify-center text-xs text-white opacity-90`} />
                            ))}
                        </div>
                        <span>{hero.trustText}</span>
                    </div>
                </motion.div>

                {/* Hero Dashboard Glass Showcase */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 5 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative perspective-1000 mt-10 lg:mt-0"
                >
                    {/* Floating elements behind glass */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-secondary/20 blur-2xl rounded-3xl opacity-50 pointer-events-none" />

                    <div className="relative rounded-2xl overflow-hidden border border-textMuted/20 bg-surface/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-all duration-500 group">
                        {/* Mac-like Header */}
                        <div className="bg-surfaceHigh/80 backdrop-blur-md py-3 px-5 flex items-center justify-between border-b border-textMuted/10">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                            </div>
                            <span className="text-xs md:text-sm text-textMuted font-mono font-medium tracking-wider">
                                EZAUCTION / {hero.dashboards[currentIndex]?.title.toUpperCase()}
                            </span>
                            <div className="w-12"></div> {/* spacer */}
                        </div>

                        {/* Carousel Container */}
                        <div className="relative overflow-hidden aspect-[16/10] group/carousel bg-primary/40">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentIndex}
                                    src={hero.dashboards[currentIndex]?.src}
                                    alt={hero.dashboards[currentIndex]?.title}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full h-full object-contain p-4 mix-blend-screen"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/800x500/0b1326/dae2fd?text=No+Preview+Available";
                                    }}
                                />
                            </AnimatePresence>

                            {/* Navigation Overlays */}
                            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={prevSlide}
                                    className="bg-background/60 hover:bg-surfaceHigh text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all transform hover:scale-110 shadow-lg"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-background/60 hover:bg-surfaceHigh text-white p-3 rounded-full backdrop-blur-md border border-white/10 transition-all transform hover:scale-110 shadow-lg"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Indicators */}
                            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 bg-background/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                                {hero.dashboards.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                                            ? `w-8 bg-accent shadow-[0_0_10px_rgba(0,230,245,0.8)]`
                                            : 'bg-textMuted/40 hover:bg-textMuted/80'
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
