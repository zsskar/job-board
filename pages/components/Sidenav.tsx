import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { DashboardNav } from "./dashboard-nav";
import { navItems } from "@/constants/data";
import { useSidebar } from "@/hooks/useSidebar";
import { Role } from "@prisma/client";
import { Session } from "next-auth";

type SidebarProps = {
  className?: string;
  session: Session | null;
};

export default function Sidebar({ className, session }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  const getFilteredNavItems =
    session?.user.role === Role.USER
      ? navItems.filter((item) => item.access != "RECRUITER")
      : session?.user.role === Role.RECRUITER
      ? navItems.filter((item) => item.access != "USER")
      : navItems;

  return (
    <aside
      className={cn(
        `relative  hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      {/* <div className="hidden p-5 pt-10 lg:block">
        <Link href="" target="_blank"></Link>
      </div> */}
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-10 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-0">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <DashboardNav items={getFilteredNavItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
