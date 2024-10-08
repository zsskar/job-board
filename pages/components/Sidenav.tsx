import React, { useEffect, useState } from "react";

interface SidenavProps {
  isOpen: boolean;
  selectedFilters: string[];
  onFilterSelect: (filter: string) => void;
}

const Sidenav: React.FC<SidenavProps> = ({
  isOpen,
  selectedFilters,
  onFilterSelect,
}) => {
  const jobTypes = ["Fulltime", "Contract", "Internship"];
  const locations = ["Onsite", "Hybrid", "Remote"];

  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const toggleJobTypeMenu = () => setIsJobTypeOpen(!isJobTypeOpen);
  const toggleLocationMenu = () => setIsLocationOpen(!isLocationOpen);

  // Effect to update URL when selected filters change
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Clear existing filters
    params.delete("jobType");
    params.delete("location");

    // Concatenate selected job types and locations into a single string
    const uniqueJobTypes = Array.from(
      new Set(selectedFilters.filter((filter) => jobTypes.includes(filter)))
    );
    const uniqueLocations = Array.from(
      new Set(selectedFilters.filter((filter) => locations.includes(filter)))
    );

    if (uniqueJobTypes.length > 0) {
      params.set("jobType", uniqueJobTypes.join(",")); // Join job types with a comma
    }

    if (uniqueLocations.length > 0) {
      params.set("location", uniqueLocations.join(",")); // Join locations with a comma
    }

    // Update the URL without reloading the page
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  }, [selectedFilters]);

  return (
    <nav
      className={`fixed top-2 left-0 z-40 w-64 h-screen pt-20 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-4 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        {/* Filter Categories Title */}
        <div className="text-lg font-semibold mb-4 flex items-center">
          <span className="mr-2">🔍</span> Filter By
        </div>

        <hr className="my-2 border-gray-300 dark:border-gray-600" />

        {/* Job Types Section */}
        <ul className="list-none p-0">
          <li>
            <button
              type="button"
              className="flex items-center w-full p-3 text-left text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleJobTypeMenu}
              aria-controls="job-type-dropdown"
            >
              <span className="flex-1 font-medium">Job Type</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isJobTypeOpen ? "transform rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="job-type-dropdown"
              className={`py-2 ${isJobTypeOpen ? "" : "hidden"}`}
            >
              {jobTypes.map((jobType) => (
                <li key={jobType} className="py-1">
                  <a
                    href="#"
                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      selectedFilters.includes(jobType)
                        ? "bg-blue-500 text-white"
                        : "dark:bg-gray-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      onFilterSelect(jobType);
                    }}
                  >
                    {jobType}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <hr className="my-2 border-gray-300 dark:border-gray-600" />

        {/* Locations Section */}
        <ul className="list-none p-0">
          <li>
            <button
              type="button"
              className="flex items-center w-full p-3 text-left text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={toggleLocationMenu}
              aria-controls="location-dropdown"
            >
              <span className="flex-1 font-medium">Location</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isLocationOpen ? "transform rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <ul
              id="location-dropdown"
              className={`py-2 ${isLocationOpen ? "" : "hidden"}`}
            >
              {locations.map((location) => (
                <li key={location} className="py-1">
                  <a
                    href="#"
                    className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-6 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${
                      selectedFilters.includes(location)
                        ? "bg-blue-500 text-white"
                        : "dark:bg-gray-700"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      onFilterSelect(location);
                    }}
                  >
                    {location}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;
