import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import Lesson from "./Lesson";
import NotFound from "./NotFound";

const CourseDetails = () => {
  const { id } = useParams();

  const getCourse = courses.find((course) => course.id === id);

  if (!getCourse) {
    return <NotFound />;
  }
  const { title, description, level, duration, access, lessonsCount, lessons } =
    getCourse;

  return (
    <div className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-10">
        <p className="text-sm text-blue-400 mb-2">Course</p>
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-zinc-400 max-w-3xl">{description}</p>
      </div>

      {/* Meta Info */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Level</p>
          <p className="font-semibold">{level}</p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Lessons</p>
          <p className="font-semibold">{lessonsCount}</p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Duration</p>
          <p className="font-semibold">{duration}</p>
        </div>

        <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <p className="text-xs text-zinc-400">Access</p>
          <p className="font-semibold">{access}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="max-w-5xl mx-auto flex gap-4 mb-14">
        <button className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium hover:bg-blue-500 transition">
          Start Course
        </button>

        <button className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-900 transition">
          Preview Lessons
        </button>
      </div>

      {/* Lessons Section */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl font-semibold mb-6">Course Content</h2>

        <div className="space-y-4">
          {lessons.map((lesson) => (
            <Lesson key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
