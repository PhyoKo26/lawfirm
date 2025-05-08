import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiUser, FiMessageSquare, FiSmartphone } from "react-icons/fi";
import logo from "/images/logo.png";

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const validate = () => {
        const newErrors: FormErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) newErrors.email = "Email is required.";
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section
            id="contact"
            className="bg-gradient-to-br from-blue-100 via-blue-50 to-white py-20 px-4 min-h-screen flex flex-col items-center"
        >
            {/* Titles Section */}
            <div className="max-w-6xl w-full mb-12 text-center">
                <h1 className="text-5xl font-extrabold text-blue-900 leading-tight">
                    Let’s Get in Touch
                </h1>
                <h3 className="text-xl font-semibold text-blue-700 uppercase tracking-widest mt-2">
                    CONSULT WITH US TODAY
                </h3>
            </div>

            {/* Content Section: Office Info + Form */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
                {/* Office Info Card */}
                <div className="w-full md:w-1/2 bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-10 flex flex-col border border-blue-100">
                    {/* Logo at the top */}
                    <div className="mb-8 flex justify-center">
                        <img src={logo} alt="Company Logo" className="h-40 object-contain" />
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 text-gray-800 text-lg">
                        <div className="flex gap-3">
                            <div className="flex self-stretch">
                                <FiPhone className="text-blue-600 w-6 h-6" />
                            </div>
                            <a href="tel:+63272142470" className="hover:underline">
                                (02) 7214-2470
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex self-stretch">
                                <FiMail className="text-blue-600 w-6 h-6" />
                            </div>
                            <a href="mailto:info_philippines@syp-law.com" className="hover:underline">
                                info_philippines@syp-law.com
                            </a>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex self-stretch">
                                <FiMapPin className="text-blue-600 w-6 h-6" />
                            </div>
                            <span>
                                10th Floor, Tower 1, High Street South Corporate Plaza, 26th Street corner 9th Avenue, Bonifacio Global City, Taguig 1634, Metro Manila, Philippines
                            </span>
                        </div>

                    </div>
                </div>

                {/* Contact Form Card */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-10"
                >
                    {submitted && (
                        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md font-semibold text-center">
                            Your message has been sent successfully!
                        </div>
                    )}

                    {/* Name */}
                    <label className="block mb-6">
                        <span className="flex text-gray-700 font-semibold">
                            <FiUser className="text-blue-600 w-6 h-6" />
                            Name <span className="text-red-600">*</span>
                        </span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={`mt-1 block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                                }`}
                            aria-invalid={!!errors.name}
                            aria-describedby="name-error"
                        />
                        {errors.name && (
                            <p id="name-error" className="text-red-600 mt-1 text-sm">
                                {errors.name}
                            </p>
                        )}
                    </label>

                    {/* Email */}
                    <label className="block mb-6">
                        <span className="flex text-gray-700 font-semibold">
                            <FiMail className="text-blue-600 w-6 h-6" />
                            Email <span className="text-red-600">*</span>
                        </span>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className={`mt-1 block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                                }`}
                            aria-invalid={!!errors.email}
                            aria-describedby="email-error"
                        />
                        {errors.email && (
                            <p id="email-error" className="text-red-600 mt-1 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </label>

                    {/* Phone */}
                    <label className="block mb-6">
                        <span className="flex text-gray-700 font-semibold">
                            <FiSmartphone className="text-blue-600 w-6 h-6" />
                            Phone Number <span className="text-red-600">*</span>
                        </span>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+95 912 345 6789"
                            className={`mt-1 block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                                }`}
                            aria-invalid={!!errors.phone}
                            aria-describedby="phone-error"
                        />
                        {errors.phone && (
                            <p id="phone-error" className="text-red-600 mt-1 text-sm">
                                {errors.phone}
                            </p>
                        )}
                    </label>

                    {/* Message */}
                    <label className="block mb-8">
                        <span className="flex text-gray-700 font-semibold">
                            <FiMessageSquare className="text-blue-600 w-6 h-6" />
                            Message <span className="text-red-600">*</span>
                        </span>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Write your message here..."
                            className={`mt-1 block w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-y ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                                }`}
                            aria-invalid={!!errors.message}
                            aria-describedby="message-error"
                        />
                        {errors.message && (
                            <p id="message-error" className="text-red-600 mt-1 text-sm">
                                {errors.message}
                            </p>
                        )}
                    </label>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-4 rounded-md font-semibold hover:bg-blue-700 transition transform hover:scale-105"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
