import React from "react";
import PropTypes from "prop-types";
import { LayoutProps } from "../../interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="fixed top-16 left-0 right-0 overflow-auto flex flex-col justify-between border border-gray-300 max-h-screen-3xl bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md" style={{ maxHeight: "calc(100vh - 100px)", zIndex: 999, paddingBottom: 5 }}>
      <div className="flex-1">{children}</div> {/* Content area */}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
