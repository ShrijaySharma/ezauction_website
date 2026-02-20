import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16 container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 text-gray-600">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Last Updated: 20 February 2026</p>

                        <p>EzAuction provides digital auction software services.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. No Refund After Successful Service</h2>
                        <p>Once auction service is delivered and working properly, NO refund will be provided.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Refund Eligibility</h2>
                        <p>Refund may be provided only if:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Major technical failure from our side</li>
                            <li>Service not delivered after payment</li>
                            <li>Service completely unusable due to our fault</li>
                        </ul>
                        <p>Refund is NOT provided for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Change of mind</li>
                            <li>Auction cancellation by organizer</li>
                            <li>Internet issues of user</li>
                            <li>Device issues of user</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Refund Decision</h2>
                        <p>All refund decisions are made by EzAuction.</p>
                        <p>Refunds are case-by-case.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Refund Processing Time</h2>
                        <p>If approved, refund will be processed within:</p>
                        <p><strong>5–10 business days</strong> via <strong>UPI</strong>.</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RefundPolicy;
