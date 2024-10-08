import React, { useState } from "react";
import Header from "./Header";
import Sidenav from "./Sidenav";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // Define the type for selectedFilters as an array of strings

  // Handle filter selection
  const handleFilterSelect = (filter: string): void => {
    // Specify the type for filter parameter and return type as void
    setSelectedFilters((prevSelected: string[]) =>
      prevSelected.includes(filter)
        ? prevSelected.filter((f) => f !== filter)
        : [...prevSelected, filter]
    );
  };

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidenav
        isOpen={isSidebarOpen}
        selectedFilters={selectedFilters}
        onFilterSelect={handleFilterSelect}
      />
      <main className="flex-grow container mx-auto p-4 ">{children}</main>
    </>
  );
};

export default Layout;
