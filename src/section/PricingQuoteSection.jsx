import React from 'react'

function PricingQuoteSection() {
    return (
        <section id='pricing' className="bg-gray-50 py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* top thin rule */}
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/*heading text*/}
                <div className="text-center mb-5 mt-5">
                    <h3 className="text-4xl font-serif text-gray-800">Pricing</h3>
                    <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
                </div>

                {/* quote text */}
                <blockquote className="mt-5 text-center">
                    <p className="mx-auto text-gray-700 italic text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                        I am passionate about wedding photography. I strive to catch each moment of love, joy, and happiness making your special day memorable.
                    </p>
                </blockquote>

                {/* bottom rules with centered SVG */}
                <div className="flex items-center mt-8">
                    <div className="flex-1 border-t border-gray-300"></div>

                    {/* SVG sits centered between the two lines and pulled slightly up */}
                    <div className="-mt-4 mx-4">
                        {/* provided SVG (converted to JSX props: fillRule instead of fill-rule) */}
                        <svg
                            viewBox="0 0 50 50"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-amber-400"
                            aria-hidden="true"
                            role="img"
                        >
                            <path
                                d="M23 14v15l-4.5 8H11l4.5-8H8V14h15zm19 0v15l-4.5 8H30l4.5-8H27V14h15z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>

                    <div className="flex-1 border-t border-gray-300"></div>
                </div>
            </div>
        </section>
    )
}

export default PricingQuoteSection