"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full bg-white py-4 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-5">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-600 rounded-md"></div>
                    <h1 className="text-xl font-semibold">Premium Products</h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-gray-700">
                    <Link href="#products">Products</Link>
                    <Link href="#how">How It Works</Link>
                    <Link href="#faq">FAQ</Link>
                </nav>

                {/* CTA */}
                <Link
                    href="#order"
                    className="px-4 py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition"
                >
                    Order Now
                </Link>
            </div>
        </header>
    );
}
