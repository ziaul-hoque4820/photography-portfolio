import React from 'react'
import Weading1 from '../assets/wedding-1.jpeg'
import Weading2 from '../assets/wedding-2.jpeg'
import BannerPhoto from '../assets/wedding-banner.jpeg'
import Button from '../component/Button'

function WeddingTips() {
    return (
        <section className="w-full py-8 bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(${BannerPhoto})`,
            }}
        >
            {/* Container with max width */}
            <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-gray-800">Stories</h2>
                    <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
                </div>

                {/* Story 1 */}
                <div className="mb-10">
                    <div className="flex flex-col md:flex-row bg-white md:h-[420px]">
                        {/* Image */}
                        <div className="w-full md:w-1/2 h-[250px] md:h-full">
                            <img
                                src={Weading1}
                                alt="wedding-img"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center">
                            <h4 className="text-2xl font-serif mb-3">
                                How to hire the best employees to your company?
                            </h4>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business.
                            </p>
                            <a href="#" className="text-yellow-600 font-semibold hover:underline">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                {/* Story 2 */}
                <div>
                    <div className="flex flex-col md:flex-row-reverse bg-white md:h-[420px]">
                        {/* Image */}
                        <div className="w-full md:w-1/2 h-[250px] md:h-full">
                            <img
                                src={Weading2}
                                alt="wedding-img"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-[45%] p-6 md:p-10 flex flex-col justify-center">
                            <h4 className="text-2xl font-serif mb-3">
                                How to hire the best employees to your company?
                            </h4>
                            <p className="mb-5 text-gray-700 leading-relaxed">
                                Our HR Director shares his experience how to fill positions with the best candidates, where to find talents, and how to attract professionals to your business.
                            </p>
                            <a href="#" className="text-yellow-600 font-semibold hover:underline">
                                Read More
                            </a>
                        </div>
                    </div>
                </div>

                <div className='mt-5 text-center'>
                    <Button>Read Journal</Button>
                </div>
            </div>
        </section>
    )
}

export default WeddingTips
