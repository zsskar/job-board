import { SignUpLayout } from "@/pages/components/sign_up_form_layout";
import SignUpForm from "@/pages/components/signup-form";
import Spinner from "@/pages/components/spinner";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function JobSeeker() {
  const router = useRouter();
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session && session.user) {
      router.push("/dashboard");
    }
  }, [router, session]);

  const handleSignUp = () => {
    signIn("google", { callbackUrl: "/auth/callback?role=USER" });
  };
  return (
    <>
      {status === "loading" || session ? (
        <SignUpLayout>
          <Spinner />
        </SignUpLayout>
      ) : (
        <SignUpForm who="Job Seeker" handleSignUp={handleSignUp} />
      )}
    </>
  );
}
