import React from "react";
import { replace, useNavigate } from "react-router-dom";

const Herosection = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-950 text-white px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Learn Skills.
          <br />
          Build Real Projects.
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          A simple platform to practice real-world development skills without
          tutorials, without noise.
        </p>

        <div className="flex gap-4 justify-center pt-4">
          <button onClick={()=> navigate("/courses")} className="cursor-pointer px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition">
            Get Started
          </button>

          <button onClick={()=> navigate("/dashboard")} className="cursor-pointer px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
