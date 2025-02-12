import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { isLoggedIn } = useSelector((state) => state.test);


  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
