import React from "react";
import Story1 from "../assets/stories-1.jpg";
import Button from "../component/Button";

function Stories() {
    return (
        <section className="lg:py-16 md:py-12 py-8 px-8 md:px-16 lg:px-24 xl:px-40 bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Stories</h2>
                <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {/* Card */}
                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in New York
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Thomas & Laura
                        </span>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in Paris
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Emily & John
                        </span>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in Rome
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Alex & Maria
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in Paris
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Emily & John
                        </span>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in Rome
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Alex & Maria
                        </span>
                    </div>
                </div>
                <div className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03]">
                    <img
                        src={Story1}
                        alt="stories-image"
                        className="w-full h-64 object-cover"
                    />
                    <div className="py-5 space-y-2">
                        <span className="block text-lg font-bold text-neutral-600">
                            Wedding in Rome
                        </span>
                        <span className="block text-sm font-semibold text-gray-400">
              // Alex & Maria
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-center mt-6">
                <Button>View All Stories</Button>
            </div>
        </section>
    );
}

export default Stories;
