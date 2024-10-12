import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardLayout from "./dashboard-layout";

export default function Layout({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) {
  return (
    <>
      <DashboardLayout>
        {scrollable ? (
          <ScrollArea className="h-[calc(100dvh-52px)]">
            <div className="h-full  p-4 md:px-8">{children}</div>
          </ScrollArea>
        ) : (
          <div className="h-full  p-4 md:px-8">{children}</div>
        )}
      </DashboardLayout>
    </>
  );
}
