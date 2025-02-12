import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  );
};
