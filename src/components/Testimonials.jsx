import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            text: "I attended the classes for past 3 months for Artificial intelligence and data science. And the session goes really well. Our trainer is Karthik for deep learning concepts. He teaches very well with real time examples to be easier for us to understand the concept well.",
            rating: 5
        },
        {
            text: "I had a new experience in the css class.The tutor was very experienced and teaching very well. Thank you karthik sir",
            rating: 5
        },
        {
            text: "It's very useful to us.I learned lot of things.Especially I learned lot of programs c,c++,python I don't know the basic structure at starting now i have created a project uning tthose skills i learned.",
            rating: 5
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-fit mx-auto">
                    <h2 className="text-4xl font-extrabold text-left mb-12 text-black font-sans leading-normal">Testimonials</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="w-[22.375rem] h-[14.75rem] flex-shrink-0 bg-white p-8 rounded-xl border-2 border-[#319BF7] shadow-[0px_10px_0px_0px_#319BF7] flex flex-col">
                                <div className="flex justify-end mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className={`w-6 h-6 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-black text-sm leading-relaxed font-medium">{testimonial.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
