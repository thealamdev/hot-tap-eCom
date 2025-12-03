"use client";

import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
    { question: "How do I place an order?", answer: "Simply choose your product, fill out the order form with your details, and our team will contact you within 24 hours to confirm and process your order." },
    { question: "What payment methods do you accept?", answer: "We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments for maximum flexibility." },
    { question: "Do you offer refunds?", answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied with your purchase." },
    { question: "How long does delivery take?", answer: "Standard delivery takes 5-10 business days. Express shipping (2-3 days) is available at checkout." },
    { question: "Is customer support included?", answer: "Absolutely! Lifetime customer support is included with every purchase at no extra cost." },
    { question: "Can I upgrade my plan later?", answer: "Yes, you can upgrade at any time. The price difference will be prorated." },
];

export default function () {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                {/* Left Side - Title + Image */}
                <div className="space-y-8">
                    <div>
                        <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                            FAQ
                        </p>
                        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Find answers to common questions about our products, ordering process, and services
                        </p>
                    </div>

                    {/* Decorative Image (replace with your actual image or keep as placeholder) */}
                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-linear-to-br from-orange-400 via-red-400 to-pink-400 opacity-90" />
                    </div>
                </div>

                {/* Right Side - Accordion + Support Card */}
                <div className="space-y-6">
                    {/* FAQ Accordion */}
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left group"
                            >
                                <span className="text-lg font-medium text-gray-900 group-hover:text-orange-600 transition">
                                    {faq.question}
                                </span>
                                <span className="ml-4 text-orange-500">
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6" />
                                    ) : (
                                        <Plus className="w-6 h-6" />
                                    )}
                                </span>
                            </button>

                            {/* Answer - Collapsible */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40" : "max-h-0"
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Still Have Questions Card */}
                    <div className="mt-10 bg-orange-50 rounded-3xl p-8 border border-orange-100">
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Still have questions?
                                </h4>
                                <p className="mt-1 text-gray-600">
                                    Our support team is here to help you with any inquiries
                                </p>
                                <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-full transition shadow-sm">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}