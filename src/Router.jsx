import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./Pages/Mainpage"
import Results from "./Pages/Results";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Mainpage" element={<Mainpage />} />
                <Route path="/Results" element={<Results />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;