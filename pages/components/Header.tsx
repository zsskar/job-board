import { cn } from "@/lib/utils";
import React from "react";
import { MobileSidebar } from "./mobile-sidebar";
import { UserNav } from "./user-nav";
import ThemeToggle from "./ThemeToggle/theme-toggle";
import { Session } from "next-auth";

export default function Header({ session }: { session: Session | null }) {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between px-4 py-2 md:justify-end">
        <div className={cn("block lg:!hidden")}>
          <MobileSidebar session={session} />
        </div>
        <div className="mr-auto">
          <a className="flex items-center ms-2 md:me-24">
            <span className="relative flex items-center text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl whitespace-nowrap">
              <span className="text-blue-600 dark:text-white">Job</span>
              <span className="bg-blue-700 dark:bg-blue-500 text-white dark:text-gray-100 px-2 py-1 ml-2 rounded-lg shadow-lg mr-1">
                Board
              </span>
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <UserNav session={session} />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
