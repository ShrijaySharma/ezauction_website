import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/ezauction.png" alt="EzAuction" className="h-8 w-8 object-contain" />
                            <span className="text-xl font-bold">EzAuction</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Professional cricket auction platform for seamless, transparent, and exciting bidding experiences.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><a href="/#features" className="hover:text-accent transition-colors">Features</a></li>
                            <li><Link to="/pricing" className="hover:text-accent transition-colors">Pricing</Link></li>
                            <li><a href="/#gallery" className="hover:text-accent transition-colors">Gallery</a></li>
                            <li><a href="https://app.ezauction.online" className="hover:text-accent transition-colors">Login</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><a href="/#contact" className="hover:text-accent transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                            <li><Link to="/refund-policy" className="hover:text-accent transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2026 EzAuction. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Made with ❤️ for Cricket</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
