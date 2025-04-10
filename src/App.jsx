import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/blog/Home";
import Register from "./Pages/auth/Register";
import Addblog from "./Pages/blog/Addblog";
import Login from "./Pages/auth/login";
import Editblog from "./Pages/blog/Editblog";
import Singleblog from "./Pages/blog/Singleblog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/add" element={<Addblog />} />
          <Route path="/blog/edit" element={<Editblog />} />
          <Route path="/blog/id" element={<Singleblog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
