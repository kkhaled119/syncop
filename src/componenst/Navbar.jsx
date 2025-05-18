import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/colored icon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r bg-blue-900  text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/" className="flex items-center py-1 px-1">
              <img src={logo} className="w-30" />
            </a>
          </div>

          {/* Primary nav - Desktop - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <a
                href="/"
                className="py-5 px-4  hover:text-blue-100 rounded transition duration-300 font-semibold text-lg"
              >
                Home
              </a>
              <a
                href="/about"
                className="py-5 px-4 hover:text-blue-100 rounded transition duration-300 font-semibold text-lg"
              >
                About
              </a>
              <a
                href="/contact"
                className="py-5 px-4  hover:text-blue-100 rounded transition duration-300 font-semibold text-lg"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="mobile-menu-button p-2 rounded hover:bg-blue-700"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a
          href="/"
          className="block py-4 px-4 text-center   transition duration-300 font-semibold text-lg"
        >
          Home
        </a>
        <a
          href="/about"
          className="block py-4 px-4 text-center  transition duration-300 font-semibold text-lg"
        >
          About
        </a>
        <a
          href="/contact"
          className="block py-4 px-4 text-center   transition duration-300 font-semibold text-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
