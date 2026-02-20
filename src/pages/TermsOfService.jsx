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
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Last Updated: [Insert Date]</p>

                        <p>
                            Welcome to EzAuction. By accessing or using our website and services, you agree to comply with and be bound by the following Terms of Service.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Account Responsibilities</h2>
                        <p>
                            [Placeholder: Users are responsible for maintaining the confidentiality of their Admin, Host, and Owner login credentials. Any activity under your accounts is your responsibility.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Acceptable Use</h2>
                        <p>
                            [Placeholder: Our platform should only be used for legitimate sports auction management. Attempting to tamper with backend data, inject malicious scripts, or reverse engineer the software is strictly prohibited.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Limitation of Liability</h2>
                        <p>
                            [Placeholder: EzAuction is provided "as is". We are not liable for incidental damages, loss of profits, or interruptions beyond our immediate technical control during your event.]
                        </p>

                        <p className="mt-12 text-gray-500 italic">
                            These terms are subject to modifications. Continued usage signifies your acceptance.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
