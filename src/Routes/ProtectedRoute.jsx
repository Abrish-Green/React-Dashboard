import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook";
import { useSelector } from "react-redux";
import React from "react";
import { useLocalStorage } from "../Hooks/LocalStorageHook";
export const ProtectedRoute = () => {
  const auth = useSelector(state => state.auth)
  const isLoggedIn = auth?.isLoggedIn || false
  const loading  = auth?.loading
  if (!loading) {
      if (!isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
    <React.Fragment>
        
        <Outlet />
    </React.Fragment>
  );
  }

};