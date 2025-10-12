import React from 'react'
import Button from '../component/Button'
import MyStylePhoto1 from '../assets/style-1.jpeg'
import MyStylePhoto2 from '../assets/style-2.jpeg'

function MyStyle() {
    return (
        <section className="w-full py-16 px-6 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16">

                {/* Left side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 drop-shadow-md">
                        My Style
                    </h2>

                    <div className="w-24 h-[3px] bg-yellow-600 mx-auto lg:mx-0 mt-3 mb-6"></div>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        I strive to capture the most special moments of your big day. From my shooting style to my editing services,
                        I like to do all things naturally. I am a creative, adventurer, and researcher, and my clients value my artistic vision.
                    </p>

                    <div className="mt-8">
                        <Button>Request a Quote</Button>
                    </div>
                </div>

                {/* Right side - Images */}
                <div className="w-full lg:w-1/2 flex justify-center lg:my-auto">
                    <div className="grid grid-cols-2 gap-6 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                        {/* Image 1 */}
                        <div className="overflow-hidden rounded-b-sm shadow-sm transition-transform duration-300 hover:scale-105">
                            <img
                                src={MyStylePhoto1}
                                alt="style-image1"
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Image 2 */}
                        <div className="overflow-hidden rounded-sm shadow-sm transition-transform duration-300 hover:scale-105">
                            <img
                                src={MyStylePhoto2}
                                alt="style-image2"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyStyle

