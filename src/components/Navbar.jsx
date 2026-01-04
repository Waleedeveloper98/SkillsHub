import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const baseLink =
    "text-sm text-slate-300 hover:text-white transition-all duration-200";
  const activeLink = "text-sky-400 border-b-2 border-sky-400";
  const navigate = useNavigate()
  return (
    <nav className="fixed top-0 left-0 w-full h-16 px-6 bg-slate-900 flex items-center justify-between">
      <h2
        onClick={() => navigate("/")}
        className=" cursor-pointer text-sky-400 text-xl font-semibold"
      >
        SkillsHub
      </h2>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeLink : baseLink)}
        >
          Home
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) => (isActive ? activeLink : baseLink)}
        >
          Courses
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
