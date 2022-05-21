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

function App() {
const state = useSelector(state => state.auth)
  console.log(state)
  
    return (
      <React.Fragment>
       <BrowserRouter>

        <Routes>
            
                <Route index element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />

            
        </Routes>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
