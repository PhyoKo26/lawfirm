import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_drmz22k", // Replace with your EmailJS service ID
        "template_6kephbc", // Replace with your EmailJS template ID
        formData,
        "4cHSjERhSHWOiNm4_" // Replace with your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section id="Contact" className="contact--section py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Contact Header */}
        <div className="text-center mb-12">
          <p className="sub--title text-xl font-semibold mb-2">
            Get in Touch 📬
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact Me 📩
          </h2>
          <p className="text-lg mb-2">
            Want to discuss a project or just say hello?
          </p>
          <p className="text-lg mb-2">
            Fill out the form below, and I'll get back to you as soon as possible!
          </p>
          <p className="text-lg">
            Let's build something amazing together! 🚀
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="contact--form--container max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
        >
          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md text-gray-700 font-semibold mb-2 block">
                First Name
              </span>
              <input
                type="text"
                className="contact--input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
                name="firstName"
                id="first-name"
                required
                value={formData.firstName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md text-gray-700 font-semibold mb-2 block">
                Last Name
              </span>
              <input
                type="text"
                className="contact--input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
                name="lastName"
                id="last-name"
                required
                value={formData.lastName}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md text-gray-700 font-semibold mb-2 block">
                Email
              </span>
              <input
                type="email"
                className="contact--input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
                name="email"
                id="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="phone-number" className="contact--label">
              <span className="text-md text-gray-700 font-semibold mb-2 block">
                Phone Number
              </span>
              <input
                type="tel"
                className="contact--input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
                name="phone"
                id="phone-number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          {/* Message Input */}
          <label htmlFor="message" className="contact--label block mb-6">
            <span className="text-md text-gray-700 font-semibold mb-2 block">
              Message
            </span>
            <textarea
              className="contact--input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-customPurple"
              name="message"
              id="message"
              rows={6}
              placeholder="Type your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </label>

          {/* Checkbox */}
          <label htmlFor="checkbox" className="checkbox--label flex items-center mb-6">
            <input
              type="checkbox"
              required
              name="checkbox"
              id="checkbox"
              className="mr-2"
            />
            <span className="text-sm text-gray-700">I accept the terms</span>
          </label>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary bg-customPurple text-white py-3 px-6 rounded-lg hover:bg-customPurpleHover transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;