// VLayout.jsx
import { useState } from "react";
import { Outlet } from "react-router";
import VendorSidebar from "../Components/Sidebar";

export default function VLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <VendorSidebar 
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />
      
      {/* Main Content Area - adjusts based on sidebar state */}
      <div className={`flex-1 transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'}`}>
        <Outlet />
      </div>
    </div>
  );
}