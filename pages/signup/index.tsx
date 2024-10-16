import Image from "next/image";
import Link from "next/link";

const SignUpOptions = () => {
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
        <h1 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center">
          How would you like to use <br></br>
          <span>Job Board?</span>
        </h1>
        <p
          className="mb-6 lg:mb-8 text-center"
          style={{
            color: "rgb(54, 68, 82)",
            fontSize: "0.875rem",
            letterSpacing: "0px",
            lineHeight: "1.57143",
            fontWeight: "400",
          }}
        >
          Already have a job board account?{" "}
          <Link href="login" className="text-blue-700 hover:text-blue-900">
            Log in
          </Link>
        </p>
        <div className="flex flex-col items-center space-y-6 w-full lg:w-4/5 py-6">
          {/* First Button */}
          <div className="bg-white hover:border border-blue-500 transition-transform duration-300 hover:translate-x-5 hover:scale-105 cursor-pointer rounded-2xl shadow-lg p-2 flex items-center space-x-4 w-full max-w-lg">
            <div className="hover:bg-blue-50 rounded-2xl p-6 flex items-center space-x-4 w-full">
              <div className="text-blue-500">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  width="24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0Zm15.28-2.47a.75.75 0 0 0-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">I’m looking for a job</h2>
                <p className="text-gray-600">
                  Find remote jobs at top companies
                </p>
              </div>
              <Image
                src="job-seeker.svg"
                alt="Looking for job illustration"
                className="w-25 h-auto"
                width={150}
                height={150}
              />
            </div>
          </div>

          {/* Second Button */}
          <div className="bg-white hover:border border-blue-500 transition-transform duration-300 hover:translate-x-5 hover:scale-105 cursor-pointer rounded-2xl shadow-lg p-2 flex items-center space-x-4 w-full max-w-lg">
            <div className="hover:bg-blue-50 rounded-2xl p-6 flex items-center space-x-4 w-full">
              <div className="text-blue-500">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="currentColor"
                  width="24"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.25 12a10.75 10.75 0 1 1 21.5 0 10.75 10.75 0 0 1-21.5 0Zm15.28-2.47a.75.75 0 0 0-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0l5-5Z"
                  ></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold">
                  I want to attract talent
                </h2>
                <p className="text-gray-600">
                  Post your open jobs on jobboard.com
                </p>
              </div>
              <Image
                src="hand-shaking.svg"
                alt="Attract talent illustration"
                className="w-30 h-auto"
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>
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
