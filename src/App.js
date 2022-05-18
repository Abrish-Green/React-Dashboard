import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import React from "react";
import Dashboard from "./pages/Admin";
import Login from "./pages/Login";

function App() {
  return (
      <React.Fragment>
       <BrowserRouter>

        <Routes>
         
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
        </Routes>
      </BrowserRouter>
      </React.Fragment>
  );
}

export default App;
