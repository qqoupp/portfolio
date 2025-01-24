import React from "react";
import { Routes, Route } from "react-router-dom";
const LandingPage = React.lazy(() => import("../pages/landingPage"));

const Loading  = () => <p>Loading...</p>;

const MainRouter = () => {
  return (
    <React.Suspense fallback={<Loading />}>
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </React.Suspense>
  );
};
export default MainRouter;
