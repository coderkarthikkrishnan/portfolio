import React from 'react';

const Hero = ({ heroImage }) => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 pt-8 sm:pt-16 md:pt-24 pb-0 bg-white relative overflow-hidden">
            {/* Text Content */}
            <div className="md:w-1/2 z-10 text-left">
                <div className="flex items-center justify-center w-[8rem] sm:w-[10.125rem] h-[2.25rem] sm:h-[2.75rem] bg-[#319BF7] text-white rounded-tl-[0.3125rem] rounded-tr-[1.5rem] sm:rounded-tr-[1.875rem] rounded-br-[0] rounded-bl-[1.5rem] sm:rounded-bl-[1.875rem] text-base sm:text-xl font-bold mb-4 tracking-widest">
                    HELLO
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-[6rem] font-bold text-black leading-tight md:leading-normal font-sans">
                    I AM <span className="text-[#319BF7]">KARTHIK</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-[1.5rem] font-medium text-black mb-3 sm:mb-4 leading-snug md:leading-[1.813rem] font-sans">
                    Web Developer | UI/UX Designer
                </p>
                <p className="text-base sm:text-lg font-light text-grey mb-6 sm:mb-8 max-w-md leading-relaxed md:leading-normal font-sans">
                    I build fast, accessible, and modern web experiences with clean, maintainable code.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center w-[12rem] sm:w-[15rem] h-[2.5rem] sm:h-[3.125rem] flex-shrink-0 rounded-[0.625rem] bg-[#319BF7] text-white font-poppins text-xl sm:text-[2rem] font-medium leading-normal shadow-lg hover:bg-blue-600 transition duration-300">
                    Contact Me
                </a>
            </div>

            {/* Image Content */}
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end relative w-full">
                {/* Background shape/blob could go here */}
                <div className="relative z-10 w-full max-w-sm md:max-w-lg">
                    <img
                        src={heroImage}
                        alt="Karthik"
                        className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-500"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
