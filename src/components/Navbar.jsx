import React, { useEffect, useState } from "react";
import { useThemeStore } from '../stores/useThemeStore.js';
import { THEMES } from '../constants/index.js';
import { User } from "lucide-react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom"



const Navbar = ({authUI, setAuthUI}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { setTheme } = useThemeStore();
  const [themeState, setThemeState] = useState(true);

  const themeChange = () => {

    if (themeState) {
      setTheme(THEMES[1])
      setThemeState(false);
    } else {
      setTheme(THEMES[0])
      setThemeState(true);
    }

  }

  //gradient for logo: bg-gradient-to-r from-indigo-600 to-sky-600 text-transparent bg-clip-text leading-[1.2] pb-1

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      /*if (currentY > lastScrollY && currentY > 60) {
        // scrolling down
        setShowNav(false);
      } else {
        // scrolling up
        setShowNav(true);
      }*/

      // Show nav if scrolling up or at the top, hide if scrolling down past 60
      if (currentY > 40) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentY);

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`navbar bg-white/95 backdrop-blur-sm px-4 xl:px-16 md:px-12 border-b border-gray-200 fixed top-0 left-0 right-0 z-50 transition-all duration-300  ${showNav ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex-1 flex items-center gap-2 hover:cursor-pointer">
        <FileText className="w-6 h-6 text-indigo-600" />
        <a className="font-[DM_Serif_Display] tracking-wide font-bold text-xl md:text-2xl text-gray-800">
          DocuLence
        </a>
      </div>

      {/* Hamburger toggle for mobile */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="btn btn-square btn-ghost p-2"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu - desktop */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        

        <Link to={'/'} className="relative group px-2 py-1 hover:cursor-pointer" >
          <span className="text-gray-800 hover:text-gray-900 transition-colors text-sm lg:text-base font-medium">
            Home
          </span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-sky-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>

        <Link to={'/pricing'} className="relative group px-2 py-1 hover:cursor-pointer">
          <span className="text-gray-800 hover:text-gray-900 transition-colors text-sm lg:text-base font-medium">
            Pricing
          </span>
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-indigo-600 to-sky-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>



        <button className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-sky-500 text-white text-sm lg:text-base font-medium rounded-lg hover:cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => setAuthUI(!authUI)}>
          Sign Up
        </button>

        {/* 
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar">
            <User className=" w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer transition-colors" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[50] menu p-2 shadow-lg bg-white rounded-box w-40 mt-2 border border-gray-100"
          >
            <li>
              <a className="hover:bg-gray-50 text-gray-700">Dashboard</a>
            </li>
            <li>
              <a className="hover:bg-gray-50 text-gray-700">Settings</a>
            </li>
            <li>
              <a className="hover:bg-gray-50 text-gray-700">Sign Out</a>
            </li>
          </ul>
        </div>
        
        <label className=" inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className=" toggle toggle-sm bg-gray-200 border-gray-300 [--tglbg:theme(colors.indigo.600)]"
            checked={themeState}
            onChange={themeChange}
          />
        </label>
        */}


      </div>


      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 mt-0 w-full bg-white shadow-lg flex flex-col gap-1 p-4 md:hidden z-50 border-t border-gray-200">
          <button className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md font-medium">
            How it works
          </button>
          <button className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md font-medium">
            Pricing
          </button>
          <button className="px-4 py-3 text-left text-gray-700 hover:bg-gray-50 rounded-md font-medium">
            Sign In
          </button>
          <button className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-md font-medium mt-2">
            Sign Up
          </button>
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-gray-700 font-medium">Dark Mode</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="toggle toggle-sm bg-gray-200 border-gray-300 [--tglbg:theme(colors.indigo.600)]"
                checked={themeState}
                onChange={themeChange}
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
