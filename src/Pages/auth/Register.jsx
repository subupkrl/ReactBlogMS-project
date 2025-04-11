import React from "react";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post("//api", data); //for connecting frontend an backend
      console.log(response);
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("registration failed");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <Form type="Register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;
