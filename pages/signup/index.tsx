import Image from "next/image";

const SignUpOptions = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-10 py-10 lg:py-0 overflow-auto">
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">
          How would you like to use Remote Talent?
        </h1>
        <p className="text-blue-600 mb-6 lg:mb-8 text-center">
          Already have a Remote account?{" "}
          <a href="#" className="underline text-blue-700 hover:text-blue-900">
            Log in
          </a>
        </p>
        <div className="flex flex-col items-center space-y-6 w-full lg:w-4/5 py-6">
          {/* First Button */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 w-full max-w-lg">
            <div className="text-blue-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4V8a1 1 0 112 0v6a1 1 0 01-2 0zm1-8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">I’m looking for a job</h2>
              <p className="text-gray-600">
                Find remote and hybrid jobs at top companies
              </p>
            </div>
            <Image
              src="job-seeker.svg"
              alt="Looking for job illustration"
              className="w-24 h-auto"
              width={150}
              height={150}
            />
          </div>

          {/* Second Button */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center space-x-4 w-full max-w-lg">
            <div className="text-blue-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-4V8a1 1 0 112 0v6a1 1 0 01-2 0zm1-8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-lg font-semibold">
                I want to attract talent
              </h2>
              <p className="text-gray-600">
                Post your open jobs on remote.com/jobs
              </p>
            </div>
            <Image
              src="hand-shaking.svg"
              alt="Attract talent illustration"
              className="w-24 h-auto"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center relative overflow-hidden py-10 lg:py-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "rgb(74, 143, 255)",
            clipPath: "circle(80% at 100% 50%)",
          }}
        ></div>
        <Image
          src="person.svg"
          alt="Remote Talent Illustration"
          className="z-10 w-2/3 lg:w-1/2 h-auto"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default SignUpOptions;
