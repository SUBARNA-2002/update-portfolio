import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";

const LeftSideBar = ({ setLeftSideBarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const navigationData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="h-screen lg:w-screen w-64 bg-gray-800 text-white flex flex-col justify-between">
      <div className="p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="flex justify-end">
            {/* <h1 className="text-3xl font-bold">Logo</h1> */}
            <div
              className="lg:hidden block"
              onClick={() => setLeftSideBarVisible(false)}
            >
              <IoCloseOutline color="white" size={35} />
            </div>
          </div>
          {/* <img
            src="your-logo-url"
            alt="Logo"
            className="w-16 h-16 mt-4 rounded-full border-2 border-gray-400"
          /> */}
          <div className="mt-4 text-xl font-semibold">
            Subarna Keshari Sutar
          </div>
        </div>
        <hr className="border-gray-600" />
        <ul className="mt-6 space-y-4">
          {navigationData?.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                onClick={() => {
                  navigate(item?.path);
                  setLeftSideBarVisible(false);
                }}
                key={index}
                className={`p-2 rounded-md cursor-pointer ${
                  isActive ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
              >
                {item?.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-400">© 2024 SUBARNA</p>
      </div>
    </div>
  );
};

export default LeftSideBar;