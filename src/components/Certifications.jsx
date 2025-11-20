import React from 'react';

const Certifications = () => {
    // Placeholder logos - in a real app, these would be imported images
    const certifications = "./Vector.png"

    return (
        <section className="py-10 bg-blue-50">
            <div className="text-center mb-8">
                <h3 className="text-lg sm:text-[1.5rem] font-medium text-[#585D5F] font-poppins leading-normal">Certificated From</h3>
            </div>
            <div className="flex justify-center items-center px-4">
                <img
                    src="/Vector.png"
                    alt="Certifications"
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default Certifications;
