import { cn } from "@/lib/utils";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import ThemeToggle from "./ThemeToggle/theme-toggle";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="mr-auto">
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
        <div className="flex items-center gap-2">
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
