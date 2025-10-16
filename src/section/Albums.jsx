import React from 'react'
import Button from '../component/Button'
import { getImageUrl } from '../utils/getImage'

function Albums() {
    return (
        <section className="w-full py-16 px-6 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">

                {/* left side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start px-2">
                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 drop-shadow-md">
                        Albums
                    </h2>

                    <div className="w-24 h-[3px] bg-yellow-600 mx-auto lg:mx-0 mt-3 mb-6"></div>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        The photos were intended to be printed, not to be hidden on a hard disk or USB flash drive. They were created to be cherished, shared among friends, and turned into a family relic.
                        <br /><br />
                        That's why I love to present my couples with a stunning wedding album and work tirelessly to create three modern album styles so that you can choose the one you like.
                    </p>

                    <div className="mt-8">
                        <Button>More About Me</Button>
                    </div>
                </div>

                {/* Right side - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:my-auto">
                    <img
                        src={getImageUrl("album-img.jpeg")}
                        alt="about-img"
                        className="rounded-md object-cover w-full max-w-md sm:max-w-lg lg:max-w-none"
                    />
                </div>

            </div>
        </section>
    )
}

export default Albums