import React from 'react'
import { getImageUrl } from '../utils/getImage'

function Awards() {
    return (
        <section
            className="relative w-full bg-cover bg-center flex items-center justify-center py-20 px-6 mt-4"
            style={{
                backgroundImage: `url(${getImageUrl("awarde-banner.jpeg")})`,
            }}
        >
            {/* Content */}
            <div className="relative z-10 container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-10">

                <div className="flex flex-col items-center justify-center text-center xl:items-center xl:text-center xl:w-1/3 mx-auto">
                    <h2 className="text-4xl font-serif text-gray-800">Awards</h2>
                    <div className="w-30 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
                    <p className="font-semibold text-gray-500 text-lg md:text-xl mt-5 xl:w-[300px] mx-auto">
                        I am proud of my awards! Look, what I’ve already won:
                    </p>
                </div>

                {/* Right side - images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center xl:w-2/3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="text-center p-5 mx-auto">
                            <img
                                src={getImageUrl("award.jpeg")}
                                alt={`award-${i}`}
                                className="w-40 h-40 md:w-48 md:h-48 object-cover text-center mx-auto"
                            />
                            <p className="text-base md:text-lg font-bold text-gray-500 mt-2">
                                Couples Choice Awards 2018
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Awards
