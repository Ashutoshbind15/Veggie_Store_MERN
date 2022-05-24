import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Auth({ allowedRoles }) {
  const userAuth = useSelector((state) => state.auth);

  return userAuth?.user?.userData.roles.find((role) =>
    allowedRoles?.includes(role)
  ) ? (
    <Outlet />
  ) : userAuth?.user ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/auth" />
  );
}

export default Auth;
