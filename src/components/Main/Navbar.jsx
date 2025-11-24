import { User, FileText, UserRound } from "lucide-react";
import { useAuthStore } from "../../stores/useAuthStore.js"
import { THEMES } from '../../constants/index.js';
import { useThemeStore } from "../../stores/useThemeStore.js";
import { useState } from "react";
const Navbar = ({ smallScreen, setSmallScreen }) => {


  const { logout } = useAuthStore();
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


  return (
    <div className={`navbar flex border-b dark:border-neutral-700 border-gray-200 backdrop-blur-sm px-4 xl:px-4 md:px-4 transition-all duration-300`}>
      <div className="flex-1 flex items-center gap-0">
        <a className="select-none font-[DM_Serif_Display] tracking-wide font-semibold text-lg md:text-xl text-gray-800 dark:text-white p-2">
          DocuLence
        </a>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

          <UserRound className="w-5 h-5 text-gray-900 dark:text-white" />
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow border dark:bg-neutral-800 dark:border-neutral-700 border-gray-200">
          <li>
            <a className="dark:text justify-between py-2 text-[16px] font-normal dark:text-white">
              Profile
            </a>
          </li>

          <div className="border-b dark:border-neutral-700 border-gray-200 mt-2"/>

          <label className=" inline-flex items-center justify-between cursor-pointer m-2">
            <p className="dark:text-white justify-between py-2 text-[16px] font-normal">Theme</p>
            <input
              type="checkbox"
              className=" toggle toggle-sm bg-gray-200 border-gray-300 [--tglbg:theme(colors.indigo.600)]"
              checked={themeState}
              onChange={themeChange}
            />
          </label>

          <div className="border-b dark:border-neutral-700 border-gray-200"/>

          <li>
            <a className="dark:text-white justify-center py-2 text-[16px] font-semibold bg-red-400 text-gray-50 mt-2 " onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className='sm:hidden flex items-center gap-4'>
        <button className={`btn btn-square btn-ghost p-2 ${smallScreen && 'hidden'}`}
          onClick={() => setSmallScreen(!smallScreen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>


    </div>
  );
};

export default Navbar;



