'use client';

import { ProductService } from '@/services/ProductService';
import { ProductInterface } from '@/types/ProductInterface';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        ProductService()
            .then((data) => setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    const BDTFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT'
    });

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <p className="text-gray-500 text-lg">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="bg-white py-12 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Header */}
                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">Our Products</p>
                <h1 className="text-5xl font-bold text-gray-900 mt-2">Premium Solutions for Every Need</h1>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
                    Explore our carefully curated selection of high-quality products designed to deliver exceptional value and performance
                </p>

                {/* Product Cards */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="relative w-full h-64">
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        {product.stock}
                                    </span>
                                </div>
                                <div className="h-full w-full bg-gray-100 overflow-hidden relative">
                                    <Image
                                        src={product.image_url}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>

                                <p className="text-gray-600 mt-4">
                                    {product.detail}
                                </p>

                                <div className="mt-8 flex items-baseline justify-between">
                                    <span className="text-4xl font-bold text-gray-900">{BDTFormatter.format(product.price)}</span>
                                    <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition">
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
