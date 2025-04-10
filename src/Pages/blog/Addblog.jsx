import React from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/layout/layout";
import Form from "./components/form/form";

const Addblog = () => {
  return (
    <div>
      <Layout>
        <Form type="Add" />
      </Layout>
    </div>
  );
};

export default Addblog;
