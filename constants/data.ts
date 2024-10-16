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

export const jobs = [
  {
    date: "20 May, 2023",
    company: "Amazon",
    role: "Senior UI/UX Designer",
    price: "$250/hr",
    location: "Remote",
    tags: ["Part time", "Senior level", "Distant", "Project work"],
    color: "bg-orange-100",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon logo URL
  },
  {
    date: "4 Feb, 2023",
    company: "Google",
    role: "Junior UI/UX Designer",
    price: "$150/hr",
    location: "Remote",
    tags: ["Full time", "Junior level", "Distant", "Flexible Schedule"],
    color: "bg-teal-100",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo URL
  },
  {
    date: "20 May, 2023",
    company: "Amazon",
    role: "Senior UI/UX Designer",
    price: "$250/hr",
    location: "Remote",
    tags: ["Part time", "Senior level", "Distant", "Project work"],
    color: "bg-orange-100",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", // Amazon logo URL
  },
  {
    date: "4 Feb, 2023",
    company: "Google",
    role: "Junior UI/UX Designer",
    price: "$150/hr",
    location: "Remote",
    tags: ["Full time", "Junior level", "Distant", "Flexible Schedule"],
    color: "bg-teal-100",
    companyLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo URL
  },
];
