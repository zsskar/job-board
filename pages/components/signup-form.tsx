import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { SignUpLayout } from "./sign_up_form_layout";

export default function SignUpForm({
  who,
  handleSignUp,
}: {
  who: string;
  handleSignUp: () => void;
}) {
  return (
    <SignUpLayout>
      <div className="w-full max-w-md px-8 py-10 bg-white shadow-2xl rounded-2xl transition-transform duration-300 transform hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Hey {who}, Create an account
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Enter your email below to create your account
        </p>

        <form className="space-y-4">
          {/* Email Input */}
          <Input
            type="email"
            placeholder="name@example.com"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Sign In with Email Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg transition-all duration-300 hover:bg-blue-700"
          >
            Sign In with Email
          </Button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">
              OR CONTINUE WITH
            </span>
          </div>
        </div>

        {/* GitHub OAuth Button */}
        <Button
          onClick={handleSignUp}
          className="w-full bg-gray-100 text-black border border-gray-300 py-3 rounded-lg flex justify-center items-center hover:bg-gray-200 transition-all duration-300"
        >
          <GithubIcon className="mr-2 h-5 w-5" />
          Google
        </Button>

        {/* Terms and Privacy */}
        <p className="text-xs text-center text-gray-500 mt-4">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="underline text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </SignUpLayout>
  );
}
