import React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/layout/layout";
import Form from "./components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const navigate = useNavigate();
  const handleCreateBlog = async (data) => {
    const response = await axios.post("api", data, {
      headers: {},
    });
    try {
      if (response.status === 201) {
        navigate("/");
      } else {
        alert("Add blog failed");
      }
    } catch (error) {
      alert(response.error);
    }
  };
  return (
    <div>
      <Layout>
        <Form type={Addblog} onSubmit={handleCreateBlog} />
      </Layout>
    </div>
  );
};

export default Addblog;
