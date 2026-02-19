import React from 'react';
import { Trophy, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

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
    }
];

const SuccessStories = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase">Track Record</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Recent Success Stories</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {stories.map((story, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group"
                        >
                            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${story.gradient}`} />

                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white shadow-lg`}>
                                    <Trophy className="w-6 h-6" />
                                </div>
                                <div className="flex items-center text-gray-400 text-sm">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {story.date}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{story.title}</h3>
                            <div className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">{story.role}</div>
                            <p className="text-gray-500 leading-relaxed">
                                {story.description}
                            </p>

                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${story.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStories;
