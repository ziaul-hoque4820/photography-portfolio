import React from "react";
import bgImage from "../assets/portfolio-back.jpg";
import { getImageUrl } from "../utils/getImage";



export default function PortfolioSection() {
    return (
        <section
            id="portfolio"
            className="relative lg:py-16 md:py-12 py-8 px-6 bg-gray-100 bg-cover bg-no-repeat bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            {/* Background Image */}
            {/* <div className="absolute inset-0 -z-10">
                <img
                    src={bgImage}
                    alt="portfolio background"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/70"></div>
            </div> */}

            {/* Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Portfolio</h2>
                <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Card */}
                {[
                    {
                        img: "portfolio1.jpg",
                        title: "Wedding",
                        tag: "Outdoor photoshoot",
                    },
                    {
                        img: "portfolio2.jpg",
                        title: "Engagement",
                        tag: "Indoor photoshoot",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Image */}
                        <img
                            src={getImageUrl(item.img)}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-[450px] object-cover transform transition-transform duration-500 ease-out group-hover:scale-110"
                        />

                        {/* Top Text */}
                        <span className="absolute left-1/2 top-8 -translate-x-1/2 -translate-y-10 opacity-0 text-white text-2xl font-semibold transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                            {item.tag}
                        </span>

                        {/* Bottom Overlay */}
                        <div className="absolute bottom-0 left-0 w-full translate-y-full bg-white text-center py-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
                            <h3 className="text-lg font-medium text-gray-900">
                                {item.title}
                            </h3>
                            <span className="text-sm text-yellow-700 cursor-pointer">
                                View Portfolio
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
