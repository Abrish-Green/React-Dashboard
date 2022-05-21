import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
import Dashboard from "./pages/Admin";
import Login from "./pages/Login";

import { useDispatch,useSelector } from 'react-redux'

import { useLocalStorage } from './Hooks/LocalStorageHook'
import PublicRoute from "./Routes/PublicRoute";
import { ProtectedRoute } from "./Routes/ProtectedRoute";
import { loadUser } from "./Services/Redux/Actions/Auth";
import { LoadUser } from "./Services/Authentication";
import { GetUsers } from "./Services/Users Service";

const  App = () => {
  const state = useSelector(state => state.auth)
  const dispatch = useDispatch();
  React.useEffect(() => {
        dispatch(loadUser())   
  }, [dispatch])

          
    return (
      <React.Fragment>
       <BrowserRouter>

        <Routes>
            <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PublicRoute />}>
                <Route index element={<Login />} />
            </Route>

            
        </Routes>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
