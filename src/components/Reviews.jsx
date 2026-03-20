import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquarePlus } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ReviewForm from './ReviewForm';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const reviewsPerPage = 3;

    const fetchReviews = async () => {
        try {
            const { data, error } = await supabase
                .from('website_reviews')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setReviews(data || []);
        } catch (err) {
            console.error('Error fetching reviews:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
    const currentReviews = reviews.slice(
        currentPage * reviewsPerPage,
        (currentPage + 1) * reviewsPerPage
    );

    const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
    const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

    return (
        <section className="py-24 bg-gradient-to-b from-slate-950 to-[#050505] relative overflow-hidden">
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

                {/* Reviews Grid */}
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
                    <>
                        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
                            {currentReviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="relative group"
                                >
                                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-8 h-full flex flex-col hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-5">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>

                                        {/* Quote icon */}
                                        <Quote className="w-8 h-8 text-accent/30 mb-4" />

                                        {/* Review text */}
                                        <p className="text-slate-300 leading-relaxed flex-1 text-[15px]">
                                            "{review.review}"
                                        </p>

                                        {/* Author */}
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

                                        {/* Glow effect */}
                                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <button
                                    onClick={prevPage}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>
                                <div className="flex gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setCurrentPage(i)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentPage
                                                ? 'bg-accent w-6'
                                                : 'bg-white/20 hover:bg-white/40'
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button
                                    onClick={nextPage}
                                    className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Submit Review Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setShowForm(true)}
                        className="inline-flex items-center gap-2 bg-accent hover:bg-blue-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all transform hover:-translate-y-0.5"
                    >
                        <MessageSquarePlus className="w-5 h-5" />
                        Share Your Experience
                    </button>
                </div>
            </div>

            {/* Review Form Modal */}
            {showForm && (
                <ReviewForm
                    onClose={() => setShowForm(false)}
                    onSubmitted={() => {
                        setShowForm(false);
                        // Don't refetch — submission needs admin approval
                    }}
                />
            )}
        </section>
    );
};

export default Reviews;
