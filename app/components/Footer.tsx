import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-r from-orange-500 to-orange-600 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">📦</span>
                            </div>
                            <h3 className="text-xl font-bold">Premium Products</h3>
                        </div>
                        <p className="text-white/90 text-sm leading-relaxed">
                            Delivering exceptional quality and service to businesses worldwide since 2020
                        </p>
                    </div>

                    {/* Products Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Products</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/products" className="text-white/90 hover:text-white transition-colors text-sm">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/features" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/testimonials" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-white/90 hover:text-white transition-colors text-sm">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/faq" className="text-white/90 hover:text-white transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Support Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-white/90 hover:text-white transition-colors text-sm">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-white/90 text-sm">
                            © {currentYear} Premium Products. All rights reserved.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            <Link
                                href="https://facebook.com"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </Link>
                            <Link
                                href="https://twitter.com"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </Link>
                            <Link
                                href="https://youtube.com"
                                target="_blank"
                                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </Link>
                        </div>

                        {/* Powered By */}
                        <p className="text-white/90 text-sm">
                            Powered by <span className="font-semibold">Readdy</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}