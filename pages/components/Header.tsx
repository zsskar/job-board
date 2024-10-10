import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface HeaderProps {
  isSidebarOpen: boolean; // Prop type for sidebar state
  setIsSidebarOpen: (isOpen: boolean) => void; // Prop type for the setter function
}
const Header: React.FC<HeaderProps> = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: HeaderProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle outside clicks
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false); // Close the dropdown if clicked outside
    }
  };

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
      <div className="px-4 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-gray-800 rounded-lg sm:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <a
              href="https://flowbite.com"
              className="flex items-center ms-2 md:me-24"
            >
              <span className="relative flex items-center text-xl font-semibold text-gray-800 sm:text-2xl whitespace-nowrap">
                <span className="text-blue-600">Job</span>
                <span className="bg-blue-700 text-white px-2 py-1 ml-2 rounded-lg shadow-lg mr-1">
                  Board
                </span>
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <div className="relative ms-3" ref={dropdownRef}>
              <div>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  type="button"
                  className="flex items-center justify-center w-12 h-12 bg-blue-400 border-1 border-blue-900 rounded-full focus:ring-4 focus:ring-blue-300 transition duration-150 ease-in-out hover:shadow-lg"
                  aria-expanded={isDropdownOpen ? "true" : "false"}
                >
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="w-10 h-10 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                    width={10}
                    height={10}
                  />
                </button>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 transition transform duration-150 ease-in-out">
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white transition duration-150 ease-in-out"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
