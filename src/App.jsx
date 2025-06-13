import React, { useMemo } from "react";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import GallerySection from "./sections/GallerySection.jsx";
import SwimmingCoursesSection from "./sections/SwimmingCoursesSection.jsx";
import SwimmingAboutSection from "./sections/SwimmingAboutSection.jsx";
import ScheduleSection from "./sections/ScheduleSection.jsx";


function App() {
  const router = useMemo(
    () =>
      createHashRouter([
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <HomePage /> },
            { path: "signup", element: <SignupPage /> },
            { path: "login", element: <LoginPage /> },
            { path: "schedule", element: <ScheduleSection /> },
            { path: "gallery", element: <GallerySection /> },
            { path: "about", element: <SwimmingAboutSection /> },
            { path: "courses", element: <SwimmingCoursesSection /> },
            
          ],
        },
      ]),
    []
  );

  return <RouterProvider router={router} />;
}
export default App;
