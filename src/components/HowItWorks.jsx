import React from 'react';
import { UserPlus, Key, Smartphone } from 'lucide-react';

const steps = [
    {
        icon: <UserPlus className="w-10 h-10 text-white" />,
        title: "Admin Setup",
        description: "Admin easily adds teams and players to the auction pool in the simplified dashboard.",
        bg: "bg-blue-600"
    },
    {
        icon: <Key className="w-10 h-10 text-white" />,
        title: "Auto-Generate Credentials",
        description: "The app automatically generates unique ID passes for every team owner to login securely.",
        bg: "bg-purple-600"
    },
    {
        icon: <Smartphone className="w-10 h-10 text-white" />,
        title: "Digital Bidding",
        description: "Owners login to their dashboard, bid digitally, and track sold players real-time. No paperwork.",
        bg: "bg-indigo-600"
    }
];

const HowItWorks = () => {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden">
            {/* Background decorative blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent/20 rounded-full blur-3xl opacity-30" />
            <div className="absolute inset-0 sport-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter">How It <span className="text-accent underline decoration-accent underline-offset-8">Works</span></h2>
                </div>

                <div className="relative grid md:grid-cols-3 gap-12">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-white/20 z-0" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                            <div className={`w-24 h-24 rounded-full ${step.bg} flex items-center justify-center shadow-xl shadow-black/20 mb-8 border-4 border-primary group-hover:scale-110 transition-transform duration-300 relative`}>
                                {step.icon}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center font-bold text-sm border-2 border-primary">
                                    {index + 1}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-blue-100 max-w-xs leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
