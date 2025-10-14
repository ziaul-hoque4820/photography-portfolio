import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-6 sm:px-10 lg:px-20">
            {/* Top Section */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 border-b border-gray-700 pb-6">

                {/* Left: Logo or Text Brand */}
                <div className="text-center sm:text-left">
                    <p className="text-2xl font-serif font-bold text-white tracking-wide">
                        Ziaul<span className="text-yellow-500">.dev</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                        Building clean & creative web experiences.
                    </p>
                </div>

                {/* Right: Social Icons */}
                <div className="flex space-x-5">
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-600 text-white transition-colors duration-300"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-600 text-white transition-colors duration-300"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-600 text-white transition-colors duration-300"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-yellow-600 text-white transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center text-sm text-gray-500 mt-6">
                <p>
                    © {new Date().getFullYear()} Ziaul.dev — All Rights Reserved | Designed & Developed with ❤️ by <span className="text-yellow-500 font-medium">Ziaul Hoque</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
