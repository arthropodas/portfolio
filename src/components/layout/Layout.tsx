import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useThemeStore } from "../../zustand/interface";

const Layout: React.FC = () => {
  const { theme } = useThemeStore();



  return (
    <div className={`min-h-screen app ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} transition-all duration-1000 ease-in-out`}>
      <Navbar />
      <div className="m-12 content min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
