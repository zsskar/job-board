import React, { useState, useEffect } from "react";

// Define the types for the filter options
interface FilterOptions {
  type: string[];
  location: string[];
  skills: string[];
}

// Define the types for the selected filters
interface SelectedFilters {
  type: string[];
  location: string[];
  skills: string[];
}

const filterOptions: FilterOptions = {
  type: ["Full Time", "Part Time", "Contract", "Internship"],
  location: ["On Site", "Hybrid", "Remote"],
  skills: [
    "Java",
    "Spring Boot",
    "React JS",
    "Next JS",
    "MERN",
    "Database",
    "Backend",
    "Frontend",
    "Full Stack",
  ],
};

const FilterMenu: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    type: [],
    location: [],
    skills: [],
  });

  // Toggle dropdown open state
  const toggleDropdown = (dropdown: string) => {
    setDropdownOpen(dropdownOpen === dropdown ? null : dropdown);
  };

  // Handle selection of filter options
  const handleSelect = (category: keyof FilterOptions, option: string) => {
    setSelectedFilters((prev) => {
      const isSelected = prev[category].includes(option);
      const updatedSelection = isSelected
        ? prev[category].filter((item) => item !== option)
        : [...prev[category], option];

      return {
        ...prev,
        [category]: updatedSelection,
      };
    });
  };

  // Close dropdowns when clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(".dropdown")) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col items-center p-4 mt-4">
      {/* Responsive Dropdowns */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        {Object.keys(filterOptions).map((category) => (
          <div key={category} className="relative dropdown">
            <button
              onClick={() => toggleDropdown(category)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md flex justify-between items-center w-full sm:w-48 focus:outline-none"
            >
              <span>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              <span>{dropdownOpen === category ? "▲" : "▼"}</span>
            </button>

            {dropdownOpen === category && (
              <div className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="max-h-48 overflow-y-auto p-2">
                  {filterOptions[category as keyof FilterOptions].map(
                    (option) => (
                      <li key={option}>
                        <label className="flex items-center p-2 hover:bg-gray-200">
                          <input
                            type="checkbox"
                            checked={selectedFilters[
                              category as keyof SelectedFilters
                            ].includes(option)}
                            onChange={() =>
                              handleSelect(
                                category as keyof FilterOptions,
                                option
                              )
                            }
                            className="mr-2"
                          />
                          {option}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show selected filters below all dropdowns */}
      <div className="flex flex-wrap mt-4 justify-center">
        {Object.keys(selectedFilters).flatMap((category) =>
          selectedFilters[category as keyof SelectedFilters].map((value) => (
            <span
              key={value}
              className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm mr-2 mb-2 flex items-center"
            >
              {value}
              <button
                onClick={() =>
                  handleSelect(category as keyof FilterOptions, value)
                }
                className="ml-2 text-white hover:text-red-500 focus:outline-none"
              >
                &times;
              </button>
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default FilterMenu;
