import React, { useState } from 'react';
import Menu from '../assets/menu.png';
import Button from './Button';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => setToggle(!toggle);

    return (
        <nav className="fixed top-0 w-full bg-gray-50 flex p-4 lg:px-20 z-50 shadow">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                {/* Logo */}
                <div className="flex items-center cursor-pointer select-none">
                    <p className="text-2xl font-serif font-bold text-gray-500 tracking-wide">
                        Ziaul<span className="text-yellow-500">.dev</span>
                    </p>
                </div>

                {/* Menu icon (only small screen) */}
                <button
                    className="md:hidden flex justify-end ring-1 ring-amber-300 rounded p-2"
                    onClick={showNav}
                >
                    <img src={Menu} alt="menu-icon" className="w-5 h-5" />
                </button>

                {/* Nav links */}
                <ul
                    className={`${toggle ? 'flex' : 'hidden'} flex-col justify-center items-center w-full mt-3 md:flex md:flex-row md:mt-0 md:w-auto md:space-x-10`}
                >
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            Portfolio
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            Stories
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            About
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            Pricing
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            Journal
                        </li>
                    </a>
                    <a href="#">
                        <li className="border-t border-t-amber-300 font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 hover:text-[#E5BA5E]">
                            Contacts
                        </li>
                    </a>
                </ul>

                {/* Hire Me button (only on large screens) */}
                <div className="hidden lg:flex">
                    <Button> Hire Me </Button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;