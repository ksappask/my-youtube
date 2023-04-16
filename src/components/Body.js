import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Head from "./Head";

const Body = () => {
  return (
    <div>
      <Head />
      <div className=" flex relative">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default Body;
