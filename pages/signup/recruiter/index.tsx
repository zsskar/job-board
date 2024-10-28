import { SignUpLayout } from "@/pages/components/sign_up_form_layout";
import SignUpForm from "@/pages/components/signup-form";
import Spinner from "@/pages/components/spinner";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Recruiter() {
  const router = useRouter();
  const handleSignUp = () => {
    signIn("google", { callbackUrl: "/auth/callback?role=RECRUITER" });
  };

  const { data: session, status } = useSession();
  useEffect(() => {
    if (session && session.user) {
      router.push("/dashboard");
    }
  }, [router, session]);

  return (
    <>
      {status === "loading" || session ? (
        <SignUpLayout>
          <Spinner />
        </SignUpLayout>
      ) : (
        <SignUpForm who="Recuiter" handleSignUp={handleSignUp} />
      )}
    </>
  );
}
