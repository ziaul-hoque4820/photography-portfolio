import React from 'react'

function Footer() {
    return (
        <nav className=" w-full bg-gray-50 flex px-20 py-8  shadow-inner">
            <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
                {/* Logo */}
                <div className="flex items-center cursor-pointer select-none">
                    <div className="text-lg sm:text-xl md:text-3xl font-bold flex space-x-0.5">
                        <span className="text-[#079992]">Z</span>
                        <span className="text-[#38ada9]">i</span>
                        <span className="text-[#78e08f]">a</span>
                        <span className="text-[#b8e994]">u</span>
                        <span className="text-[#A26E26]">l</span>
                        <span className="text-[#60a3bc]">'</span>
                        <span className="text-[#E5BA5E]">s</span>
                        <span className="text-[#82ccdd]">&nbsp;</span>
                        <span className="text-[#f8c291]">P</span>
                        <span className="text-[#fad390]">h</span>
                        <span className="text-[#f6b93b]">o</span>
                        <span className="text-[#fa983a]">t</span>
                        <span className="text-[#e58e26]">o</span>
                    </div>
                </div>


                {/* Nav links */}
                <ul
                    className="flex-col justify-center items-center w-full mt-3 md:flex md:flex-row md:mt-0 md:w-auto md:space-x-10"
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
            </div>
        </nav>
    )
}

export default Footer