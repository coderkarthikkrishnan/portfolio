import React from 'react';

const Achievements = () => {
    const achievements = [
        "Led and mentored students through hands-on programming sessions, improving their coding confidence and project skills.",
        "Spearheaded multiple web development workshops as a GDC Co-Lead, reaching 300+ students.",
        "Won/participated in debugging competitions, showcasing strong problem-solving and code optimization skills.",
        "Developed UI/UX-focused landing pages, forms, and interactive components with modern frontend standards.",
        "Google’s Gemini Certified Educator, validating AI-enhanced teaching skills."
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-8 max-w-6xl">
                <h2 className="text-4xl font-extrabold text-left mb-12 text-black font-sans">Achievements</h2>
                <ul className="space-y-8">
                    {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-yellow-400 mr-4 mt-1.5 text-xl">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </span>
                            <span className="text-black text-lg font-medium leading-relaxed">{achievement}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Achievements;
