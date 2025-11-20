import React from 'react';

const About = ({ aboutImage }) => {
    return (
        <section className="py-16 md:py-24 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image Side */}
                <div className="md:w-1/2">
                    <div className="relative rounded-3xl overflow-hidden shadow-xl max-w-md mx-auto">
                        <img
                            src={aboutImage || "https://placehold.co/400x500"}
                            alt="Karthik Krishnan"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* Text Side */}
                <div className="md:w-1/2">
                    <h2 className="text-4xl font-bold text-blue-500 mb-6">About</h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                        <p>
                            Hi, I'm Karthik Krishnan — a passionate Web Developer, Educator, and Tech Community Lead. I specialize in building modern, responsive web applications using React, Django, and MySQL, with a strong focus on clean UI, performance, and user experience.
                        </p>
                        <p>
                            I'm currently pursuing my Bachelor of Computer Applications (BCA) and work as a Programming Staff at a computer center, where I guide students in mastering coding fundamentals and real-world projects.
                        </p>
                        <p>
                            As a Google Developer Community Co-Lead, I also help organize developer events and workshops that inspire innovation and collaboration among peers.
                        </p>
                        <p>
                            Outside of coding, I'm a photography enthusiast, capturing stories through creative visuals. My mission is to merge technology and creativity to build impactful digital experiences that make a difference.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
