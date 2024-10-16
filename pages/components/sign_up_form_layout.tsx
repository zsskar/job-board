import React from "react";
import Image from "next/image";

export const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-10 py-10 lg:py-0 overflow-auto">
        <Image
          className="mb-10"
          src="/portalIcon.png"
          width={150}
          height={150}
          alt="job-board-icon"
        />
        {children}
      </div>

      {/* Right Section */}
      <div
        style={{ backgroundImage: "flower.svg" }}
        className="w-full lg:w-1/2 flex items-center justify-center relative overflow-hidden py-10 lg:py-0"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgb(30 78 200)",
            clipPath: "circle(70% at 100% 50%)",
          }}
        ></div>
        <Image
          src="/person.svg"
          alt="Remote Talent Illustration"
          className="z-10 w-2/3 lg:w-1/1 h-auto"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};
