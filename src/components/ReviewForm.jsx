import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const ReviewForm = ({ onClose, onSubmitted }) => {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!name.trim() || !review.trim()) {
            setError('Please fill in both fields.');
            return;
        }

        if (review.trim().length < 10) {
            setError('Please write at least 10 characters for your review.');
            return;
        }

        setSubmitting(true);
        try {
            const { error: insertError } = await supabase
                .from('website_reviews')
                .insert([{ name: name.trim(), review: review.trim(), status: 'pending' }]);

            if (insertError) throw insertError;

            setSubmitted(true);
            setTimeout(() => {
                onSubmitted();
            }, 2500);
        } catch (err) {
            console.error('Error submitting review:', err);
            setError('Failed to submit review. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="bg-slate-900 border border-white/10 rounded-2xl p-8 w-full max-w-md relative shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-8"
                        >
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                            <p className="text-slate-400">
                                Your review has been submitted and will appear after approval.
                            </p>
                        </motion.div>
                    ) : (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-2">Share Your Experience</h3>
                            <p className="text-slate-400 text-sm mb-6">
                                Tell us about your auction experience with EzAuction.
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="e.g., Rahul Sharma"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                        maxLength={50}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                        Your Review
                                    </label>
                                    <textarea
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        placeholder="How was your experience with EzAuction?"
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                        maxLength={500}
                                    />
                                    <p className="text-slate-500 text-xs mt-1 text-right">
                                        {review.length}/500
                                    </p>
                                </div>

                                {error && (
                                    <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-3 py-2 rounded-lg">
                                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-accent/20"
                                >
                                    {submitting ? (
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Submit Review
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ReviewForm;
