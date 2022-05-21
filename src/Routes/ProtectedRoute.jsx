import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";
import { useSelector } from "react-redux";
import React from "react";
import { useLocalStorage } from "../Hooks/LocalStorageHook";
export const ProtectedRoute = () => {
  
  const auth = useSelector(state => state.auth)
  const token = useLocalStorage("user", null)
  console.log(token)
  const isLoggedIn = auth.token?.isLoggedIn || false
  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <React.Fragment>
        
        <Outlet />
    </React.Fragment>
  );
};