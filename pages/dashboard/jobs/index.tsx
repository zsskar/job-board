import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, HeartIcon } from "lucide-react";

const Jobs = () => {
  const jobs = [
    {
      date: "20 May, 2023",
      company: "Amazon",
      role: "Senior UI/UX Designer",
      price: "$250/hr",
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
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
      location: "San Francisco, CA",
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
      location: "California, CA",
      tags: ["Full time", "Junior level", "Distant", "Flexible Schedule"],
      color: "bg-teal-100",
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", // Google logo URL
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-6 p-6">
      {jobs.map((job, index) => (
        <Card
          key={index}
          className={`rounded-xl border hover:border-red-500 shadow-md p-4 bg-white transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
        >
          <CardHeader>
            {/* Header with Date and Wishlist Icon */}
            <div className="flex justify-between items-center text-sm text-gray-500">
              <Badge className="border hover:border-red-500 px-3 py-1 rounded-full bg-white text-sm text-gray-700 border border-gray-300">
                {job.date}
              </Badge>
              <Button
                size="icon"
                className="h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-100 border hover:border-red-500 transition-colors duration-200"
              >
                {/* Heart Wishlist Icon */}
                {/* <HeartIcon className="text-gray-500 hover:fill-red-500 transition-colors duration-200" /> */}

                <HeartIcon className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
              </Button>
            </div>

            {/* Company Logo and Role */}
            <div className="flex items-center mt-4">
              <div className="border hover:border-red-500 h-12 w-12 rounded-full overflow-hidden bg-white flex justify-center items-center shadow-md">
                <Image
                  src={job.companyLogo}
                  alt={job.company}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900 hover:text-black transition-colors duration-200">
                {job.role}
              </h3>
            </div>
          </CardHeader>

          <CardContent className="mt-4 space-y-3">
            {/* Job Tags */}
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  className="border hover:border-red-500 px-3 py-1 rounded-full bg-white text-sm text-gray-700 border border-gray-300 hover:bg-gray-200 transition-colors duration-200"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          {/* Footer for Salary and Details */}
          <div className="mt-auto pt-4">
            <CardFooter className="flex justify-between items-center bg-white p-3 rounded-lg border-t border-gray-200 shadow-inner">
              <div className="text-lg font-semibold text-gray-900">
                {job.price}
              </div>
              <Button
                variant="outline"
                className="bg-black text-white px-4 py-1 rounded-md hover:bg-gray-800 hover:text-white transition-colors duration-200"
              >
                Details
              </Button>
            </CardFooter>

            {/* Location */}
            <p className="mt-2 text-sm text-gray-500 text-right">
              {job.location}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Jobs;
