import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquarePlus, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import ReviewForm from './ReviewForm';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

    const fetchReviews = async () => {
        try {
            const { data, error, count } = await supabase
                .from('website_reviews')
                .select('*', { count: 'exact' })
                .eq('status', 'approved')
                .order('created_at', { ascending: false })
                .limit(10); // Show up to 10 on homepage in a scrollable list

            if (error) throw error;
            setReviews(data || []);
            setTotalCount(count || 0);
        } catch (err) {
            console.error('Error fetching reviews:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const renderStars = (rating) => {
        const starCount = rating || 5;
        return (
            <div className="flex gap-1 mb-5">
                {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                        key={s}
                        className={`w-4 h-4 ${
                            s <= starCount
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-600'
                        }`}
                    />
                ))}
            </div>
        );
    };

    return (
        <section id="reviews" className="py-24 bg-gradient-to-b from-slate-950 to-[#050505] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Decorative quote marks */}
            <div className="absolute top-20 left-[5%] opacity-[0.03] pointer-events-none">
                <Quote size={200} className="text-white" />
            </div>
            <div className="absolute bottom-20 right-[5%] opacity-[0.03] pointer-events-none rotate-180">
                <Quote size={200} className="text-white" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-semibold tracking-widest text-sm uppercase bg-accent/10 px-4 py-1.5 rounded-full ring-1 ring-accent/20">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4 tracking-tight">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Real feedback from tournament organizers who've experienced EzAuction.
                    </p>
                </div>

                {/* Reviews Carousel */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    </div>
                ) : reviews.length === 0 ? (
                    <div className="text-center py-16">
                        <Quote className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-400 text-lg mb-2">No reviews yet.</p>
                        <p className="text-slate-500 text-sm">Be the first to share your experience!</p>
                    </div>
                ) : (
                    <div className="relative max-w-[1400px] mx-auto group/carousel">
                        {/* Scroll Buttons */}
                        <button 
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:border-accent shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 focus:opacity-100"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        
                        <button 
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 rounded-full bg-slate-900 border border-white/10 text-white flex items-center justify-center hover:bg-accent hover:border-accent shadow-xl transition-all opacity-0 group-hover/carousel:opacity-100 disabled:opacity-0 focus:opacity-100"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 snap-x snap-mandatory hide-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.4 }}
                                    className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start relative group"
                                >
                                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 h-full min-h-[300px] flex flex-col hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                                        {renderStars(review.rating)}
                                        <Quote className="w-8 h-8 text-accent/30 mb-4" />
                                        <p className="text-slate-300 leading-relaxed flex-1 text-[15px]">
                                            "{review.review}"
                                        </p>
                                        <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center text-white font-bold text-sm">
                                                {review.name.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold text-sm">{review.name}</p>
                                                <p className="text-slate-500 text-xs">
                                                    {new Date(review.created_at).toLocaleDateString('en-IN', {
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {/* View All Card (appears at the end of the scroll) */}
                            {totalCount > 10 && (
                                <div className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] flex-shrink-0 snap-start relative flex items-center justify-center p-4">
                                    <button
                                        onClick={() => navigate('/reviews')}
                                        className="flex flex-col items-center justify-center gap-4 w-full h-full min-h-[300px] rounded-2xl border-2 border-dashed border-white/20 text-slate-400 hover:text-white hover:border-accent hover:bg-white/5 transition-all group"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                            <ArrowRight className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <span className="font-semibold text-lg">See All {totalCount} Reviews</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Actions below carousel */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                    <button
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all transform hover:-translate-y-0.5"
                    >
                        <MessageSquarePlus className="w-5 h-5" />
                        Share Your Experience
                    </button>

                    {totalCount > 10 && (
                        <button
                            onClick={() => navigate('/reviews')}
                            className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold transition-colors group px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10"
                        >
                            View All Reviews
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    )}
                </div>
            </div>

            {/* Review Form Modal */}
            {showForm && (
                <ReviewForm
                    onClose={() => setShowForm(false)}
                    onSubmitted={() => setShowForm(false)}
                />
            )}
            
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Reviews;
