import React from 'react';
import { motion } from 'framer-motion';

const sportsData = [
    { emoji: "🏏", label: "Cricket", color: "from-emerald-400 to-emerald-600", delay: 0, top: "15%", left: "8%" },
    { emoji: "⚽", label: "Football", color: "from-blue-400 to-blue-600", delay: 1, top: "25%", right: "12%" },
    { emoji: "🏐", label: "Volleyball", color: "from-amber-400 to-orange-500", delay: 2, bottom: "25%", left: "12%" },
    { emoji: "🏑", label: "Hockey", color: "from-rose-400 to-rose-600", delay: 1.5, bottom: "35%", right: "8%" }
];

const FloatingSports = () => {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {sportsData.map((sport, index) => (
                <motion.div
                    key={index}
                    className={`absolute flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${sport.color} bg-opacity-20 backdrop-blur-sm md:backdrop-blur-md border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)]`}
                    style={{ top: sport.top, left: sport.left, right: sport.right, bottom: sport.bottom, opacity: 0.8, willChange: 'transform' }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        delay: sport.delay,
                        ease: "easeInOut",
                    }}
                >
                    <span className="text-3xl md:text-4xl drop-shadow-xl" title={sport.label}>{sport.emoji}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingSports;
