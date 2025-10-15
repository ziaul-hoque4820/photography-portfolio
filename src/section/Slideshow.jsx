import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

import Slide1 from "../assets/slide-show-1.jpeg";
import Slide2 from "../assets/slide-show-2.jpeg";
import Slide3 from "../assets/slide-show-3.jpeg";

function Slideshow() {
    const slides = [Slide1, Slide2, Slide3];
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            swiperRef.current.params &&
            swiperRef.current.params.navigation
        ) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className="bg-gray-50 py-16">
            {/* Title */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif text-gray-800">Slideshow</h2>
                <div className="w-20 h-[2px] bg-yellow-600 mx-auto mt-3"></div>
            </div>

            <div className="max-w-5xl mx-auto px-4 relative">
                {/* Swiper */}
                <Swiper
                    modules={[Navigation]}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    className="rounded-2xl overflow-hidden"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                                <img
                                    src={slide}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/10 hover:bg-black/30 transition-all duration-500"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-3 md:px-6 z-10 pointer-events-none">
                    <button
                        ref={prevRef}
                        className="bg-white/70 hover:bg-yellow-600 text-gray-700 hover:text-white 
              p-2 sm:p-3 md:p-4 rounded-full shadow-md transition-all duration-300 pointer-events-auto my-auto cursor-pointer"
                    >
                        <ChevronLeft size={22} />
                    </button>

                    <button
                        ref={nextRef}
                        className="bg-white/70 hover:bg-yellow-600 text-gray-700 hover:text-white 
              p-2 sm:p-3 md:p-4 rounded-full shadow-md transition-all duration-300 pointer-events-auto my-auto cursor-pointer"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Slideshow;
