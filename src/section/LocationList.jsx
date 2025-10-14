import React from "react";
import Weading1 from "../assets/locatin-image-1.webp";
import Weading2 from "../assets/locatin-image-2.webp";
import Weading3 from "../assets/locatin-image-3.webp";
import Weading4 from "../assets/locatin-image-4.webp";
import Weading5 from "../assets/locatin-image-5.webp";
import Weading6 from "../assets/locatin-image-6.webp";

function LocationList() {
    const images = [Weading1, Weading2, Weading3, Weading4, Weading5, Weading6];

    return (
        <section className="py-10 md:py-14 lg:py-20 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-52 bg-white">
            {/* Section Title */}
            <div className="text-center mb-10 md:mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 relative inline-block">
                    Top Location List
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-[3px] bg-yellow-600 rounded-full"></span>
                </h2>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-md shadow-md hover:shadow-xl transition duration-300"
                    >
                        {/* Image */}
                        <div className="relative w-full aspect-[4/3] lg:aspect-[3/2]">
                            <img
                                src={img}
                                alt={`wedding-location-${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

                            {/* Top text */}
                            <p
                                className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-10 opacity-0 
                    text-white text-xl font-semibold tracking-wide transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                    group-hover:translate-y-0 group-hover:opacity-100 z-10"
                            >
                                New York Public Library
                            </p>

                            {/* Divider line */}
                            <span
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 w-0 h-[2px] bg-yellow-500 
                    transition-all duration-700 ease-in-out group-hover:w-1/2 my-1"
                            ></span>

                            {/* Bottom text */}
                            <p
                                className="absolute left-1/2 bottom-1/4 -translate-x-1/2 translate-y-10 opacity-0 
                    text-white text-sm transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                    group-hover:translate-y-0 group-hover:opacity-100 z-10"
                            >
                                5th Avenue and 42nd Street New York, NY
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}

export default LocationList;


