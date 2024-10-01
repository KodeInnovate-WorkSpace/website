import React, { useState } from "react";
import Navbar from "@/components/custom/navbar";
import { Sidebar } from "@/components/custom/sidebar";
import AllData from "@/components/custom/alldata";
import AddNewData from "@/components/custom/AddNewData";

const AdminPage = () => {
  const [selectedTab, setSelectedTab] = useState("all-data");
  return (
    <div>
      <Navbar />
      <main className="pt-[4rem]">
        <div className="flex h-full">
          {/* Sidebar */}
          <Sidebar onSelectTab={setSelectedTab} selectedTab={selectedTab} />

          {/* Main content area */}
          <div className="flex-grow p-6 ">
            {selectedTab === "all-data" && <AllData />}
            {selectedTab === "add-new-data" && <AddNewData />}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
