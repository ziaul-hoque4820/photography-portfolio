import React from "react";

function ContactsSection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-6 sm:px-10 lg:px-24 xl:px-40">
            <div className="text-center relative">
                {/* Top Divider */}
                <div className="mx-auto w-56 sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[800px] h-[1px] bg-neutral-700 mb-6"></div>

                {/* Heading */}
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-gray-800 mb-3 relative inline-block">
                    Contacts
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-[3px] bg-yellow-600 rounded-full"></span>
                </h3>

                {/* Contact Info */}
                <div className="mt-8 space-y-3 sm:space-y-4 text-gray-700">
                    <p className="text-lg sm:text-xl font-medium tracking-wide hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                        +880 1234 657 985
                    </p>
                    <p className="text-base sm:text-lg text-gray-600 hover:text-yellow-600 transition-colors duration-300 cursor-pointer">
                        ziaul.dev@email.com
                    </p>
                </div>

                {/* Bottom Divider */}
                <div className="mx-auto w-56 sm:w-[300px] md:w-[500px] lg:w-[700px] xl:w-[800px] h-[1px] bg-neutral-700 mt-6"></div>
            </div>
        </section>
    );
}

export default ContactsSection;
