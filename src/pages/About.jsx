import React from "react";
import photo1 from "../assets/WhatsApp Image 2025-05-17 at 00.49.46.jpeg";
import photo2 from "../assets/WhatsApp Image 2025-05-17 at 00.48.50.jpeg";
import photo3 from "../assets/WhatsApp Image 2025-05-17 at 00.48.49.jpeg";
const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-16 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          We are Syncope—a place where your journey begins.
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          We’re here to help you discover who you are and what you’re truly
          capable of. Whether you’re just starting out or ready to take the next
          step, we’ll help you uncover your talents, explore your passions, and
          grow into your full potential.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          At Syncope, it’s all about you—your journey, your growth, your future.
        </p>
        <p className="text-lg leading-relaxed">
          We know that finding your passion isn’t always easy. That’s why we
          create hands-on workshops and events that let you explore new ideas,
          try different experiences, and connect with others on the same path.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        <img
          src={photo1}
          alt="Workshop"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
        <img
          src={photo2}
          alt="Teamwork"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
        <img
          src={photo3}
          alt="Learning"
          className="rounded-xl shadow-md object-cover w-full h-64"
        />
      </div>
    </div>
  );
};

export default About;
