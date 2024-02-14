import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage";
import Results from "./Pages/Results";
import Summary from "./Pages/Summary";
import LandingPage from "./Pages/LandingPage";
import Aboutus from "./Pages/Aboutus";
import Start from "./Pages/Start";
import AdminRouter from "./AdminRouter";

const Router = () => {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<LandingPage />} />
                <Route path="/start" element={<Start />} />
                <Route path="/question" element={<Mainpage />} />
                <Route path="/result" element={<Results />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/Aboutus" element={<Aboutus />} />
            </Routes>
        </BrowserRouter>
    );
=======
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
>>>>>>> d34c4082c7b3e5998d64f2d929bb8fad2fc648af
};

export default Router;
