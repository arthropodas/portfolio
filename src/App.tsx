// src/components/App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects/>} />
        <Route path="" element={<Projects/>} />

        
      </Route>
    </Routes>
  );
};

export default App;