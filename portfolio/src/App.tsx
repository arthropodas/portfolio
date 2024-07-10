import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import { useThemeStore } from "./zustand/interface";

 // Import your Projects component

const App: React.FC = () => {
  const { theme } = useThemeStore();

  return (
    <div className={`h-full ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> {/* Add route for the Projects component */}
      </Routes>
    </div>
  );
};

export default App;
