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
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Last Updated: [Insert Date]</p>

                        <p>
                            We strive to ensure complete satisfaction for all our auction managers and franchise owners. This document outlines the conditions under which refunds are provided.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Eligibility for Refunds</h2>
                        <p>
                            [Placeholder: Refunds may be issued if technical disruptions completely prevent the usage of our software during your reserved auction timeframe, assuming the fault lies on our servers.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Non-Refundable Circumstances</h2>
                        <p>
                            [Placeholder: Refunds are not provided for unused application time if you voluntarily cancel your event or abandon the platform midway through your paid auction period without a valid technical reason.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How to Request a Refund</h2>
                        <p>
                            [Placeholder: Submit a request via our Contact or WhatsApp lines within 3 days of your auction date detailing the reason for the refund.]
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default RefundPolicy;
