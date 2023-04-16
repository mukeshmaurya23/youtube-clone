import React from "react";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
const Body = () => {
  return (
    <>
      <div className="flex">
        <SideBar />

        <div className=" max-h-screen no-scrollbar overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Body;
