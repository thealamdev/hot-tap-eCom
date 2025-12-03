// components/Products.tsx
"use client";

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
        currency: 'BDT',
        minimumFractionDigits: 0,
    });

    const handleAddToCart = (product: ProductInterface) => {
        const existing = JSON.parse(sessionStorage.getItem('cart') || '[]');

        const alreadyAdded = existing.some((p: ProductInterface) => p.id === product.id);
        if (alreadyAdded) {
            document.getElementById('order-form')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            return;
        }

        // Add product with quantity 1
        const updatedCart = [...existing, { ...product, quantity: 1 }];
        sessionStorage.setItem('cart', JSON.stringify(updatedCart));

        window.dispatchEvent(new CustomEvent('cartUpdated'));

        document.getElementById('order-form')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <p className="text-gray-500 text-lg">Loading products...</p>
            </div>
        );
    }

    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-orange-500 text-sm font-semibold uppercase tracking-wider">
                    Our Products
                </p>
                <h1 className="text-5xl font-bold text-gray-900 mt-2">
                    Premium Solutions for Every Need
                </h1>
                <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">
                    Explore our carefully curated selection of high-quality products
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 bg-gray-100">
                                {product.stock && (
                                    <span className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
                                        {product.stock}
                                    </span>
                                )}
                                <Image
                                    src={product.image_url}
                                    alt={product.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {product.title}
                                </h3>
                                <p className="text-gray-600 mt-4 line-clamp-3">
                                    {product.detail}
                                </p>

                                <div className="mt-8 flex flex-col items-center gap-4">
                                    <span className="text-4xl font-extrabold text-orange-600">
                                        {BDTFormatter.format(product.price)}
                                    </span>
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Add to Cart
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