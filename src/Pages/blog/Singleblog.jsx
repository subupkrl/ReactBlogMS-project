import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Singleblog = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState({});
  const navigate = useNavigate();
  const fetchBlog = async () => {
    const response = await axios.get("api/id");
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const deleteblog = async () => {
    const response = await axios.delete("api/id");
    if (response.status === 200) {
      navigate("/");
    } else {
      alert("something went wrong");
    }
  };
  return (
    <div>
      <Layout>
        <div className="flex flex-wrap">
          <div className="w-full sm:w-8/12 mb-10">
            <div className="container mx-auto h-full sm:p-10">
              <nav className="flex px-4 justify-between items-center">
                <div className="text-4xl font-bold">
                  {blogs.category}
                  <span className="text-green-700">.</span>
                </div>
                <div>
                  <img src={blogs.imgURL} alt="" className="w-8" />
                </div>
              </nav>
              <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                <div className="w-full">
                  <h1 className="text-4xl lg:text-6xl font-bold">
                    Find your <span className="text-green-700">greeny</span>{" "}
                    stuff for your room
                  </h1>
                  <div className="w-20 h-2 bg-green-700 my-4"></div>
                  <p className="text-xl mb-10">{blogs.description}</p>
                  <button
                    className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow"
                    onClick={deleteblog}
                  >
                    Delete
                  </button>
                </div>
              </header>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Leafs"
            className="w-full h-48 object-cover sm:h-screen sm:w-4/12"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Singleblog;
