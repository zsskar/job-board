import { FilterHorizontalIcon } from "hugeicons-react";
import Layout from "../components/Layout";
import FilterSideNav from "../components/FilterSideNav";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useState } from "react";
import { SortAscIcon } from "lucide-react";

const Dashboard: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

  return (
    <>
      <Layout>
        <div className="p-4 sm:ml-64">
          <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
            <div className="border-2 border-gray-200 border-dashed rounded-lg flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md mt-4">
              <div className="flex items-center mb-2 md:mb-0">
                <h2 className="text-2xl font-bold text-gray-800 mr-2">
                  Recommended jobs
                </h2>
                <span className="inline-flex items-center justify-center h-8 px-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
                  386
                </span>
              </div>

              <div className="flex items-center space-x-2">
                {/* Menu Button */}
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <MenuButton className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      <SortAscIcon
                        className="h-8 w-5 text-gray-600"
                        aria-hidden="true"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <MenuItem key={option.name}>
                          <a
                            href={option.href}
                            className={`${
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500"
                            } block px-4 py-2 text-sm data-[focus]:bg-gray-100`}
                          >
                            {option.name}
                          </a>
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>

                {/* Filter Button */}
                <button
                  className="flex items-center p-2 rounded-md hover:bg-gray-300 transition"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <FilterHorizontalIcon
                    className="h-5 w-5 text-gray-600"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
            <FilterSideNav
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
