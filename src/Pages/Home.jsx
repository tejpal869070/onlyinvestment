import React, { useEffect, useRef, useState } from "react";
import { FcPortraitMode } from "react-icons/fc";
import { IoLogOut } from "react-icons/io5";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { PiNetworkFill } from "react-icons/pi";
import { RiAccountCircleFill } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
import InnerSection from "./userPages/InnerSection";
import { FaCoins } from "react-icons/fa6";
import Cookies from "js-cookie";
import { GetUserDetails } from "../Controllers/User/UserController";
import ThemeToggle from "../Controllers/ThemeToggle";
import { Loading1 } from "../Componentes/Loading1";
import CreatePin from "../Componentes/Dashboard/CratePin";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = useState(true);
  const dropdownClassList =
    "flex w-full p-2 pl-0 text-gray-900 rounded-lg group dark:text-black dark:hover:text-white dark:hover:bg-gray-400  hover:animate-fade-right hover:animate-once hover:justify-center hover:animate-duration-[400ms]";

  const handleLogout = async () => {
    Cookies.remove("token");
    Cookies.remove("mobile");
    localStorage.removeItem("userDetails");
    window.location.href = "/";
  };

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUser(response[0]);
      localStorage.setItem("userDetails", JSON.stringify(response[0]));
      setLoading(false);
    }
  };

  useEffect(() => {
    userDataGet();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center m-auto inset-0">
        <Loading1 />
      </div>
    );
  }

  return (
    <div className="dark:bg-black w-full h-full ">
      <nav className="bg-gray-800 w-full lg:w-[85vw] m-auto">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link
                    to={"/home"}
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Calendar
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none  ring-2  ring-white  ring-offset-2  ring-offset-gray-800"
                    onClick={toggleDropdown}
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <FaUser color="white" size={20} className="m-1" />
                  </button>
                </div>

                <div
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    isOpen ? "" : "hidden"
                  }`}
                  role="menu"
                  ref={dropdownRef}
                  id="user-dropdown"
                >
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </a>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700" 
                  >
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Team
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className=" ">
        <div className="p-2 lg:p-8 bg-gray-200  lg:w-[85vw] m-auto  ">
          <InnerSection />
        </div>
      </div>

      {/* Create pin */}
      {user && user?.user_pin === "N" && <CreatePin />}
    </div>
  );
}
