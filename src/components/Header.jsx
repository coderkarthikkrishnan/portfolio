import React, { useState } from 'react';

const Header = ({ profileImage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex justify-between items-center px-4 sm:px-8 py-4 bg-[#1E1E1E] text-white relative border-b-[5px] border-blue-500">
            <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-blue-500">
                    <img
                        src={profileImage || "https://placehold.co/40x40"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Hamburger Menu Button - Visible on mobile */}
            <button
                className="md:hidden flex flex-col gap-1.5 z-50"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex space-x-8 text-lg">
                    <li><a href="#home" className="text-blue-500 font-medium">Home</a></li>
                    <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition duration-300">About</a></li>
                    <li><a href="#services" className="text-gray-400 hover:text-blue-500 transition duration-300">Services</a></li>
                    <li><a href="#contact" className="text-gray-400 hover:text-blue-500 transition duration-300 lowercase">contact</a></li>
                </ul>
            </nav>

            {/* Mobile Navigation Menu */}
            <nav className={`md:hidden fixed top-0 right-0 h-full w-64 bg-[#1E1E1E] transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul className="flex flex-col space-y-6 pt-20 px-8 text-lg">
                    <li>
                        <a
                            href="#home"
                            className="text-blue-500 font-medium block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="text-gray-400 hover:text-blue-500 transition duration-300 block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#services"
                            className="text-gray-400 hover:text-blue-500 transition duration-300 block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Services
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className="text-gray-400 hover:text-blue-500 transition duration-300 lowercase block"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            contact
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </header>
    );
};

export default Header;
