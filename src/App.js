import Home from "../src/Component/Home/Home/Home";
import { Routes, Route } from "react-router-dom";
import React, { createContext } from "react";
import About from "./Component/Home/About/About";
import Dashboard from "../src/Component/Dashoboard/Dashboard/Dashboard";
import LoginModal from "./Component/Login/LoginModal";
import PrivateRoute from "./Component/Login/PrivateRoute";
import NotFound from "./Component/NotFound";
export const UserContext = createContext();

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginModal />} />
        <Route
          path="/dashboard/*"
          element={
            <PrivateRoute redirectTo="/login">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
