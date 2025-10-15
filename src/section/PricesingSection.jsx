import React from 'react'
import Background from '../assets/pricing-background.jpeg'

const data = [
    {
        id: 1,
        text: "A pre-wedding consultation or venue visit",
    },
    {
        id: 2,
        text: "A complimentary engagement photo session",
    },
    {
        id: 3,
        text: "A custom USB drive with all your high-resolution images",
    },
    {
        id: 4,
        text: "A private online gallery to share with family and friends",
    },
    {
        id: 5,
        text: "A selection of fine art prints and albums available for purchase",
    },
    {
        id: 6,
        text: "Travel within 100 miles of San Francisco included",
    },
];

function PricingSection() {
    return (
        <section
            className="relative w-full bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 py-16 md:py-20 lg:py-32"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundPosition: 'right center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/60 sm:bg-white/50 md:bg-white/30 lg:bg-white/30 xl:bg-transparent"></div>

            {/* Content */}
            <div className="relative text-center z-10">
                {/* Heading */}
                <h3 className="text-4xl sm:text-5xl font-serif text-gray-900 mb-3">
                    My Prices Include:
                </h3>
                <div className="w-56 h-[2px] bg-yellow-600 mx-auto mb-10"></div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-start sm:items-center gap-3 sm:gap-4 p-2"
                        >
                            <svg
                                viewBox="0 0 510 510"
                                className="w-6 h-6 text-[#E5BA5E] flex-shrink-0 mt-1"
                                fill="currentColor"
                            >
                                <path d="M255 0C114.75 0 0 114.75 0 255s114.75 255 255 255 255-114.75 255-255S395.25 0 255 0zm-51 382.5L76.5 255l35.7-35.7 91.8 91.8 193.8-193.8 35.7 35.7L204 382.5z" />
                            </svg>
                            <p className="text-gray-800 text-base sm:text-lg whitespace-normal">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection
