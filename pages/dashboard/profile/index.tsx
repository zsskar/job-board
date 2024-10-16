import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/pages/components/layout";
import React from "react";

export default function Profile() {
  return (
    <Layout scrollable>
      <div className="space-y-5">
        <Tabs defaultValue="profile" className="space-y-4">
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
              value="profile"
              className="border border-red-500 dark:text-gray-200 text-gray-900"
            >
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-4"></TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
