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
import Layout from "../components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <Layout scrollable>
      <div className="space-y-5">
        <div className="flex items-center justify-between space-y-5">
          <h2 className="text-2xl font-bold tracking-tight">
            Hi, Welcome back 👋
          </h2>
        </div>
        <Tabs defaultValue="dashboard" className="space-y-4">
          <TabsList
            style={{
              height: "60px",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            {/* Left Side - Tabs Trigger */}
            <TabsTrigger
              style={{ height: "50px", width: "200px" }}
              value="dashboard"
              className="border border-red-500 dark:text-gray-200 text-gray-900"
            >
              Dashboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
