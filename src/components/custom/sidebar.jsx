// src/components/Sidebar.jsx
import React from "react";

export const Sidebar = ({ onSelectTab, selectedTab }) => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col">
      <div className="p-4 font-bold text-xl">Admin Panel</div>
      <nav className="flex-grow">
        <SidebarItem
          label="All Data"
          isActive={selectedTab === "all-data"}
          onClick={() => onSelectTab("all-data")}
        />
        <SidebarItem
          label="Add New Data"
          isActive={selectedTab === "add-new-data"}
          onClick={() => onSelectTab("add-new-data")}
        />
      </nav>
    </div>
  );
};

export const SidebarItem = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`p-4 cursor-pointer hover:bg-gray-700 ${
        isActive ? "bg-gray-900" : ""
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};