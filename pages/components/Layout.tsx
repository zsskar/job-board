import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import DashboardLayout, { getServerSideProps } from "./dashboard-layout";
import { Session } from "next-auth";
import { Job, Application, Company } from "@prisma/client";

export default function Layout({
  session,
  dashboardData,
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  dashboardData: {
    jobs: Job[]; // Adjust this based on your job type
    applications: Application[]; // Adjust this based on your application type
    companies: Company[]; // Adjust this based on your company type
  } | null;
  scrollable?: boolean;
  session: Session;
}) {
  console.log("dashboardData :" + dashboardData);
  return (
    <>
      <DashboardLayout session={session} dashboardData={dashboardData}>
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

export { getServerSideProps };
