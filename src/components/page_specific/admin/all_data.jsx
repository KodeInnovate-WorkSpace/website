import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetchData from "@/hooks/useFetchData";
import MyDataTable from "./datatable";

const AllData = () => {
  const { data: propertyData, loading: propertyLoading } =
    useFetchData("properties");
  const { data: categoryData, loading: categoryLoading } =
    useFetchData("category");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">View Data</h1>
      <Tabs defaultValue="properties" className="w-full ">
        <TabsList className="grid w-full grid-cols-2  h-10">
          <TabsTrigger value="properties" className="text-md">
            Properties
          </TabsTrigger>
          <TabsTrigger value="category" className="text-md">
            Category
          </TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          {propertyLoading ? (
            <p>Loading...</p>
          ) : (
            <MyDataTable data={propertyData} collectionName={"properties"} />
          )}
        </TabsContent>
        <TabsContent value="category">
          {categoryLoading ? (
            <p>Loading...</p>
          ) : (
            <MyDataTable data={categoryData} collectionName={"category"} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AllData;
