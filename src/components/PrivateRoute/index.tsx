import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: React.ReactNode;
}

export const PrivateRoute = (props: IProps) => {
  const { children } = props;

  if (localStorage.getItem("isLoggedIn") === "false") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
