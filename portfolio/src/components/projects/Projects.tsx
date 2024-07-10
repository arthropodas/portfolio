import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import { useThemeStore } from "../../zustand/interface";

const Projects: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div  className={`h-12 flex items-center pt-4 md:pt-6 md:px-4 ${
        theme === 'dark' ? 'text-gray-200 bg-black' : 'text-black bg-white'
      }`}>
      d
    </div>
  );
};

export default Projects;
