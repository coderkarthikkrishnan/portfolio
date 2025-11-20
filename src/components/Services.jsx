import React from 'react';

const Services = () => {
    const services = [
        { title: 'Website Development', id: 1 },
        { title: 'Programming Classes', id: 2 },
        { title: 'UI / UX Design', id: 3 },
    ];

    return (
        <section className="py-16 bg-[#E6F7FF]">
            <div className="text-center mb-12">
                <h2 className="text-[4rem] font-semibold text-black font-poppins leading-normal">Services</h2>
                <p className="text-gray-600 text-lg">I provide u at affordable cost</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 px-4 max-w-7xl mx-auto">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white border-2 border-[#319BF7] rounded-lg p-8 w-full md:w-80 text-center shadow-[10px_10px_0px_0px_#319BF7] flex items-center justify-center min-h-[120px]"
                    >
                        <h3 className="text-[#319BF7] font-bold text-xl">{service.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
