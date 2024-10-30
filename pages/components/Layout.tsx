import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardLayout from "./dashboard-layout";
import { Session } from "next-auth";

export default function Layout({
  session,
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
  session: Session | null;
}) {
  return (
    <>
      <DashboardLayout session={session}>
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
