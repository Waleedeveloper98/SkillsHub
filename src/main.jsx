import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Herosection from "./pages/Herosection.jsx";
import Courses from "./pages/Courses.jsx";
import Login from "./pages/Login.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";
import Lesson from "./pages/Lesson.jsx";
import LessonDetails from "./pages/LessonDetails.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Settings from "./pages/Settings.jsx";
import Overview from "./pages/Overview.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Herosection /> },

      { path: "courses", element: <Courses /> },
      { path: "courses/:id", element: <CourseDetails /> },
      {
        path: "courses/:id/lesson/:lessonId",
        element: <LessonDetails />,
      },

      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { index: true, element: <Overview /> },
          { path: "profile", element: <Profile /> },
          { path: "settings", element: <Settings /> },
          { path: "*", element: <NotFound /> },
        ],
      },

      // 👇 GLOBAL 404
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
