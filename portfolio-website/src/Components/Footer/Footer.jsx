import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would normally handle form submission (send data to an API or email)
    console.log(formData);
    setFormData({ name: "", email: "",message: "" });;
  };
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Form</h2>
          <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-[#1f2d3b] rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 text-sm bg-[#2d3b4f] text-white rounded-md border border-gray-600 focus:outline-none focus:border-[#465697]"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 text-sm bg-[#2d3b4f] text-white rounded-md border border-gray-600 focus:outline-none focus:border-[#465697]"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 text-sm bg-[#2d3b4f] text-white rounded-md border border-gray-600 focus:outline-none focus:border-[#465697]"
                placeholder="Write your message here"
                rows="4"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 text-lg font-semibold rounded-3xl bg-[#465697] text-white hover:opacity-85 duration-300 hover:scale-105"
            >
              Submit Message
            </button>
          </form>
        </div>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 items-center">
          <MdOutlineEmail size={20} />
         <a> ramyarrr2016@gmail.com</a> 
        </li>
        <li className="flex gap-1 items-center">
          <CiLinkedin />
          <a href="https://www.linkedin.com/in/ramya94/">Linkedin</a> 
        </li>
        <li className="flex gap-1 items-center">
          <FaGithub />
          <a href="https://github.com/RAMYA-1994">Github</a> 
        </li>
      </ul>
    </div>
  );
};

export default Footer;
