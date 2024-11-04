import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout, { getServerSideProps } from "@/pages/components/Layout";
import { Session } from "next-auth";
import React from "react";

export default function Companies({ session }: { session: Session }) {
  return (
    <Layout scrollable session={session}>
      <div className="space-y-5">
        <Tabs defaultValue="companies" className="space-y-4">
          <TabsList
            style={{
              height: "60px",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <TabsTrigger
              style={{ height: "50px", width: "200px" }}
              value="companies"
              className="border border-red-500 dark:text-gray-200 text-gray-900"
            >
              Companies
            </TabsTrigger>
          </TabsList>

          <TabsContent value="companies" className="space-y-4"></TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}

export { getServerSideProps };
