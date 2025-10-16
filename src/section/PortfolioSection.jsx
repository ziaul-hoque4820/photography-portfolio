import React from 'react';
import { getImageUrl } from '../utils/getImage'

export default function PortfolioSection() {
    return (
        <section
            id='portfolio'
            className="relative bg-cover bg-center bg-no-repeat lg:py-16 md:py-12 py-8 px-6"
            style={{
                backgroundImage: `url(${getImageUrl("portfolio-back.jpg")})`,
            }}
        >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Portfolio</h2>
                <div className="w-30 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            {/* Grid Layout */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card 1 */}
                <div className="relative group overflow-hidden rounded-xl shadow-lg">
                    <img
                        src={getImageUrl("portfolio1.jpg")}
                        alt="Wedding"
                        className="w-full h-[450px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                    />

                    {/* Hover Top Text */}
                    <span className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-[250%] text-white text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-0">
                        Outdoor photoshoot
                    </span>

                    {/* Hover Bottom Text */}
                    <div className="absolute left-0 bottom-0 translate-y-full text-center w-full py-3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-gray-50">
                        <h3 className="text-lg font-medium text-gray-900">Wedding</h3>
                        <a className="text-sm text-yellow-700 mt-1 cursor-pointer">View Portfolio</a>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="relative group overflow-hidden rounded-xl hover:shadow-lg">
                    <img
                        src={getImageUrl("portfolio2.jpg")}
                        alt="Engagement"
                        className="w-full h-[450px] object-cover transition-transform duration-700 ease-in-out group-hover:scale-125"
                    />

                    {/* Hover Top Text */}
                    <span className="absolute left-1/2 top-[10%] -translate-x-1/2 -translate-y-[250%] text-white text-2xl font-bold transition-transform duration-500 ease-in-out group-hover:-translate-y-0">
                        Indoor photoshoot
                    </span>

                    {/* Hover Bottom Text */}
                    <div className="absolute left-0 bottom-0 translate-y-full text-center w-full py-3 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:bg-gray-50">
                        <h3 className="text-lg font-medium text-gray-900">Engagement</h3>
                        <a className="text-sm text-yellow-700 mt-1 cursor-pointer">View Portfolio</a>
                    </div>

                </div>
            </div>
        </section>
    );
}
