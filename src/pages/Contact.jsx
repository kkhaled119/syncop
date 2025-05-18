import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Let’s Connect</h1>
      <p className="text-gray-600 text-center mb-8 max-w-xl">
        We’d love to hear from you! Whether you have a question or just want to
        say hello, feel free to reach out.
      </p>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdhzcKiukxqs5znW9nO5SU7KyEZhBm-yZX_yjSGiNot4Y1Uww/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-900 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-800 transition mb-10"
      >
        Contact Us
      </a>

      <div className="flex gap-6 text-blue-900 text-2xl">
        <a
          href="https://www.facebook.com/share/18uiLTvSwj/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="hover:text-blue-600 transition" />
        </a>
        <a
          href="https://www.instagram.com/_syncopee?igsh=MWE0YzBpYzV1Zm12Zw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-600 transition" />
        </a>
        <a
          href="https://www.tiktok.com/@syncopee0?_t=ZS-8wPjEaaKQy2&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok className="hover:text-blue-700 transition" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
