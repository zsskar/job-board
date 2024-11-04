import { getSession } from "next-auth/react";
import Header from "./Header";
import Sidebar from "./Sidenav";
import { Session } from "next-auth";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export default function DashboardLayout({
  session,
  children,
}: {
  children: React.ReactNode;
  session: Session;
}) {
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
  console.log("Session in getServerSideProps:", session?.user);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
