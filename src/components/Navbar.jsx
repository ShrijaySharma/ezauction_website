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
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMobileMenuOpen(false);
        if (href.startsWith('#')) {
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.getElementById(href.substring(1));
                    element?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
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
        { name: 'Pricing', href: '/pricing' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
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
                            className={`text-xl font-bold tracking-wide transition-all duration-300 transform hover:scale-110 hover:text-accent ${isScrolled || location.pathname !== '/' ? 'text-textDark' : 'text-white/90'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="https://app.ezauction.online"
                        className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${isScrolled || location.pathname !== '/'
                            ? 'text-primary border border-primary hover:bg-primary hover:text-white'
                            : 'text-white border border-white hover:bg-white hover:text-primary'
                            }`}
                    >
                        Login
                    </a>
                    <button
                        onClick={() => handleNavClick('#contact')}
                        className="bg-accent hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
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
                        <X className={isScrolled || location.pathname !== '/' ? 'text-textDark' : 'text-white'} />
                    ) : (
                        <Menu className={isScrolled || location.pathname !== '/' ? 'text-textDark' : 'text-white'} />
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
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-textDark font-medium hover:text-accent text-left py-2 px-2 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <hr className="border-gray-100 my-2" />
                            <a
                                href="https://app.ezauction.online"
                                className="text-center w-full py-3 rounded-lg border border-gray-200 text-textDark font-semibold hover:bg-gray-50"
                            >
                                Login
                            </a>
                            <button
                                onClick={() => handleNavClick('#contact')}
                                className="w-full bg-accent text-white py-3 rounded-lg font-semibold shadow-md"
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
