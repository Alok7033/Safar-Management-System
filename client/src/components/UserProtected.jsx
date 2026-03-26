import React from "react";
import { Navigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const UserProtected = ({ children }) => {
  const { user } = useAppContext();

  // If no user is logged in, redirect to home
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If user is logged in, render the protected content
  return children;
};

export default UserProtected;