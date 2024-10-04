import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/layout/sidebar";
import AllData from "@/components/page_specific/admin/all_data";
import AddNewData from "@/components/page_specific/admin/add_new_data";


const AdminPage = () => {
  //scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
