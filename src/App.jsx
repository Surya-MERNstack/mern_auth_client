import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import About from "./pages/About";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element = {<Sign/>}/>
          {/* <Route path="/sign-in" element={<SingIn />} />
          <Route path="/sign-up" element={<SingUp />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
