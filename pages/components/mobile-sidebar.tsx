import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { DashboardNav } from "./dashboard-nav";
import { navItems } from "@/constants/data";
import { Session } from "next-auth";
import { Role } from "@prisma/client";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileSidebar({ session }: { session: Session | null }) {
  const [open, setOpen] = useState(false);

  const getFilteredNavItems =
    session?.user.role === Role.USER
      ? navItems.filter((item) => item.access != "RECRUITER")
      : session?.user.role === Role.RECRUITER
      ? navItems.filter((item) => item.access != "USER")
      : navItems;

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="focus:outline-none">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                Menu
              </h2>
              <div className="space-y-1">
                <DashboardNav
                  items={getFilteredNavItems}
                  isMobileNav={true}
                  setOpen={setOpen}
                />
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
