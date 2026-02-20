import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16 container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">About EzAuction</h1>
                    <div className="w-20 h-1.5 bg-primary rounded-full mb-10 relative z-10"></div>

                    <div className="prose prose-lg max-w-none text-gray-600 space-y-6 relative z-10">
                        <p className="text-xl font-medium text-gray-800 leading-relaxed">
                            Welcome to <strong>EzAuction</strong> — the ultimate digital platform engineered to revolutionize the way sports auctions and tournaments are managed. Whether you're organizing a friendly weekend league or a full-scale regional tournament, our mission is to make the bidding experience completely transparent, seamless, and thrilling.
                        </p>

                        <p>
                            We recognized the hurdles involved in offline drafting: keeping track of bids on paper, managing countless players, managing team purses in real-time without mistakes, and capturing the excitement of a high-stakes auction room. We built EzAuction to bring that premium, cinematic auction experience straight to your screens, wherever you are.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Why Choose Us?</h2>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Real-Time Sync:</strong> Watch bids happen live across Host, Admin, and Owner dashboards instantly without refreshing.</li>
                            <li><strong>Cinematic Host View:</strong> Display a premium, distraction-free audience screen to elevate the prestige of your event.</li>
                            <li><strong>Automated Math:</strong> No more calculator mistakes. We automatically calculate and deduct budgets, track remaining spots, and handle tie-breakers.</li>
                            <li><strong>Multi-Day Tournaments Made Simple:</strong> Bulk upload your entire player base via CSV to launch massive leagues in minutes.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Our Vision</h2>
                        <p>
                            At the core of our platform lies a dedication to giving sports communities the professional tools they deserve. Be it Cricket, Football, Volleyball, or Hockey, we aim to be the heartbeat of grassroots sports management, empowering organizers to focus on the game itself rather than administrative headaches.
                        </p>

                        <div className="mt-12 p-6 bg-blue-50/50 rounded-2xl border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to host your own auction?</h3>
                                <p className="text-gray-600">Join numerous societies and leagues who have successfully deployed our software.</p>
                            </div>
                            <a href="/pricing" className="shrink-0 bg-primary text-white font-bold py-3 px-8 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                                View Pricing
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;
