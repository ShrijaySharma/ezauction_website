import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('#')) {
            if (location.pathname !== '/') {
                window.location.href = '/' + href;
            } else {
                const element = document.getElementById(href.substring(1));
                element?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
    };

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Features', href: '#features' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Reviews', href: '#reviews' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-surfaceHigh/90 backdrop-blur-sm md:backdrop-blur-md shadow-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div onClick={() => navigate('/')} className="flex items-center gap-2 cursor-pointer">
                    <img src="/ezauction.png" alt="EzAuction" className="h-10 md:h-16 w-auto object-contain transition-all duration-300" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className={`text-xl font-display font-bold tracking-wide uppercase transition-all duration-300 transform hover:-translate-y-1 hover:text-accent ${isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="https://app.ezauction.online"
                        className="px-5 py-2 rounded-xl text-sm font-mono font-bold transition-all text-white border border-white/20 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)] transform hover:-translate-y-0.5"
                    >
                        Login
                    </a>
                    <button
                        onClick={() => handleNavClick('#contact')}
                        className="bg-gradient-to-r from-accent to-blue-500 hover:from-accent hover:to-accent text-primary px-6 py-2.5 rounded-xl border border-accent/50 text-sm font-mono font-bold shadow-[0_0_15px_rgba(0,230,245,0.3)] hover:shadow-[0_0_25px_rgba(0,230,245,0.5)] transition-all transform hover:-translate-y-0.5"
                    >
                        Book Auction
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled || location.pathname !== '/' ? 'text-white' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surfaceHigh border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-white font-medium hover:text-accent text-left py-2 px-2 hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <hr className="border-white/10 my-2" />
                            <a
                                href="https://app.ezauction.online"
                                className="text-center w-full py-3 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors"
                            >
                                Login
                            </a>
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="w-full bg-gradient-to-r from-accent to-blue-500 text-primary py-3 rounded-lg font-bold shadow-[0_0_15px_rgba(0,230,245,0.3)] transition-all"
                            >
                                Book Auction
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
