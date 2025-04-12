import React from "react";
import Form from "./components/form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post("//api", data); //for connecting frontend an backend
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        alert("login failed");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Form type="Login" onSubmit={handleLogin} />
    </div>
  );
};

export default login;
