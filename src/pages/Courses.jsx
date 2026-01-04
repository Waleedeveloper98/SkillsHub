import React from "react";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";

const Courses = () => {

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10 pt-20">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Courses</h1>
        <p className="text-zinc-400">
          Learn modern web development step by step
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Course Card */}
        {courses.map((course) => (
          <div key={course.id} className="rounded-xl border border-zinc-800 bg-zinc-900 p-6 hover:border-zinc-700 transition">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>

            <p className="text-sm text-zinc-400 mb-4">{course.description}</p>

            <Link
              to={`/courses/${course.id}`}
              className="text-sm font-medium text-blue-400 hover:text-blue-300"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Courses;
