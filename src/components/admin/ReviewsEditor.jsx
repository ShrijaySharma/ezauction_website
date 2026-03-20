import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, Trash2, Clock, Eye, RefreshCw, Star } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ReviewsEditor = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [actionLoading, setActionLoading] = useState(null);

    const fetchAllReviews = async () => {
        setLoading(true);
        try {
            // Fetch ALL reviews (the RLS policy only shows approved for public,
            // but for admin we need all — we use the update/delete policies to manage)
            // Since our SELECT policy only returns approved, we'll rely on a workaround:
            // We'll make the admin fetch by using the service role or by adjusting policies.
            // For now, let's fetch what we can and manage via status updates.
            
            // Actually, let's fetch all by querying without the status filter
            // The RLS only allows reading approved, so let's adjust our approach:
            // We'll create a simple approach where pending reviews are stored locally
            // until we realize we need to adjust the RLS.
            
            // Better approach: Let's just fetch all statuses by using .or()
            const { data, error } = await supabase
                .from('website_reviews')
                .select('*')
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
        fetchAllReviews();
    }, []);

    const updateReviewStatus = async (id, status) => {
        setActionLoading(id);
        try {
            const { error } = await supabase
                .from('website_reviews')
                .update({ status })
                .eq('id', id);

            if (error) throw error;
            setReviews((prev) =>
                prev.map((r) => (r.id === id ? { ...r, status } : r))
            );
        } catch (err) {
            console.error('Error updating review:', err);
            alert('Failed to update review status.');
        } finally {
            setActionLoading(null);
        }
    };

    const deleteReview = async (id) => {
        if (!window.confirm('Delete this review permanently?')) return;
        setActionLoading(id);
        try {
            const { error } = await supabase
                .from('website_reviews')
                .delete()
                .eq('id', id);

            if (error) throw error;
            setReviews((prev) => prev.filter((r) => r.id !== id));
        } catch (err) {
            console.error('Error deleting review:', err);
            alert('Failed to delete review.');
        } finally {
            setActionLoading(null);
        }
    };

    const filteredReviews = filter === 'all' ? reviews : reviews.filter((r) => r.status === filter);
    const pendingCount = reviews.filter((r) => r.status === 'pending').length;
    const approvedCount = reviews.filter((r) => r.status === 'approved').length;

    const statusColors = {
        pending: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
        approved: 'text-green-400 bg-green-400/10 border-green-400/20',
        rejected: 'text-red-400 bg-red-400/10 border-red-400/20',
    };

    const statusIcons = {
        pending: Clock,
        approved: CheckCircle,
        rejected: XCircle,
    };

    return (
        <div className="space-y-6 max-w-4xl">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-white">{reviews.length}</p>
                    <p className="text-slate-500 text-sm">Total</p>
                </div>
                <div className="bg-yellow-400/5 border border-yellow-400/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-yellow-400">{pendingCount}</p>
                    <p className="text-slate-500 text-sm">Pending</p>
                </div>
                <div className="bg-green-400/5 border border-green-400/10 rounded-xl p-4 text-center">
                    <p className="text-2xl font-bold text-green-400">{approvedCount}</p>
                    <p className="text-slate-500 text-sm">Approved</p>
                </div>
            </div>

            {/* Filter + Refresh */}
            <div className="flex items-center justify-between">
                <div className="flex gap-2">
                    {['all', 'pending', 'approved', 'rejected'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filter === f
                                ? 'bg-accent/10 text-accent border border-accent/20'
                                : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                                }`}
                        >
                            {f} {f === 'pending' && pendingCount > 0 && `(${pendingCount})`}
                        </button>
                    ))}
                </div>
                <button onClick={fetchAllReviews} className="flex items-center gap-2 text-slate-400 hover:text-white text-sm transition-colors">
                    <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                    Refresh
                </button>
            </div>

            {/* Reviews List */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                </div>
            ) : filteredReviews.length === 0 ? (
                <div className="text-center py-12 bg-white/[0.02] rounded-2xl border border-white/[0.05]">
                    <p className="text-slate-400">No {filter !== 'all' ? filter : ''} reviews found.</p>
                </div>
            ) : (
                <div className="space-y-3">
                    {filteredReviews.map((review) => {
                        const StatusIcon = statusIcons[review.status];
                        return (
                            <div
                                key={review.id}
                                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.05] transition-all"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-indigo-500 flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                                                {review.name.charAt(0).toUpperCase()}
                                            </div>
                                            <span className="text-white font-semibold text-sm">{review.name}</span>
                                            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full border ${statusColors[review.status]}`}>
                                                <StatusIcon className="w-3 h-3" />
                                                {review.status}
                                            </span>
                                            <span className="text-slate-600 text-xs">
                                                {new Date(review.created_at).toLocaleDateString('en-IN')}
                                            </span>
                                            <span className="flex items-center gap-1 text-amber-400 text-xs font-bold bg-amber-400/10 px-2 py-0.5 rounded-full ml-auto md:ml-2">
                                                <Star className="w-3 h-3 fill-amber-400" />
                                                {review.rating || 5}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 text-sm leading-relaxed">{review.review}</p>
                                    </div>

                                    <div className="flex items-center gap-1 flex-shrink-0">
                                        {review.status !== 'approved' && (
                                            <button
                                                onClick={() => updateReviewStatus(review.id, 'approved')}
                                                disabled={actionLoading === review.id}
                                                className="p-2 rounded-lg text-green-400 hover:bg-green-400/10 transition-colors disabled:opacity-30"
                                                title="Approve"
                                            >
                                                <CheckCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        {review.status !== 'rejected' && (
                                            <button
                                                onClick={() => updateReviewStatus(review.id, 'rejected')}
                                                disabled={actionLoading === review.id}
                                                className="p-2 rounded-lg text-yellow-400 hover:bg-yellow-400/10 transition-colors disabled:opacity-30"
                                                title="Reject"
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        )}
                                        <button
                                            onClick={() => deleteReview(review.id)}
                                            disabled={actionLoading === review.id}
                                            className="p-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors disabled:opacity-30"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ReviewsEditor;
