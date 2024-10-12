import { NavItem } from "@/pages/types";

export const navItems: NavItem[] = [
  {
    title: "Home",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Jobs",
    href: "/dashboard/jobs",
    icon: "jobs",
    label: "jobs",
  },
  {
    title: "Companies",
    href: "/dashboard/companies",
    icon: "building",
    label: "companies",
  },
  {
    title: "Create Job",
    href: "/dashboard/createjob",
    icon: "createjob",
    label: "create job",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Logout",
    href: "/dashboard/logout",
    icon: "logout",
    label: "logout",
  },
];
