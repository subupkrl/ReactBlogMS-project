import React, { useState } from "react";

const Form = ({ type, onSubmit }) => {
  const [data, setData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setData({
      ...data,
      [name]: name === "image" ? e.target.files(0) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
  };

  return (
    <div>
      <div class="p-4 mx-auto max-w-xl bg-white">
        <h1 class="text-2xl text-slate-900 font-semibold text-center">
          Contact us
        </h1>
        <form class="mt-8 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label class="text-sm text-slate-800 font-medium mb-2 block">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
              name="title"
              onChange={handleChange}
            />
          </div>
          <div>
            <label class="text-sm text-slate-800 font-medium mb-2 block">
              Sub-Title
            </label>
            <input
              type="text"
              placeholder="Enter Subject"
              class="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm outline-none transition-all"
              name="sub-title"
              onChange={handleChange}
            />
          </div>

          <div>
            <label class="text-sm text-slate-800 font-medium mb-2 block">
              {type} blog here
            </label>
            <textarea
              placeholder="Enter Message"
              rows="4"
              class="w-full px-4 text-slate-800 bg-gray-100 border focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-none transition-all"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="button"
            class="!mt-8 text-white bg-slate-900 hover:bg-slate-800 tracking-wide text-[15px] px-4 py-2 w-full outline-none"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
