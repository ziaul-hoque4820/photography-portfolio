import React from 'react'
import Button from '../component/Button'

function Advertisement({onHeaeding, onBackground}) {
    return (
        <section
            className="relative w-full min-h-[50vh] bg-cover bg-no-repeat flex items-center justify-center px-6 py-10 my-5"
            style={{
                backgroundImage: `url(${onBackground})`,
                backgroundPosition: 'right center',
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-white/40 md:bg-white/30 lg:bg-transparent"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col items-center text-center xl:items-start xl:text-left xl:ml-20 max-w-3xl">
                <h3 className="text-3xl lg:text-4xl font-serif text-black drop-shadow-md">
                    {onHeaeding}
                </h3>

                <div className="w-24 h-[3px] bg-yellow-600 mx-auto xl:mx-0 mt-3 mb-6"></div>

                <Button>Contact Me</Button>
            </div>
        </section>
    )
}

export default Advertisement
