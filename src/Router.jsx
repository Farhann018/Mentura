import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import Results from "./Pages/Results";
import Summary from "./Pages/Summary";
import LandingPage from "./Pages/LandingPage";
import Start from "./Pages/Start";
import AdminRouter from "./AdminRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<Start />} />
        <Route path="/question" element={<Mainpage />} />
        <Route path="/result" element={<Results />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/admin/*" element={<AdminRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
