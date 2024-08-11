import React, { useState } from "react";
import ComponentRoute from "./ComponentRoute";
import LeftSideBar from "./components/LeftSideBar";
import { AiOutlineMenu } from "react-icons/ai";

const App = () => {
  const [leftSideBarVisible, setLeftSideBarVisible] = useState(false);
  return (
    <div className=" h-screen flex w-screen ">
      {/* {leftSideBarVisible && ( */}
        <div
          className={`lg:w-64 w-0 ${leftSideBarVisible ? "relative z-0" : ""}`}
        >
          <LeftSideBar setLeftSideBarVisible={setLeftSideBarVisible} />
        </div>
      {/* )} */}
      <div className="w-screen h-screen overflow-y-auto ">
        <div
          className="block lg:hidden w-screen text-xl px-2 py-3 bg-gray-800"
          onClick={() => setLeftSideBarVisible(!leftSideBarVisible)}
        >
         <AiOutlineMenu color="white" size={25} />

        </div>
        <ComponentRoute />
      </div>
    </div>
  );
};

export default App;
