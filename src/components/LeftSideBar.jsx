import React from "react";
import { useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const navigate = useNavigate();
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
    <div className="h-screen w-screen bg-gray-800 text-white flex flex-col justify-between">
      <div className="p-6 overflow-y-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Logo</h1>
          <img
            src="your-logo-url"
            alt="Logo"
            className="w-16 h-16 mt-4 rounded-full border-2 border-gray-400"
          />
          <div className="mt-4 text-xl font-semibold">
            Subarna Keshari Sutar
          </div>
        </div>
        <hr className="border-gray-600" />
        <ul className="mt-6 space-y-4 ">
          {navigationData?.map((item, index) => {
            return (
              <li
                onClick={() => navigate(item?.path)}
                key={index}
                className="hover:bg-gray-700 p-2 rounded-md cursor-pointer"
              >
                {item?.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-400">© 2024 Your Name</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
