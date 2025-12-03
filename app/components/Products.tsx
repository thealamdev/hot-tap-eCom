'use client';

import Image from 'next/image';

export default function Products() {
    return (
        <>
            <div className="bg-white py-12 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    {/* Header */}
                    <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">Our Products</p>
                    <h1 className="text-5xl font-bold text-gray-900 mt-2">Premium Solutions for Every Need</h1>
                    <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                        Explore our carefully curated selection of high-quality products designed to deliver exceptional value and performance
                    </p>

                    {/* Pricing Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Professional Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Professional</span>
                                </div>
                                <div className="bg-gray-100 h-64 flex items-center justify-center">
                                    <Image
                                        src="https://pagpackaging.com/wp-content/uploads/2025/01/su1_000307722_000374907_xct_24sumdad_sit_hm_02_00-1024x576.webp"
                                        alt="Premium Product A - Men's grooming products"
                                        width={500}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900">Premium Product A</h3>
                                <p className="text-gray-600 mt-4">
                                    High-quality solution designed for professionals who demand excellence and reliability in their daily workflow.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Advanced features
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> 24/7 support
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Premium quality
                                    </li>
                                </ul>
                                <div className="mt-8 flex items-baseline justify-between">
                                    <span className="text-4xl font-bold text-gray-900">$299</span>
                                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Business Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Business</span>
                                </div>
                                <div className="bg-gray-100 h-64 flex items-center justify-center">
                                    <Image
                                        src="https://www.matteralpha.com/uploads/dsc00278.jpg"
                                        alt="Business Solution B - White smart hub device"
                                        width={500}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900">Business Solution B</h3>
                                <p className="text-gray-600 mt-4">
                                    Comprehensive business tool that streamlines your workflow and increases productivity across your team.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Team collaboration
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Analytics
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Cloud storage
                                    </li>
                                </ul>
                                <div className="mt-8 flex items-baseline justify-between">
                                    <span className="text-4xl font-bold text-gray-900">$499</span>
                                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Enterprise Card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Enterprise</span>
                                </div>
                                <div className="bg-gray-100 h-64 flex items-center justify-center">
                                    <Image
                                        src="https://sc04.alicdn.com/kf/H97bc4637f59142659f2b66b2c99d346cI.jpg"
                                        alt="Enterprise Package C - Luxury skincare serums"
                                        width={500}
                                        height={300}
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900">Enterprise Package C</h3>
                                <p className="text-gray-600 mt-4">
                                    Complete enterprise solution with advanced features, dedicated support, and unlimited possibilities.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Custom integration
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Priority support
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="text-orange-500 mr-3">✔</span> Advanced security
                                    </li>
                                </ul>
                                <div className="mt-8 flex items-baseline justify-between">
                                    <span className="text-4xl font-bold text-gray-900">$899</span>
                                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}