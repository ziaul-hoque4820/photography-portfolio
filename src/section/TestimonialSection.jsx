import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getImageUrl } from "../utils/getImage";
import BannerPhoto from '../assets/sidebar-banner-img.jpeg'

const testimonials = [
    {
        id: 1,
        image: "sideshow-1.jpeg",
        quote:
            "We could not even imagine such a fantastic wedding photo album! John just pushes boundaries. Nobody can be compared with his approach, creativity, and attentiveness to clients. Everything was just fantastic, from the early morning preparation photos through the whole day wedding! Thanks a lot for such great customer service! I will definitely recommend you to my friends.",
        name: "Carla & Chris",
    },
    {
        id: 2,
        image: "sideshow-2.jpeg",
        quote:
            "Absolutely wonderful experience! The photos captured every emotion perfectly. Highly professional and friendly service that made our day even more special.",
        name: "Emily & Robert",
    },
    {
        id: 3,
        image: "sideshow-3.jpeg",
        quote:
            "John’s photography exceeded our expectations. His artistic vision and attention to detail are unmatched. The entire process was seamless and enjoyable.",
        name: "Sarah & Mark",
    },
];

function TestimonialSection() {
    return (
        <section className="bg-gray-50 py-16"
            style={{
                backgroundImage: `url(${BannerPhoto})`,
            }}
        >
            <div className="max-w-6xl mx-auto  relative">
                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col md:flex-row rounded-none overflow-hidden items-stretch h-[500px] md:h-[400px] lg:h-[500px]">
                                {/* Left Image */}
                                <div className="md:w-1/2 w-full h-full">
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Right Quote */}
                                <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center px-8 py-10 bg-white">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 100 100"
                                        fill="currentColor"
                                        className="w-10 h-10 text-[#E5BA5E] mb-6"
                                    >
                                        <g>
                                            <path d="M48.87,42.353c0-11.276-9.14-20.417-20.417-20.417c-11.277,0-19.462,8.826-20.417,20.062   c-1.458,17.145,11.567,31.5,27.38,36.067c-5.39-3.259-9.15-8.927-9.777-15.519c0.923,0.131,1.857,0.224,2.814,0.224   C39.73,62.77,48.87,53.63,48.87,42.353z" />
                                            <path d="M92,42.353c0-11.276-9.14-20.417-20.418-20.417c-11.276,0-19.462,8.826-20.418,20.062   c-1.458,17.145,11.567,31.5,27.381,36.067c-5.39-3.259-9.149-8.927-9.777-15.519c0.923,0.131,1.858,0.224,2.814,0.224   C82.86,62.77,92,53.63,92,42.353z" />
                                        </g>
                                    </svg>

                                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-8">
                                        “{item.quote}”
                                    </p>
                                    <h4 className="text-gray-900 font-serif text-lg">
                                        {item.name}
                                    </h4>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6 z-10 pointer-events-none">
                    <button className="swiper-button-prev-custom bg-white/70 hover:bg-[#E5BA5E] text-gray-600 hover:text-white p-3 rounded-full shadow-md transition-all duration-300 pointer-events-auto cursor-pointer">
                        <ChevronLeft size={22} />
                    </button>
                    <button className="swiper-button-next-custom bg-white/70 hover:bg-[#E5BA5E] text-gray-600 hover:text-white p-3 rounded-full shadow-md transition-all duration-300 pointer-events-auto cursor-pointer">
                        <ChevronRight size={22} />
                    </button>
                </div>

            </div>
        </section>
    );
}

export default TestimonialSection;
