import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquarePlus, ArrowLeft, Quote, SortDesc, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReviewForm from '../components/ReviewForm';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    
    // Filtering and Sorting
    const [selectedStar, setSelectedStar] = useState('all');
    const [sortOrder, setSortOrder] = useState('newest');

    const navigate = useNavigate();

    const fetchAllReviews = async () => {
        setLoading(true);
        try {
            const { data, error } = await supabase
                .from('website_reviews')
                .select('*')
                .eq('status', 'approved')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setReviews(data || []);
        } catch (err) {
            console.error('Error fetching all reviews:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAllReviews();
    }, []);

    // Derived state for filtered/sorted reviews
    const displayReviews = [...reviews]
        .filter(r => selectedStar === 'all' || r.rating === parseInt(selectedStar, 10))
        .sort((a, b) => {
            if (sortOrder === 'newest') return new Date(b.created_at) - new Date(a.created_at);
            if (sortOrder === 'oldest') return new Date(a.created_at) - new Date(b.created_at);
            if (sortOrder === 'highest') return (b.rating || 0) - (a.rating || 0);
            if (sortOrder === 'lowest') return (a.rating || 0) - (b.rating || 0);
            return 0;
        });

    const averageRating = reviews.length > 0
        ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
        : 5.0;

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
        <div className="min-h-screen bg-background font-sans overflow-x-hidden flex flex-col">
            <Navbar />
            
            <main className="flex-1 pt-32 pb-24 bg-gradient-to-b from-[#050505] to-slate-950 relative">
                {/* Background glow */}
                <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                    
                    {/* Header with Back Button */}
                    <div className="mb-12">
                        <button 
                            onClick={() => navigate('/')}
                            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Home
                        </button>
                        
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 lg:p-10">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Client Reviews</h1>
                                <p className="text-slate-400 text-lg max-w-xl">
                                    See what tournament organizers and participants are saying about their experience with EzAuction.
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-6 bg-slate-900/50 p-6 rounded-2xl border border-white/5">
                                <div className="text-center border-r border-white/10 pr-6">
                                    <div className="text-4xl font-black text-white mb-1">{averageRating}</div>
                                    <div className="flex justify-center mb-1">
                                        {[1, 2, 3, 4, 5].map(s => (
                                            <Star key={s} className={`w-3 h-3 ${s <= Math.round(averageRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                                        ))}
                                    </div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Average Rating</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-black text-white mb-1">{reviews.length}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-6">Total Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toolbar (Filters, Sort, Add) */}
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10 pb-6 border-b border-white/10">
                        <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-xl border border-white/10">
                                <Filter className="w-4 h-4 text-slate-400" />
                                <select 
                                    className="bg-transparent text-white outline-none border-none text-sm cursor-pointer appearance-none min-w-[100px]"
                                    value={selectedStar}
                                    onChange={(e) => setSelectedStar(e.target.value)}
                                >
                                    <option value="all" className="bg-slate-900">All Ratings</option>
                                    <option value="5" className="bg-slate-900">5 Stars (Awesome)</option>
                                    <option value="4" className="bg-slate-900">4 Stars (Great) </option>
                                    <option value="3" className="bg-slate-900">3 Stars (Good)</option>
                                    <option value="2" className="bg-slate-900">2 Stars (Fair)</option>
                                    <option value="1" className="bg-slate-900">1 Star (Poor)</option>
                                </select>
                            </div>
                            
                            <div className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-xl border border-white/10">
                                <SortDesc className="w-4 h-4 text-slate-400" />
                                <select 
                                    className="bg-transparent text-white outline-none border-none text-sm cursor-pointer appearance-none min-w-[100px]"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="newest" className="bg-slate-900">Newest First</option>
                                    <option value="oldest" className="bg-slate-900">Oldest First</option>
                                    <option value="highest" className="bg-slate-900">Highest Rated</option>
                                    <option value="lowest" className="bg-slate-900">Lowest Rated</option>
                                </select>
                            </div>
                        </div>

                        <button
                            onClick={() => setShowForm(true)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-accent hover:bg-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-accent/20 transition-all font-sans text-sm"
                        >
                            <MessageSquarePlus className="w-4 h-4" />
                            Write a Review
                        </button>
                    </div>

                    {/* Review Grid */}
                    {loading ? (
                        <div className="flex justify-center items-center py-32">
                            <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin" />
                        </div>
                    ) : displayReviews.length === 0 ? (
                        <div className="text-center py-24 bg-white/[0.02] border border-white/[0.05] rounded-3xl">
                            <Quote className="w-16 h-16 text-slate-700 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-2">No reviews found</h3>
                            <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                                {selectedStar !== 'all' ? "We don't have any reviews matching that rating yet." : "There are no approved reviews to display right now."}
                            </p>
                            {selectedStar !== 'all' && (
                                <button 
                                    onClick={() => setSelectedStar('all')}
                                    className="text-accent hover:underline text-sm font-semibold"
                                >
                                    Clear Filters
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                            {displayReviews.map((review, index) => (
                                <motion.div
                                    key={review.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                                    className="break-inside-avoid relative group"
                                >
                                    <div className="bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-7 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300">
                                        {/* Stars */}
                                        <div className="flex justify-between items-start mb-4">
                                            {renderStars(review.rating)}
                                            <Quote className="w-6 h-6 text-accent/20" />
                                        </div>

                                        {/* Review text */}
                                        <p className="text-slate-300 leading-relaxed text-[15px] mb-6">
                                            "{review.review}"
                                        </p>

                                        {/* Author */}
                                        <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center text-white font-bold text-xs uppercase">
                                                {review.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-white font-semibold text-sm leading-tight">{review.name}</p>
                                                <p className="text-slate-500 text-xs mt-0.5">
                                                    {new Date(review.created_at).toLocaleDateString('en-IN', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric',
                                                    })}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            
            <Footer />

            {/* Review Form Modal */}
            {showForm && (
                <ReviewForm
                    onClose={() => setShowForm(false)}
                    onSubmitted={() => {
                        setShowForm(false);
                        fetchAllReviews(); // Refresh list if they add one (though it starts pending)
                    }}
                />
            )}
        </div>
    );
};

export default ReviewsPage;
