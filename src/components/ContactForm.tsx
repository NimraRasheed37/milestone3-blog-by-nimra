'use client';

import { useState } from "react";
import Image from "next/image";

const ContactForm = () => {
  // State to handle form submission status
  const [messageSent, setMessageSent] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true); // Display success message
    setTimeout(() => setMessageSent(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="bg-accent max-w-5xl mx-auto py-4 overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 relative h-48 md:h-auto">
          <Image
            src="/img/bg/c1.jpg"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 bg-accent">
          <h1 className="text-2xl font-bold text-secondary mb-4">Contact Us</h1>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-secondary"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da5552]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da5552]"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-secondary"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-[#da5552]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#493638] text-[#ffd791] px-4 py-2 rounded-lg hover:text-white font-bold hover:shadow-xl hover:bg-[#da5552] transition duration-300"
            >
              Send
            </button>
          </form>

          {/* Success Message */}
          {messageSent && (
            <p className="mt-4 text-green-600 font-semibold">
              Message sent successfully!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
