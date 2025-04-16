import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Layout from "../../components/layout/layout";
import Card from "./components/card/Card";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("api");
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <Layout>
        <div className="flex flex-wrap justify-center space-x-5 mt-6">
          {blogs.length > 0 &&
            blogs.map((blog) => {
              return <Card blog={blog} />;
            })}
        </div>
      </Layout>
    </>
  );
};

export default Home;
