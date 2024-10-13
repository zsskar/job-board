// const Dashboard: React.FC = () => {
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   const sortOptions = [
//     { name: "Most Popular", href: "#", current: true },
//     { name: "Best Rating", href: "#", current: false },
//     { name: "Newest", href: "#", current: false },
//     { name: "Price: Low to High", href: "#", current: false },
//     { name: "Price: High to Low", href: "#", current: false },
//   ];

//   return (
//     <Layout>
//       <div className="p-4 sm:ml-64 full-width container">
//         <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
//           <div className="border-2 border-gray-200 border-dashed rounded-lg flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow-md mt-4">
//             {/* Title and Job Count */}
//             <div className="flex items-center mb-2 md:mb-0">
//               <h2 className="text-2xl font-bold text-gray-800 mr-2">
//                 Recommended jobs
//               </h2>
//               <span className="inline-flex items-center justify-center h-8 px-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
//                 386
//               </span>
//             </div>

//             {/* Sort and Filter Buttons */}
//             <div className="flex items-center space-x-2">
//               {/* Sort Menu */}
//               <Menu as="div" className="relative inline-block text-left">
//                 <MenuButton className="hover:bg-gray-300 inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900">
//                   <SortAscIcon
//                     className="hover:bg-gray-300 transition h-8 w-5 text-gray-600"
//                     aria-hidden="true"
//                   />
//                 </MenuButton>

//                 <MenuItems
//                   transition
//                   className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none"
//                 >
//                   <div className="py-1">
//                     {sortOptions.map((option) => (
//                       <MenuItem key={option.name}>
//                         <a
//                           href={option.href}
//                           className={`${
//                             option.current
//                               ? "font-medium text-gray-900"
//                               : "text-gray-500"
//                           } block px-4 py-2 text-sm`}
//                         >
//                           {option.name}
//                         </a>
//                       </MenuItem>
//                     ))}
//                   </div>
//                 </MenuItems>
//               </Menu>

//               {/* Filter Button */}
//               <button
//                 className="flex items-center p-2 rounded-md hover:bg-gray-300 transition"
//                 onClick={() => setMobileFiltersOpen(true)}
//               >
//                 <FilterHorizontalIcon
//                   className="h-5 w-5 text-gray-600"
//                   aria-hidden="true"
//                 />
//               </button>
//             </div>
//           </div>

//           {/* Filter Sidebar */}
//           <FilterSideNav
//             mobileFiltersOpen={mobileFiltersOpen}
//             setMobileFiltersOpen={setMobileFiltersOpen}
//           />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Dashboard;

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "../components/Layout";
import ThemeProvider from "../components/ThemeToggle/theme-provider";
import Jobs from "./jobs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { CheckIcon, FilterIcon, SortAscIcon } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
  const [sortOrder, setSortOrder] = useState<string>("");

  const handleSort = (order: string) => {
    setSortOrder(order);
  };

  return (
    <ThemeProvider>
      <Layout scrollable>
        <div className="space-y-5">
          <div className="flex items-center justify-between space-y-5">
            <h2 className="text-2xl font-bold tracking-tight">
              Hi, Welcome back 👋
            </h2>
          </div>
          <Tabs defaultValue="jobs" className="space-y-4">
            <TabsList
              style={{
                height: "60px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2.25rem",
                backgroundColor: "white",
              }}
            >
              {/* Left Side - Tabs Trigger */}
              <TabsTrigger
                style={{ height: "50px" }}
                value="jobs"
                className="dark:text-gray-200 text-gray-900"
              >
                Recommended Jobs
              </TabsTrigger>

              {/* Right Side - Sort Icon and Sort Options */}
              <div className="flex items-center space-x-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      className="flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-200"
                    >
                      <SortAscIcon className="h-5 w-5 dark:text-white" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-44">
                    <div className="flex flex-col space-y-2">
                      <Button
                        variant="ghost"
                        className="flex justify-between items-center w-full text-left dark:text-gray-400 text-gray-900"
                        onClick={() => handleSort("ascending")}
                      >
                        Ascending
                        {sortOrder === "ascending" && (
                          <CheckIcon className="h-4 w-4 text-blue-500" />
                        )}
                      </Button>
                      <Button
                        variant="ghost"
                        className="flex justify-between items-center w-full text-left dark:text-gray-400 text-gray-900"
                        onClick={() => handleSort("descending")}
                      >
                        Descending
                        {sortOrder === "descending" && (
                          <CheckIcon className="h-4 w-4 text-blue-500" />
                        )}
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>

                {/* Filter Icon Button */}
                <button className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-200">
                  <FilterIcon className="text-gray-600  dark:text-white" />
                </button>
              </div>
            </TabsList>

            <TabsContent value="jobs" className="space-y-4">
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4"></div>
                <Card className="col-span-4 md:col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent></CardContent>
                </Card>
                <div className="col-span-4"></div>
                <div className="col-span-4 md:col-span-3"></div>
              </div> */}

              <Jobs />
            </TabsContent>
          </Tabs>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
