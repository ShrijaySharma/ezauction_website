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
                    className={`absolute flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-none bg-primary border-[3px] border-white shadow-[4px_4px_0px_#FFFFFF] cursor-crosshair`}
                    style={{ top: sport.top, left: sport.left, right: sport.right, bottom: sport.bottom, willChange: 'transform' }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ scale: 1.1, y: -10, rotate: index % 2 === 0 ? 5 : -5, boxShadow: '8px 8px 0px #FFFFFF' }}
                    transition={{
                        type: "spring", stiffness: 400, damping: 10,
                        opacity: { delay: sport.delay, duration: 0.5 },
                        y: { delay: sport.delay, duration: 0.5 }
                    }}
                >
                    <span className="text-3xl md:text-4xl" title={sport.label}>{sport.emoji}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingSports;
