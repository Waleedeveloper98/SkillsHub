import React from "react";
import { Link, useParams } from "react-router-dom";

const Lesson = ({ lesson }) => {
  const { id } = useParams();
  return (
    <Link
      to={`/courses/${id}/lesson/${lesson.id}`}
      className="flex items-center justify-between rounded-lg border border-zinc-800 bg-zinc-900 p-4 hover:border-zinc-700 transition"
    >
      <div>
        <p className="font-medium">{lesson.title}</p>
        <p className="text-sm text-zinc-400">{lesson.summary}</p>
      </div>
      <span className="text-xs text-zinc-400">{lesson.duration}</span>
    </Link>
  );
};

export default Lesson;
