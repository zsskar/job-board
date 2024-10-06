import React, { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Toggle between dark and light themes
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold">Job Board</div>

        {/* Search Input */}
        <div className="hidden md:flex flex-grow justify-center mx-2">
          <input
            type="text"
            className="w-3/4 max-w-lg p-2 rounded-lg text-gray-700"
            placeholder="Search for jobs..."
          />
        </div>

        {/* Right Section: Theme Toggle and Profile */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="text-xl focus:outline-none">
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Image */}
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="w-10 h-10 rounded-full overflow-hidden focus:outline-none"
            >
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {profileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
