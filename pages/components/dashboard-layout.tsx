import Header from "./header";
import Sidebar from "./Sidenav";
import { Session } from "next-auth";

export default function DashboardLayout({
  session,
  children,
}: {
  children: React.ReactNode;
  session: Session | null;
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
