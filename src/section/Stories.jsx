import React from "react";
import Story1 from "../assets/stories-1.jpg";
import Button from "../component/Button";
import { getImageUrl } from "../utils/getImage";


const data = [
    {
        id: 1,
        heading: "Wedding in New York",
        subHeading: "// Thomas & Laura",
        image: "stories-1.jpg",
    },
    {
        id: 2,
        heading: "Elopement in San Francisco",
        subHeading: "// Kelvin & Jane",
        image: "stories-2.jpg",
    },
    {
        id: 3,
        heading: "Photo Session in Chicago",
        subHeading: "// Steve & Paula",
        image: "stories-3.jpg",
    },
    {
        id: 4,
        heading: "Wedding in Portland",
        subHeading: "// Andrew & Helen",
        image: "stories-4.jpg",
    },
    {
        id: 5,
        heading: "Golden Gate Park Wedding",
        subHeading: "// John & Kate",
        image: "stories-5.jpg",
    },
    {
        id: 6,
        heading: "Wedding in Paris, France",
        subHeading: "// David & Mary",
        image: "stories-6.jpg",
    },
]

function Stories() {
    return (
        <section id="stories" className="lg:py-16 md:py-12 py-8 px-8 md:px-16 lg:px-24 xl:px-40 bg-white">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Stories</h2>
                <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {/* Card */}
                {data.map(item => (
                    <div
                        key={item.id}
                        className="bg-gray-100 rounded-md shadow-sm overflow-hidden text-center transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                        <img
                            src={getImageUrl(item.image)}
                            alt="stories-image"
                            className="w-full h-64 object-cover"
                        />
                        <div className="py-5 space-y-2">
                            <span className="block text-lg font-bold text-neutral-600">
                                {item.heading}
                            </span>
                            <span className="block text-sm font-semibold text-gray-400">
                                {item.subHeading}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-6">
                <Button>View All Stories</Button>
            </div>
        </section>
    );
}

export default Stories;
