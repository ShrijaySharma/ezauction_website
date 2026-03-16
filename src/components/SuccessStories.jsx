import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
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
    }
];

const SuccessStories = () => {
    // Defines transforms for 6 cards spacing them evenly
    const transformStyles = [
        "rotate(15deg) translate(-320px)",
        "rotate(9deg) translate(-190px)",
        "rotate(3deg) translate(-60px)",
        "rotate(-3deg) translate(60px)",
        "rotate(-9deg) translate(190px)",
        "rotate(-15deg) translate(320px)"
    ];

    const storyCards = stories.map((story, index) => (
        <div key={index} className="w-full h-full relative overflow-hidden flex flex-col group rounded-3xl">
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${story.gradient} z-20`} />
            <div className={`card-background bg-gradient-to-br ${story.gradient}`} />
            <div className="card-content flex flex-col bg-white">
                <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white shadow-lg`}>
                        <Trophy className="w-6 h-6" />
                    </div>
                    <div className="flex items-center text-gray-400 text-sm font-medium">
                        <Calendar className="w-4 h-4 mr-1" />
                        {story.date}
                    </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">{story.title}</h3>
                <div className="text-xs md:text-sm font-bold text-accent mb-4 uppercase tracking-wide">{story.role}</div>
                <p className="text-gray-500 leading-relaxed text-sm">
                    {story.description}
                </p>

                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${story.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
            </div>
        </div>
    ));

    return (
        <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 relative z-10">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase">Track Record</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">Recent Success Stories</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Hover over the cards to explore our flawlessly executed premium cricket and pro-am league auction events.</p>
                </div>

                <div className="flex justify-center items-center w-full max-w-[100vw] overflow-x-hidden pt-10 pb-20">
                    <BounceCards
                        items={storyCards}
                        transformStyles={transformStyles}
                        containerWidth="100%"
                        containerHeight={450}
                        easeType="back.out(1.2)"
                        animationDelay={0.2}
                    />
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
