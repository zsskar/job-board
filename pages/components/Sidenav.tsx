import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Building,
  Home,
  LogOut,
  PlusCircle,
  User,
} from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const Sidenav: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:translate-x-0"
      )}
      aria-label="Sidebar"
    >
      <div className="h-full px-6 pb-4 mt-5 overflow-y-auto bg-white dark:bg-gray-800">
        <ul className="list-none p-0 space-y-4">
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/dashboard")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/dashboard")}
            >
              <Home className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">Home</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/dashboard/companies")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/dashboard/companies")}
            >
              <Building className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">Companies</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/dashboard/jobs")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/dashboard/jobs")}
            >
              <Briefcase className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">Jobs</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/dashboard/createjob")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/dashboard/createjob")}
            >
              <PlusCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">
                Create Job
              </span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/dashboard/profile")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/dashboard/profile")}
            >
              <User className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">Profile</span>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className={cn(
                "flex items-center w-full text-left px-4 py-3 rounded-lg",
                isActive("/logout")
                  ? "bg-blue-200  dark:bg-gray-700"
                  : "text-gray-900 dark:text-white",
                "hover:bg-blue-300 dark:hover:bg-gray-700"
              )}
              onClick={() => handleNavigation("/logout")}
            >
              <LogOut className="w-5 h-5 mr-3 flex-shrink-0" />
              <span className="text-base font-medium flex-grow">Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidenav;
