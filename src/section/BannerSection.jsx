import React from 'react'
import Button from '../component/Button'
import { getImageUrl } from '../utils/getImage'

function BannerSection() {
    return (
        <section
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center mt-4"
            style={{
                backgroundImage: `url(${getImageUrl("banner.jpeg")})`,
            }}
        >
            {/* Overlay (dark layer for better text visibility) */}
            <div className="absolute"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 max-w-screen-md">
                <h1 className="mb-4 text-4xl sm:text-5xl lg:text-7xl font-serif drop-shadow-md tracking-tight text-black">
                    Wedding Photographer
                </h1>
                <p className="mb-8 text-lg sm:text-xl text-black">
                    Hire me and get incredible wedding memories!
                </p>
                <Button>View Portfolio</Button>
            </div>
        </section>
    )
}

export default BannerSection
