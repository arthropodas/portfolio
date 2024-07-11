import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import { useThemeStore } from "../../zustand/interface";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const iconSize = 24; // Adjust the size as needed

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const hanldeProjects = () => {
    // Navigate to projects page
    navigate("/projects", { replace: true });
  };

  return (
    <div className="h-12 flex items-center pt-4 md:px-4">
      <div className="flex-auto">
        <p className="text-2xl animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          a.np
        </p>
      </div>
      <div className="pt-2">

      <button
      onClick={hanldeProjects}
        type="button"
        className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
      >
     Projects
      </button>
      </div>
      <div className="flex gap-6 sm:gap-5 p-10">
        <a
          href="https://github.com/arthropodas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={26} />
        </a>
      
        <Link to="/projects">
          <FaFileAlt size={iconSize} />
        </Link>
         <a
          href="https://www.linkedin.com/in/asif-n-p-817561229"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={iconSize} />
        </a>
        <Link to="/">
          <FaHome size={iconSize} />
        </Link>
        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Activate Light Mode" : "Activate Dark Mode"
          }
        >
          {theme === "dark" ? <FaSun size={22} /> : <FaMoon size={22} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
