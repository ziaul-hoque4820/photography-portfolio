import React from 'react'
import Instagram1 from '../assets/instagram-img-1.jpeg'
import Instagram2 from '../assets/instagram-img-2.jpeg'
import Instagram3 from '../assets/instagram-img-3.jpeg'
import Instagram4 from '../assets/instagram-img-4.jpeg'
import Button from '../component/Button'

function InstagramImage() {
    return (
        <section className="py-16 bg-white">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
                    Follow me on Instagram
                </h2>
                <div className="w-32 sm:w-40 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-16">
                {[Instagram1, Instagram2, Instagram3, Instagram4].map((img, i) => (
                    <a
                        href="#"
                        key={i}
                        className="relative group overflow-hidden rounded-b-sm"
                    >
                        {/* Image */}
                        <img
                            src={img}
                            alt={`instagram-img-${i}`}
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Overlay effect (optional but pretty) */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                ))}
            </div>

            {/* Button */}
            <div className="text-center mt-10">
                <Button>See more</Button>
            </div>
        </section>
    )
}

export default InstagramImage
