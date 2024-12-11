import React, { useState } from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  // Contact form state
 

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          A junior fullstack developer who is currently focused on Web Development. Other than that, I am also interested in UX/UI Design, Mobile, and AI Development.
          I love learning new things and am always open to new opportunities.
        </p>

        <div className="mt-5">
          <button className="text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            <a href="https://www.linkedin.com/in/ramya94" target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </button> 

          {/* Download Resume Button */}
          <button className="ml-5 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
            <a href="https://drive.google.com/drive/recent" download>
              Download Resume
            </a>
          </button>
        </div>

        {/* Contact Form */}
        
      </div>

      <div className="flex justify-center">
        <img className="w-32 md:w-48 rounded-full" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
