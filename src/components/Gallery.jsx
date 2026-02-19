import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
    {
        id: 1,
        title: "Premier League 2024",
        location: "Mumbai",
        image: "https://images.unsplash.com/photo-1531415074984-7169197938bf?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 2,
        title: "Corporate Cup",
        location: "Bangalore",
        image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e96e?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 3,
        title: "State Championship",
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&q=80&w=800",
    },
    {
        id: 4,
        title: "Youth League",
        location: "Chennai",
        image: "https://images.unsplash.com/photo-1512413914633-b5043f4041ea?auto=format&fit=crop&q=80&w=800",
    },
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase">Success Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">
                        Auctions Powered by EzAuction
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                            className="relative group h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="text-white/80 text-sm mt-1">{item.location} • {new Date().getFullYear()}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
