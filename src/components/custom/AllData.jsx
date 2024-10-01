import React from "react";
import MyDataTable from "./datatable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useFetchData from "@/hooks/useFetchData";
const AllData = () => {
  const { propertyData, propertyloading } = useFetchData("properties");
  const { categoryData, categoryLoading } = useFetchData("category");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">View Data</h1>
      <Tabs defaultValue="properties" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="properties">Properties</TabsTrigger>
          <TabsTrigger value="category">Category</TabsTrigger>
        </TabsList>
        <TabsContent value="properties">
          <MyDataTable data={propertyData} collectionName={"property"} />
        </TabsContent>
        <TabsContent value="category">
          <MyDataTable data={categoryData} collectionName={"category"} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AllData;
