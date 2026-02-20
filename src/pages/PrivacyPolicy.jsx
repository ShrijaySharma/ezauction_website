import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-16 container mx-auto px-6 max-w-4xl">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 text-gray-600">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none space-y-6">
                        <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Last Updated: [Insert Date]</p>

                        <p>
                            At EzAuction, we prioritize your privacy. This Privacy Policy details how we handle the collection, use, and disclosure of your personal information when you use our website and associated services.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Information We Collect</h2>
                        <p>
                            [Placeholder: We may collect your name, email address, payment information, and device data associated with utilizing our auction dashboard logic.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
                        <p>
                            [Placeholder: We use the information provided to process transactions, maintain and improve our platform features, and communicate with you about your auction logistics and customer support.]
                        </p>

                        <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Data Protection</h2>
                        <p>
                            [Placeholder: We implement rigorous security measures to protect your personal data, ensuring that team info and sensitive credentials remain secure.]
                        </p>

                        <p className="mt-12 text-gray-500 italic">
                            For any complete inquiries regarding data processing, please contact us.
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
