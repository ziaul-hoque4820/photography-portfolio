import React from 'react'
import Button from '../component/Button'
import { getImageUrl } from '../utils/getImage'

function About() {
    return (
        <section id='about' className="w-full py-16 px-6 bg-white">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">

                {/* Left side - Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:my-auto">
                    <img
                        src={getImageUrl("about-img.jpeg")}
                        alt="about-img"
                        className="rounded-md object-cover w-full max-w-md sm:max-w-lg lg:max-w-none"
                    />
                </div>

                {/* Right side - Text */}
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start px-2">
                    <h2 className="text-3xl sm:text-4xl font-serif text-gray-800 drop-shadow-md">
                        About Me
                    </h2>

                    <div className="w-24 h-[3px] bg-yellow-600 mx-auto lg:mx-0 mt-3 mb-6"></div>

                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                        Hi! I'm John Taylor, a professional wedding photographer with years of experience under my belt.
                        Entrust with me your special day to make it the most memorable.
                        <br /><br />
                        I am passionate about creating extraordinary stories — romantic masterpieces full of love and emotions —
                        from the morning preparations through to the whole wedding day.
                        Feel free to hire me for your significant event!
                    </p>

                    <div className="mt-8">
                        <Button>More About Me</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About


