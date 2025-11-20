import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            // Replace this URL with your Google Apps Script web app URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxxv55pWqCNbWMQKR_xLpNtDa78Jb1vM1V8XxnJbVUfAcMjVav96gxBzdDQLXLbp1jPAA/exec';

            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('phone', formData.phone);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('timestamp', new Date().toISOString());

            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formDataToSend,
                mode: 'no-cors' // Required for Google Apps Script
            });

            // Note: With no-cors mode, we can't read the response
            // If the request completes without throwing, we assume success
            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-white flex justify-center px-4">
            <div className="w-full max-w-4xl mx-4 bg-[#60B2FF] rounded-2xl border-2 border-black overflow-hidden">
                <div className="bg-[#1E90FF] border-b-2 border-black py-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">Contact</h2>
                </div>
                <form className="p-4 sm:p-8" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className="space-y-4 sm:space-y-6">
                            <div>
                                <label className="block text-black font-semibold mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name..."
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-black bg-white focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-black font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your emailid..."
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-black bg-white focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-black font-semibold mb-2">Contact number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your mobile number..."
                                    className="w-full px-4 py-2.5 rounded-lg border-2 border-black bg-white focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-black font-semibold mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Enter the message you want to convey me..."
                                className="w-full h-40 md:h-[calc(100%-2rem)] px-4 py-2.5 rounded-lg border-2 border-black bg-white focus:outline-none focus:border-blue-500 resize-none"
                                rows="8"
                                required
                            ></textarea>
                        </div>
                    </div>

                    {/* Status Message */}
                    {status.message && (
                        <div className={`mt-4 p-3 rounded-lg text-center font-medium ${status.type === 'success'
                            ? 'bg-green-100 text-green-800 border border-green-300'
                            : 'bg-red-100 text-red-800 border border-red-300'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    <div className="flex justify-center mt-6 sm:mt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-[#1E90FF] text-white px-8 sm:px-12 py-2.5 sm:py-3 rounded-lg font-bold text-base sm:text-lg transition duration-300 ${isSubmitting
                                ? 'opacity-50 cursor-not-allowed'
                                : 'hover:bg-blue-600'
                                }`}
                        >
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
