import React, { useState } from "react";
import { Search, Star, Music, Users, ChevronRight } from "lucide-react";
import photo1 from "../assets/WhatsApp Image 2025-05-17 at 00.49.46 (1).jpeg";
import photo2 from "../assets/WhatsApp Image 2025-05-17 at 00.48.50.jpeg";
import photo3 from "../assets/WhatsApp Image 2025-05-17 at 00.48.49.jpeg";
import { GiMeditation, GiSewingNeedle } from "react-icons/gi";
import { FaFilm } from "react-icons/fa";

const Home = () => {
  const [talentCategories] = useState([
    {
      name: "Music",
      icon: <Music className="w-6 h-6" />,
      color: "bg-blue-100",
    },
    {
      name: "Art",
      icon: <Music className="w-6 h-6" />,
      color: "bg-indigo-100",
    },
    {
      name: "Yoga",
      icon: <GiMeditation className="w-6 h-6" />,
      color: "bg-teal-100",
    },
    {
      name: "Handmade",
      icon: <GiSewingNeedle className="w-6 h-6" />,
      color: "bg-cyan-100",
    },
    {
      name: "Fokhar",
      icon: <Star className="w-6 h-6" />,
      color: "bg-sky-100",
    },
    {
      name: "Filmmaking",
      icon: <FaFilm className="w-6 h-6" />,
      color: "bg-blue-200",
    },
  ]);

  const [featuredTalents] = useState([
    {
      image: photo1,
    },
    {
      image: photo2,
    },
    {
      image: photo3,
    },
  ]);

  const [trendingEvents] = useState([
    {
      title: "Musical Talent Competition",
      date: "May 25, 2025",
      image: photo3,
    },
    {
      title: "Creative Arts Festival",
      date: "June 10, 2025",
      image: photo1,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Syncope | Talent Discovery
          </h1>
          <p className="text-xl mb-8">
            The Campaign platform for discovering and showcasing creative
            talents
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-6">
        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Explore Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {talentCategories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition duration-200`}
              >
                {category.icon}
                <span className="mt-3 font-medium">{category.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Talents */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Featured Talents
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTalents.map((talent, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200"
              >
                <img
                  src={talent.image}
                  alt={talent.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{talent.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-600">{talent.category}</span>
                    <div className="flex items-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Events */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Our Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trendingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 flex"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-40 h-32 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <div className="flex items-center mt-2 text-gray-600">
                    <span>{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Community Section */}
        <section className="bg-gradient-to-r from-blue-900 to-indigo-800 rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">
                Join Our Talent Community
              </h2>
              <p className="text-white text-opacity-90">
                Connect with talents, agents, and event organizers
              </p>
            </div>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdhzcKiukxqs5znW9nO5SU7KyEZhBm-yZX_yjSGiNot4Y1Uww/viewform?usp=header"
                className="bg-white cursor-pointer text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
              >
                Join Now
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
