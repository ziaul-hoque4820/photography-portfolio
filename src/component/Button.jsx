import React from 'react'

function Button({ children }) {
    return (
        <button
            className="relative overflow-hidden px-6 py-3 font-semibold text-white 
        bg-gradient-to-r from-[#A26E26] to-[#E5BA5E] 
        transition-all duration-500 ease-in-out 
        hover:from-[#E5BA5E] hover:to-[#A26E26] 
        shadow-md hover:shadow-lg cursor-pointer">
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default Button