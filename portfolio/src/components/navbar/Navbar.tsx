import React from "react";
import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa6";
import { useThemeStore } from "../../zustand/interface";
// import { useNavigate } from "react-router-dom";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  // const navigate = useNavigate();

  // const onClickHandle = () => {
  //   navigate("/projects");
  // };

  return (
    <div className="h-12 flex items-center text-gray-700 dark:text-gray-200 pt-4 md:pt-6 md:px-4">
      <div className="flex-auto">
        <p className="text-2xl animate-pulse bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
          a.np
        </p>
      </div>
      <div className="flex gap-6 sm:gap-5">
        <a
          href="https://github.com/arthropodas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub
            className={`h-6 w-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/asif-n-p-817561229"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin
            className={`h-6 w-6 ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          />
        </a>
          <Link to="/projects">
            <FaFileAlt
              className={`h-6 w-6 ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </Link>
        <button
          onClick={toggleTheme}
          aria-label={
            theme === "dark" ? "Activate Light Mode" : "Activate Dark Mode"
          }
        >
          {theme === "dark" ? (
            <FaSun className="h-6 w-6 text-gray-300" />
          ) : (
            <FaMoon className="h-6 w-6 text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;