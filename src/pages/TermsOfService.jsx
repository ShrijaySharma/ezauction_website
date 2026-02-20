import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16 container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 text-gray-600">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Last Updated: 20 February 2026</p>

                        <p>By using EzAuction, you agree to the following terms.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Service Description</h2>
                        <p>EzAuction provides digital auction software for tournament organizers.</p>
                        <p>We do NOT conduct auctions ourselves. We only provide the software.</p>
                        <p>Organizers are fully responsible for their auction.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Eligibility</h2>
                        <p>Access is provided only to users approved by EzAuction.</p>
                        <p>We reserve full right to approve or reject access.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Payments</h2>
                        <p>All payments are made externally via UPI or QR code.</p>
                        <p>EzAuction is not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Payment disputes between users and organizers</li>
                            <li>Mistaken payments</li>
                        </ul>
                        <p>Access is provided only after payment confirmation.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. User Responsibilities</h2>
                        <p>Users agree NOT to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Hack or attempt to hack the system</li>
                            <li>Disrupt auctions</li>
                            <li>Misuse the platform</li>
                            <li>Upload illegal content</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Service Availability</h2>
                        <p>We do not guarantee uninterrupted service.</p>
                        <p></p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">6. Limitation of Liability</h2>
                        <p>EzAuction is NOT responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Auction results</li>
                            <li>Financial losses</li>
                            <li>User disputes</li>
                            <li>Organizer disputes</li>
                            <li>Internet issues</li>
                            <li>Device issues</li>
                        </ul>
                        <p>You use the service at your own risk.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">7. Termination</h2>
                        <p>We can suspend or terminate access anytime without notice.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">8. Changes</h2>
                        <p>We can modify terms anytime.</p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4"></h2>
                        <p></p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
