import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/blog/Home";
import Register from "./Pages/auth/Register";
import Addblog from "./Pages/blog/Addblog";
import Login from "./Pages/auth/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addblog" element={<Addblog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
