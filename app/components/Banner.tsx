export default function Banner() {
    return (
        <section className="w-full bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5 gap-10">

                {/* Left Content */}
                <div className="max-w-xl">
                    <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
                        New Launch 2025
                    </span>

                    <h1 className="mt-4 text-5xl font-bold text-gray-900 leading-tight">
                        Premium Quality <span className="text-orange-600">Solutions</span> for You
                    </h1>

                    <p className="mt-4 text-gray-600 leading-relaxed">
                        Discover exceptional products designed to elevate your business
                        and exceed your expectations with unmatched quality.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition shadow-md">
                            Get Started →
                        </button>

                        <button className="px-6 py-3 border border-gray-300 rounded-md font-semibold hover:bg-gray-100 transition">
                            View Products
                        </button>
                    </div>

                    <p className="mt-6 text-gray-700 text-sm">
                        Join <span className="font-bold">10,000+</span> satisfied customers
                    </p>
                </div>

                {/* Right Video */}
                <div className="shadow-xl rounded-xl overflow-hidden">
                    <iframe
                        className="rounded-xl"
                        width="480"
                        height="270"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Product Video"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
