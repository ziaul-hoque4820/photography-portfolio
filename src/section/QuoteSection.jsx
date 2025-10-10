import React from 'react'

export default function QuoteSection({
    text = "I am passionate about wedding photography. I strive to catch each moment of love, joy, and happiness making your special day memorable.",
    svgClassName = "w-8 h-8 text-amber-400"
}) {
    return (
        <section className="bg-gray-50 py-12 sm:py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* top thin rule */}
                <div className="flex items-center">
                    <div className="flex-1 border-t border-gray-300"></div>
                </div>

                {/* quote text */}
                <blockquote className="mt-8 text-center">
                    <p className="mx-auto text-gray-700 italic text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                        {text}
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
                            className={svgClassName}
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
