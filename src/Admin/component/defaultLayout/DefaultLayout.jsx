import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="bg-gray-200">
        <div className=" flex w-6/6">
          <Sidebar className= " w-1/6 " />
          <div className=" w-5/6 ">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DefaultLayout;
