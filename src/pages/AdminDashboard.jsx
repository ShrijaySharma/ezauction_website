import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    LayoutDashboard, Type, Zap, Trophy, ListOrdered, Megaphone, Phone, MessageSquare,
    LogOut, RotateCcw, ChevronRight, Home
} from 'lucide-react';
import { useSiteContent } from '../context/SiteContentContext';
import HeroEditor from '../components/admin/HeroEditor';
import FeaturesEditor from '../components/admin/FeaturesEditor';
import SuccessStoriesEditor from '../components/admin/SuccessStoriesEditor';
import HowItWorksEditor from '../components/admin/HowItWorksEditor';
import CTAEditor from '../components/admin/CTAEditor';
import ContactEditor from '../components/admin/ContactEditor';
import ReviewsEditor from '../components/admin/ReviewsEditor';

const sections = [
    { id: 'hero', label: 'Hero Section', icon: Type },
    { id: 'features', label: 'Features', icon: Zap },
    { id: 'successStories', label: 'Success Stories', icon: Trophy },
    { id: 'howItWorks', label: 'How It Works', icon: ListOrdered },
    { id: 'cta', label: 'CTA Section', icon: Megaphone },
    { id: 'contact', label: 'Contact Info', icon: Phone },
    { id: 'reviews', label: 'Reviews', icon: MessageSquare },
];

const AdminDashboard = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [saveNotice, setSaveNotice] = useState('');
    const navigate = useNavigate();
    const { content, updateSection, resetSection, resetAll } = useSiteContent();

    useEffect(() => {
        if (!sessionStorage.getItem('ezauction_admin')) {
            navigate('/admin');
        }
    }, [navigate]);

    const handleLogout = () => {
        sessionStorage.removeItem('ezauction_admin');
        navigate('/admin');
    };

    const handleSave = (sectionName, data) => {
        updateSection(sectionName, data);
        setSaveNotice('Changes saved successfully!');
        setTimeout(() => setSaveNotice(''), 2000);
    };

    const handleReset = (sectionName) => {
        if (window.confirm(`Reset "${sections.find(s => s.id === sectionName)?.label}" to defaults? This cannot be undone.`)) {
            resetSection(sectionName);
            setSaveNotice('Section reset to defaults.');
            setTimeout(() => setSaveNotice(''), 2000);
        }
    };

    const renderEditor = () => {
        switch (activeSection) {
            case 'hero':
                return <HeroEditor data={content.hero} onSave={(d) => handleSave('hero', d)} />;
            case 'features':
                return <FeaturesEditor data={content.features} onSave={(d) => handleSave('features', d)} />;
            case 'successStories':
                return <SuccessStoriesEditor data={content.successStories} onSave={(d) => handleSave('successStories', d)} />;
            case 'howItWorks':
                return <HowItWorksEditor data={content.howItWorks} onSave={(d) => handleSave('howItWorks', d)} />;
            case 'cta':
                return <CTAEditor data={content.cta} onSave={(d) => handleSave('cta', d)} />;
            case 'contact':
                return <ContactEditor data={content.contact} onSave={(d) => handleSave('contact', d)} />;
            case 'reviews':
                return <ReviewsEditor />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0f] flex">
            {/* Sidebar */}
            <aside className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-[#0f0f18] border-r border-white/[0.06] flex flex-col transition-all duration-300 fixed h-full z-30`}>
                {/* Logo area */}
                <div className="p-5 border-b border-white/[0.06] flex items-center gap-3">
                    <img src="/ezauction.png" alt="EzAuction" className="h-9 w-9 object-contain flex-shrink-0" />
                    {sidebarOpen && (
                        <div className="overflow-hidden">
                            <h2 className="text-white font-bold text-lg leading-tight">EzAuction</h2>
                            <p className="text-slate-500 text-xs">Website Admin</p>
                        </div>
                    )}
                </div>

                {/* Nav items */}
                <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-left group ${isActive
                                    ? 'bg-accent/10 text-accent border border-accent/20'
                                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                                    }`}
                                title={section.label}
                            >
                                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-accent' : ''}`} />
                                {sidebarOpen && (
                                    <>
                                        <span className="flex-1 text-sm font-medium">{section.label}</span>
                                        {isActive && <ChevronRight className="w-4 h-4" />}
                                    </>
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Bottom actions */}
                <div className="p-3 border-t border-white/[0.06] space-y-1">
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
                        title="View Website"
                    >
                        <Home className="w-5 h-5 flex-shrink-0" />
                        {sidebarOpen && <span className="text-sm font-medium">View Website</span>}
                    </a>
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all"
                        title="Logout"
                    >
                        <LogOut className="w-5 h-5 flex-shrink-0" />
                        {sidebarOpen && <span className="text-sm font-medium">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={`flex-1 ${sidebarOpen ? 'ml-72' : 'ml-20'} transition-all duration-300`}>
                {/* Top bar */}
                <header className="sticky top-0 z-20 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <LayoutDashboard className="w-5 h-5" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">
                                {sections.find(s => s.id === activeSection)?.label}
                            </h1>
                            <p className="text-slate-500 text-xs">
                                {activeSection === 'reviews' ? 'Manage customer reviews' : 'Edit and save to update the live website'}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {saveNotice && (
                            <span className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1.5 rounded-full animate-fade-in">
                                ✓ {saveNotice}
                            </span>
                        )}
                        {activeSection !== 'reviews' && (
                            <button
                                onClick={() => handleReset(activeSection)}
                                className="flex items-center gap-2 text-slate-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
                            >
                                <RotateCcw className="w-4 h-4" />
                                Reset
                            </button>
                        )}
                    </div>
                </header>

                {/* Editor Area */}
                <div className="p-8">
                    {renderEditor()}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
