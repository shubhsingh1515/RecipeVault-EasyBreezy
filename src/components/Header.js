import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="flex justify-between items-center bg-white border-b border-gray-400 relative p-3 px-10">
      <div className="flex items-center">
        <Link to="/videos">
          <img src="logo1.png" alt="Logo" className="h-20 w-20" />
        </Link>
        <span className="text-2xl font-extrabold text-green-600 hidden md:block">
          Easy Breezy Recipes
        </span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center space-x-8 text-green-600 text-xl font-semibold">
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="cursor-pointer hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/contactform" className="cursor-pointer hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon (visible on mobile) */}
      <div
        className="text-green-500 cursor-pointer text-xl md:hidden"
        onClick={toggleMenu}
      >
        &#9776; {/* Hamburger icon */}
      </div>

      {/* Mobile Menu (appears on mobile, aligned to the right) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full right-0 bg-white border-t border-gray-400 w-1/2 md:hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center text-green-600 text-xl font-semibold py-4">
          <li className="cursor-pointer hover:underline py-2">Home</li>
          <li className="cursor-pointer hover:underline py-2">About</li>
          <li className="cursor-pointer hover:underline py-2">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
