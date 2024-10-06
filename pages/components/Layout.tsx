import React from "react";
import Header from "./Header";
import FilterMenu from "./FilterMenu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Filter Menu with margin to avoid hiding behind header */}
      <div className="mt-16">
        {" "}
        {/* Adjust this value based on your header height */}
        <FilterMenu />
      </div>

      {/* Main content */}
      <div className="container mx-auto p-4 max-w-screen-xl">
        <h1 className="text-2xl font-bold mb-4">Top Jobs</h1>
      </div>
      <main className="flex-grow container mx-auto p-4 max-w-screen-xl">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          &copy; 2024 Job Board. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
