import React from 'react';
import { Trophy, Calendar, Award, Medal, Star, Crown, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import BounceCards from './BounceCards';

const stories = [
    {
        title: "Suncity Society Cricket Auction",
        role: "Housing Society Tournament",
        date: "DEC 2025",
        description: "Successfully managed 8 teams and 120+ players for a society-wide premium cricket league.",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Parshuram Cup Cricket Auction",
        role: "Regional Cricket Tournament",
        date: "JAN 2026",
        description: "A high-stakes regional auction with real-time bidding for 18 franchises.",
        gradient: "from-purple-500 to-pink-500"
    },
    {
        title: "Gayatri Premier League 2026",
        role: "Premier Cricket League",
        date: "FEB 2026",
        description: "Seamlessly orchestrated an auction for 12 teams with 11 players each — zero glitches, zero delays.",
        gradient: "from-green-500 to-emerald-500"
    },
    {
        title: "Khalsa Champions League (KCL)",
        role: "Premium League Auction",
        date: "MAR 2026",
        description: "Successfully conducted auction for 8 teams with 12 players per team, fully managed without any issues.",
        gradient: "from-orange-500 to-yellow-500"
    },
    {
        title: "NV Legends League",
        role: "Pro-Am Cricket League",
        date: "APR 2026",
        description: "A spectacular event featuring 6 competitive teams and over 100 passionate players, delivering a thrilling execution.",
        gradient: "from-indigo-500 to-violet-500"
    },
    {
        title: "Junior Cricket Box League",
        role: "Youth Cricket Tournament",
        date: "APR 2026",
        description: "Empowering next-gen talent, this box cricket league auction seamlessly managed 6 dynamic franchises.",
        gradient: "from-rose-500 to-red-500"
    },
    {
        title: "Box Cricket Carnival",
        role: "Box Cricket Tournament",
        date: "MAR 2026",
        description: "An electrifying box cricket extravaganza, flawlessly auctioning over 60 talented players across 6 competitive teams.",
        gradient: "from-fuchsia-500 to-purple-500"
    }
];

const SuccessStories = () => {
    // Defines transforms for 7 cards spacing them evenly and straight
    const transformStyles = [
        "rotate(0deg) translate(-390px)",
        "rotate(0deg) translate(-260px)",
        "rotate(0deg) translate(-130px)",
        "rotate(0deg) translate(0px)",
        "rotate(0deg) translate(130px)",
        "rotate(0deg) translate(260px)",
        "rotate(0deg) translate(390px)"
    ];

    const storyCards = stories.map((story, index) => (
        <div key={index} className="w-full h-full relative overflow-hidden flex flex-col group rounded-[30px] border border-white/10 bg-slate-900 shadow-2xl">
            {/* Left Accent line */}
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${story.gradient} z-20`} />
            
            {/* Background ambient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-10 pointer-events-none" />
            <div className={`card-background bg-gradient-to-br ${story.gradient} opacity-20 pointer-events-none`} />
            
            <div className="card-content flex flex-col relative z-30 p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white shadow-lg ring-1 ring-white/20`}>
                        <Trophy className="w-7 h-7" />
                    </div>
                    <div className="flex items-center text-slate-300 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
                        <Calendar className="w-4 h-4 mr-1.5 opacity-80" />
                        {story.date}
                    </div>
                </div>

                <div className="mt-auto mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight tracking-tight drop-shadow-md">{story.title}</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-accent mb-4 uppercase tracking-wider">{story.role}</div>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">
                        {story.description}
                    </p>
                </div>

                {/* Bottom right glow */}
                <div className={`absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br ${story.gradient} rounded-full blur-[40px] opacity-30 group-hover:opacity-50 transition-all duration-500`} />
            </div>
        </div>
    ));

    return (
        <section id="gallery" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Decorative Floating Sports Elements */}
            <div className="hidden xl:block absolute inset-0 pointer-events-none z-0">
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }} 
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 left-[8%] opacity-[0.15] text-accent"
                >
                    <Award size={100} />
                </motion.div>
                
                <motion.div 
                    animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }} 
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-[45%] left-[4%] opacity-10 text-white"
                >
                    <Target size={120} />
                </motion.div>

                <motion.div 
                    animate={{ y: [0, -25, 0], rotate: [0, 20, 0] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-32 left-[10%] opacity-[0.15] text-blue-400"
                >
                    <Medal size={90} />
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 25, 0], rotate: [0, -10, 0] }} 
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-40 right-[10%] opacity-[0.15] text-yellow-500"
                >
                    <Crown size={100} />
                </motion.div>
                
                <motion.div 
                    animate={{ y: [0, -35, 0], rotate: [0, 15, 0] }} 
                    transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="absolute top-[50%] right-[3%] opacity-[0.08] text-white"
                >
                    <Star size={140} />
                </motion.div>

                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -20, 0] }} 
                    transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                    className="absolute bottom-28 right-[8%] opacity-[0.12] text-purple-400"
                >
                    <Trophy size={110} />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-accent font-semibold tracking-widest text-sm uppercase bg-accent/10 text-accent px-4 py-1.5 rounded-full ring-1 ring-accent/20">Track Record</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 tracking-tight drop-shadow-sm">Recent Success Stories</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">Hover over the cards to explore our flawlessly executed premium cricket and pro-am league auction events.</p>
                </div>

                <div className="flex justify-center items-center w-full max-w-[100vw] overflow-visible pt-16 pb-24">
                    <BounceCards
                        items={storyCards}
                        transformStyles={transformStyles}
                        containerWidth="100%"
                        containerHeight={580}
                        easeType="back.out(1.2)"
                        animationDelay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
