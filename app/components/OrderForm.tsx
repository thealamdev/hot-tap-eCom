// components/OrderForm.tsx
"use client";

import { useState } from "react";
import { User, Package, Truck, Check } from "lucide-react";

export default function OrderForm() {
    const [deliveryMethod, setDeliveryMethod] = useState("standard");

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                        Place your order
                    </p>
                    <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                        Complete Your Order
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Fill in your details below and we’ll get your order processed right away
                    </p>
                </div>

                <form className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl p-8 md:p-12">
                    {/* === LEFT COLUMN - Billing Details === */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <User className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Billing Details</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <input
                                type="text"
                                placeholder="Full Name *"
                                defaultValue="John Doe"
                                className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email Address *"
                                defaultValue="john@example.com"
                                className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number *"
                                defaultValue="+1 (555) 000-0000"
                                className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                            <input
                                type="text"
                                placeholder="Street Address *"
                                defaultValue="123 Main Street"
                                className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />

                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="City *"
                                    defaultValue="New York"
                                    className="px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP Code *"
                                    defaultValue="10001"
                                    className="px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    required
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Country *"
                                defaultValue="United States"
                                className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                                required
                            />
                        </div>
                    </div>

                    {/* === RIGHT COLUMN - Order & Delivery === */}
                    <div className="space-y-8">
                        {/* Order Details */}
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                <Package className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Order Details</h3>
                        </div>

                        <select
                            defaultValue=""
                            className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        >
                            <option value="" disabled>
                                Choose a product... *
                            </option>
                            <option>Premium Plan - $99/mo</option>
                            <option>Enterprise Plan - $299/mo</option>
                            <option>Lifetime Access - $999</option>
                        </select>

                        <input
                            type="number"
                            placeholder="Quantity *"
                            defaultValue="1"
                            min="1"
                            className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />

                        <textarea
                            rows={4}
                            placeholder="Special Requests (optional)"
                            className="w-full px-5 py-4 border text-gray-700 border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                            maxLength={500}
                        />

                        {/* Delivery Method */}
                        <div className="mt-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                    <Truck className="w-5 h-5 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Delivery Method</h3>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { id: "standard", label: "Standard Delivery", time: "5-7 business days", price: "Free" },
                                    { id: "express", label: "Express Delivery", time: "2-3 business days", price: "$15" },
                                    { id: "overnight", label: "Overnight Delivery", time: "Next business day", price: "$30" },
                                ].map((option) => (
                                    <label
                                        key={option.id}
                                        className={`flex items-center justify-between p-5 border rounded-xl cursor-pointer transition-all ${deliveryMethod === option.id
                                                ? "border-orange-500 bg-orange-50"
                                                : "border-gray-200 hover:border-gray-300"
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <input
                                                type="radio"
                                                name="delivery"
                                                value={option.id}
                                                checked={deliveryMethod === option.id}
                                                onChange={(e) => setDeliveryMethod(e.target.value)}
                                                className="w-5 h-5 text-orange-600 focus:ring-orange-500"
                                            />
                                            <div>
                                                <p className="font-medium text-gray-900">{option.label}</p>
                                                <p className="text-sm text-gray-500">{option.time}</p>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-gray-900">{option.price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* === Submit Button === */}
                    <div className="md:col-span-2 flex justify-center mt-10">
                        <button
                            type="submit"
                            className="group inline-flex items-center gap-3 px-12 py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300"
                        >
                            <Check className="w-6 h-6" />
                            Place Order
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}