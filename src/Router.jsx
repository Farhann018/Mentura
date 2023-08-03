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
                <Route path="/Mainpage" element={<Mainpage />} />
                <Route path="/Results" element={<Results />} />
                <Route path="/Summary" element={<Summary />} />
                <Route path="/LandingPage" element={<LandingPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default Router;