import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage"
import Results from "./Pages/Results";
import Summary from "./Pages/Summary";
import LandingPage from "./Pages/LandingPage";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/question" element={<Mainpage />} />
                <Route path="/result" element={<Results />} />
                <Route path="/summary" element={<Summary />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
