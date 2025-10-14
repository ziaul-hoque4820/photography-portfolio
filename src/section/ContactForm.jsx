import React from "react";
import BackgroundImage from "../assets/form-banner.jpeg";

function ContactForm() {
    return (
        <section
            className="relative w-full bg-cover bg-center py-20 px-6 flex items-center justify-center"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-white/70"></div>

            {/* Contact Form Box */}
            <div className="relative z-10 w-full max-w-lg bg-white rounded-xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-serif text-gray-800 text-center mb-3">
                    Contact Me for Any Questions
                </h2>
                <div className="w-24 h-[2px] bg-yellow-600 mx-auto mb-8"></div>

                <form className="space-y-5">
                    <input
                        type="text"
                        placeholder="Enter your full name*"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                    />

                    <input
                        type="tel"
                        placeholder="Enter your phone number*"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                    />

                    <input
                        type="email"
                        placeholder="Enter your e-mail*"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                    />

                    <textarea
                        placeholder="Type your message"
                        rows="4"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 transition-all"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full py-3 font-semibold text-white bg-gradient-to-r from-[#A26E26] to-[#E5BA5E] transition-all duration-500 ease-in-out hover:from-[#E5BA5E] hover:to-[#A26E26] shadow-md hover:shadow-lg cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
