import React from 'react'

const Footer = () => {
    return (
        <div className=" border-t-2 border-black text-gray-800 text-lg lg:text-xl text-center p-4">
            &copy;{new Date().getFullYear()} -{" "}
            <span> Sarvesh Chaurasia</span> <br />
            <span className="italic text-sm sm:text-base">Built with passion and modern web technologies.</span>
        </div>
    )
}

export default Footer