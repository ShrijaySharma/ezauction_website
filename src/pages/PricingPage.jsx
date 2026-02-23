import React from 'react';
import { Check, X, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const PricingPage = () => {
    const navigate = useNavigate();

    const handlePlanSelect = () => {
        navigate('/#contact');
        setTimeout(() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };
    const plans = [
        {
            name: "Basic Access",
            price: "₹2,000",
            subtitle: "For Small Friendly Matches",
            highlight: false,
            features: {
                teams: "Up to 4 Teams",
                appAccess: true,
                dashboards: true,
                realTimeBidding: true,
                ownerLogin: true,
                videoSupport: false,
                setupGuidance: false,
                dataExport: false,
                tournamentManagement: false,
                branding: false,
                prioritySupport: false
            }
        },
        {
            name: "Standard Access",
            price: "₹4,000",
            subtitle: "Complete Self-Managed Solution",
            highlight: true,
            tag: "Recommended",
            features: {
                teams: "Unlimited Teams",
                appAccess: true,
                dashboards: true,
                realTimeBidding: true,
                ownerLogin: true,
                videoSupport: true,
                setupGuidance: true,
                dataExport: true,
                tournamentManagement: false,
                branding: false,
                prioritySupport: false
            }
        },
        {
            name: "Premium Managed",
            price: "₹5,000",
            subtitle: "Hassle-Free Management",
            highlight: false,
            tag: "VIP",
            features: {
                teams: "Unlimited Teams",
                appAccess: true,
                dashboards: true,
                realTimeBidding: true,
                ownerLogin: true,
                videoSupport: true,
                setupGuidance: true,
                dataExport: true,
                tournamentManagement: true,
                branding: true,
                prioritySupport: true
            }
        }
    ];

    const allFeatures = [
        { key: 'teams', label: 'Number of Teams' },
        { key: 'appAccess', label: 'Full App Access (1 Day)' },
        { key: 'dashboards', label: 'Admin, Host & Team Owner Dashboards' },
        { key: 'realTimeBidding', label: 'Real-time Bidding System' },
        { key: 'ownerLogin', label: 'Secured Owner Login' },
        { key: 'videoSupport', label: 'Video Call Support' },
        { key: 'setupGuidance', label: 'Full Setup Guidance' },
        { key: 'dataExport', label: 'Sold/Unsold Data Export' },
        { key: 'tournamentManagement', label: 'Full Tournament Management (We Add Data)' },
        { key: 'branding', label: 'Custom Branding Options' },
        { key: 'prioritySupport', label: 'Dedicated Priority Support' },
    ];

    return (
        <div className="min-h-screen bg-gray-50 font-sans">
            <Navbar />
            <div className="pt-24 pb-12 container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Choose the Right Plan for Your Tournament</h1>
                    <p className="text-xl text-gray-600">Transparent pricing. No hidden fees.</p>
                </div>

                {/* Desktop Comparison Table */}
                <div className="hidden md:block overflow-x-auto bg-white rounded-3xl shadow-xl border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                                <th className="p-6 text-gray-500 font-medium w-1/4">Features</th>
                                {plans.map((plan, index) => (
                                    <th key={index} className={`p-8 text-center w-1/4 relative overflow-hidden ${plan.highlight ? 'bg-blue-50/80 border-x-2 border-accent/20' : ''}`}>
                                        <div className="flex flex-col items-center relative z-10">
                                            {plan.tag && (
                                                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase mb-3 tracking-widest ${plan.name === "Premium Managed" ? "bg-secondary text-white shadow-lg" : "bg-accent text-white shadow-lg"}`}>
                                                    {plan.tag}
                                                </span>
                                            )}
                                            <h3 className="text-2xl font-black text-primary uppercase italic tracking-tighter">{plan.name.split(" ")[0]}</h3>
                                            <p className="text-accent text-4xl font-black mt-2 tracking-tighter">{plan.price}</p>
                                            <span className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">/ auction</span>
                                        </div>
                                        {plan.highlight && <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 -rotate-45 translate-x-10 -translate-y-10" />}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {allFeatures.map((feature, idx) => (
                                <tr key={idx} className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                                    <td className="p-4 pl-6 text-gray-700 font-medium border-r border-gray-100">
                                        {feature.label}
                                    </td>
                                    {plans.map((plan, index) => (
                                        <td key={index} className={`p-4 text-center border-r border-gray-100 ${plan.highlight ? 'bg-blue-50/30' : ''}`}>
                                            {typeof plan.features[feature.key] === 'boolean' ? (
                                                plan.features[feature.key] ? (
                                                    <div className="flex justify-center">
                                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                                            <Check className="w-4 h-4 text-green-600" />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="flex justify-center">
                                                        <X className="w-5 h-5 text-gray-300" />
                                                    </div>
                                                )
                                            ) : (
                                                <span className="font-semibold text-gray-800">{plan.features[feature.key]}</span>
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            {/* CTA Row */}
                            <tr className="bg-gray-50">
                                <td className="p-6"></td>
                                {plans.map((plan, index) => (
                                    <td key={index} className={`p-6 text-center ${plan.highlight ? 'bg-blue-50/50' : ''}`}>
                                        <button
                                            onClick={handlePlanSelect}
                                            className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95 ${plan.name.includes("Premium")
                                                ? "bg-gradient-to-r from-accent to-secondary text-white"
                                                : plan.highlight
                                                    ? "bg-primary text-white border-2 border-accent"
                                                    : "bg-white border-2 border-gray-200 text-gray-700 hover:border-accent"
                                                }`}
                                        >
                                            Get {plan.name.split(" ")[0]}
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View */}
                <div className="md:hidden space-y-8">
                    {plans.map((plan, index) => (
                        <div key={index} className={`bg-white p-5 rounded-2xl shadow-lg border relative overflow-hidden ${plan.highlight ? 'border-primary shadow-xl ring-2 ring-primary/10' : 'border-gray-200'}`}>
                            {plan.tag && (
                                <div className={`absolute top-0 right-0 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider ${plan.name === "Premium Managed" ? "bg-accent" : "bg-primary"}`}>
                                    {plan.tag}
                                </div>
                            )}
                            <div className="text-center mb-4">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{plan.name}</h3>
                                <p className="text-gray-500 text-xs mb-2">{plan.subtitle}</p>
                                <div className="text-primary">
                                    <span className="text-2xl font-bold">{plan.price}</span>
                                    <span className="text-gray-400 ml-1 text-xs">/ auction</span>
                                </div>
                            </div>
                            <ul className="space-y-2 mb-5">
                                {allFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        {typeof plan.features[feature.key] === 'boolean' ? (
                                            plan.features[feature.key] ? (
                                                <Check className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                                            ) : (
                                                <X className="w-4 h-4 text-gray-300 mr-2 shrink-0 mt-0.5" />
                                            )
                                        ) : (
                                            <Check className="w-4 h-4 text-green-600 mr-2 shrink-0 mt-0.5" />
                                        )}
                                        <span className={`leading-tight ${!plan.features[feature.key] ? "text-gray-400 line-through" : "text-gray-700"}`}>
                                            {feature.label} {typeof plan.features[feature.key] === 'string' && <span className="text-xs font-semibold text-primary block mt-0.5">{plan.features[feature.key]}</span>}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={handlePlanSelect}
                                className={`w-full py-4 rounded-xl font-black uppercase tracking-wider transition-all shadow-lg ${plan.name.includes("Premium")
                                    ? "bg-gradient-to-r from-accent to-secondary text-white"
                                    : plan.highlight
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 text-gray-700 border-2 border-transparent"
                                    }`}
                            >
                                Select Plan
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        All plans include secured access, technical support, and reliable server performance.
                        Contact us for custom requirements or multi-day tournament packages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
