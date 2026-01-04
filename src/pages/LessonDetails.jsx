import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";

const LessonDetails = () => {
  const { id, lessonId } = useParams();
  const currentLesson = courses.find((course) => course.id === id);
  const lesson = currentLesson?.lessons.find(
    (lesson) => lesson.id === lessonId
  );

  if (!lesson || !currentLesson) {
    return <p className="text-center text-zinc-400 mt-20">Lesson not found</p>;
  }

  const { title, description, duration, status, type, content } = lesson;
  const { level } = currentLesson;

  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto mt-16 px-6">
      {/* Card */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden">
        {/* Header */}
        <div className="border-b border-zinc-800 px-6 py-5">
          <p className="text-xs text-blue-400 mb-2">Lesson</p>
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <p className="mt-2 text-sm text-zinc-400">{description}</p>
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-6 py-6">
          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Duration</p>
            <p className="font-medium text-white">{duration} min</p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Level</p>
            <p className="font-medium text-white">{level}</p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Type</p>
            <p className="font-medium text-white">{type}</p>
          </div>

          <div className="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
            <p className="text-xs text-zinc-400">Status</p>
            <p className="font-medium text-emerald-400">{status}</p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-4 text-zinc-300 leading-relaxed">
          {content.map((c) => {
            return <p key={c}>{c}</p>;
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between border-t border-zinc-800 px-6 py-5">
            <button onClick={() => navigate(`/courses/${id}`)} className="rounded-lg border border-zinc-700 px-5 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition">
              ← Back to Lessons
            </button>

          <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-500 transition">
            Mark as Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
