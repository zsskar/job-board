import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CheckIcon, FilterIcon, HeartIcon, SortAscIcon } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { jobs } from "@/constants/data";
import FilterSideNav from "@/pages/components/filter_side_nav";
import Layout from "@/pages/components/Layout";

const Jobs = () => {
  const [sortOrder, setSortOrder] = useState<string>("");
  const [filterMenuOpen, setFilterMenuOpen] = useState<boolean>(false);

  const handleSort = (order: string) => {
    setSortOrder(order);
  };

  const handleFilters = () => {
    setFilterMenuOpen(!filterMenuOpen);
  };

  return (
    <Layout scrollable>
      <FilterSideNav
        openFilter={filterMenuOpen}
        setOpenFilter={setFilterMenuOpen}
      />
      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <TabsTrigger
            style={{ height: "50px", width: "200px" }}
            value="jobs"
            className="border border-red-500 dark:text-gray-200 text-gray-900"
          >
            Recommended Jobs
          </TabsTrigger>

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

            <button
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition duration-200"
              onClick={handleFilters}
            >
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-0">
            {jobs.map((job, index) => (
              <Card
                key={index}
                className="rounded-xl border-red-500 shadow-md p-2 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <CardHeader>
                  {/* Header with Date and Wishlist Icon */}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <Badge className="border-red-500 px-2 py-1 rounded-full bg-white text-xs text-gray-700">
                      {job.date}
                    </Badge>
                    <Button
                      size="icon"
                      className="border border-red-500 h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                    >
                      {/* Heart Wishlist Icon */}
                      <HeartIcon className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
                    </Button>
                  </div>

                  {/* Company Logo and Role */}
                  <div className="flex items-center" style={{ marginTop: 20 }}>
                    <div className="border border-red-500 h-12 w-12 rounded-full overflow-hidden bg-white flex justify-center items-center shadow-md">
                      <Image
                        src={job.companyLogo}
                        alt={job.company}
                        width={30}
                        height={30}
                        className="object-cover rounded-full"
                      />
                    </div>

                    <h3 className="ml-3 text-lg font-semibold text-gray-900 hover:text-black transition-colors duration-200">
                      {job.role}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent>
                  {/* Job Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, idx) => (
                      <Badge
                        key={idx}
                        className="border border-red-500 px-2 py-1 rounded-full bg-white text-xs text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Footer for Salary and Details */}
                <div className="mt-auto pt-2">
                  <CardFooter className="flex justify-between items-center bg-white p-2 rounded-lg border-t border-red-500 shadow-inner">
                    <div className="text-md font-semibold text-gray-900">
                      {job.price}
                    </div>
                    <Button
                      variant="outline"
                      className="bg-black text-white px-3 py-1 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
                    >
                      Details
                    </Button>
                  </CardFooter>

                  {/* Location */}
                  <p className="mt-1 mr-3 text-xs text-gray-900 font-semibold text-right">
                    {job.location}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  );
};

export default Jobs;
