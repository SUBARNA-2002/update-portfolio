import React from "react";
import ComponentRoute from "./ComponentRoute";
import LeftSideBar from "./components/LeftSideBar";
const App = () => {
  return (
    <div className=" h-screen flex w-screen">
      <div className="w-64 ">
        <LeftSideBar />
      </div>
      <div className="w-screen ">
        <ComponentRoute />
      </div>
    </div>
  );
};

export default App;
