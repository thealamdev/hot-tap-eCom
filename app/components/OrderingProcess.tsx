import { ShoppingCart, FileText, CheckCircle } from "lucide-react";

export default function OrderingProcess() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Header */}
                <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
                    How it works
                </p>
                <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
                    Simple Ordering Process
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Get started in three easy steps and experience seamless ordering from
                    start to finish
                </p>

                {/* Steps */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12 relative">
                    {/* Connecting Line */}
                    <div className="absolute top-20 left-28 right-28 md:left-36 md:right-36 h-0.5 bg-orange-200 hidden md:block"></div>

                    {/* Step 1 */}
                    <div className="relative flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-orange-500 rounded-full shadow-lg">
                            <ShoppingCart className="w-16 h-16 text-white" />
                            <span className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 bg-gray-900 text-white text-lg font-bold rounded-full">
                                1
                            </span>
                        </div>
                        <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                            Choose Your Product
                        </h3>
                        <p className="mt-3 text-gray-600 max-w-xs">
                            Browse our selection of premium products and select the one that
                            best fits your needs and budget
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-orange-500 rounded-full shadow-lg">
                            <FileText className="w-16 h-16 text-white" />
                            <span className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 bg-gray-900 text-white text-lg font-bold rounded-full">
                                2
                            </span>
                        </div>
                        <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                            Submit Your Order
                        </h3>
                        <p className="mt-3 text-gray-600 max-w-xs">
                            Fill out the simple order form with your contact information and
                            product preferences
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex flex-col items-center">
                        <div className="relative z-10 flex items-center justify-center w-32 h-32 bg-orange-500 rounded-full shadow-lg">
                            <CheckCircle className="w-16 h-16 text-white" />
                            <span className="absolute -top-3 -right-3 flex items-center justify-center w-10 h-10 bg-gray-900 text-white text-lg font-bold rounded-full">
                                3
                            </span>
                        </div>
                        <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                            Get Confirmation
                        </h3>
                        <p className="mt-3 text-gray-600 max-w-xs">
                            Receive instant confirmation and our team will contact you to
                            finalize the details and arrange delivery
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16">
                    <button className="inline-flex items-center px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-full shadow-lg transition duration-300">
                        Start Your Order
                        <svg
                            className="ml-3 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}