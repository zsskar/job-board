import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SignUpLayout } from "../components/sign_up_form_layout";
import { useEffect } from "react";
import { trpc } from "@/utils/trpc";
import { Role } from "@prisma/client";

const AuthCallback = () => {
  const router = useRouter();
  const { role } = router.query;
  const { data: session } = useSession();

  const { data: user } = trpc.user.getUserByEmail.useQuery(
    { email: session?.user?.email },
    {
      enabled: !!session?.user?.email, // Only run query if email exists
    }
  );

  const updateUserRoleByEmail = trpc.user.updateUserRoleByEmail.useMutation({
    onSuccess: (updatedUser) => {
      console.log("User role updated successfully:", updatedUser);
      // Optionally, you could refetch the user data to ensure it’s up to date
    },
    onError: (err) => {
      console.error("Error updating user role:", err);
      // Handle error appropriately, maybe show a notification
    },
  });

  useEffect(() => {
    // Check if user exists and if the role is missing
    if (user && user.role == null) {
      const newRole = role === "USER" ? Role.USER : Role.RECRUITER;
      updateUserRoleByEmail.mutate({
        email: user.email,
        role: newRole,
      });
    }
  }, [role, updateUserRoleByEmail, user]);

  return (
    <SignUpLayout>
      <Card className="max-w-xl w-full p-8 rounded-lg shadow-lg bg-white border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Congratulations, {session?.user.name || "User"}!
        </h1>
        <p className="text-lg text-center text-gray-600 mb-4">
          Your account has been created successfully.
        </p>

        {role === "USER" ? (
          <p className="text-md text-center text-gray-600 mb-6">
            Please update your profile on the dashboard otherwise, you will not
            be able to apply for jobs.
          </p>
        ) : role === "RECRUITER" ? (
          <p className="text-md text-center text-gray-600 mb-6">
            Please update your profile on the dashboard otherwise, you will not
            be able to post jobs.
          </p>
        ) : (
          <p className="text-md text-center text-red-500 mb-6">
            Role not recognized.
          </p>
        )}

        <div className="mt-4">
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard")}
            className="w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Go to Dashboard
          </Button>
        </div>
      </Card>
    </SignUpLayout>
  );
};

export default AuthCallback;
