import React, { useState } from "react";
import {
  HomeIcon,
  FireIcon,
  VideoCameraIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: <HomeIcon className="w-6 h-6 flex-shrink-0" />, label: "Home" },
    { icon: <FireIcon className="w-6 h-6 flex-shrink-0" />, label: "Trending" },
    { icon: <VideoCameraIcon className="w-6 h-6 flex-shrink-0" />, label: "Subscriptions" },
    { icon: <Cog6ToothIcon className="w-6 h-6 flex-shrink-0" />, label: "Settings" },
  ];

  return (
    <>
      {/* Sidebar with position  dark:bg-gray-900*/}
      <div
        className={`fixed top-15 left-0 h-screen bg-white  border-r 
          p-4 z-50 transition-all duration-300 ease-in-out
          ${collapsed ? "w-20" : "w-64"}`}
      >
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mb-6 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 float-right"
        >
          {collapsed ? "→" : "←"}
        </button>

        <nav className="mt-10 flex flex-col space-y-4">
          {menuItems.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center space-x-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {icon}
              {!collapsed && <span>{label}</span>}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
