import { getSession } from "next-auth/react";
import Header from "./Header";
import Sidebar from "./Sidenav";
import { Session } from "next-auth";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { Application, Company, Job, Role } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import superjson from "superjson";

export default function DashboardLayout({
  session,
  dashboardData,
  children,
}: {
  children: React.ReactNode;
  dashboardData: {
    jobs: Job[]; // Adjust this based on your job type
    applications: Application[]; // Adjust this based on your application type
    companies: Company[]; // Adjust this based on your company type
  } | null;
  session: Session;
}) {
  console.log("dashboardData :" + dashboardData);
  return (
    <div className="flex">
      <Sidebar session={session} />
      <main className="w-full flex-1 overflow-hidden">
        <Header session={session} />
        {children}
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  let dashboardData = null;
  if (session.user.role === Role.USER && session.user.email) {
    console.log("Inside fetching dashboard");

    try {
      // Fetch jobs (you can customize the query as needed)
      const jobs = await prisma.job.findMany();
      console.log("jobs: ", jobs);

      // Fetch applications where the user's email matches and role is USER
      const applications = await prisma.application.findMany({
        where: {
          user: {
            email: session.user.email,
            role: Role.USER,
          },
        },
        include: {
          job: true, // Include job details if needed
        },
      });

      console.log("apps: ", applications);
      // Fetch companies and their jobs
      const companies = await prisma.company.findMany({
        include: {
          jobs: true,
        },
      });

      console.log("companies: ", companies);
      // Structure the dashboard data
      dashboardData = superjson.serialize({
        dashboard: {
          jobs,
          applications,
          companies,
        },
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      // Handle error (e.g., set dashboardData to null or provide a fallback)
    }
  }

  return {
    props: { session, dashboardData: dashboardData },
  };
};
