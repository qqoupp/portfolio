import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header";
const LandingPage = React.lazy(() => import("../pages/landingPage"));
const AboutPage = React.lazy(() => import("../pages/aboutPage"));
const SkillsPage = React.lazy(() => import("../pages/skills"));
const ProjectsPage = React.lazy(() => import("../pages/projects"));
const ContactPage = React.lazy(() => import("../pages/contactPage"));
const ResumePage = React.lazy(() => import("../pages/resume"));

const Loading  = () => <p>Loading...</p>;

const MainRouter = () => {
  return (
    <>
     <Header />
    <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    <Routes>
      <Route path="/" element={<AboutPage />} />
    </Routes>
    <Routes>
      <Route path="/" element={<SkillsPage />} />
    </Routes>
    <Routes>
      <Route path="/" element={<ProjectsPage />} />
    </Routes>
    <Routes>
      <Route path="/" element={<ContactPage />} />
    </Routes>
    <Routes>
      <Route path="/" element={<ResumePage />} />
    </Routes>
    </React.Suspense>
    </>
  );
};
export default MainRouter;
